import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

@Injectable()
export class JobDataProvider {

  private readonly dataAtWorkUrl: string;
  private readonly serverUrl: string;

  currentJob = [
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''}];

  dreamJob = {'title': '', 'id': ''};

  location = '';

  constructor(public http: HttpClient) {
    this.dataAtWorkUrl = "https://api.dataatwork.org/v1/";
    this.serverUrl = environment.hostName;
  }


  setCurrentJob = (currentJob: any) => {
    this.currentJob = currentJob;
  };

  setDreamJob = (dreamJob: any) => {
    this.dreamJob = dreamJob;
  };

  // Get job title autocompletion by calling Dataatwork autocomplete API

  getJobAutocomplete = (jobTitle: string) => {
    // Weird code
    return this.http.get(`${this.serverUrl}autocomplete/${jobTitle}`).map((res: any) => res);
  };

  getSkillset = (id: string) => {
    // Weird code
    return this.http.get(`${this.serverUrl}relatedskills/${id}`).map((res: any) => res);
  };
}
