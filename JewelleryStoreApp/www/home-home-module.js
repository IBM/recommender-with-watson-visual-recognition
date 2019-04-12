(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Visual Recognition Jewellery Store\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-card>\n      <ion-card-content>\n        <ion-card-subtitle>Step 1: enter your name & choose your photo</ion-card-subtitle>\n\n          <ion-input autocomplete=\"on\" [(ngModel)]=\"name\" placeholder=\"Click here to enter NAME\"></ion-input>\n          <ion-button *ngIf=\"flag == false\" expand=\"block\" (click)=\"presentActionSheet()\" color=\"light\">\n              choose your photo\n            </ion-button>\n            <ion-label *ngIf=\"flag3 == true\">Photo Selected <ion-icon name=\"checkmark-circle\" slot=\"end\"></ion-icon> </ion-label>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"flag2 == true\">\n      <ion-card-content>\n        <ion-card-subtitle>Step 2: confirm your age and gender</ion-card-subtitle>\n        <ion-item *ngFor=\"let item of result\">\n          <ion-input autocomplete=\"on\" [(ngModel)]=\"age\"></ion-input>\n          <ion-input autocomplete=\"on\" [(ngModel)]=\"gender\"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"flag2 == true\">\n      <ion-card-content>\n        <ion-card-subtitle>Step 3: get recommendations based on your age and gender</ion-card-subtitle>\n        <ion-button expand=\"block\" (click)=\"getRecommendations()\" color=\"dark\">\n          Get Recommendations\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"flag2 == true\" >\n      <ion-card-content>\n        <ion-card-subtitle>not satisfied with the results?</ion-card-subtitle>\n        <ion-button expand=\"block\" (click)=\"presentActionSheet()\" color=\"light\">\n          <ion-ripple-effect></ion-ripple-effect>Retake ?\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-list>\n  <ion-list>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ "./node_modules/@ionic-native/base64-to-gallery/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");













var HomePage = /** @class */ (function () {
    function HomePage(camera, base64ToGallery, file, http, transfer, filePath, fileChooser, nav, loadingController, actionSheetController, androidPermissions, providerService, toastController) {
        this.camera = camera;
        this.base64ToGallery = base64ToGallery;
        this.file = file;
        this.http = http;
        this.transfer = transfer;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.nav = nav;
        this.loadingController = loadingController;
        this.actionSheetController = actionSheetController;
        this.androidPermissions = androidPermissions;
        this.providerService = providerService;
        this.toastController = toastController;
        this.manualdetails = false;
        this.result = [];
        this.flag = false;
        this.flag2 = false;
        this.flag3 = false;
        this.myphoto = null;
        this.getCameraPermission();
        this.inputMethod(false);
    }
    HomePage.prototype.inputMethod = function (value) {
        this.manualdetails = value;
        if (!this.manualdetails) {
            this.loadVisualRecognition();
        }
    };
    HomePage.prototype.getCameraPermission = function () {
        var _this = this;
        console.log('--> Camera permission checking in progress');
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (result) {
            console.log('Has permission?', result.hasPermission);
            if (!result.hasPermission) {
                _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.CAMERA);
            }
        }, function (err) {
            console.log(err);
        });
    };
    //Toast setup
    HomePage.prototype.presentToastWithOptions = function (msg) {
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
    HomePage.prototype.loadVisualRecognition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Checking Watson Visual Recognition Configuration...',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            console.log('--> Checking Watson Visual Recognition Configuration');
                            _this.providerService.getVisualRecognitionAccess().then(function (VisualRecognitionAccess) {
                                _this.VisualRecognitionAccess = VisualRecognitionAccess;
                                console.log('--> Received Object: ' + _this.VisualRecognitionAccess);
                                _this.url = _this.VisualRecognitionAccess.VisualRecognitionApi;
                                console.log('--> Visual Recognition configured: ' + _this.url);
                                loading.dismiss();
                                _this.presentToastWithOptions("Visual Recognition Configured.");
                            }, function (err) {
                                console.log("--> MobileFirst Foundation error: " + err);
                                _this.manualdetails = true;
                                loading.dismiss();
                                _this.presentToastWithOptions("Visual Recognition is not configured. please enter details manually.");
                            });
                        }).catch(function () {
                            _this.presentToastWithOptions("MobileFirst Foundation Adapter Failed to make API call.");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.captureImage = function (useAlbum) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var CaptureOptions, imageData, saveOptions;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('--> Image Capture in progress');
                        this.flag = true;
                        CaptureOptions = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ quality: 40, destinationType: this.camera.DestinationType.DATA_URL, encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE }, useAlbum ? { sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM } : {});
                        return [4 /*yield*/, this.camera.getPicture(CaptureOptions)];
                    case 1:
                        imageData = _a.sent();
                        this.myphoto = "data:image/jpeg;base64," + imageData;
                        if (!useAlbum) {
                            saveOptions = {
                                prefix: 'Watson',
                                mediaScanner: true
                            };
                            this.base64ToGallery.base64ToGallery(imageData, saveOptions).then(function (res) { return console.log('Saved image to gallery ', _this.rawImage = res); }, function (err) { return console.log('Error saving image to gallery ', err); });
                        }
                        alert('Now select the image from the list...');
                        this.uploadFile();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.uploadFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.flag = true;
                        this.flag3 = true;
                        url = this.url + '/api/Upload';
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Making Watson Visual Recognition API call please wait...',
                            })];
                    case 1:
                        loading = _a.sent();
                        this.fileChooser.open().then(function (uri) {
                            console.log(uri);
                            loading.present().then(function () {
                                _this.filePath.resolveNativePath(uri).then(function (nativepath) {
                                    _this.fileTransfer = _this.transfer.create();
                                    var UploadOptions = {
                                        fileKey: 'imgUploader',
                                        fileName: 'image.jpg',
                                        chunkedMode: false,
                                        headers: {},
                                        mimeType: 'multipart/form-data',
                                    };
                                    _this.fileTransfer.upload(nativepath, url, UploadOptions).then(function (data) {
                                        loading.dismiss();
                                        _this.WatsonVisualRecognition();
                                    }, function (err) {
                                        loading.dismiss();
                                        alert('ERROR: ' + JSON.stringify(err));
                                    });
                                }, function (err) {
                                    alert(JSON.stringify(err));
                                });
                            }, function (err) {
                                loading.dismiss();
                                alert('Error Making API Call: ' + JSON.stringify(err));
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.WatsonVisualRecognition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.url + '/watson';
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Analysing Image please wait...',
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            console.log('--> Calling Watson API');
                            _this.data = _this.http.get(url);
                            _this.data.subscribe(function (data) {
                                _this.result = data;
                                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                    var i = data_1[_i];
                                    _this.age = i.age;
                                    _this.gender = i.gender;
                                }
                                _this.flag2 = true;
                                loading.dismiss();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Watson Visual Recognition',
                            buttons: [{
                                    text: 'Open camera to capture your Image',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.captureImage(false);
                                    }
                                }, {
                                    text: 'Choose your existing Image',
                                    icon: 'photos',
                                    handler: function () {
                                        _this.uploadFile();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getRecommendations = function () {
        if (this.gender == 'MALE') {
            this.gender = 'M';
        }
        if (this.gender == 'FEMALE') {
            this.gender = 'F';
        }
        if (this.name == null) {
            this.presentToastWithOptions("Please Enter a Name");
        }
        else if (this.age == null) {
            this.presentToastWithOptions("Please Enter age");
        }
        else if (this.gender == null) {
            this.presentToastWithOptions("Please choose a gender");
        }
        else if (this.name != null && this.age != null && this.gender != null) {
            this.nav.navigateForward("/recommendation/" + this.age + "/" + this.name + "/" + this.gender);
        }
        else {
            this.presentToastWithOptions("Check the Name/Age/Gender and try again.");
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_3__["Base64ToGallery"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_7__["FilePath"], _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["FileChooser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__["AndroidPermissions"], _provider_service__WEBPACK_IMPORTED_MODULE_11__["ProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map