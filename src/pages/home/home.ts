import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, IonicPage } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { JobDataProvider } from '../../providers/job-data/job-data';
import { jobInformation} from '../../assets/data/dataModel';
import { SkillsPage } from '../skills/skills';
// import { ModalHomePage } from '../modal-home/modal-home'; 

// import { FootbarComponent } from '../../components/footbar/footbar';

@IonicPage({
	name: "home",
	segment: ""
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	currentJob = [ {'title': '', 'uuid': '', 'parent_uuid': ''},  {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''} ];
	dreamJob = {'title': '', 'uuid': '', 'parent_uuid': ''};

	infoForm: FormGroup;

	jobAutocompleteList : any[] = [];
	showJobAutocompleteList = -1;
	

	// currentSelected is used to store the index of the current selected item in the autocomplete list 

	currentSelected: number = 0;

	constructor(public navCtrl: NavController,
				public modalCtrl: ModalController,
				private _jobDataProvider: JobDataProvider) {

	}

	ngOnInit(){

		this.infoForm = new FormGroup({
			currentJobTitleZero: new FormControl('', [Validators.required]),
			currentJobTitleOne: new FormControl('', [Validators.required]),
			currentJobTitleTwo: new FormControl('', [Validators.required]),
			currentJobTitleThree: new FormControl('', [Validators.required]),
			// currentJobTitleFour: new FormControl('', [Validators.required]),
			// currentJobTitleFive: new FormControl('', [Validators.required]),
			dreamJobTitle: new FormControl('', [Validators.required]),
		})

		// this.openModal();

	}

	// openModal(){
	// 	const introModal = this.modalCtrl.create('ModalHomePage')
	// 	introModal.present();	
	// }

	pushPage(){

		// this._jobDataProvider.location = this.location;

		// TODO: fix this logic
		this._jobDataProvider.setCurrentJob(this.currentJob);
		this._jobDataProvider.setDreamJob(this.dreamJob);

		this.navCtrl.push("skills")

	}

	// controller of the current job text field -- to deal with arrow keys, enter key, and autocompletion 

	onInputCurrentJob(event: any, i: number){
		if (event.key != "ArrowDown" && event.key != "ArrowUp" && event.key != "Enter") 
			if (this.currentJob[i].title.length > 3)
				this._jobDataProvider.getJobAutocomplete(this.currentJob[i].title)
				.subscribe(res => {
					this.jobAutocompleteList = res;
					this.currentSelected = 0;
				},
				err => {
					this.jobAutocompleteList = []
				})
			else if (this.currentJob[i].title.length == 0) 
				this.jobAutocompleteList = []

		if (event.key == "ArrowDown") {
			this.currentSelected ++;
		}
		else if (event.key == "ArrowUp") {
			this.currentSelected --;
		}
		else if (event.key == "Enter") {
			this.onSelectJobTitle(this.jobAutocompleteList[this.currentSelected], 1)
		}
	}

	onInputDreamJob(event: any){
		if (event.key != "ArrowDown" && event.key != "ArrowUp" && event.key != "Enter") 
			if (this.dreamJob.title.length > 3)
				this._jobDataProvider.getJobAutocomplete(this.dreamJob.title)
				.subscribe(res => {
					this.jobAutocompleteList = res;
					this.currentSelected = 0;
				},
				err => {
					this.jobAutocompleteList = []
				})
			else if (this.dreamJob.title.length == 0) 
				this.jobAutocompleteList = []

		if (event.key == "ArrowDown" && this.currentSelected < this.jobAutocompleteList.length) {
			this.currentSelected ++;
		}
		else if (event.key == "ArrowUp" && this.currentSelected > 0) {
			this.currentSelected --;
		}
		else if (event.key == "Enter") {
			this.onSelectJobTitle(this.jobAutocompleteList[this.currentSelected], 2)
		}
	}

	onChangeJobTitle(event: any){
		if (event.value.length > 3)
			this._jobDataProvider.getJobAutocomplete(event.value)
			.subscribe(res => {
				this.jobAutocompleteList = res;
			})
		if (event.value.length == 0) 
			this.jobAutocompleteList = []
	}

	onHoverJobTitle(index: number){
		this.currentSelected = index;
	}

	// Users select the job title from the title list 

	onSelectJobTitle(job: any, index: number){
		this.jobAutocompleteList = [];

		if (index <= 5) {
			this.currentJob[index].title = job.suggestion;
			this.currentJob[index].uuid = job.uuid;
			this.currentJob[index].parent_uuid = job.parent_uuid;
		} else if (index == 6) {
			this.dreamJob.title = job.suggestion;
			this.dreamJob.uuid = job.uuid;
			this.dreamJob.parent_uuid = job.parent_uuid;
		}
	}

	// When a job text field is focused

	onFocus(index: number){
		if (index >= 0 ){
			this.showJobAutocompleteList = index
		}
		else {
			this.showJobAutocompleteList = -1
		}

	}

	// Clear the job title list when the text field is cleared by either the clear button or deleted by the user

	onClear(index: number){
		if (index < 6 && this.currentJob[index].title == '') 
			this.jobAutocompleteList = []
		else if (this.dreamJob.title == '' && index == 6)
			this.jobAutocompleteList = []
	}

}
