(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virtualmirror-virtualmirror-module"],{

/***/ "./src/app/virtualmirror/virtualmirror.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/virtualmirror/virtualmirror.module.ts ***!
  \*******************************************************/
/*! exports provided: VirtualmirrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualmirrorPageModule", function() { return VirtualmirrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _virtualmirror_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./virtualmirror.page */ "./src/app/virtualmirror/virtualmirror.page.ts");







var routes = [
    {
        path: '',
        component: _virtualmirror_page__WEBPACK_IMPORTED_MODULE_6__["VirtualmirrorPage"]
    }
];
var VirtualmirrorPageModule = /** @class */ (function () {
    function VirtualmirrorPageModule() {
    }
    VirtualmirrorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_virtualmirror_page__WEBPACK_IMPORTED_MODULE_6__["VirtualmirrorPage"], _virtualmirror_page__WEBPACK_IMPORTED_MODULE_6__["SafePipe"]]
        })
    ], VirtualmirrorPageModule);
    return VirtualmirrorPageModule;
}());



/***/ }),

/***/ "./src/app/virtualmirror/virtualmirror.page.html":
/*!*******************************************************!*\
  !*** ./src/app/virtualmirror/virtualmirror.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <iframe allow=\"camera\" frameborder=\"0\" scrolling=\"no\" [src]=\"finalUrl | safe\" height=\"700\" width=\"385\"></iframe>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/virtualmirror/virtualmirror.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/virtualmirror/virtualmirror.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpcnR1YWxtaXJyb3IvdmlydHVhbG1pcnJvci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/virtualmirror/virtualmirror.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/virtualmirror/virtualmirror.page.ts ***!
  \*****************************************************/
/*! exports provided: VirtualmirrorPage, SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualmirrorPage", function() { return VirtualmirrorPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");








var VirtualmirrorPage = /** @class */ (function () {
    function VirtualmirrorPage(loadingController, toastController, activatedRoute, sanitizer, providerService) {
        // Get the parameters from recommendation page
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.providerService = providerService;
        this.folder = this.activatedRoute.snapshot.paramMap.get('folder');
        this.receivedUrl = this.activatedRoute.snapshot.paramMap.get('imageUrl');
        this.type = this.activatedRoute.snapshot.paramMap.get('type');
        this.height = this.activatedRoute.snapshot.paramMap.get('height');
        this.width = this.activatedRoute.snapshot.paramMap.get('width');
        this.virtualMirrorAPI = this.activatedRoute.snapshot.paramMap.get('api');
    }
    VirtualmirrorPage.prototype.presentToastWithOptions = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            showCloseButton: false,
                            position: 'bottom',
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Connect to Cloud Object Storage through Mobile Foundation
    VirtualmirrorPage.prototype.loadCloudObjectStorageData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Authorizing Cloud Object Storage...',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            console.log('--> Cloud Object Storage authorization method in Virtual Mirror page called');
                            _this.providerService.getObjectStorageAccess().then(function (objectStorageAccess) {
                                _this.objectStorageAccess = objectStorageAccess;
                                console.log('--> Received Object: ' + _this.objectStorageAccess);
                                _this.objectStorageBaseUrl = _this.objectStorageAccess.baseUrl;
                                _this.imgUrl = _this.objectStorageBaseUrl + _this.folder + "/" + _this.receivedUrl;
                                console.log('--> Image: ' + _this.imgUrl);
                                loading.dismiss();
                                _this.presentToastWithOptions("Cloud Object Storage authorization successful.");
                            });
                        }).catch(function () {
                            _this.presentToastWithOptions("MobileFirst Foundation Adapter Failed to authorize COS.");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VirtualmirrorPage.prototype.VirtualMirror = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loadingagain;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Loading Virtual Mirror...',
                                duration: 6000
                            })];
                    case 2:
                        loadingagain = _a.sent();
                        loading.present().then(function () {
                            _this.finalUrl = "https://" + _this.virtualMirrorAPI + "/page2.html?para1=" + _this.imgUrl + "=" + _this.type + "=" + _this.height + "=" + _this.width;
                            console.log('--> Final URL: ' + _this.finalUrl);
                            loading.dismiss();
                            loadingagain.present();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VirtualmirrorPage.prototype.ngOnInit = function () {
        this.loadCloudObjectStorageData();
        if (this.virtualMirrorAPI !== null) {
            this.VirtualMirror();
        }
        else {
            this.presentToastWithOptions("Virtual Mirror Not Configured. Cannot Open.");
        }
    };
    VirtualmirrorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-virtualmirror',
            template: __webpack_require__(/*! ./virtualmirror.page.html */ "./src/app/virtualmirror/virtualmirror.page.html"),
            styles: [__webpack_require__(/*! ./virtualmirror.page.scss */ "./src/app/virtualmirror/virtualmirror.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"]])
    ], VirtualmirrorPage);
    return VirtualmirrorPage;
}());

// !Important -> Required to display iframe
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (finalUrl) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(finalUrl);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ })

}]);
//# sourceMappingURL=virtualmirror-virtualmirror-module.js.map