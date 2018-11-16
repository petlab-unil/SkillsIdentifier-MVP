import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

import { jobInformation, skillInformation } from '../../assets/data/dataModel';

@Injectable()
export class JobDataProvider {

	private _dataAtWork_url: string;
  private _url: string;

  currentJob = [ {'title': '', 'uuid': '', 'parent_uuid': ''},  {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''} ];
  dreamJob = {'title': '', 'uuid': '', 'parent_uuid': ''};
  location = '';

	constructor(public http: HttpClient) {
    	console.log('Hello JobDataProvider Provider');
    	this._dataAtWork_url = "https://api.dataatwork.org/v1/";
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
      return this.http.get(this._dataAtWork_url + "jobs/autocomplete?contains=" + jobTitle)
        .map((res:any) => res);
    }

  	getSkillset(uuid: string) {
  		return this.http.get(this._dataAtWork_url + "jobs/" + uuid + "/related_skills")
  			.map((res: any) => res)
  	}


}
