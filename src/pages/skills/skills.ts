import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, IonicPage, ModalController } from 'ionic-angular';
import * as jsPdf from 'jspdf';

import { HomePage } from '../../pages/home/home';
// import { ModalSkillsPage } from '../../pages/modal-skills/modal-skills';
// import { RelatedJobsPage } from '../../pages/related-jobs/related-jobs';
import { JobDataProvider } from '../../providers/job-data/job-data';

import { FootbarComponent } from '../../components/footbar/footbar';

import { jobInformation, skillInformation } from '../../assets/data/dataModel';


@IonicPage({
	name: "skills",
	segment: "skills"
})
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})

export class SkillsPage {

	resume = new jsPdf();
	preview: any;

	currentJob = [ {'title': '', 'uuid': '', 'parent_uuid': ''},  {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''}, {'title': '', 'uuid': '', 'parent_uuid': ''} ];
	dreamJob = {'title': '', 'uuid': '', 'parent_uuid': ''};

	skillsRequired: skillInformation[] = [];
	skillsRequiredTitles: string[] = [];
	abilitiesRequired: skillInformation[] = [];
	knowledgeRequired: skillInformation[] = [];

	skillsPossessed: any = [[], [], [], [], [], []];
	
	skillsSelected: skillInformation[] = [];
	skillsSelectedLength: number = 0;
	skillsNeededLength: number;
	resumeTemplate: string = "";

	loading = this._loadingCtrl.create({
			spinner: 'dots'
		})

	constructor(public navCtrl: NavController,
				private _loadingCtrl: LoadingController,
				private _alertCtrl: AlertController,
				public navParams: NavParams,
				private _jobDataProvider: JobDataProvider,
				private _modalCtrl: ModalController) {

		this.currentJob = this._jobDataProvider.currentJob;
		this.dreamJob   = this._jobDataProvider.dreamJob;

		// this.openModal();
	}

	ngOnInit(){

		this.loading.present();
		if (this.dreamJob.title != '') {
			
			this.identifyRequiredSkills()
			// this._jobDataProvider.getSkillset(this.dreamJob.uuid)
			// 			.subscribe(res => {
			// 				console.log(res);
			// 				this.skillsRequired = [];
			// 				for (var i = 0; i < 6; i++){
			// 					this.skillsRequired.push(res.skills[i])
			// 				}
			// 			})

			// this.identifyRelevantSkills()
			// for (let idx in this.currentJob) {
			// 	var index = idx;
			// 	let job = this.currentJob[index]
			// 	if (job.title != '') {
			// 		console.log("Index = " + index)
			// 		this._jobDataProvider.getSkillset(job.uuid)
			// 			.subscribe(res => {
			// 				console.log(res);
			// 				// this.skillsPossessed[index] = [];
			// 				for (var i = 0; i < 5; i++){
			// 					this.skillsPossessed[index].push(res.skills[i])
			// 				}
			// 				console.log(this.skillsPossessed[index])
			// 			})

			// 	}
			// }

			this.loading.dismiss();

		}  else {
			this.loading.dismiss();
			this.navCtrl.push("home")
		}
		console.log(this.skillsRequired)
		console.log(this.skillsPossessed)
	}

	ngOnDestroy(){
		this.loading.dismiss();
	}

	presentDescriptionAlert(item: skillInformation){
		let descriptionAlert = this._alertCtrl.create({
			title: item.name,
			message: item.description,
			buttons: [
				{
					text: "I'd like to develop this",
					handler: data => {
						if (this.skillsSelectedLength < 3) {
							this.skillsSelected.push(item);
							item.selected = true;
							console.log(this.skillsSelected);
							this.skillsSelectedLength += 1;
							console.log(this.skillsSelectedLength);
						} else {
							this.presentMaxSkillAlert();
						}
					}
				},
				"Dismiss"
			]
		});

		if (!item.selected || item.selected == null) 
			descriptionAlert.present()
		else {
			console.log("here");
			item.selected = false;
			this.skillsSelectedLength -= 1;
			var index = this.skillsSelected.indexOf(item, 0);
			if (index > -1) {
				this.skillsSelected.splice(index, 1)
			}
			console.log(this.skillsSelected);
			console.log(this.skillsSelectedLength);
		}
	}

	presentMaxSkillAlert(){
		let maxSkillAlert = this._alertCtrl.create({
			title: "",
			message: "Sorry, you can only select up to 3 skills",
			buttons: ['Dismiss']
		});

		maxSkillAlert.present();
	}

	popView(){
		this.navCtrl.pop();
	}

	// gets the most important skills for the target job from the Data@Work API
	identifyRequiredSkills() {
		// get skills for the target (dream) job and record the top ten skills
		this._jobDataProvider.getSkillset(this.dreamJob.uuid)
						.subscribe(res => {
							console.log(res);
							this.skillsRequired = [];
							for (var i = 0; i < 10; i++){
								this.skillsRequired.push(res.skills[i])
								this.skillsRequiredTitles.push(res.skills[i].skill_name)
							}
							this.identifyRelevantSkills()
						})
	}

	// reviews the skills for each past job using the Data@Work API and identifies
	//  skills that are relevant to the target job
	identifyRelevantSkills() {
		console.log(this.skillsRequired)
		// get skills for each past job and record the top 5 for each in the "skillsPossessed" array
		for (let idx in this.currentJob) {
			var index = idx;
			let job = this.currentJob[index];
			if (job.title != '') {
				console.log("Index = " + index)
				this._jobDataProvider.getSkillset(job.uuid)
					.subscribe(res => {
						console.log("skill response for " + job.title);
						console.log(res);
						// this.skillsPossessed[index] = [];
						var k = 0;
						var max = 5;
						// include only skills that are also relevant for the target job
						for (var i = 0; i < 20; i++) {
							if (k < max && this.skillsRequiredTitles.includes(res.skills[i].skill_name)) {
								this.skillsPossessed[index].push(res.skills[i]);
								console.log("added " + res.skills[i].skill_name + " from " + job.title);
								k++;
							} else if (k < max) {
								console.log(res.skills[i].skill_name + " not included in required skills.")
							}
							
						}
						// if we found any relevant skills for this job, include it in the resume
						if (k > 0) {
							this.createResumeEntry(index)
						}
						// console.log(this.skillsPossessed[index])
				})
			}
		}
		
	}

	createResumeEntry(int: idx) {
		for (let index in this.currentJob) {
			let job = this.currentJob[index];
			if(this.skillsPossessed[index] != []) {
				this.resumeTemplate = this.resumeTemplate + job.title + "\n"
				for (let skill of this.skillsPossessed[index]) {
					this.resumeTemplate = this.resumeTemplate + skill.skill_name + ": " + skill.description + "\n";
				}
			}
		}
		console.log(this.resumeTemplate)

	}

	// sets up the pdf resume
	downloadPdf(){
		
		let lines = []
		lines.push("The six most important skills for " + this.dreamJob.title + " are:");
		for (var i = 0; i < 6; i++) {
			lines.push(this.skillsRequired[i]);
		}
		lines.push("");
		for (let index in this.currentJob) {
			let job = this.currentJob[index];
			lines.push(job.title)
			for (let skill of this.skillsPossessed[index]) {
				lines.push(skill.skill_name + ": " + skill.description);
			}
		}

		this.resume.text(lines, 10, 10);
		
		this.resume.save("resume.pdf");

		// this.resume.output('datauri')
		// console.log(this.preview)

		// let iframe = document.getElementById("pdfPreview")
		// console.log(iframe);

		// iframe.attr('src', this.resume.output('datauri'));
	}
}
