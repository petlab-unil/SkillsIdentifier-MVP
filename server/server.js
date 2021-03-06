(async () => {

  const express = require("express");
  const bodyParser = require("body-parser");
  const logger = require("morgan");
  const methodOverride = require("method-override");
  const cors = require("cors");


  const app = express();
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cors());

  const {MYSQL_ROOT_PASSWORD, DB_HOSTNAME} = process.env;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createPool({
    host: DB_HOSTNAME,
    user: "root",
    password: MYSQL_ROOT_PASSWORD,
    database: "SkillsIdentifier",
    //charset: "utf8mb4",
    charset: "UTF8MB4",
    port:3306
  });

// test api
  app.get("/test", async (req, res) => {
    const query = "select * from ParentJobTranslation";
    try {
      const [rows, _] = await connection.query(query);
      res.json(rows);
    } catch (e) {
      res.status(500);
      res.send(`Something went wrong querying:<br/>${query}<br/>Error: ${e.message}`);
    }
  });


// onet soc code to French api
  app.get("/parentjobfrench/:onetsoccode", async (req, res) => {
    const query = `select * from ParentJobTranslation where ONETSOCCode = "${req.params.onetsoccode}"`;
    try {
      const [rows, _] = await connection.query(query);

      if (rows.length)
        res.json(rows[0].French);
      else res.json("");
    } catch (e) {
      res.status(500);
      res.send(`Something went wrong querying:<br/>${query}<br/>Error: ${e.message}`);
    }
  });

// skill uuid to French
  app.get("/skillfrench/:uuid", async (req, res) => {
    const query = `select * from SkillTranslation where SkillUUId = '${req.params.uuid}'`;
    try {
      const [rows, _] = await connection.query(query);

      if (rows.length > 0) {
        res.json(rows[0].French);
      } else {
        res.json("");
      }
    } catch (e) {
      res.status(500);
      res.send(`Something went wrong querying:<br/>${query}<br/>Error: ${e.message}`);
    }
  });

// job autocomplete
  app.get("/autocomplete/:str", async (req, res) => {
    const query = `select ID as jobId,French as jobTitle from Job where French like '%${req.params.str}%'`;
    try {
      const [rows, _] = await connection.query(query);

      res.json(rows);
    } catch (e) {
      res.status(500);
      res.send(`Something went wrong querying:<br/>${query}<br/>Error: ${e.message}`);
    }
  });

// job id to find skills
  app.get("/relatedskills/:jobid", async (req, res) => {
    const query = `
  select E.ID as elementId,E.French as elementTitle from JobElements as JE
  left join Element as E on JE.ElementID = E.ID
  where JE.JobID = ${req.params.jobid} and E.ElementGroup = 'Skills' order by importanceValue desc
  `;
    try {
      const [rows, _]  = await connection.query(query);

      res.json(rows);
    } catch (e) {
      res.status(500);
      res.send(`Something went wrong querying:<br/>${query}<br/>Error: ${e.message}`);
    }
  });

  app.listen(8080, function () {
    console.log("server address is http://localhost:%s", 8080);
  });

})();
