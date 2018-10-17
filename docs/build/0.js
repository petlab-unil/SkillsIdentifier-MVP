webpackJsonp([0],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsPageModule", function() { return SkillsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skills__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SkillsPageModule = /** @class */ (function () {
    function SkillsPageModule() {
    }
    SkillsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__skills__["a" /* SkillsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__skills__["a" /* SkillsPage */]),
            ],
        })
    ], SkillsPageModule);
    return SkillsPageModule;
}());

//# sourceMappingURL=skills.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_job_data_job_data__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsPage = /** @class */ (function () {
    function SkillsPage(navCtrl, _loadingCtrl, _alertCtrl, navParams, _jobDataProvider, _modalCtrl) {
        this.navCtrl = navCtrl;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this.navParams = navParams;
        this._jobDataProvider = _jobDataProvider;
        this._modalCtrl = _modalCtrl;
        this.currentJob = [{ 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }];
        this.dreamJob = { 'title': '', 'uuid': '', 'parent_uuid': '' };
        this.skillsRequired = [];
        this.skillsRequiredTitles = [];
        this.abilitiesRequired = [];
        this.knowledgeRequired = [];
        this.skillsPossessed = [[], [], [], []];
        this.skillsSelected = [];
        this.skillsSelectedLength = 0;
        // resume lines need to be stored as objects; there are issues with strings being a primitive.
        this.resumeTemplate = [];
        this.resumeIntro = "<Enter your full name here>\n<Enter your phone number here>\n<Enter your email here>";
        this.emailAddress = '';
        this.loading = this._loadingCtrl.create({
            spinner: 'dots'
        });
        this.currentJob = this._jobDataProvider.currentJob;
        this.dreamJob = this._jobDataProvider.dreamJob;
        // this.openModal();
    }
    SkillsPage.prototype.ngOnInit = function () {
        this.loading.present();
        if (this.dreamJob.title != '') {
            this.identifyRequiredSkills();
            this.loading.dismiss();
        }
        else {
            this.loading.dismiss();
            this.navCtrl.push("home");
        }
        // console.log("skills required:", this.skillsRequired)
        // console.log("skills possessed:", this.skillsPossessed)
    };
    SkillsPage.prototype.ngOnDestroy = function () {
        this.loading.dismiss();
    };
    SkillsPage.prototype.popView = function () {
        this.navCtrl.pop();
    };
    // gets the most important skills for the target job from the Data@Work API
    SkillsPage.prototype.identifyRequiredSkills = function () {
        var _this = this;
        // get skills for the target (dream) job and record the top ten skills
        this._jobDataProvider.getSkillset(this.dreamJob.uuid)
            .subscribe(function (res) {
            console.log(res);
            _this.skillsRequired = [];
            var j = 0;
            var i = 0;
            while (j < 10 && i < 100) {
                if (res.skills[i].skill_type == "skill") {
                    _this.skillsRequired.push(res.skills[i]);
                    _this.skillsRequiredTitles.push(res.skills[i].skill_name);
                    j++;
                }
                i++;
            }
            _this.identifyRelevantSkills();
        });
    };
    // reviews the skills for each past job using the Data@Work API and identifies
    //  skills that are relevant to the target job
    SkillsPage.prototype.identifyRelevantSkills = function () {
        var _this = this;
        console.log(this.skillsRequired);
        console.log("CURRENT JOB", this.currentJob);
        // get skills for each past job and record the top 5 for each in the "skillsPossessed" array
        this.currentJob.forEach(function (job, index) {
            if (job.title != '') {
                console.log("Index = " + index);
                _this._jobDataProvider.getSkillset(job.uuid)
                    .subscribe(function (res) {
                    console.log("skill response for " + job.title);
                    console.log(res);
                    // this.skillsPossessed[index] = [];
                    var k = 0;
                    var max = 3;
                    // include only skills that are also relevant for the target job
                    for (var i = 0; i < 30; i++) {
                        if (k < max && _this.skillsRequiredTitles.includes(res.skills[i].skill_name)) {
                            _this.skillsPossessed[index].push(res.skills[i]);
                            console.log("ADDED: " + res.skills[i].skill_name);
                            k++;
                        }
                        else if (k < max) {
                            console.log("NOT REQUIRED: " + res.skills[i].skill_name);
                        }
                    }
                    // if we found any relevant skills for this job, include it in the resume
                    if (k > 0) {
                        _this.createResumeEntry(index);
                    }
                });
            }
        });
    };
    SkillsPage.prototype.createResumeEntry = function (idx) {
        var index = idx;
        var job = this.currentJob[index];
        if (this.skillsPossessed[index] != []) {
            this.resumeTemplate[index] = { value: job.title + "\n" };
            for (var _i = 0, _a = this.skillsPossessed[index]; _i < _a.length; _i++) {
                var skill = _a[_i];
                this.resumeTemplate[index].value = this.resumeTemplate[index].value + '- ' + skill.skill_name + "\n";
            }
        }
        console.log(this.resumeTemplate[index].value);
    };
    // copy the resume to the clipboard
    SkillsPage.prototype.copyResume = function () {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        var fullResume = this.resumeIntro + "\n\n";
        for (var _i = 0, _a = this.resumeTemplate; _i < _a.length; _i++) {
            var entry = _a[_i];
            fullResume = fullResume + entry.value + "\n";
        }
        selBox.value = fullResume;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.presentAlert();
    };
    SkillsPage.prototype.presentAlert = function () {
        var alert = this._alertCtrl.create({
            title: 'Congratulations!',
            subTitle: 'Your new resume is copied',
            buttons: ['Dismiss']
        });
        console.log("alert");
        alert.present();
    };
    SkillsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-skills',template:/*ion-inline-start:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/pages/skills/skills.html"*/'<ion-header>\n	<ion-navbar hideBackButton>\n		<ion-title>\n		    Your New Resume Template! Review the information provided and edit the content as needed\n		</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-row>\n		<!-- <div col-6>\n			<div *ngFor="let job of currentJob; let idx=index">\n				<h2>{{ job.title }}</h2>\n				<ul>\n					<li *ngFor = "let skill of skillsPossessed[idx]">\n				  <h2>{{ skill.skill_name }}</h2>\n				  <p>{{ skill.description }}</p>\n					</li>\n				</ul>\n			</div>\n		</div> -->\n\n		<div col-8 class="resume">\n<!-- <<<<<<< HEAD -->\n			<div class="resume-textarea">\n				<h5>Please provide your personal information here: </h5>\n				<ion-textarea [(ngModel)]="resumeIntro"></ion-textarea>\n			</div>\n			<div class="resume-textarea">\n				<h5>Please review the information provided and edit the resume content as needed:</h5>\n				<div *ngFor="let entry of resumeTemplate; let idx=index">\n					<ion-textarea [(ngModel)]="resumeTemplate[idx].value"></ion-textarea>\n				</div>\n<!-- =======\n			<ion-textarea [(ngModel)]="resumeIntro"></ion-textarea>\n			<div *ngFor="let entry of resumeTemplate; let idx = index">\n				<ion-textarea\n				[(ngModel)]="resumeTemplate[idx].value"\n				></ion-textarea>\n>>>>>>> 35b1631497d8eba7037df27f72238d5fa942bd37 -->\n			</div>\n		</div>\n\n		<div col-4 class="control">\n			<button ion-button (click)="copyResume()" value="Copy Resume" >Copy Resume</button>\n	        <!-- <form #emailForm="ngForm">\n\n	        	<ion-label stacked>Please provide your email address:</ion-label>\n		        <ion-input class="input"\n		        		   type="email" \n						   [(ngModel)]="emailAddress"\n						   name="email"\n						   clearInput="on">		        				   \n				</ion-input>\n\n					\n\n			</form>	 -->	\n\n		</div>\n\n	</ion-row>\n</ion-content>'/*ion-inline-end:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/pages/skills/skills.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_job_data_job_data__["a" /* JobDataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SkillsPage);
    return SkillsPage;
}());

//# sourceMappingURL=skills.js.map

/***/ })

});
//# sourceMappingURL=0.js.map