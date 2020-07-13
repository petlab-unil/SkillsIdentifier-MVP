import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { jobInformation, skillInformation } from '../../assets/data/dataModel';

@Injectable()
export class JobDataProvider {

  private _dataAtWork_url: string;
  private _url: string;
  private _server_url: string;

  currentJob = [ {'title': '', 'uuid': '', 'parent_uuid': ''},  {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''} ];
  dreamJob = {'title': '', 'uuid': '', 'parent_uuid': ''};
  location = '';

	constructor(public http: HttpClient) {
    	console.log('Hello JobDataProvider Provider');
	this._dataAtWork_url = "https://api.dataatwork.org/v1/";
	this._server_url = "http://localhost:8080/";
        // this._url = "http://localhost:8000/api/v1/";
        this._url = "http://dreamgig.me:5000/api/v1/"
  	}


    setCurrentJob(currentJob: any){
      this.currentJob = currentJob;
    }

    setDreamJob(dreamJob: any){
      this.dreamJob = dreamJob;
    }

    // Get job title autocompletion by calling Dataatwork autocomplete API

    async getJobAutocomplete(jobTitle: string){
    	var result = await this.http.get(this._dataAtWork_url + "jobs/autocomplete?contains=" + jobTitle).map((res:any) => res).toPromise();
	result = result.slice(0, 20);
	for (var i = 0; i < result.length; i++) {
		var parentJob = await this.http.get(this._dataAtWork_url + "jobs/" + result[i].parent_uuid).map((res:any) => res).toPromise();
		var french = await this.http.get(this._server_url + "parentjobfrench/" + parentJob.onet_soc_code).map((res:any) => res).toPromise();
		if (french != "") {
			result[i].suggestion = french;
		}
	}
	return result;
    }

    async getSkillset(uuid: string) {
	var result = await this.http.get(this._dataAtWork_url + "jobs/" + uuid + "/related_skills").map((res:any) => res).toPromise();
	result.skills = result.skills.slice(0, 15);
	for (var i = 0; i < result.skills.length; i++) {
		var french = await this.http.get(this._server_url + "skillfrench/" + result.skills[i].skill_uuid).map((res:any) => res).toPromise();
		if (french != "") {
			result.skills[i].skill_name = french;
		}
	}
	// console.log(result);
	return result;
    }
}
