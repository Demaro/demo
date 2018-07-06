(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main Navigation-->\n<header id=\"Up\">\n\n    <!--Navbar-->\n    <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\">\n        <logo>\n            <a class=\"logo navbar-brand waves-light\" mdbWavesEffect href=\"#\"><strong>MDB</strong></a>\n        </logo>\n        <links>\n            <ul class=\"navbar-nav mr-auto\">\n\n                <li routerLinkActive=\"active\" class=\"nav-item active waves-light\" mdbWavesEffect>\n                    <a [routerLink]=\"['/']\" class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item waves-light\" mdbWavesEffect>\n                    <a class=\"nav-link\" href=\"#\">Blog</a>\n                </li>\n                <li class=\"nav-item waves-light\" mdbWavesEffect>\n                    <a class=\"nav-link\" href=\"#\">Contact</a>\n                </li>\n            </ul>\n\n<!-- right -->\n\n        </links>\n    </mdb-navbar>\n   \n    <!-- Intro Section -->\n    <router-outlet></router-outlet>\n\n\n    <footer class=\"page-footer text-center text-md-left font-small stylish-color-dark pt-4 mt-4\">\n        \n                       \n                        <hr>\n        \n                        <!--Call to action-->\n                        <div class=\"text-center py-3\">\n                            <ul class=\"list-unstyled list-inline mb-0\">\n                                <li class=\"list-inline-item\">\n                                  \n                                    <h6 class=\"mb-1 text-center\">\n\n                                        Demonstration site under construction for the creation of a blog \n                                        <br>about technologies to contribute to the community of passionate developers in this art, ç\n                                        <br>sharing information, techniques and advice. connect and know each other</h6>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.Call to action-->\n        \n                        <hr>\n        \n                        <!--Social buttons-->\n                        <div class=\"text-center\">\n                            <ul class=\"list-unstyled list-inline\">\n                                <li class=\"list-inline-item\">\n                                    <a target=\"_blank\" href=\"https://www.linkedin.com/in/demaro1/\" class=\"btn-floating btn-sm btn-fb mx-1 waves-effect waves-light\">\n                                        <i class=\"fab fa-linkedin\"> </i>\n                                    </a>\n                                </li>\n                                <li class=\"list-inline-item\">\n                                    <a target=\"_blank\" href=\"https://github.com/Demaro\" class=\"btn-floating btn-sm btn-tw mx-1 waves-effect waves-light\">\n                                        <i class=\"fab fa-github\"> </i>\n                                    </a>\n                                </li>\n                                <li class=\"list-inline-item\">\n                                    <a target=\"_blank\" href=\"https://plus.google.com/u/0/112695464327785590720\" class=\"btn-floating btn-sm btn-gplus mx-1 waves-effect waves-light\">\n                                        <i class=\"fab fa-google-plus\"> </i>\n                                    </a>\n                                </li>\n                                <li class=\"list-inline-item\">\n                                    <a target=\"_blank\" href=\"https://www.instagram.com/demaro_create/\" class=\"btn-floating btn-sm btn-dribbble mx-1 waves-effect waves-light\">\n                                        <i class=\"fab fa-instagram\"> </i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <!--/.Social buttons-->\n        \n                        <!--Copyright-->\n                        <div class=\"footer-copyright py-3 text-center\">\n                            <div class=\"container-fluid\">\n                                © 2017 Copyright:\n                                <a href=\"#Up\"> Demaro Create </a>\n        \n                            </div>\n                        </div>\n                        <!--/.Copyright-->\n        \n                    </footer>\n\n<!--Main Navigation-->\n\n\n</header>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar:not(.top-nav-collapse) {\n  background: transparent !important; }\n\nh1 {\n  letter-spacing: 8px; }\n\nh5 {\n  letter-spacing: 3px; }\n\n.hr-light {\n  border-top: 3px solid #fff;\n  width: 80px; }\n\n.page-footer {\n  background-color: #1C2331 !important; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.hide = 'class="navbar-collapse collapse show"';
    }
    AppComponent.prototype.hidenav = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    //{ path: '', component: HomeComponent, canActivate: [AuthSaveComponent] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            // useHash supports github.io demo page, remove in your app
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Intro Section -->\n\n   \n   <div class=\"view hm-black-light jarallax\" data-jarallax='{\"speed\": 0.2}' style=\"background-image: url(https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg);\">\n    \n    <div class=\"full-bg-img mask rgba-black-light waves-light\" mdbWavesEffect>\n        <div class=\"container info\">\n            <div class=\"row mt-3 w-100\">\n                <div class=\"col-md-12\">\n                    <div class=\"text-center\">\n                        <h2 class=\"h1 h1-reponsive white-text font-up font-bold mb-3 wow fadeInDown\" data-wow-delay=\"0.3s\"><strong>David Martínez R.</strong></h2>\n                        <hr class=\"hr-light mt-4 wow fadeInDown\" data-wow-delay=\"0.4s\">\n                        <h5 class=\"font-up mb-5 white-text wow fadeInDown\" data-wow-delay=\"0.4s\"><strong>Full Stack Developer <br> <br>Programmer and Engineer systems development.</strong></h5>\n                        <h5 class=\"font-up mb-5 white-text wow fadeInDown\" data-wow-delay=\"0.4s\"><strong></strong></h5>\n                        <a class=\"btn btn-outline-white wow fadeInDown waves-light\" target=\"_blank\" href=\"https://www.linkedin.com/in/demaro1/\" data-wow-delay=\"0.4s\" mdbWavesEffect>About me\n                            <i class=\"fa fa-eye ml-1\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<br>\n<br>\n\n<main>\n    <div class=\"container\">\n\n\n        <section data-wow-delay=\"0.3s\" class=\"wow fadeIn\">\n            \n                        <!-- Author box -->\n                        <div class=\"jumbotron p-5 text-center text-md-left author-box \">\n                            <!-- Name -->\n                            <h3 class=\"h3-responsive text-center font-weight-bold dark-grey-text\">About author</h3>\n                            <hr>\n                            <div class=\"row\">\n                                <!-- Avatar -->\n                                <div class=\"col-12 col-md-2 mb-md-0 mb-4 waves-light\" mdbWavesEffect>\n                                    <img src=\"https://media.licdn.com/dms/image/C4D03AQE0_pNFAujL4g/profile-displayphoto-shrink_200_200/0?e=1536192000&v=beta&t=JmOzFZnGnDXQhYr2BK2_X31k6UfoZM4y3vGsm9HNRy8\"  class=\"img-fluid rounded-circle z-depth-2 avata\">\n                                </div>\n                                <!-- Author Data -->\n                                <div class=\"col-12 col-md-10\">\n                                    <h5 class=\"font-weight-bold dark-grey-text mb-3\">\n                                        <strong>David Martínez</strong>\n                                    </h5>\n                                    <div class=\"personal-sm pb-3\">\n                                        <a target=\"_blank\" href=\"https://www.linkedin.com/in/demaro1/\" class=\"pr-2 email-ic\">\n                                            <i class=\"fab fa-linkedin mr-2\"> </i>\n                                        </a>\n                                        <a target=\"_blank\" href=\"https://github.com/Demaro\" class=\"pr-2 fb-ic\">\n                                            <i class=\"fab fa-github mr-2\"> </i>\n                                        </a>\n                                        <a target=\"_blank\" href=\"https://plus.google.com/u/0/112695464327785590720\" class=\"pr-2 gplus-ic\">\n                                            <i class=\"fab fa-google-plus mr-2\"> </i>\n                                        </a>\n                                        <a target=\"_blank\" href=\"https://www.instagram.com/demaro_create/\" class=\"pr-2 li-ic\">\n                                            <i class=\"fab fa-instagram mr-2\"> </i>\n                                        </a>\n                                    </div>\n                                    <p>Programmer's degree. in process of Engineering Degree in systems development. \n                                        working with advanced technologies such as Frontend, UX design, Typescripts ES6,\n                                        Angular, Http Services, Api REST with Backend developed in Django. Methodologies, \n                                        positive attitude for work teams and cohesion. \n                                        Creativity plus Logical Analysis to give effective and innovative solutions.\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- Author box -->\n            \n                    </section>\n\n<br>\n\n\n\n      <!--Section: Main info-->\n      <section data-wow-delay=\"0.3s\" class=\"mt-5 wow fadeIn\">\n\n        <!--Grid row-->\n        <div class=\"row\">\n\n          <!--Grid column-->\n          <div class=\"col-md-6 mb-4 waves-light\" mdbWavesEffect>\n\n           \n           <img src=\"https://cdn-images-1.medium.com/max/800/1*eOE7VhXBlqdIJ9weEdHbQQ.jpeg\"  class=\"img-fluid z-depth-1-half\" alt=\"\">\n          </div>\n          <!--Grid column-->\n\n          <!--Grid column-->\n          <div class=\"col-md-6 mb-4\">\n\n            <!-- Main heading -->\n            <h3 class=\"h3 mb-3\">Angular framework. Mobile & desktop.</h3>\n            <p>The Frontend is created with <strong>Angular</strong> site full responsive, SPA , design UI/UX and Https communication with API.\n            <p>Read details below to learn more about angular.</p>\n            <!-- Main heading -->\n\n            <hr>\n\n            <p>\n              DEVELOP ACROSS ALL PLATFORMS,\n               SPEED & PERFORMANCE,\n              INCREDIBLE TOOLING,\n              <strong>LOVED BY MILLIONS</strong>\n            </p>\n\n            <!-- CTA -->\n            <a target=\"_blank\" href=\"https://angular.io/\" class=\"btn btn-indigo btn-md\">About Angular\n              <i class=\"fa fa-eye ml-1\"></i>\n            </a>\n\n          </div>\n          <!--Grid column-->\n\n\n          \n        </div>\n        <!--Grid row-->\n        <hr class=\"my-5\">\n\n        \n      </section>\n\n      <section data-wow-delay=\"0.3s\" class=\"mt-5 wow fadeIn\">\n          \n                  <!--Grid row-->\n                  <div class=\"row\">\n          \n                    <!--Grid column-->\n\n                    <!--Grid column-->\n          \n                    <!--Grid column-->\n                    <div class=\"col-md-6 mb-4\">\n          \n                      <!-- Main heading -->\n                      <h3 class=\"h3 mb-3\">Material Design for Bootstrap</h3>\n                      <p>This template is created with Material Design for Bootstrap (\n                        <strong>MDB</strong> ) framework.</p>\n                      <p>Read details below to learn more about MDB.</p>\n                      <!-- Main heading -->\n          \n                      <hr>\n          \n                      <p>\n                        <strong>400+</strong> material UI elements,\n                        <strong>600+</strong> material icons,\n                        <strong>74</strong> CSS animations, SASS files, templates, tutorials and many more.\n                        <strong>Free for personal and commercial use.</strong>\n                      </p>\n          \n                      <!-- CTA -->\n                      <a target=\"_blank\" href=\"https://mdbootstrap.com/product/angular-bootstrap-pro/\" class=\"btn btn-indigo btn-md\">About MDB\n                        <i class=\"fa fa-eye ml-1\"></i>\n                      </a>\n          \n                    </div>\n                    <!--Grid column-->\n                    <div class=\"col-md-6 mb-4 waves-light\" mdbWavesEffect>\n                        \n                                   \n                                   <img src=\"https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg\"  class=\"img-fluid z-depth-1-half\" alt=\"\">\n                                  </div>\n                  </div>\n                  <!--Grid row-->\n          \n                </section>\n                <hr class=\"my-5\">\n     <!--Section: Main info-->\n     <section data-wow-delay=\"0.3s\" class=\"mt-5 wow fadeIn\">\n        \n                <!--Grid row-->\n                <div class=\"row\">\n        \n                  <!--Grid column-->\n                  <div class=\"col-md-6 mb-4 waves-light\" mdbWavesEffect>\n        \n                   \n                   <img src=\"https://ksr-ugc.imgix.net/assets/011/705/984/4ea78430d3ad7dc88106a7b973248ba7_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463687041&auto=format&q=92&s=e870eef80e884d04bcb5ccef6e32fc4c\"  class=\"img-fluid z-depth-1-half\" alt=\"\">\n                  </div>\n                  <!--Grid column-->\n        \n                  <!--Grid column-->\n                  <div class=\"col-md-6 mb-4\">\n        \n                    <!-- Main heading -->\n                    <h3 class=\"h3 mb-3\">Django REST framework</h3>\n                    <p>The Backend is created with <strong>Django REST framework</strong> is a powerful and flexible toolkit for building Web APIs.\n                      The Web browsable API is a huge usability win for your developers.\n                      Authentication policies including packages \n                      Serialization that supports both ORM and non-ORM data sources.\n                      Customizable all the way down - just use regular function-based views [...]</p>\n                    <!-- Main heading -->\n        \n                    <hr>\n        \n                    <p>\n                        Extensive documentation, and great community support.\n                        Used and trusted by internationally recognised companies including.\n                      <strong>Mozilla, Red Hat, Heroku, and Eventbrite</strong>\n                    </p>\n        \n                    <!-- CTA -->\n                    <a target=\"_blank\" href=\"http://www.django-rest-framework.org/\" class=\"btn btn-indigo btn-md\">About Django\n                      <i class=\"fa fa-eye ml-1\"></i>\n                    </a>\n        \n                  </div>\n                  <!--Grid column-->\n        \n        \n                  \n                </div>\n                <!--Grid row-->\n               \n        \n                \n              </section>\n            \n\n</div>\n</main>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin {\n  margin-bottom: 300px; }\n\n.info {\n  margin-top: 300px; }\n\n.center-about {\n  display: block;\n  margin-left: auto;\n  margin-right: 40px;\n  width: 100%; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n.top-nav-collapse {\n  background-color: #78909c !important; }\n\n.view {\n  height: 100vh !important; }\n\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important; }\n\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #78909c !important; } }\n\nh1 {\n  letter-spacing: 8px; }\n\nh5 {\n  letter-spacing: 3px; }\n\n.hr-light {\n  border-top: 3px solid #fff;\n  width: 80px; }\n\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 700px; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/demaro/Downloads/mdb-angular-free-6.1.6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map