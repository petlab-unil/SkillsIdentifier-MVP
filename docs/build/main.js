webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobDataProvider = /** @class */ (function () {
    function JobDataProvider(http) {
        this.http = http;
        this.currentJob = [{ 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }];
        this.dreamJob = { 'title': '', 'uuid': '', 'parent_uuid': '' };
        this.location = '';
        console.log('Hello JobDataProvider Provider');
        this._dataAtWork_url = "https://api.dataatwork.org/v1/";
        // this._url = "http://localhost:8000/api/v1/";
        this._url = "http://dreamgig.me:5000/api/v1/";
    }
    JobDataProvider.prototype.setCurrentJob = function (currentJob) {
        this.currentJob = currentJob;
    };
    JobDataProvider.prototype.setDreamJob = function (dreamJob) {
        this.dreamJob = dreamJob;
    };
    // Get job title autocompletion by calling Dataatwork autocomplete API 
    JobDataProvider.prototype.getJobAutocomplete = function (jobTitle) {
        return this.http.get(this._dataAtWork_url + "jobs/autocomplete?contains=" + jobTitle)
            .map(function (res) { return res; });
    };
    JobDataProvider.prototype.getSkillset = function (uuid) {
        return this.http.get(this._dataAtWork_url + "jobs/" + uuid + "/related_skills")
            .map(function (res) { return res; });
    };
    JobDataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], JobDataProvider);
    return JobDataProvider;
}());

//# sourceMappingURL=job-data.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		155
	],
	"../pages/skills/skills.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_job_data_job_data__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ModalHomePage } from '../modal-home/modal-home'; 
// import { FootbarComponent } from '../../components/footbar/footbar';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, _jobDataProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._jobDataProvider = _jobDataProvider;
        this.currentJob = [{ 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }, { 'title': '', 'uuid': '', 'parent_uuid': '' }];
        this.dreamJob = { 'title': '', 'uuid': '', 'parent_uuid': '' };
        this.jobAutocompleteList = [];
        this.showJobAutocompleteList = -1;
        // currentSelected is used to store the index of the current selected item in the autocomplete list 
        this.currentSelected = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        this.infoForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            currentJobTitleZero: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            currentJobTitleOne: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            currentJobTitleTwo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            currentJobTitleThree: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
            // currentJobTitleFour: new FormControl('', [Validators.required]),
            // currentJobTitleFive: new FormControl('', [Validators.required]),
            dreamJobTitle: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]),
        });
        // this.openModal();
    };
    // openModal(){
    // 	const introModal = this.modalCtrl.create('ModalHomePage')
    // 	introModal.present();	
    // }
    HomePage.prototype.pushPage = function () {
        // this._jobDataProvider.location = this.location;
        // TODO: fix this logic
        this._jobDataProvider.setCurrentJob(this.currentJob);
        this._jobDataProvider.setDreamJob(this.dreamJob);
        this.navCtrl.push("skills");
    };
    // controller of the current job text field -- to deal with arrow keys, enter key, and autocompletion 
    HomePage.prototype.onInputCurrentJob = function (event, i) {
        var _this = this;
        if (event.key != "ArrowDown" && event.key != "ArrowUp" && event.key != "Enter")
            if (this.currentJob[i].title.length > 3)
                this._jobDataProvider.getJobAutocomplete(this.currentJob[i].title)
                    .subscribe(function (res) {
                    _this.jobAutocompleteList = res;
                    _this.currentSelected = 0;
                }, function (err) {
                    _this.jobAutocompleteList = [];
                });
            else if (this.currentJob[i].title.length == 0)
                this.jobAutocompleteList = [];
        if (event.key == "ArrowDown") {
            this.currentSelected++;
        }
        else if (event.key == "ArrowUp") {
            this.currentSelected--;
        }
        else if (event.key == "Enter") {
            this.onSelectJobTitle(this.jobAutocompleteList[this.currentSelected], 1);
        }
    };
    HomePage.prototype.onInputDreamJob = function (event) {
        var _this = this;
        if (event.key != "ArrowDown" && event.key != "ArrowUp" && event.key != "Enter")
            if (this.dreamJob.title.length > 3)
                this._jobDataProvider.getJobAutocomplete(this.dreamJob.title)
                    .subscribe(function (res) {
                    _this.jobAutocompleteList = res;
                    _this.currentSelected = 0;
                }, function (err) {
                    _this.jobAutocompleteList = [];
                });
            else if (this.dreamJob.title.length == 0)
                this.jobAutocompleteList = [];
        if (event.key == "ArrowDown" && this.currentSelected < this.jobAutocompleteList.length) {
            this.currentSelected++;
        }
        else if (event.key == "ArrowUp" && this.currentSelected > 0) {
            this.currentSelected--;
        }
        else if (event.key == "Enter") {
            this.onSelectJobTitle(this.jobAutocompleteList[this.currentSelected], 2);
        }
    };
    HomePage.prototype.onChangeJobTitle = function (event) {
        var _this = this;
        if (event.value.length > 3)
            this._jobDataProvider.getJobAutocomplete(event.value)
                .subscribe(function (res) {
                _this.jobAutocompleteList = res;
            });
        if (event.value.length == 0)
            this.jobAutocompleteList = [];
    };
    HomePage.prototype.onHoverJobTitle = function (index) {
        this.currentSelected = index;
    };
    // Users select the job title from the title list 
    HomePage.prototype.onSelectJobTitle = function (job, index) {
        this.jobAutocompleteList = [];
        if (index <= 5) {
            this.currentJob[index].title = job.suggestion;
            this.currentJob[index].uuid = job.uuid;
            this.currentJob[index].parent_uuid = job.parent_uuid;
        }
        else if (index == 6) {
            this.dreamJob.title = job.suggestion;
            this.dreamJob.uuid = job.uuid;
            this.dreamJob.parent_uuid = job.parent_uuid;
        }
    };
    // When a job text field is focused
    HomePage.prototype.onFocus = function (index) {
        if (index >= 0) {
            this.showJobAutocompleteList = index;
        }
        else {
            this.showJobAutocompleteList = -1;
        }
    };
    // Clear the job title list when the text field is cleared by either the clear button or deleted by the user
    HomePage.prototype.onClear = function (index) {
        if (index < 6 && this.currentJob[index].title == '')
            this.jobAutocompleteList = [];
        else if (this.dreamJob.title == '' && index == 6)
            this.jobAutocompleteList = [];
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/pages/home/home.html"*/'<ion-content padding>\n	<div class="fullpage-input">\n\n		<ion-list>\n		    <form novalidate (ngSubmit)="pushPage()" [formGroup]="infoForm">\n\n		      	<div class ="input">\n		     		<ion-item class="input-block">\n		        		<ion-label stacked>Please list up to four previous jobs:</ion-label>\n		        		<ion-input type="text" \n		        				   [(ngModel)]="currentJob[0].title" \n		        				   formControlName="currentJobTitleZero" \n		        				   clearInput="on"\n		        				   [class.error1]="!infoForm.controls.currentJobTitleZero.valid && infoForm.controls.currentJobTitleZero.dirty" \n		        				   (keydown)=\'onInputCurrentJob($event, 0)\'\n		        				   (ionChange)=\'onClear(0)\'\n		        				   (ionFocus)=\'onFocus(0)\'>		        				   \n		        		</ion-input>\n		      		</ion-item>\n	      			<ion-list class="autocomplete-list" *ngIf="showJobAutocompleteList == 0">\n						<ion-item *ngFor="let job of jobAutocompleteList; let idx = index" \n								  (click)="onSelectJobTitle(job, 0)" \n								  (mouseover)="onHoverJobTitle(idx)"\n								  no-lines\n								  [class.selected]=\'idx===currentSelected\'>\n							{{job.suggestion}}\n						</ion-item>\n					</ion-list>\n			      	<div class="error">\n			        	<p *ngIf="infoForm.get(\'currentJobTitleZero\').touched && currentJob[0].uuid==\'\'">\n			            	<ion-icon name="alert"></ion-icon>\n			            	  Please input a valid recent job\n			        	</p>\n			       	</div>\n		      	</div>\n\n				<div class ="input">\n		     		<ion-item class="input-block">\n		        		<ion-input type="text" \n		        				   [(ngModel)]="currentJob[1].title" \n		        				   formControlName="currentJobTitleOne" \n		        				   clearInput="on"\n		        				   [class.error1]="!infoForm.controls.currentJobTitleOne.valid && infoForm.controls.currentJobTitleOne.dirty" \n		        				   (keydown)=\'onInputCurrentJob($event, 1)\'\n		        				   (ionChange)=\'onClear(1)\'\n		        				   (ionFocus)=\'onFocus(1)\'>		        				   \n		        		</ion-input>\n		      		</ion-item>\n	      			<ion-list class="autocomplete-list" *ngIf="showJobAutocompleteList == 1">\n						<ion-item *ngFor="let job of jobAutocompleteList; let idx = index" \n								  (click)="onSelectJobTitle(job, 1)" \n								  (mouseover)="onHoverJobTitle(idx)"\n								  no-lines\n								  [class.selected]=\'idx===currentSelected\'>\n							{{job.suggestion}}\n						</ion-item>\n					</ion-list>\n			      	<div class="error">\n			        	<p *ngIf="infoForm.get(\'currentJobTitleOne\').touched && currentJob[1].uuid==\'\'">\n			            	<ion-icon name="alert"></ion-icon>\n			            	  Please input a valid recent job\n			        	</p>\n			       	</div>\n		      	</div>\n\n		      	<div class ="input">\n		     		<ion-item class="input-block">\n		        		<ion-input type="text" \n		        				   [(ngModel)]="currentJob[2].title" \n		        				   formControlName="currentJobTitleTwo" \n		        				   clearInput="on"\n		        				   [class.error1]="!infoForm.controls.currentJobTitleTwo.valid && infoForm.controls.currentJobTitleTwo.dirty" \n		        				   (keydown)=\'onInputCurrentJob($event, 2)\'\n		        				   (ionChange)=\'onClear(2)\'\n		        				   (ionFocus)=\'onFocus(2)\'>		        				   \n		        		</ion-input>\n		      		</ion-item>\n	      			<ion-list class="autocomplete-list" *ngIf="showJobAutocompleteList == 2">\n						<ion-item *ngFor="let job of jobAutocompleteList; let idx = index" \n								  (click)="onSelectJobTitle(job, 2)" \n								  (mouseover)="onHoverJobTitle(idx)"\n								  no-lines\n								  [class.selected]=\'idx===currentSelected\'>\n							{{job.suggestion}}\n						</ion-item>\n					</ion-list>\n			      	<div class="error">\n			        	<p *ngIf="infoForm.get(\'currentJobTitleTwo\').touched && currentJob[2].uuid==\'\'">\n			            	<ion-icon name="alert"></ion-icon>\n			            	  Please input a valid recent job\n			        	</p>\n			       	</div>\n		      	</div>\n		      	\n		      	<div class ="input">\n		     		<ion-item class="input-block">\n		        		<ion-input type="text" \n		        				   [(ngModel)]="currentJob[3].title" \n		        				   formControlName="currentJobTitleThree" \n		        				   clearInput="on"\n		        				   [class.error1]="!infoForm.controls.currentJobTitleThree.valid && infoForm.controls.currentJobTitleThree.dirty" \n		        				   (keydown)=\'onInputCurrentJob($event, 3)\'\n		        				   (ionChange)=\'onClear(3)\'\n		        				   (ionFocus)=\'onFocus(3)\'>		        				   \n		        		</ion-input>\n		      		</ion-item>\n	      			<ion-list class="autocomplete-list" *ngIf="showJobAutocompleteList == 3">\n						<ion-item *ngFor="let job of jobAutocompleteList; let idx = index" \n								  (click)="onSelectJobTitle(job, 3)" \n								  (mouseover)="onHoverJobTitle(idx)"\n								  no-lines\n								  [class.selected]=\'idx===currentSelected\'>\n							{{job.suggestion}}\n						</ion-item>\n					</ion-list>\n			      	<div class="error">\n			        	<p *ngIf="infoForm.get(\'currentJobTitleThree\').touched && currentJob[3].uuid==\'\'">\n			            	<ion-icon name="alert"></ion-icon>\n			            	  Please input a valid recent job\n			        	</p>\n			       	</div>\n		      	</div>\n\n				<div class="input">\n			      	<ion-item class="input-block">\n			        	<ion-label stacked>What job would you like to apply for?</ion-label>\n			        	<ion-input type="text" \n			        			   [(ngModel)]="dreamJob.title" \n			        			   formControlName="dreamJobTitle"\n								   clearInput="on"\n			        			   [class.error1]="!infoForm.controls.dreamJobTitle.valid && infoForm.controls.dreamJobTitle.dirty"\n			        			   (keydown)=\'onInputDreamJob($event)\'\n			        			   (ionChange)=\'onClear(6)\'\n			        			   (ionFocus)=\'onFocus(6)\'>\n			        			   \n			        	</ion-input>\n			      	</ion-item>\n	      			<ion-list class="autocomplete-list" *ngIf="showJobAutocompleteList == 6">\n						<ion-item *ngFor="let job of jobAutocompleteList; let idx = index" \n								  (click)="onSelectJobTitle(job, 6)" \n								  (mouseover)="onHoverJobTitle(idx)"\n								  no-lines\n								  [class.selected]=\'idx===currentSelected\'>\n							{{job.suggestion}}\n						</ion-item>\n					</ion-list>\n			      	<div class="error">\n			          	<p *ngIf="infoForm.get(\'dreamJobTitle\').touched && dreamJob.uuid==\'\'">\n			            	<ion-icon name="alert"></ion-icon>\n			            	  Please input a valid recent job\n			        	</p>\n			        </div>\n			 	</div>\n\n\n		      	<button class="submit" type="submit" ion-button block color="primary" [disabled]="currentJob[0].uuid == \'\' || dreamJob.uuid ==\'\' ">CONTINUE</button>\n		    \n		    </form>\n\n		</ion-list>		\n	</div>\n\n</ion-content>\n\n<!-- <ion-footer no-border>\n	<footbar></footbar>\n</ion-footer> -->'/*ion-inline-end:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_job_data_job_data__["a" /* JobDataProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_job_data_job_data__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/skills/skills.module#SkillsPageModule', name: 'skills', segment: 'skills', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: null, priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home_module__["HomePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_job_data_job_data__["a" /* JobDataProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footbar_footbar__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__footbar_footbar__["a" /* FootbarComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__footbar_footbar__["a" /* FootbarComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FootbarComponent = /** @class */ (function () {
    function FootbarComponent() {
        console.log('Hello FootbarComponent Component');
        this.text = 'Hello World';
    }
    FootbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footbar',template:/*ion-inline-start:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/components/footbar/footbar.html"*/'<!-- <ion-footer no-border>\n	<ion-toolbar>\n		<div class="footnote">\n			<a href="http://socialinnovations.us/" target="_blank">Social Innovations Group</a> | © 2018 | version 1.5 | build 2018.08.04\n		</div>\n	</ion-toolbar>\n</ion-footer> -->'/*ion-inline-end:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/components/footbar/footbar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FootbarComponent);
    return FootbarComponent;
}());

//# sourceMappingURL=footbar.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/earnestw/Documents/PhD Research/SkillsIdentifier/SkillsIdentifier/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map