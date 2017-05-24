webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_routes__ = __webpack_require__(66);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */], [__WEBPACK_IMPORTED_MODULE_4__app_app_routes__["a" /* APP_ROUTES_PROVIDER */]]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(182),
        styles: [__webpack_require__(170)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_dashboard_dashboard_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_profile_profile_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_questions_add_new_question_add_new_question_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_questions_add_new_alternative_add_new_alternative_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_questions_questions_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_truncate__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_admin_questions_edit_question_edit_question_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_questions_edit_alternatives_edit_alternatives_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_admin_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_admin_questions_add_new_question_add_new_question_component__["a" /* AddNewQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_questions_add_new_alternative_add_new_alternative_component__["a" /* AddNewAlternativeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_admin_questions_questions_component__["a" /* QuestionsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_truncate__["a" /* TruncatePipe */],
            __WEBPACK_IMPORTED_MODULE_20__components_admin_questions_edit_question_edit_question_component__["a" /* EditQuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_questions_edit_alternatives_edit_alternatives_component__["a" /* EditAlternativesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* APP_ROUTES_PROVIDER */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Agora você está deslogado!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(192),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// truncate.ts

var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args.length > 0 ? parseInt(args[0], 35) : 35;
        var trail = args.length > 1 ? args[1] : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncatePipe;
}());
TruncatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'truncate'
    })
], TruncatePipe);

//# sourceMappingURL=truncate.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // Validando os campos de registro
    ValidateService.prototype.validateRegister = function (user) {
        if (!user.name || !user.username || !user.email || !user.password || !user.type)
            return false;
        else
            return true;
    };
    // Validando email
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    // Validando os campos de questão
    ValidateService.prototype.validateQuestion = function (newQuestion) {
        if (!newQuestion.question || !newQuestion.timesAppeared || !newQuestion.status || !newQuestion.feedback || !newQuestion.area)
            return false;
        else
            return true;
    };
    // Validando as alternativas
    ValidateService.prototype.validateAlternatives = function (alternatives) {
        if (!alternatives[0].alternative || !alternatives[1].alternative || !alternatives[2].alternative || !alternatives[3].alternative)
            return false;
        else
            return true;
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Dashboard <small>Controle Seus Simulados</small></h1>\n      </div>\n\n      <div class=\"col-md-2\">\n        <div class=\"dropdown create\">\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"true\">Adicionar Conteúdo\n            <span class=\"caret\"></span>\n        </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a type=\"button\" [routerLink]=\"['/question/add']\">Adicionar Questões</a></li>\n            <li><a type=\"button\" [routerLink]=\"['/simulados/add']\">Adicionar Simulados</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.container -->\n</header>\n<section id=\"breadcrumb\">\n  <div class=\"container\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </div>\n</section>\n<section id=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"list-group\">\n          <a type=\"button\" [routerLink]=\"['/dashboard']\" class=\"list-group-item active main-color-bg\">\n            <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Dashboard\n          </a>\n          <a type=\"button\" [routerLink]=\"['/simulados']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> Simulados\n            <span class=\"badge\">12</span>\n          </a>\n          <a type=\"button\" [routerLink]=\"['/question']\"class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Questões\n            <span class=\"badge\">33</span>\n          </a>\n          <a type=\"button\" [routerLink]=\"['/users']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Usuários\n            <span class=\"badge\">2</span>\n          </a>\n          <a type=\"button\" [routerLink]=\"['/reports']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Relatórios\n            <span class=\"badge\">12007</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <!-- Visão Geral do Site -->\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading main-color-bg\">\n            <h3 class=\"panel-title\">Visão Geral do Sistema</h3>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"col-md-3\">\n              <div class=\"well dash-box\">\n                <h2>\n                  <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> 12\n                </h2>\n                <h4>Simulados</h4>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"well dash-box\">\n                <h2>\n                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> 33\n                </h2>\n                <h4>Questões</h4>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"well dash-box\">\n                <h2>\n                  <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> 2\n                </h2>\n                <h4>Usuários</h4>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"well dash-box\">\n                <h2>\n                  <span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> 12,007\n                </h2>\n                <h4>Relatórios</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n    <h2 class=\"page-header\">{{user.nome}}</h2>\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\">Usuário: {{user.username}}</li>\n        <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n</div>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Alternativas <small>Controle Suas Alternativas</small></h1>\n      </div>\n    </div>\n  </div>\n  <!-- /.container -->\n</header>\n<section id=\"breadcrumb\">\n  <div class=\"container\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard > Questões > Adicionar Questões > Adicionar Alternativas </li>\n    </ol>\n  </div>\n</section>\n<div *ngIf=\"question\">\n  <!-- Register -->\n  <form class=\"form-signin form-horizontal well form-size\" (submit)=\"onRegisterSubmit()\">\n    <fieldset>\n      <legend>{{question.question}}</legend>\n\n      <label for=\"inputAlternativeA\" class=\"col-lg-2 control-label\">Alternativa A)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeA\" placeholder=\"Insira a Alternativa A)\"\n          required autofocus [(ngModel)]=\"alternatives[0].alternative\" name=\"alternativeA\"></textarea>\n      </div>\n\n      <label for=\"inputAlternativeB\" class=\"col-lg-2 control-label\">Alternativa B)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeB\" placeholder=\"Insira a Alternativa B)\"\n          required autofocus [(ngModel)]=\"alternatives[1].alternative\" name=\"alternativeB\"></textarea>\n      </div>\n\n      <label for=\"inputAlternativeC\" class=\"col-lg-2 control-label\">Alternativa C)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeC\" placeholder=\"Insira a Alternativa C)\"\n          required autofocus [(ngModel)]=\"alternatives[2].alternative\" name=\"alternativeC\"></textarea>\n      </div>\n\n      <label for=\"inputAlternativeD\" class=\"col-lg-2 control-label\">Alternativa D)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeD\" placeholder=\"Insira a Alternativa D)\"\n          required autofocus [(ngModel)]=\"alternatives[3].alternative\" name=\"alternativeD\"></textarea>\n      </div>\n\n      <label for=\"answer\" class=\"col-lg-2 control-label\">Resposta</label>\n      <div class=\"col-lg-10\">\n        <span *ngFor=\" let opt of options\">\n          <input type=\"radio\" name=\"radiogroup\" [checked]=\"idx === 0\" [value]=\"opt.id\" (change)=\"onSelectionChange(opt.id)\">\n            {{ opt.name }}\n        </span>\n      </div>\n\n\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"reset\" class=\"btn btn-lg btn-danger\" value=\"Reset\">Limpar Campos</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-primary\" value=\"Submit\">Finalizar Cadastro</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n<!-- /container -->\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Questões <small>Controle Suas Questões</small></h1>\n      </div>\n    </div>\n  </div>\n  <!-- /.container -->\n</header>\n<section id=\"breadcrumb\">\n  <div class=\"container\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard > Questões > Adicionar Questões</li>\n    </ol>\n  </div>\n</section>\n<form class=\"form-signin form-horizontal well form-size\" (submit)=\"onRegisterSubmit()\">\n  <fieldset>\n    <legend>Cadastrar Nova Questão</legend>\n\n    <label for=\"inputQuestion\" class=\"col-lg-2 control-label\">Questão</label>\n    <div class=\"col-lg-10\">\n      <textarea class=\"form-control\" rows=\"3\" class=\"form-control\" id=\"inputQuestion\" placeholder=\"Insira a Questão\" required autofocus\n        [(ngModel)]=\"question\" name=\"question\"></textarea>\n    </div>\n\n    <label for=\"inputArea\" class=\"col-lg-2 control-label\">Área</label>\n    <div class=\"col-lg-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputArea\" placeholder=\"Insira a Área de Conhecimento\" required [(ngModel)]=\"area\"\n        name=\"area\">\n    </div>\n\n    <label for=\"inputStatus\" class=\"col-lg-2 control-label\">Status</label>\n    <div class=\"col-lg-10\">\n      <select class=\"form-control\" id=\"inputStatus\" required [(ngModel)]=\"status\" name=\"status\" required>\n            <option disabled hidden [value]=\"selectUndefinedOptionValue\">Qual o Status da Questão?</option>\n            <option *ngFor=\"let status of options\" [ngValue]=\"status.id\">{{status.name}}</option>\n        </select>\n    </div>\n\n    <label for=\"inputFeedback\" class=\"col-lg-2 control-label\">Feedback</label>\n    <div class=\"col-lg-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputUsuario\" placeholder=\"Qual o feedback da Questão?\" required [(ngModel)]=\"feedback\"\n        name=\"feedback\">\n    </div>\n\n    <label for=\"inputTimesAppeared\" class=\"col-lg-2 control-label\">Aparecimento</label>\n    <div class=\"col-lg-10\">\n      <input type=\"number\" class=\"form-control\" id=\"inputTimesAppeared\" placeholder=\"Quantas vezes a Questão Apareceu?\" required\n        [(ngModel)]=\"timesAppeared\" name=\"timesAppeared\">\n    </div>\n\n    <div class=\"col-lg-10 col-lg-offset-2\">\n      <button type=\"reset\" class=\"btn btn-lg btn-danger\" value=\"Reset\">Limpar Campos</button>\n      <button type=\"submit\" class=\"btn btn-lg btn-primary\" value=\"Submit\">Continuar Cadastro</button>\n    </div>\n  </fieldset>\n</form>\n<!-- /container -->\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"alternatives\">\n  <header id=\"header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Alternativas <small>Controle Suas Alternativas</small></h1>\n        </div>\n      </div>\n    </div>\n    <!-- /.container -->\n  </header>\n  <section id=\"breadcrumb\">\n    <div class=\"container\">\n      <ol class=\"breadcrumb\">\n        <li class=\"active\">Dashboard > Questões > Editar Questões > Editar Alternativas </li>\n      </ol>\n    </div>\n  </section>\n  <!-- Register -->\n  <form class=\"form-signin form-horizontal well form-size\" (submit)=\"onRegisterSubmit()\">\n    <fieldset>\n\n      <label for=\"inputAlternativeA\" class=\"col-lg-2 control-label\">Alternativa A)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeA\" placeholder=\"Insira a Alternativa A)\"\n          required autofocus [(ngModel)]=\"alternatives[0].alternative\" name=\"alternativeA\"></textarea>\n      </div>\n\n      <label for=\"inputAlternativeB\" class=\"col-lg-2 control-label\">Alternativa B)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeB\" placeholder=\"Insira a Alternativa B)\"\n          required autofocus [(ngModel)]=\"alternatives[1].alternative\" name=\"alternativeB\"></textarea>\n      </div>\n\n      <label for=\"inputAlternativeC\" class=\"col-lg-2 control-label\">Alternativa C)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeC\" placeholder=\"Insira a Alternativa C)\"\n          required autofocus [(ngModel)]=\"alternatives[2].alternative\" name=\"alternativeC\"></textarea>\n      </div>\n\n      <label for=\"inputAlternativeD\" class=\"col-lg-2 control-label\">Alternativa D)</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"2\" class=\"form-control\" id=\"inputAlternativeD\" placeholder=\"Insira a Alternativa D)\"\n          required autofocus [(ngModel)]=\"alternatives[3].alternative\" name=\"alternativeD\"></textarea>\n      </div>\n\n      <label for=\"answer\" class=\"col-lg-2 control-label\">Resposta</label>\n      <div class=\"col-lg-10\">\n        <span *ngFor=\" let opt of options\">\n          <input type=\"radio\" name=\"radiogroup\" [checked]=\"idx === 0\" [value]=\"opt.id\" (change)=\"onSelectionChange(opt.id)\">\n            {{ opt.name }}\n        </span>\n      </div>\n\n\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"submit\" class=\"btn btn-lg btn-primary\" value=\"Submit\">Finalizar Edição</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n<!-- /container -->\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Questões <small>Controle Suas Questões</small></h1>\n      </div>\n    </div>\n  </div>\n  <!-- /.container -->\n</header>\n<section id=\"breadcrumb\">\n  <div class=\"container\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard > Questões > Editar Questões</li>\n    </ol>\n  </div>\n</section>\n<div *ngIf=\"question\">\n\n  <form class=\"form-signin form-horizontal well form-size\" (submit)=\"onRegisterSubmit()\">\n    <fieldset>\n      <legend>Editar Questão</legend>\n\n      <label for=\"inputQuestion\" class=\"col-lg-2 control-label\">Questão</label>\n      <div class=\"col-lg-10\">\n        <textarea class=\"form-control\" rows=\"3\" class=\"form-control\" id=\"inputQuestion\" placeholder=\"Insira a Questão\" required autofocus\n          [(ngModel)]=\"question\" name=\"question\"></textarea>\n      </div>\n\n      <label for=\"inputArea\" class=\"col-lg-2 control-label\">Área</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"inputArea\" placeholder=\"Insira a Área de Conhecimento\" required [(ngModel)]=\"area\"\n          name=\"area\">\n      </div>\n\n      <label for=\"inputStatus\" class=\"col-lg-2 control-label\">Status</label>\n      <div class=\"col-lg-10\">\n        <select class=\"form-control\" id=\"inputStatus\" required [(ngModel)]=\"status\" name=\"status\" required>\n            <option disabled hidden [value]=\"selectUndefinedOptionValue\">Qual o Status da Questão?</option>\n            <option *ngFor=\"let status of options\" [ngValue]=\"status.id\">{{status.name}}</option>\n        </select>\n      </div>\n      \n      <label for=\"inputFeedback\" class=\"col-lg-2 control-label\">Feedback</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"inputUsuario\" placeholder=\"Qual o feedback da Questão?\" required [(ngModel)]=\"feedback\"\n          name=\"feedback\">\n      </div>\n\n      <label for=\"inputTimesAppeared\" class=\"col-lg-2 control-label\">Aparecimento</label>\n      <div class=\"col-lg-10\">\n        <input type=\"number\" class=\"form-control\" id=\"inputTimesAppeared\" placeholder=\"Quantas vezes a Questão Apareceu?\" required\n          [(ngModel)]=\"timesAppeared\" name=\"timesAppeared\">\n      </div>\n\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"submit\" class=\"btn btn-lg btn-primary\" value=\"Submit\">Continuar Edição</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n<!-- /container -->\n"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Questões <small>Controle Suas Questões</small></h1>\n      </div>\n\n      <div class=\"col-md-2\">\n        <div class=\"dropdown create\">\n          <a type=\"button\" [routerLink]=\"['/question/add']\" class=\"btn btn-primary dropdown-toggle\">Inserir Nova Questão</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.container -->\n</header>\n<section id=\"breadcrumb\">\n  <div class=\"container\">\n    <ol class=\"breadcrumb\">\n      <li class=\"active\">Dashboard > Questões</li>\n    </ol>\n  </div>\n</section>\n<section id=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"list-group\">\n          <a type=\"button\" [routerLink]=\"['/dashboard']\" class=\"list-group-item active main-color-bg\">\n            <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Dashboard\n          </a>\n          <a type=\"button\" [routerLink]=\"['/simulados']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> Simulados\n            <span class=\"badge\">12</span>\n          </a>\n          <a type=\"button\" [routerLink]=\"['/question']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Questões\n            <span class=\"badge\">33</span>\n          </a>\n          <a type=\"button\" [routerLink]=\"['/users']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Usuários\n            <span class=\"badge\">2</span>\n          </a>\n          <a type=\"button\" [routerLink]=\"['/reports']\" class=\"list-group-item\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Relatórios\n            <span class=\"badge\">12007</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <!-- Visão Geral do Site -->\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading main-color-bg\">\n            <h3 class=\"panel-title\">Questões</h3>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" type=\"text\" placeholder=\"Procurar por Questões...\">\n              </div>\n            </div>\n            <br>\n            <div *ngIf=\"questions\">\n              <table class=\"table table-striped table-hover\">\n                <tr>\n                  <th>Título da Questão</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n                <tr *ngFor=\"let question of questions\">\n                  <td>{{question.question | truncate:35}}</td>\n                  <td><b>{{question.status | uppercase}}</b></td>\n                  <td><a class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['edit', question.id]\">Editar</a>\n                    <a class=\"btn btn-danger\" type=\"button\" [routerLink]=\"['delete', question.id]\" href=\"#\">Apagar</a></td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"container theme-showcase\" role=\"main\">\n\n  <!-- Main jumbotron -->\n  <div class=\"jumbotron text-center\">\n    <h1>Nois Simulados</h1>\n    <p>Olá, seja muito bem vindo ao Nois Simulados!</p>\n    <p>Caso ainda você seja novo por aqui Increva-se! Ou faça login.</p>\n    <div>\n      <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Increva-se</a>\n      <a class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>Lorem ipsum </h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n        aliqua.\n      </p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Duis aute </h3>\n      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>Excepteur sint</h3>\n      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"container theme-showcase\" role=\"main\">\n\n  <!-- Login -->\n  <form class=\"form-signin well\" (submit)=\"onLoginSubmit()\">\n    <legend>Fazer login</legend>\n    <label for=\"inputUsername\" class=\"sr-only\">Usuário</label>\n    <input type=\"text\" id=\"inputUsername\" class=\"form-control\" placeholder=\"Nome de Usuário\" required autofocus [(ngModel)]=\"username\"\n      name=\"username\">\n    <label for=\"inputPassword\" class=\"sr-only\">Senha</label>\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Senha\" required [(ngModel)]=\"password\" name=\"password\">\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Fazer login</button>\n  </form>\n\n</div>\n<!-- /container -->\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a class=\"navbar-brand\" href=\"#\">Nois Simulados</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Perfil</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Registrar</a></li>\n        <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Sair</a></li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"container theme-showcase\" role=\"main\">\n\n  <!-- Register -->\n  <form class=\"form-signin form-horizontal well form-size\" (submit)=\"onRegisterSubmit()\">\n    <fieldset>\n      <legend>Inscreva-se</legend>\n\n      <label for=\"inputNome\" class=\"col-lg-2 control-label\">Nome</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"inputNome\" placeholder=\"Nome\" required autofocus [(ngModel)]=\"name\" name=\"name\">\n      </div>\n\n      <label for=\"inputUsuario\" class=\"col-lg-2 control-label\">Usuário</label>\n      <div class=\"col-lg-10\">\n        <input type=\"text\" class=\"form-control\" id=\"inputUsuario\" placeholder=\"Usuário\" required [(ngModel)]=\"username\" name=\"username\">\n      </div>\n\n      <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label>\n      <div class=\"col-lg-10\">\n        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" required [(ngModel)]=\"email\" name=\"email\">\n      </div>\n\n      <label for=\"inputPassword\" class=\"col-lg-2 control-label\">Senha</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Senha\" required [(ngModel)]=\"password\" name=\"password\">\n      </div>\n\n      <label for=\"inputTipo\" class=\"col-lg-2 control-label\">Tipo</label>\n      <div class=\"col-lg-10\">\n        <select class=\"form-control\" id=\"inputTipo\" required [(ngModel)]=\"type\" name=\"type\" required>\n            <option disabled hidden [value]=\"selectUndefinedOptionValue\">Escolha uma opção...</option>\n            <option *ngFor=\"let type of types\" [ngValue]=\"type.id\">{{type.name}}</option>\n        </select>\n      </div>\n\n      <div class=\"col-lg-10 col-lg-offset-2\">\n        <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Submit\">Registar</button>\n      </div>\n    </fieldset>\n  </form>\n</div>\n<!-- /container -->\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_dashboard_dashboard_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_profile_profile_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_questions_add_new_question_add_new_question_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_questions_add_new_alternative_add_new_alternative_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_questions_questions_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_questions_edit_alternatives_edit_alternatives_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_questions_edit_question_edit_question_component__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES_PROVIDER; });












var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__components_admin_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_admin_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'question/add', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_questions_add_new_question_add_new_question_component__["a" /* AddNewQuestionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'alternatives/add', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_questions_add_new_alternative_add_new_alternative_component__["a" /* AddNewAlternativeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'question', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_questions_questions_component__["a" /* QuestionsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'question/edit/:id', component: __WEBPACK_IMPORTED_MODULE_11__components_admin_questions_edit_question_edit_question_component__["a" /* EditQuestionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'alternatives/edit/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_admin_questions_edit_alternatives_edit_alternatives_component__["a" /* EditAlternativesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] }
];
var APP_ROUTES_PROVIDER = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(183),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.data.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(184),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewAlternativeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewAlternativeComponent = (function () {
    function AddNewAlternativeComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.options = [
            { id: '0', name: "A) está correta" },
            { id: '1', name: "B) está correta" },
            { id: '2', name: "C) está correta" },
            { id: '3', name: "D) está correta" },
        ];
        this.alternatives = [
            { "alternative": "", "correct": false, "questionId": this.questionId },
            { "alternative": "", "correct": false, "questionId": this.questionId },
            { "alternative": "", "correct": false, "questionId": this.questionId },
            { "alternative": "", "correct": false, "questionId": this.questionId },
        ];
    }
    AddNewAlternativeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getQuestion().subscribe(function (data) {
            _this.question = data.data;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getQuestionId().subscribe(function (data) {
            _this.alternatives[0].questionId = data.data.id;
            _this.alternatives[1].questionId = data.data.id;
            _this.alternatives[2].questionId = data.data.id;
            _this.alternatives[3].questionId = data.data.id;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AddNewAlternativeComponent.prototype.onSelectionChange = function (entry) {
        this.alternatives[entry].correct = true;
    };
    AddNewAlternativeComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // Required fields
        if (!this.validateService.validateAlternatives(this.alternatives)) {
            this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var _loop_1 = function (i) {
            this_1.authService.registerAlternative(this_1.alternatives[i]).subscribe(function (data) {
                if (i == 3 && data.status == "success") {
                    _this.flashMessage.show('Questão cadastrada com sucesso', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/question']);
                }
                else if (i == 3 && data.status == "error") {
                    _this.flashMessage.show('Algo deu errado ao cadastrar as alternativas!', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['/question']);
                }
            });
        };
        var this_1 = this;
        // Register alternatives
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
    };
    return AddNewAlternativeComponent;
}());
AddNewAlternativeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-new-alternative',
        template: __webpack_require__(185),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddNewAlternativeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-new-alternative.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddNewQuestionComponent = (function () {
    function AddNewQuestionComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.options = [
            { id: 'ativa', name: "Ativa" },
            { id: 'inativa', name: "Inativa" }
        ];
    }
    AddNewQuestionComponent.prototype.ngOnInit = function () {
    };
    AddNewQuestionComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var newQuestion = {
            status: this.status,
            timesAppeared: this.timesAppeared,
            area: this.area,
            feedback: this.feedback,
            question: this.question
        };
        // Required fields
        if (!this.validateService.validateQuestion(newQuestion)) {
            this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register questions
        this.authService.registerQuestion(newQuestion).subscribe(function (data) {
            if (data.status == "success") {
                _this.flashMessage.show('Questão cadastrada com sucesso', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/alternatives/add']);
            }
            else {
                _this.flashMessage.show('Algo deu errado ao cadastrar a questão!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/question/add']);
            }
        });
    };
    return AddNewQuestionComponent;
}());
AddNewQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-new-question',
        template: __webpack_require__(186),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddNewQuestionComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-new-question.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAlternativesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditAlternativesComponent = (function () {
    function EditAlternativesComponent(validateService, flashMessage, authService, router, activatedRoute) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.options = [
            { id: '0', name: "A) está correta" },
            { id: '1', name: "B) está correta" },
            { id: '2', name: "C) está correta" },
            { id: '3', name: "D) está correta" },
        ];
        this.activatedRoute.params.take(1).subscribe(function (params) {
            _this.questionId = params['id'];
        });
    }
    EditAlternativesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllAlternatives(this.questionId).subscribe(function (data) {
            _this.alternatives = data.data;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditAlternativesComponent.prototype.onSelectionChange = function (entry) {
        this.alternatives[entry].correct = true;
    };
    EditAlternativesComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        // Required fields
        if (!this.validateService.validateAlternatives(this.alternatives)) {
            this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var _loop_1 = function (i) {
            this_1.authService.UpdateAlternative(this_1.alternatives[i]).subscribe(function (data) {
                console.log('twssetse');
                if (i == 3 && data.status == "success") {
                    _this.flashMessage.show('Alternativas atualizadas com sucesso', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/question']);
                }
                else if (i == 3 && data.status == "error") {
                    _this.flashMessage.show('Algo deu errado ao cadastrar as alternativas!', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(["/alternatives/edit/" + _this.questionId]);
                }
            });
        };
        var this_1 = this;
        // Register alternatives
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
    };
    return EditAlternativesComponent;
}());
EditAlternativesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-alternatives',
        template: __webpack_require__(187),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], EditAlternativesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-alternatives.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditQuestionComponent = (function () {
    function EditQuestionComponent(validateService, flashMessage, authService, router, activatedRoute) {
        var _this = this;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.options = [
            { id: 'ativa', name: "Ativa" },
            { id: 'inativa', name: "Inativa" }
        ];
        this.activatedRoute.params.take(1).subscribe(function (params) {
            _this.questionId = params['id'];
        });
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getQuestionById(this.questionId).subscribe(function (data) {
            _this.status = data.data.status;
            _this.timesAppeared = data.data.timesAppeared;
            _this.area = data.data.area;
            _this.feedback = data.data.feedback;
            _this.question = data.data.question;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditQuestionComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var newQuestion = {
            status: this.status,
            timesAppeared: this.timesAppeared,
            area: this.area,
            feedback: this.feedback,
            question: this.question,
            id: this.questionId
        };
        // Required fields
        if (!this.validateService.validateQuestion(newQuestion)) {
            this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register questions
        this.authService.updateQuestion(newQuestion).subscribe(function (data) {
            if (data.status == "success") {
                _this.flashMessage.show('Questão Atualizada com sucesso', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(["/alternatives/edit/" + _this.questionId]);
            }
            else {
                _this.flashMessage.show('Algo deu errado ao Atualizar a questão!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(["/question/edit/" + _this.questionId]);
            }
        });
    };
    return EditQuestionComponent;
}());
EditQuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-question',
        template: __webpack_require__(188),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], EditQuestionComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-question.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsComponent = (function () {
    function QuestionsComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllQuestions().subscribe(function (data) {
            _this.questions = data.data;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return QuestionsComponent;
}());
QuestionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-questions',
        template: __webpack_require__(189),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], QuestionsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=questions.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(190),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.status == "success") {
                _this.authService.storeUserData(data.data.token, data.data.user);
                _this.flashMessage.show('Agora você está logado!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
        return true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(191),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.types = [
            { id: 'aluno', name: "Aluno" },
            { id: 'professor', name: "Professor" }
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            type: this.type
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Por favor, use um email válido!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register users
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.status == "success") {
                _this.flashMessage.show('Agora você está registrado!', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Algo deu errado ao se registrar!', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(193),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // User
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Question
    AuthService.prototype.registerQuestion = function (newQuestion) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.questionTitle = newQuestion.question;
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/questions/', newQuestion, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getQuestion = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/questions/q/" + this.questionTitle, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getQuestionId = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/questions/q-id/" + this.questionTitle, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllQuestions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/questions/list", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getQuestionById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/questions/q-s/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateQuestion = function (question) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.questionTitle = question.question;
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/questions/', question, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Alternatives
    AuthService.prototype.registerAlternative = function (newAlternative) {
        console.log(newAlternative);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/alternatives/', newAlternative, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllAlternatives = function (questionId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/alternatives/list/" + questionId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.UpdateAlternative = function (newAlternative) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:3000/alternatives/" + newAlternative.id, newAlternative, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.bundle.js.map