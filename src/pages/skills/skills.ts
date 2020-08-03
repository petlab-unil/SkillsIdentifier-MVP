import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';

import {JobDataProvider} from '../../providers/job-data/job-data';
import {skillInformation} from '../../assets/data/dataModel';


@IonicPage({
  name: "skills",
  segment: "skills"
})
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})

export class SkillsPage {

  preview: any;

  // ???
  currentJob = [
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''},
    {'title': '', 'id': ''}];

  dreamJob = {'title': '', 'id': ''};

  private globalSkillsList: Set<string> = new Set();
  skillsRequired: skillInformation[] = [];
  skillsRequiredTitles: string[] = [];
  abilitiesRequired: skillInformation[] = [];
  knowledgeRequired: skillInformation[] = [];

  skillsPossessed: any = [[], [], [], []];

  skillsSelected: skillInformation[] = [];
  skillsSelectedLength: number = 0;
  skillsNeededLength: number;
  // resume lines need to be stored as objects; there are issues with strings being a primitive.
  resumeTemplate: any = [];
  // ???????????????????????????
  resumeIntro: string = "<Entrez votre nom complet ici>\n<Entrez votre numéro de téléphone ici>\n<Entrez votre email ici>";

  emailAddress: string = '';

  loading = this._loadingCtrl.create({
    spinner: 'dots'
  });

  constructor(public navCtrl: NavController,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              public navParams: NavParams,
              private _jobDataProvider: JobDataProvider,
              private _modalCtrl: ModalController) {

    this.currentJob = this._jobDataProvider.currentJob;
    this.dreamJob = this._jobDataProvider.dreamJob;

    // this.openModal();
  }

  ngOnInit() {
    this.loading.present();
    if (this.dreamJob.title != '') {

      this.identifyRequiredSkills();

      this.loading.dismiss();

    } else {
      this.loading.dismiss();
      this.navCtrl.push("home");
    }
    // console.log("skills required:", this.skillsRequired)
    // console.log("skills possessed:", this.skillsPossessed)
  }

  ngOnDestroy() {
    this.loading.dismiss();
  }

  popView() {
    this.navCtrl.pop();
  }

  // gets the most important skills for the target job from the Data@Work API
  identifyRequiredSkills() {
    // get skills for the target (dream) job and record the top ten skills
    this._jobDataProvider.getSkillset(this.dreamJob.id)
      .subscribe(res => {
        //console.log(res);
        this.skillsRequired = res;
        res.forEach(({elementTitle}) => this.skillsRequiredTitles.push(elementTitle));
      });
    this.identifyRelevantSkills();
  }

  // reviews the skills for each past job using the Data@Work API and identifies
  //  skills that are relevant to the target job
  identifyRelevantSkills() {
    this.currentJob.forEach(({title, id}, index) => {
      if (title != '') {
        this._jobDataProvider.getSkillset(id)
          .subscribe(res => {
            let k = 0;
            const max = 6;
            const {length} = this.skillsRequiredTitles;
            // include only skills that are also relevant for the target job
            for (let i = 0; i < length && k < max; i++) {
              const {elementTitle} = res[i];
              if (this.skillsRequiredTitles.includes(elementTitle) && !this.globalSkillsList.has(elementTitle)) {
                this.skillsPossessed[index].push(res[i]);
                this.globalSkillsList.add(elementTitle);
                k++;
              }
            }
            if (k) this.createResumeEntry(index);

          });
      }
    });
  }

  createResumeEntry(idx: number) {
    let index = idx;
    let job = this.currentJob[index];
    this.resumeTemplate[index] = {value: job.title + "\n"};
    this.resumeTemplate[index].value += this.skillsPossessed[index]
      .map(({elementTitle}) => `- ${elementTitle}\n`).join("");
  }

  // copy the resume to the clipboard
  copyResume() {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';

    selBox.value = this.resumeTemplate.map(({value}) => value).join("\n");
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.presentAlert();

  }

  presentAlert() {
    const alert = this._alertCtrl.create({
      title: 'Félicitations!',
      subTitle: 'Vos compétences ont été copiées',
      buttons: ['Valider']
    });
    alert.present();
  }

  // emails the edited resume to the user
  // sendEmail() {
  // 	let fullResume = ''
  // 	for (let entry of this.resumeTemplate) {
  // 		fullResume = fullResume + entry + '\n';
  // 	}
  // 	let email = {
  // 	to: this.emailAddress,
  // 	cc: '',
  // 	bcc: '',
  // 	attachments: [

  // 	],
  // 	subject: 'Your SkillsIdentifier Resume Template',
  // 	body: fullResume,
  // 	isHtml: true
  // 	};

  // 	// this.emailComposer.isAvailable().then((available: boolean) =>{
  // 	// 	if(available) {
  // 	// 	//Now we know we can send
  // 	// 	}
  // 	// });

  // 	console.log(this.emailAddress)
  // 	console.log(fullResume)
  // }

  // sets up the pdf resume
  // downloadPdf(){

  // 	let lines = []
  // 	console.log(this.skillsRequired);
  // 	lines.push("The six most important skills for " + this.dreamJob.title + " are:");
  // 	for (var i = 0; i < 6; i++) {
  // 		lines.push(this.skillsRequired[i].skill_name);
  // 	}
  // 	lines.push("");
  // 	for (let index in this.currentJob) {
  // 		let job = this.currentJob[index];
  // 		lines.push(job.title)
  // 		for (let skill of this.skillsPossessed[index]) {
  // 			lines.push(skill.skill_name + ": " + skill.description);
  // 		}
  // 	}

  // 	this.resume.text(lines, 10, 10);

  // 	this.resume.save("resume.pdf");

  // 	// this.resume.output('datauri')
  // 	// console.log(this.preview)

  // 	// let iframe = document.getElementById("pdfPreview")
  // 	// console.log(iframe);

  // 	// iframe.attr('src', this.resume.output('datauri'));
  // }
}
