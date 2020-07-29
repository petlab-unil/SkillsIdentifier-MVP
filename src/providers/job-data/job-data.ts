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

  currentJob = [ {'title': '', 'id': ''},  {'title': '', 'id': ''}, {'title': '', 'id': ''}, {'title': '', 'id': ''}, {'title': '', 'id': ''}, {'title': '', 'id': ''} ];
  dreamJob = {'title': '', 'id': ''};
  location = '';

	constructor(public http: HttpClient) {
    	console.log('Hello JobDataProvider Provider');
		this._dataAtWork_url = "https://api.dataatwork.org/v1/";
		this._server_url = "https://recherche-emploi.unil.ch/api/";
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

    getJobAutocomplete(jobTitle: string){
		return this.http.get(this._server_url + "autocomplete/" + jobTitle).map((res:any) => res);
    }

    getSkillset(id: string) {
		return this.http.get(this._server_url + "relatedskills/" + id).map((res:any) => res);
    }
}
