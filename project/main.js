(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQubGVzcyJ9 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback/feedback.component */ 3978);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ 1411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_2__.ServicesComponent },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_0__.FeedbackComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'project';
        this.isActive = true;
    }
    onClickCalled() {
        console.log("menu is clided");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "header"], [1, "navbar"], ["href", "#", "routerLink", "/", 1, "nav-logo"], [1, "nav-menu"], [1, "nav-item"], ["href", "#", "routerLink", "/services", 1, "nav-link"], ["href", "#", "routerLink", "/feedback", 1, "nav-link"], [1, "hamburger"], [1, "bar"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@font-face {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu52xP.ttf) format('truetype');\n}\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9vAw.ttf) format('truetype');\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  font-size: 62.5%;\n  font-family: 'Roboto', sans-serif;\n}\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #E2E8F0;\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 1.5rem;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n.bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 25px;\n  height: 3px;\n  margin: 5px auto;\n  transition: all 0.3s ease-in-out;\n  background-color: #101010;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-item[_ngcontent-%COMP%] {\n  margin-left: 5rem;\n}\n.nav-link[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 400;\n  color: #475569;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #482ff7;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  font-weight: 500;\n  color: #482ff7;\n}\n@media only screen and (max-width: 768px) {\n  .nav-menu[_ngcontent-%COMP%] {\n    position: fixed;\n    left: -100%;\n    top: 5rem;\n    flex-direction: column;\n    background-color: #fff;\n    width: 100%;\n    border-radius: 10px;\n    text-align: center;\n    transition: 0.3s;\n    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);\n  }\n  .nav-menu.active[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    margin: 2.5rem 0;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n    cursor: pointer;\n  }\n  .hamburger.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(2) {\n    opacity: 0;\n  }\n  .hamburger.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1) {\n    transform: translateY(8px) rotate(45deg);\n  }\n  .hamburger.active[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3) {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNTAwOzEsNDAwJmRpc3BsYXk9c3dhcCIsImFwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEZBQUE7QUNDRjtBRENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4RkFBQTtBQ0NGO0FBWkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBY0o7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsaUNBQUE7QUFhSjtBQVZBO0VBQ0ksZ0JBQUE7QUFZSjtBQVRBO0VBQ0kscUJBQUE7QUFXSjtBQVJBO0VBQ0ksZ0NBQUE7QUFVSjtBQVBBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQVNKO0FBTkE7RUFDSSxhQUFBO0FBUUo7QUFMQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsZ0NBQUE7RUFDQSx5QkFBQTtBQU9KO0FBSkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU1KO0FBSEE7RUFDSSxpQkFBQTtBQUtKO0FBRkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlKO0FBREE7RUFDSSxjQUFBO0FBR0o7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQ0FBQTtFQUNOO0VBR0U7SUFDSSxPQUFBO0VBRE47RUFJRTtJQUNJLGdCQUFBO0VBRk47RUFLRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VBSE47RUFNRTtJQUNJLFVBQUE7RUFKTjtFQU9FO0lBRUksd0NBQUE7RUFMTjtFQVFFO0lBRUksMENBQUE7RUFOTjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YyOS9LRk9rQ25xRXU5MkZyMU11NTJ4UC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YyOS9LRk9sQ25xRXU5MkZyMU1tRVU5dkF3LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuIiwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDUwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVye1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTJFOEYwO1xufVxuXG4ubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBtYXJnaW46IDVweCBhdXRvO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTAxMDtcbn1cblxuLm5hdi1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xufVxuXG4ubmF2LWxpbmt7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzQ3NTU2OTtcbn1cblxuLm5hdi1saW5rOmhvdmVye1xuICAgIGNvbG9yOiAjNDgyZmY3O1xufVxuXG4ubmF2LWxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0ODJmZjc7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubmF2LW1lbnUge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICB0b3A6IDVyZW07XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIGJveC1zaGFkb3c6XG4gICAgICAgICAgICAwIDEwcHggMjdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIH1cblxuICAgIC5uYXYtbWVudS5hY3RpdmUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogMi41cmVtIDA7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5oYW1idXJnZXIuYWN0aXZlIC5iYXI6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG5cbiAgICAuaGFtYnVyZ2VyLmFjdGl2ZSAuYmFyOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpIHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgcm90YXRlKC00NWRlZyk7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback/feedback.component */ 3978);
/* harmony import */ var _onclick_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onclick.directive */ 7214);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ 1411);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ 8716);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__.FeedbackComponent,
        _onclick_directive__WEBPACK_IMPORTED_MODULE_3__.OnclickDirective,
        _services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__.BlogComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__.AboutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 8716:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 2, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 3978:
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackComponent": () => (/* binding */ FeedbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




function FeedbackComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, "\n");
} }
class FeedbackComponent {
    constructor() {
        this.error = '';
        this.isValid = true;
    }
    ngOnInit() {
        this.signUpform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            'suggestion': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
        });
    }
    onSubmit() {
        var _a, _b, _c;
        console.log(this.signUpform);
        if (!((_a = this.signUpform.get('username')) === null || _a === void 0 ? void 0 : _a.valid)) {
            this.isValid = false;
            this.error = "Please enter valid username!!";
        }
        else if (!((_b = this.signUpform.get('email')) === null || _b === void 0 ? void 0 : _b.valid)) {
            this.isValid = false;
            this.error = "Please enter valid email!!";
        }
        else if (!((_c = this.signUpform.get('suggestion')) === null || _c === void 0 ? void 0 : _c.valid)) {
            this.isValid = false;
            this.error = "Please enter suggestion !!";
        }
        else {
            this.isValid = true;
            this.error = '';
        }
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(); };
FeedbackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 14, vars: 2, consts: [["class", "error", 4, "ngIf"], ["id", "wrapper"], ["id", "contact_form_div"], ["id", "contact_label"], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Enter Name", "formControlName", "username"], ["type", "text", "placeholder", "Enter Email", "formControlName", "email"], ["placeholder", "Enter Suggestion", "formControlName", "suggestion"], ["type", "submit", "value", "SUBMIT"], [1, "error"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FeedbackComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FEEDBACK FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FeedbackComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpform);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0px;\n  text-align: center;\n  width: 100%;\n  font-family: \"Myriad Pro\", \"Helvetica Neue\", Helvetica, Arial, Sans-Serif;\n  background-color: #AED6F1;\n}\n#wrapper[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0px;\n  text-align: center;\n  width: 995px;\n  margin-top: 50px;\n}\n#wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: 45px;\n  color: #1B4F72;\n}\n#wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n#contact_form_div[_ngcontent-%COMP%] {\n  width: 330px;\n  margin-left: 320px;\n  padding: 10px;\n  background-color: #1B4F72;\n}\n#contact_form_div[_ngcontent-%COMP%]   #contact_label[_ngcontent-%COMP%] {\n  margin: 15px;\n  margin-bottom: 30px;\n  font-size: 25px;\n  font-weight: bold;\n  color: white;\n  text-decoration: underline;\n}\n#contact_form_div[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #contact_form_div[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%] {\n  width: 230px;\n  height: 40px;\n  border-radius: 2px;\n  font-size: 17px;\n  padding-left: 5px;\n  border: none;\n}\n#contact_form_div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 70px;\n  border-radius: 2px;\n  font-size: 17px;\n  padding: 5px;\n}\n#contact_form_div[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n  width: 230px;\n  height: 40px;\n  border: none;\n  border-radius: 2px;\n  font-size: 17px;\n  background-color: #85C1E9;\n  border-bottom: 3px solid #3498DB;\n  color: #1B4F72;\n  font-weight: bold;\n}\n@media only screen and (min-width: 700px) and (max-width: 995px) {\n  #wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  #contact_form_div[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-left: 25%;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #contact_form_div[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 400px) and (max-width: 699px) {\n  #wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  #contact_form_div[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-left: 20%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #contact_form_div[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 100px) and (max-width: 399px) {\n  #wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  #contact_form_div[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-left: 5%;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], #contact_form_div[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  #contact_form_div[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n.error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  padding: 10px;\n  font-size: medium;\n  background-color: red;\n  margin-top: 20px;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5RUFBQTtFQUNBLHlCQUFBO0FBQUQ7QUFFQTtFQUVDLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERDtBQUdBO0VBRUMsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUZEO0FBSUE7RUFFQyxlQUFBO0FBSEQ7QUFLQTtFQUVDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUpEO0FBTUE7RUFFQyxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFMRDtBQU9BOztFQUVDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTEQ7QUFPQTtFQUVDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU5EO0FBUUE7RUFFQyxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUEQ7QUFVQTtFQUVDO0lBRUMsV0FBQTtFQVZBO0VBWUQ7SUFFQyxlQUFBO0VBWEE7RUFhRDtJQUVDLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFaQTtFQWNEOztJQUVDLFVBQUE7RUFaQTtFQWNEO0lBRUMsVUFBQTtFQWJBO0VBZUQ7SUFFQyxVQUFBO0VBZEE7QUFDRjtBQWdCQTtFQUVDO0lBRUMsV0FBQTtFQWhCQTtFQWtCRDtJQUVDLGVBQUE7RUFqQkE7RUFtQkQ7SUFFQyxVQUFBO0lBQ0EsZ0JBQUE7RUFsQkE7RUFvQkQ7O0lBRUMsVUFBQTtFQWxCQTtFQW9CRDtJQUVDLFVBQUE7RUFuQkE7RUFxQkQ7SUFFQyxVQUFBO0VBcEJBO0FBQ0Y7QUFzQkE7RUFFQztJQUVDLFdBQUE7RUF0QkE7RUF3QkQ7SUFFQyxlQUFBO0VBdkJBO0VBeUJEO0lBRUMsVUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBeEJBO0VBMEJEOztJQUVDLFVBQUE7RUF4QkE7RUEwQkQ7SUFFQyxVQUFBO0VBekJBO0VBMkJEO0lBRUMsVUFBQTtFQTFCQTtBQUNGO0FBNkJBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBM0JKIiwiZmlsZSI6ImZlZWRiYWNrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keVxue1xuIG1hcmdpbjowIGF1dG87XG4gcGFkZGluZzowcHg7XG4gdGV4dC1hbGlnbjpjZW50ZXI7XG4gd2lkdGg6MTAwJTtcbiBmb250LWZhbWlseTogXCJNeXJpYWQgUHJvXCIsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxTYW5zLVNlcmlmO1xuIGJhY2tncm91bmQtY29sb3I6I0FFRDZGMTtcbn1cbiN3cmFwcGVyXG57XG4gbWFyZ2luOjAgYXV0bztcbiBwYWRkaW5nOjBweDtcbiB0ZXh0LWFsaWduOmNlbnRlcjtcbiB3aWR0aDo5OTVweDtcbiBtYXJnaW4tdG9wOiA1MHB4O1x0XG59XG4jd3JhcHBlciBoMVxue1xuIG1hcmdpbi10b3A6NTBweDtcbiBmb250LXNpemU6NDVweDtcbiBjb2xvcjojMUI0RjcyO1xufVxuI3dyYXBwZXIgaDEgcFxue1xuIGZvbnQtc2l6ZToxOHB4O1xufVxuI2NvbnRhY3RfZm9ybV9kaXZcbntcbiB3aWR0aDozMzBweDtcbiBtYXJnaW4tbGVmdDozMjBweDtcbiBwYWRkaW5nOjEwcHg7XG4gYmFja2dyb3VuZC1jb2xvcjojMUI0RjcyO1xufVxuI2NvbnRhY3RfZm9ybV9kaXYgI2NvbnRhY3RfbGFiZWxcbntcbiBtYXJnaW46MTVweDtcbiBtYXJnaW4tYm90dG9tOjMwcHg7XG4gZm9udC1zaXplOjI1cHg7XG4gZm9udC13ZWlnaHQ6Ym9sZDtcbiBjb2xvcjp3aGl0ZTtcbiB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xufVxuI2NvbnRhY3RfZm9ybV9kaXYgaW5wdXRbdHlwZT1cInRleHRcIl0sI2NvbnRhY3RfZm9ybV9kaXYgaW5wdXRbdHlwZT1cInRlbFwiXVxue1xuIHdpZHRoOjIzMHB4O1xuIGhlaWdodDo0MHB4O1xuIGJvcmRlci1yYWRpdXM6MnB4O1xuIGZvbnQtc2l6ZToxN3B4O1xuIHBhZGRpbmctbGVmdDo1cHg7XG4gYm9yZGVyOm5vbmU7XG59XG4jY29udGFjdF9mb3JtX2RpdiB0ZXh0YXJlYVxue1xuIHdpZHRoOjIzMHB4O1xuIGhlaWdodDo3MHB4O1xuIGJvcmRlci1yYWRpdXM6MnB4O1xuIGZvbnQtc2l6ZToxN3B4O1xuIHBhZGRpbmc6IDVweDtcbn1cbiNjb250YWN0X2Zvcm1fZGl2IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1cbntcbiB3aWR0aDoyMzBweDtcbiBoZWlnaHQ6NDBweDtcbiBib3JkZXI6bm9uZTtcbiBib3JkZXItcmFkaXVzOjJweDtcbiBmb250LXNpemU6MTdweDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiM4NUMxRTk7XG4gYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzM0OThEQjtcbiBjb2xvcjojMUI0RjcyO1xuIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCkgYW5kIChtYXgtd2lkdGg6OTk1cHgpXG57XG4gI3dyYXBwZXJcbiB7XG4gIHdpZHRoOjEwMCU7XG4gfVxuICN3cmFwcGVyIGgxXG4ge1xuICBmb250LXNpemU6MzBweDtcbiB9XG4gI2NvbnRhY3RfZm9ybV9kaXZcbiB7XG4gIHdpZHRoOjUwJTtcbiAgbWFyZ2luLWxlZnQ6MjUlO1xuICBwYWRkaW5nLWxlZnQ6MHB4O1xuICBwYWRkaW5nLXJpZ2h0OjBweDtcbiB9XG4gI2NvbnRhY3RfZm9ybV9kaXYgaW5wdXRbdHlwZT1cInRleHRcIl0sI2NvbnRhY3RfZm9ybV9kaXYgaW5wdXRbdHlwZT1cInRlbFwiXVxuIHtcbiAgd2lkdGg6ODAlO1xuIH1cbiAjY29udGFjdF9mb3JtX2RpdiB0ZXh0YXJlYVxuIHtcbiAgd2lkdGg6ODAlO1xuIH1cbiAjY29udGFjdF9mb3JtX2RpdiBpbnB1dFt0eXBlPVwic3VibWl0XCJdXG4ge1xuICB3aWR0aDo4MCU7XG4gfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQwMHB4KSBhbmQgKG1heC13aWR0aDo2OTlweClcbntcbiAjd3JhcHBlclxuIHtcbiAgd2lkdGg6MTAwJTtcbiB9XG4gI3dyYXBwZXIgaDFcbiB7XG4gIGZvbnQtc2l6ZTozMHB4O1xuIH1cbiAjY29udGFjdF9mb3JtX2RpdlxuIHtcbiAgd2lkdGg6NjAlO1xuICBtYXJnaW4tbGVmdDoyMCU7XG4gfVxuICNjb250YWN0X2Zvcm1fZGl2IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCNjb250YWN0X2Zvcm1fZGl2IGlucHV0W3R5cGU9XCJ0ZWxcIl1cbiB7XG4gIHdpZHRoOjgwJTtcbiB9XG4gI2NvbnRhY3RfZm9ybV9kaXYgdGV4dGFyZWFcbiB7XG4gIHdpZHRoOjgwJTtcbiB9XG4gI2NvbnRhY3RfZm9ybV9kaXYgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXVxuIHtcbiAgd2lkdGg6ODAlO1xuIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDBweCkgYW5kIChtYXgtd2lkdGg6Mzk5cHgpXG57XG4gI3dyYXBwZXJcbiB7XG4gIHdpZHRoOjEwMCU7XG4gfVxuICN3cmFwcGVyIGgxXG4ge1xuICBmb250LXNpemU6MjVweDtcbiB9XG4gI2NvbnRhY3RfZm9ybV9kaXZcbiB7XG4gIHdpZHRoOjkwJTtcbiAgbWFyZ2luLWxlZnQ6NSU7XG4gIHBhZGRpbmctbGVmdDowcHg7XG4gIHBhZGRpbmctcmlnaHQ6MHB4O1xuIH1cbiAjY29udGFjdF9mb3JtX2RpdiBpbnB1dFt0eXBlPVwidGV4dFwiXSwjY29udGFjdF9mb3JtX2RpdiBpbnB1dFt0eXBlPVwidGVsXCJdXG4ge1xuICB3aWR0aDo4MCU7XG4gfVxuICNjb250YWN0X2Zvcm1fZGl2IHRleHRhcmVhXG4ge1xuICB3aWR0aDo4MCU7XG4gfVxuICNjb250YWN0X2Zvcm1fZGl2IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1cbiB7XG4gIHdpZHRoOjgwJTtcbiB9XG59XG5cbi5lcnJvciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "conatiner"], [1, "feedback-username"], [1, "round", 2, "width", "50px", "border", "5px solid blue"], [1, "feedback-email"], [1, "feedback-message"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Rohal Saini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " feedback by: Rohal Saini ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo quibusdam laboriosam animi assumenda vitae velit dolorem tempore reiciendis repudiandae. Eius enim repellat eaque aut delectus officia distinctio omnis alias similique. Ducimus repudiandae consectetur molestiae delectus rem eum enim facilis vero explicabo quam eligendi quia voluptatibus in repellat maxime velit quaerat blanditiis eos, totam fuga provident? Veritatis et sunt ratione officia placeat magni doloremque accusantium harum incidunt ipsam provident, rem nemo odio maxime dolores esse iusto aliquid eveniet? Doloremque recusandae doloribus suscipit tempora, consequuntur atque facere ex nihil? Unde, modi sed? Nulla repellendus, cupiditate corporis provident recusandae quidem quia nihil laboriosam deleniti, omnis, officia reprehenderit corrupti exercitationem eum non cumque in nemo eveniet mollitia architecto laudantium? Cumque dignissimos deleniti illo ipsam in velit itaque aspernatur ullam saepe vitae? Voluptatum minus explicabo quas illo fugiat voluptas! Nulla iure ipsam voluptatem soluta deserunt? Exercitationem, recusandae quod. Vel ducimus doloribus debitis? Ab voluptates nulla fuga molestiae numquam, error, iste, omnis ratione odit repellendus ullam nemo tempore amet. Aliquid ab dolores perspiciatis minus accusamus, animi maiores quo similique, placeat quibusdam ratione velit quae ut natus fugiat magni neque nam fuga repudiandae veniam. Mollitia voluptatem velit expedita iste rem itaque eum dolore dolores animi voluptate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".round[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.conatiner[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  padding: 5px;\n}\n.feedback-username[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .feedback-email[_ngcontent-%COMP%] {\n  color: blue;\n}\n.feedback-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: blue;\n  padding: 5px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDQTs7RUFDSSxXQUFBO0FBRUo7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdW5ke1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jb25hdGluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4uZmVlZGJhY2stdXNlcm5hbWUgaDEsLmZlZWRiYWNrLWVtYWlsIHtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLmZlZWRiYWNrLW1lc3NhZ2UgcCB7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn0iXX0= */"] });


/***/ }),

/***/ 7214:
/*!**************************************!*\
  !*** ./src/app/onclick.directive.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnclickDirective": () => (/* binding */ OnclickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class OnclickDirective {
    constructor() {
        this.isShow = true;
    }
}
OnclickDirective.ɵfac = function OnclickDirective_Factory(t) { return new (t || OnclickDirective)(); };
OnclickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnclickDirective, selectors: [["", "appOnclick", ""]] });


/***/ }),

/***/ 1411:
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 24, vars: 0, consts: [[1, "conatiner"], [1, "service-name"], [1, "round", 2, "width", "50px", "border", "5px solid blue"], [1, "service-description"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Service A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos dolorem saepe nobis rem repellendus dolorum numquam minus, animi ex corporis dolor corrupti explicabo, beatae ipsum laboriosam natus ad eum totam alias veritatis harum officia autem voluptatibus! Aliquid rerum quo aliquam tempore doloribus iusto placeat consectetur voluptatum in? Magnam dolor laudantium quo iure molestias? Assumenda corporis odit repellat reprehenderit facilis corrupti placeat consectetur explicabo commodi quisquam, beatae harum, voluptates hic? Voluptate rem sint expedita molestiae, nisi dolore soluta illo magnam veritatis praesentium earum magni tempore architecto ratione adipisci ullam quibusdam repellendus asperiores autem porro omnis itaque eum eaque. Itaque voluptatum eaque distinctio quod quaerat sed minima cupiditate nemo quia suscipit. Consequatur quae corporis optio asperiores necessitatibus, reiciendis tempora, adipisci fugiat eius autem, quam nesciunt nihil possimus? Sed, impedit! Maxime consequuntur excepturi facilis sunt, ipsa officia similique, repudiandae dignissimos libero nam incidunt atque vitae voluptates fuga recusandae minus. Quibusdam debitis laudantium dolorum perferendis aliquam quod corporis eveniet architecto qui totam laborum, assumenda omnis at culpa doloribus rerum odit sed veritatis nam. Mollitia explicabo quasi, quaerat animi ipsum, asperiores deleniti nisi quibusdam voluptatem voluptates ducimus dolorem optio quisquam excepturi, autem error architecto reprehenderit. Sunt reprehenderit tempora exercitationem nesciunt! Veritatis nisi itaque soluta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Service B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos dolorem saepe nobis rem repellendus dolorum numquam minus, animi ex corporis dolor corrupti explicabo, beatae ipsum laboriosam natus ad eum totam alias veritatis harum officia autem voluptatibus! Aliquid rerum quo aliquam tempore doloribus iusto placeat consectetur voluptatum in? Magnam dolor laudantium quo iure molestias? Assumenda corporis odit repellat reprehenderit facilis corrupti placeat consectetur explicabo commodi quisquam, beatae harum, voluptates hic? Voluptate rem sint expedita molestiae, nisi dolore soluta illo magnam veritatis praesentium earum magni tempore architecto ratione adipisci ullam quibusdam repellendus asperiores autem porro omnis itaque eum eaque. Itaque voluptatum eaque distinctio quod quaerat sed minima cupiditate nemo quia suscipit. Consequatur quae corporis optio asperiores necessitatibus, reiciendis tempora, adipisci fugiat eius autem, quam nesciunt nihil possimus? Sed, impedit! Maxime consequuntur excepturi facilis sunt, ipsa officia similique, repudiandae dignissimos libero nam incidunt atque vitae voluptates fuga recusandae minus. Quibusdam debitis laudantium dolorum perferendis aliquam quod corporis eveniet architecto qui totam laborum, assumenda omnis at culpa doloribus rerum odit sed veritatis nam. Mollitia explicabo quasi, quaerat animi ipsum, asperiores deleniti nisi quibusdam voluptatem voluptates ducimus dolorem optio quisquam excepturi, autem error architecto reprehenderit. Sunt reprehenderit tempora exercitationem nesciunt! Veritatis nisi itaque soluta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Service C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos dolorem saepe nobis rem repellendus dolorum numquam minus, animi ex corporis dolor corrupti explicabo, beatae ipsum laboriosam natus ad eum totam alias veritatis harum officia autem voluptatibus! Aliquid rerum quo aliquam tempore doloribus iusto placeat consectetur voluptatum in? Magnam dolor laudantium quo iure molestias? Assumenda corporis odit repellat reprehenderit facilis corrupti placeat consectetur explicabo commodi quisquam, beatae harum, voluptates hic? Voluptate rem sint expedita molestiae, nisi dolore soluta illo magnam veritatis praesentium earum magni tempore architecto ratione adipisci ullam quibusdam repellendus asperiores autem porro omnis itaque eum eaque. Itaque voluptatum eaque distinctio quod quaerat sed minima cupiditate nemo quia suscipit. Consequatur quae corporis optio asperiores necessitatibus, reiciendis tempora, adipisci fugiat eius autem, quam nesciunt nihil possimus? Sed, impedit! Maxime consequuntur excepturi facilis sunt, ipsa officia similique, repudiandae dignissimos libero nam incidunt atque vitae voluptates fuga recusandae minus. Quibusdam debitis laudantium dolorum perferendis aliquam quod corporis eveniet architecto qui totam laborum, assumenda omnis at culpa doloribus rerum odit sed veritatis nam. Mollitia explicabo quasi, quaerat animi ipsum, asperiores deleniti nisi quibusdam voluptatem voluptates ducimus dolorem optio quisquam excepturi, autem error architecto reprehenderit. Sunt reprehenderit tempora exercitationem nesciunt! Veritatis nisi itaque soluta? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".round[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.conatiner[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  padding: 5px;\n}\n.service-name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: blue;\n}\n.service-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: blue;\n  padding: 5px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0E7RUFDSSxXQUFBO0FBQ0o7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY29uYXRpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNXB4O1xufVxuLnNlcnZpY2UtbmFtZSBoMSB7XG4gICAgY29sb3I6IGJsdWU7XG59XG5cbi5zZXJ2aWNlLWRlc2NyaXB0aW9uIHAge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map