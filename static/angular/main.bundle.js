webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nspan.has-error.help-block{\n  color: #a94442 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_risk_service__ = __webpack_require__("../../../../../src/app/services/risk.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__insurers_insurers_component__ = __webpack_require__("../../../../../src/app/insurers/insurers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_route_module__ = __webpack_require__("../../../../../src/app/app.route.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__insurers_subscribe_subscribe_component__ = __webpack_require__("../../../../../src/app/insurers/subscribe/subscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__insurers_risk_types_risk_types_component__ = __webpack_require__("../../../../../src/app/insurers/risk-types/risk-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__insurers_insurers_component__["a" /* InsurersComponent */],
                __WEBPACK_IMPORTED_MODULE_7__insurers_subscribe_subscribe_component__["a" /* SubscribeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__insurers_risk_types_risk_types_component__["a" /* RiskTypesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_route_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientXsrfModule */].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken',
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_risk_service__["a" /* RiskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__insurers_insurers_component__ = __webpack_require__("../../../../../src/app/insurers/insurers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__insurers_risk_types_risk_types_component__ = __webpack_require__("../../../../../src/app/insurers/risk-types/risk-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__insurers_subscribe_subscribe_component__ = __webpack_require__("../../../../../src/app/insurers/subscribe/subscribe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 * Created by ebuka on 04/02/18.
 */
var appRoutes = [
    // {path: '', redirectTo:  '/home', pathMatch: 'full'},
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__insurers_insurers_component__["a" /* InsurersComponent */] },
    { path: 'new-risk-type', component: __WEBPACK_IMPORTED_MODULE_3__insurers_risk_types_risk_types_component__["a" /* RiskTypesComponent */] },
    { path: 'subscribe/:id', component: __WEBPACK_IMPORTED_MODULE_4__insurers_subscribe_subscribe_component__["a" /* SubscribeComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/insurers/insurers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/insurers/insurers.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>All Risk Types</h1>\n      <a routerLink=\"/new-risk-type\">Click here to create new risk type</a>\n\n      <table class=\"table table-stripe\">\n        <thead>\n          <tr>\n            <th>Name</th>\n          </tr>\n        </thead>\n        <tr *ngFor=\"let r of (riskList|async)?.results|paginate:{itemsPerPage:pageSize,\n                                                                        id:'riskList',\n                                                                        totalItems:(riskList|async)?.count,\n                                                                        currentPage:currentPage}\">\n          <td>\n            <a routerLink=\"/subscribe/{{r.id}}\">{{r.name}}</a>\n          </td>\n        </tr>\n      </table>\n      <div class=\"text-right margin-top-10\">\n        <pagination-controls  class=\"pagination\"\n                              (pageChange)=\"pageChanged($event)\"\n                              maxSize=\"7\"\n                              id=\"riskList\"\n                              directionLinks=\"true\"\n                              autoHide=\"true\"\n                              screenReaderCurrentLabel=\"You're on page\">\n        </pagination-controls>\n        <!--<dir-pagination-controls pagination-id=\"question-bank\" on-page-change=\"questionBankPageChanged(newPageNumber)\"></dir-pagination-controls>-->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/insurers/insurers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_risk_service__ = __webpack_require__("../../../../../src/app/services/risk.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsurersComponent = (function () {
    function InsurersComponent(riskService) {
        this.riskService = riskService;
        this.pageSize = 2;
        this.page = 1;
    }
    InsurersComponent.prototype.ngOnInit = function () {
        this.getRiskTypes();
    };
    InsurersComponent.prototype.getRiskTypes = function () {
        this.riskList = this.riskService.getRiskTypes(this.page, this.pageSize);
    };
    InsurersComponent.prototype.pageChanged = function (page) {
        this.page = page;
        this.getRiskTypes();
    };
    InsurersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-insurers',
            template: __webpack_require__("../../../../../src/app/insurers/insurers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/insurers/insurers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_risk_service__["a" /* RiskService */]])
    ], InsurersComponent);
    return InsurersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/insurers/risk-types/risk-types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/insurers/risk-types/risk-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2> Create New Risk Type</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Risk Name\"  formControlName=\"name\" class=\"form-control\">\n        </div>\n        <h3>Add custom fields</h3>\n\n        <ng-container formArrayName=\"attributes\">\n          <ng-container *ngFor=\"let a of form.get('attributes').controls; let i = index\" [formGroupName]=\"i\">\n            <div class=\"form-inline\">\n              <div class=\"form-group\">\n                <input placeholder=\"Field label\" formControlName=\"label\" class=\"form-control\">\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control\" formControlName=\"type\" (change)=\"initOption(i)\">\n                  <option value=\"\" >---Select type---</option>\n                  <!--<option value=\"number\">Number</option>-->\n                  <!--<option value=\"date\">Date</option>-->\n                  <!--<option value=\"text\">Text</option>-->\n                  <!--<option value=\"boolean\">Boolean</option>-->\n                  <!--<option value=\"enum\">Enum</option>-->\n                  <option *ngFor=\"let f of (fieldTypes|async)\" [value]=\"f.name\">{{f.name}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\" *ngIf=\"form.value.attributes[i].type==='text'\">\n                <input type=\"number\" formControlName=\"max_length\" placeholder=\"Max Length\" class=\"form-control\">\n              </div>\n              <div class=\"checkbox\">\n                <label> Required <input formControlName=\"required\" type=\"checkbox\"></label>\n              </div>\n              <div class=\"form-group\">\n                <button  class=\"btn btn-danger\"\n                         type=\"button\"\n                        (click)=\"deleteField(i)\">Delete Field</button>\n              </div>\n\n            </div>\n\n            <div *ngIf=\"form.value.attributes[i].type==='enum' || form.value.attributes[i].type==='boolean'\"\n                 formArrayName=\"options\">\n              <h4>Options</h4>\n              <div class=\"form-inline\" style=\"margin-top: 10px\" *ngFor=\"let o of a.controls.options.controls;let ii =index\"\n                   [formGroupName]=\"ii\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"value\"\n                         placeholder=\"Option\">\n                </div>\n                <div class=\"form-group\" *ngIf=\"form.value.attributes[i].type==='enum'\">\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOption(ii)\">Delete</button>\n                </div>\n              </div>\n              <div class=\"form-group\"\n                   *ngIf=\"form.value.attributes[i].type==='enum'\"\n                   style=\"margin-top: 10px\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addOption(i)\">Add option</button>\n              </div>\n\n            </div>\n            <hr>\n          </ng-container>\n        </ng-container>\n        <div class=\"clearfix\" style=\"margin-top: 10px\"></div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"loading\">Save</button>\n          <button class=\"btn btn-success\" type=\"button\" (click)=\"addAttribute()\">Add Attribute</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/insurers/risk-types/risk-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_risk_service__ = __webpack_require__("../../../../../src/app/services/risk.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RiskTypesComponent = (function () {
    function RiskTypesComponent(riskService) {
        this.riskService = riskService;
    }
    RiskTypesComponent.prototype.ngOnInit = function () {
        this.fieldTypes = this.riskService.getFieldTypes();
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            attributes: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([]),
        });
    };
    RiskTypesComponent.prototype.addAttribute = function () {
        var attribute = this.form.get("attributes");
        attribute.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            label: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            required: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](false),
            type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required),
            max_length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null),
            options: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */]([])
        }));
    };
    RiskTypesComponent.prototype.initOption = function (index) {
        var attributes = this.form.get("attributes");
        console.log(attributes, index);
        var fg = attributes.controls[index];
        var type = fg.value.type;
        var options = fg.controls.options;
        while (0 !== options.length) {
            options.removeAt(0);
        }
        if (type === 'enum') {
            options.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
            }));
        }
        else if (type === 'boolean') {
            this.initOptionBoolean(index);
        }
        else {
            var options_1 = fg.controls.options;
            while (0 !== options_1.length) {
                options_1.removeAt(0);
            }
        }
    };
    RiskTypesComponent.prototype.addOption = function (index) {
        var attributes = this.form.get("attributes");
        var fg = attributes.controls[index];
        var options = fg.controls.options;
        options.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        }));
    };
    RiskTypesComponent.prototype.initOptionBoolean = function (index) {
        var attributes = this.form.get("attributes");
        var fg = attributes.controls[index];
        var options = fg.controls.options;
        while (0 !== options.length) {
            options.removeAt(0);
        }
        options.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("True", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        }));
        options.push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            value: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("False", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required)
        }));
        console.log(options);
    };
    //
    RiskTypesComponent.prototype.deleteField = function (index) {
        var array = this.form.get("attributes");
        array.removeAt(index);
    };
    RiskTypesComponent.prototype.deleteOption = function (index) {
        var attributes = this.form.get("attributes");
        var fg = attributes.controls[index];
        var options = fg.controls.options;
        options.removeAt(index);
    };
    RiskTypesComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        var data = this.form.value;
        data["fields"] = { attributes: this.form.value.attributes };
        data["name"] = this.form.value.name;
        data["insurer"] = 1;
        this.riskService.createNewRiskType(data)
            .subscribe(function (data) {
            console.log(data);
            _this.form.reset();
        }, function (error) {
            console.log(error);
        }, function () {
            _this.loading = false;
        });
    };
    RiskTypesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-risk-types',
            template: __webpack_require__("../../../../../src/app/insurers/risk-types/risk-types.component.html"),
            styles: [__webpack_require__("../../../../../src/app/insurers/risk-types/risk-types.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_risk_service__["a" /* RiskService */]])
    ], RiskTypesComponent);
    return RiskTypesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/insurers/subscribe/subscribe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/insurers/subscribe/subscribe.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to Britecore App!\n  </h1>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div>\n        <form>\n          <div class=\"form-group\" *ngFor=\"let a of riskTypes?.fields.attributes; let i=index\">\n\n            <label>\n              {{a.label}}\n            </label>\n            <ng-container *ngIf=\"a.type==='number'\">\n              <input type=\"number\" class=\"form-control\" [attr.required]=\"a.required\">\n            </ng-container>\n            <ng-container *ngIf=\"a.type==='text'\">\n              <input type=\"text\" class=\"form-control\"\n                     [attr.maxlength]=\"a.max_length\"\n                     [attr.required]=\"a.required\">\n            </ng-container>\n            <ng-container *ngIf=\"a.type==='date'\">\n              <!--<input type=\"date\" class=\"form-control\" >-->\n              <input type=\"text\"\n                     class=\"form-control\"\n                     #dp=\"bsDatepicker\"\n                     bsDatepicker [(bsValue)]=\"bsValue\">\n            </ng-container>\n            <ng-container *ngIf=\"a.type==='boolean'\">\n              <div class=\"radio\"*ngFor=\"let e of a.options\" >\n                <label><input type=\"radio\"\n                              name=\"{{e.value}}\" [value]=\"e.value\"\n\n                              [attr.required]=\"a.required\"> {{a.label}} </label>\n              </div>\n\n            </ng-container>\n            <ng-container *ngIf=\"a.type==='enum'\">\n              <select class=\"form-control\" [attr.required]=\"a.required\">\n                <option *ngFor=\"let e of a.options\" [value]=\"e.value\">{{e.value}}</option>\n              </select>\n            </ng-container>\n\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/insurers/subscribe/subscribe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_risk_service__ = __webpack_require__("../../../../../src/app/services/risk.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribeComponent = (function () {
    function SubscribeComponent(riskService, activeRoute) {
        this.riskService = riskService;
        this.activeRoute = activeRoute;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = this.activeRoute.snapshot.paramMap;
        console.log(param);
        var id = param["params"].id;
        this.riskService.getRiskType(id)
            .subscribe(function (data) {
            console.log(data);
            _this.riskTypes = data;
            // let attributes = new FormArray([]);
            // for (let a of data["attributes"]){
            //
            // }
            // this.form = new FormGroup({
            //   name: new FormControl()
            // })
        });
    };
    SubscribeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subscribe',
            template: __webpack_require__("../../../../../src/app/insurers/subscribe/subscribe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/insurers/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_risk_service__["a" /* RiskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/risk.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/**
 * Created by ebuka on 03/02/18.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiskService = (function () {
    function RiskService(http) {
        this.http = http;
    }
    RiskService.prototype.getRiskType = function (type) {
        // const url = Django.url("risk-api:risk-detail",[type]);
        var url = "/main/risk/api/v1/" + type + "/";
        return this.http.get(url);
    };
    RiskService.prototype.getFieldTypes = function () {
        var url = "/main/field-types/api/v1/";
        return this.http.get(url);
    };
    RiskService.prototype.createNewRiskType = function (data) {
        var url = "/main/risk/api/v1/";
        return this.http.post(url, data);
    };
    RiskService.prototype.getRiskTypes = function (page, pageSize) {
        var url = "/main/risk/api/v1/" + "?page=" + page + "&page_size=" + pageSize;
        return this.http.get(url);
    };
    RiskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RiskService);
    return RiskService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map