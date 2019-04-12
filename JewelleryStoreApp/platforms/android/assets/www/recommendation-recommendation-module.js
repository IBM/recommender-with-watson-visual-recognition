(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommendation-recommendation-module"],{

/***/ "./src/app/recommendation/recommendation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/recommendation/recommendation.module.ts ***!
  \*********************************************************/
/*! exports provided: RecommendationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationPageModule", function() { return RecommendationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recommendation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recommendation.page */ "./src/app/recommendation/recommendation.page.ts");







var routes = [
    {
        path: '',
        component: _recommendation_page__WEBPACK_IMPORTED_MODULE_6__["RecommendationPage"]
    }
];
var RecommendationPageModule = /** @class */ (function () {
    function RecommendationPageModule() {
    }
    RecommendationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recommendation_page__WEBPACK_IMPORTED_MODULE_6__["RecommendationPage"]]
        })
    ], RecommendationPageModule);
    return RecommendationPageModule;
}());



/***/ }),

/***/ "./src/app/recommendation/recommendation.page.html":
/*!*********************************************************!*\
  !*** ./src/app/recommendation/recommendation.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>\n      Recommended Products\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openCart()\">\n        <ion-badge color=\"dark\" *ngIf=\"cart.length > 0\">{{cart.length}}</ion-badge>\n        <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngFor=\"let cat of items\" class=\"category-block\">\n    \n    <ion-row no-padding class=\"category-banner\">\n      <ion-col text-left button tappable (click)=\"cat.expanded = !cat.expanded\" align-self-center>\n        {{cat.category}} \n      </ion-col>\n    </ion-row>\n\n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let product of cat.products\">\n        <div *ngIf=\"!cat.expanded\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>\n              {{product.name}} - {{product.price | currency:'INR':'symbol'}}\n            </ion-card-title>\n            <ion-card-content>\n              <img src=\"{{objectStorageAccess.baseUrl}}{{product.img}}\" height=\"256\" width=\"256\">\n              <br/>\n              <p>Dimensions: {{product.height}} cm x {{product.width}} cm</p>\n              <ion-button expand=\"block\" (click)=\"addToCart(product)\" color=\"success\">Add to Cart</ion-button>\n            </ion-card-content>\n          </ion-card-header>\n        </ion-card>\n      </div>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/recommendation/recommendation.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/recommendation/recommendation.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myimg {\n  float: left;\n  height: 200px;\n  margin-right: 30px;\n  width: 200px; }\n\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-success);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5vamphaGdpcmRhci9EZXNrdG9wL0ZpbmFsIEdpdCBVcGxvYWQvdmlzdWFsLXJlY29nbml0aW9uL3Zpc3VhbC1yZWNvZ25pdGlvbi9KZXdlbGxlcnlTdG9yZUFwcC9zcmMvYXBwL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSwrQ0FBK0M7RUFDL0Msa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNvbW1lbmRhdGlvbi9yZWNvbW1lbmRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlpbWd7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuaW9uLWJhZGdlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jYXRlZ29yeS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmNhdGVnb3J5LWJhbm5lciB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/recommendation/recommendation.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/recommendation/recommendation.page.ts ***!
  \*******************************************************/
/*! exports provided: RecommendationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationPage", function() { return RecommendationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");








var RecommendationPage = /** @class */ (function () {
    function RecommendationPage(nav, http, activatedRoute, loadingController, toastController, loadingCtrl, cartService, providerService) {
        this.nav = nav;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
        this.cartService = cartService;
        this.providerService = providerService;
        this.virtualMirrorAPI = null;
        this.receivedAge = null;
        this.receivedName = null;
        this.receivedGender = null;
        this.url = null;
        this.items = [];
        this.cart = [];
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.6
        };
        console.log('--> Recommendation page constructor() called');
        // Get the name, age & gender from home page
        this.receivedAge = this.activatedRoute.snapshot.paramMap.get('age');
        this.receivedName = this.activatedRoute.snapshot.paramMap.get('name');
        this.receivedGender = this.activatedRoute.snapshot.paramMap.get('gender');
    }
    //Toast setup
    RecommendationPage.prototype.presentToastWithOptions = function (msg) {
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
    // Make call to recommendation engine api and get recommendations
    RecommendationPage.prototype.RecommendationEngine = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Getting Recommendations please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present().then(function () {
                            console.log('--> Calling Recommendation Engine API');
                            _this.providerService.getRecommendationEngineAccess().then(function (recommendationEngineAccess) {
                                _this.recommendationEngineAccess = recommendationEngineAccess;
                                console.log('--> Received Object: ' + _this.recommendationEngineAccess);
                                _this.recommendationEngineAPI = _this.recommendationEngineAccess.RecommendationEngineApi;
                                _this.url = _this.recommendationEngineAPI + '?age=' + _this.receivedAge + '&name=' + _this.receivedName + '&gender=' + _this.receivedGender;
                                _this.url.toString();
                                _this.data = _this.http.get(_this.url);
                                _this.data.subscribe(function (data) {
                                    data.sort(GetSortOrder("count"));
                                    //Sort based on highest number of count of the product 
                                    function GetSortOrder(prop) {
                                        return function (a, b) {
                                            if (a[prop] < b[prop]) {
                                                return 1;
                                            }
                                            else if (a[prop] > b[prop]) {
                                                return -1;
                                            }
                                            return 0;
                                        };
                                    }
                                    _this.items = data;
                                    _this.cart = _this.cartService.getCart();
                                    _this.presentToastWithOptions("Tip: Click on top right icon to view cart.");
                                    loading.dismiss();
                                });
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RecommendationPage.prototype.ngOnInit = function () {
        this.loadCloudObjectStorageData();
        this.RecommendationEngine();
    };
    // Connect to Cloud Object Storage through Mobile Foundation
    RecommendationPage.prototype.loadCloudObjectStorageData = function () {
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
                            console.log('--> Cloud Object Storage authorization method called');
                            _this.providerService.getObjectStorageAccess().then(function (objectStorageAccess) {
                                _this.objectStorageAccess = objectStorageAccess;
                                console.log('--> Received Object: ' + _this.objectStorageAccess);
                                console.log('--> Cloud Object Storage authorization successful');
                                _this.presentToastWithOptions("Cloud Object Storage authorization successful.");
                                loading.dismiss();
                            }).catch(function (err) {
                                _this.presentToastWithOptions("MobileFirst Foundation Adapter Failed to authorize COS.");
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RecommendationPage.prototype.addToCart = function (product) {
        this.cartService.addProduct(product);
    };
    // Redirect to try virtually page
    RecommendationPage.prototype.openCart = function () {
        this.presentToastWithOptions("Thank you for Checking out!");
        this.nav.navigateForward("/checkout");
    };
    RecommendationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommendation',
            template: __webpack_require__(/*! ./recommendation.page.html */ "./src/app/recommendation/recommendation.page.html"),
            styles: [__webpack_require__(/*! ./recommendation.page.scss */ "./src/app/recommendation/recommendation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
            _provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"]])
    ], RecommendationPage);
    return RecommendationPage;
}());



/***/ })

}]);
//# sourceMappingURL=recommendation-recommendation-module.js.map