webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagemodulePageModule", function() { return PagemodulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagemodule__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PagemodulePageModule = /** @class */ (function () {
    function PagemodulePageModule() {
    }
    PagemodulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagemodule__["a" /* PagemodulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagemodule__["a" /* PagemodulePage */]),
            ],
        })
    ], PagemodulePageModule);
    return PagemodulePageModule;
}());

//# sourceMappingURL=pagemodule.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagemodulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PagemodulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagemodulePage = /** @class */ (function () {
    function PagemodulePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.name = '';
        this.password = '';
        this.name = this.navParams.get('name');
    }
    PagemodulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagemodulePage');
    };
    PagemodulePage.prototype.login = function () {
        this.viewCtrl.dismiss({ name: this.name, password: this.password });
    };
    PagemodulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagemodule',template:/*ion-inline-start:"/Users/lucastorer/Documents/GitHub/Ionic/navpages/src/pages/pagemodule/pagemodule.html"*/'<!--\n  Generated template for the PagemodulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>page module</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>LOGIN</h1>\n<ion-list>\n\n<ion-item>\n  <ion-label > Name</ion-label>\n  <ion-input type="text" [(ngModel)]="name"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label > Password</ion-label>\n  <ion-input type="password" [(ngModel)]="password"></ion-input>\n</ion-item>\n</ion-list>\n<ion-buttons position>\n  <button color="primary" block ion-button (click)="login()">Login</button>\n  <button color="secondary" ion-button block navPop>torna alla Main</button>\n</ion-buttons>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lucastorer/Documents/GitHub/Ionic/navpages/src/pages/pagemodule/pagemodule.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], PagemodulePage);
    return PagemodulePage;
    var _a, _b;
}());

//# sourceMappingURL=pagemodule.js.map

/***/ })

});
//# sourceMappingURL=0.js.map