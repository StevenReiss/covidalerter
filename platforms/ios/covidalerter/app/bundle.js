require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./views/about/about-page.js": "./views/about/about-page.js",
	"./views/about/about-page.xml": "./views/about/about-page.xml",
	"./views/about/about-view-model.js": "./views/about/about-view-model.js",
	"./views/home/home-page.js": "./views/home/home-page.js",
	"./views/home/home-page.xml": "./views/home/home-page.xml",
	"./views/home/home-view-model.js": "./views/home/home-view-model.js",
	"./views/report/report-page.js": "./views/report/report-page.js",
	"./views/report/report-page.xml": "./views/report/report-page.xml",
	"./views/report/report-view-model.js": "./views/report/report-view-model.js",
	"./views/status/status-page.js": "./views/status/status-page.js",
	"./views/status/status-page.xml": "./views/status/status-page.xml",
	"./views/status/status-view-model.js": "./views/status/status-view-model.js",
	"./views/symptoms/symptoms-page.js": "./views/symptoms/symptoms-page.js",
	"./views/symptoms/symptoms-page.xml": "./views/symptoms/symptoms-page.xml",
	"./views/symptoms/symptoms-view-model.js": "./views/symptoms/symptoms-view-model.js",
	"./views/well/well-page.js": "./views/well/well-page.js",
	"./views/well/well-page.xml": "./views/well/well-page.xml",
	"./views/well/well-view-model.js": "./views/well/well-view-model.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"views/home/home-page\"></Frame>\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));
global.registerModule("@nativescript/theme/css/default.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/default.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'~@nativescript/theme/css/core.css'"},{"type":"import","import":"'~@nativescript/theme/css/default.css'"},{"type":"rule","selectors":[".btn"],"declarations":[{"type":"declaration","property":"font-size","value":"18"}]},{"type":"rule","selectors":[".home-panel"],"declarations":[{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"margin","value":"15"}]},{"type":"rule","selectors":[".description-label"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"15"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        let application = __webpack_require__("tns-core-modules/application");
let timerModule = __webpack_require__("tns-core-modules/timer");
let bluetooth = __webpack_require__("../node_modules/nativescript-bluetooth/bluetooth.js").getBluetoothInstance();

console.log("START");


function checkBlueTooth()
{
        bluetooth.isBluetoothEnabled()
.then((e) => console.log("Enabled? " + e))
.catch((e) => console.log("Enabled failed",e));
  
        console.log("CHECK");
    bluetooth.startScanning({
	servicdUUIDs: [],
	seconds: 5,
	onDiscovered: handleDiscovered,
	skipPermissionCheck: false,
    })
    .then( () => { console.log("Scanning complete")})
    .catch( (e) => { console.log("Scanning error",e) } ); 
} 
 

function handleDiscovered(device)
{
    console.log("FOUND ", device.UUID, device.name, device.RSSI);
}

let bluecheck_ival = timerModule.setInterval(checkBlueTooth,60000);




application.run({ moduleName: "app-root" });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/




; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/about/about-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var AboutViewModel = __webpack_require__("./views/about/about-view-model.js");
var aboutViewModel = new AboutViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = aboutViewModel;
}

exports.pageLoaded = pageLoaded;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/about/about-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/about/about-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/about/about-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\"\n    xmlns=\"http://www.nativescript.org/tns.xsd\">\n    <ActionBar title=\"About\" class=\"action-bar\">\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n            <Label text=\"COVID-19  ALERTER\" class='title' />\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span\n                        text=\"Covid19Alerter was written by Brown faculty and students in response to the Covid19 \" />\n                    <Span\n                        text=\"epidemic.  It is available as open source code on GitHub. \" />\n                    \"\n                </FormattedString>\n            </TextView>\n            <HtmlView backgroundColor=\"darkgray\" html=\"For more information contact &lt;a href='mailto:spr+covid@cs.brown.edu'&gt;Steven Reiss&lt;/a&gt;\" />\n\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span\n                        text='This applcation uses BlueTooth to detech other people that come near you over time. ' />\n                    <Span\n                        text='It periodically checks if anyone you have been near might be sick or exposed to ' />\n                    <Span\n                        text='someone who might be sick. If so, it alerts you that you might have been exposed and ' />\n                    <Span\n                        text='gives you the date and location of the possible exposure.' />\n                </FormattedString>\n            </TextView>\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span\n                        text='This application does not send or save any personal infomation.  It uses a secure ' />\n                    <Span\n                        text='hash of a BlueTooth address as a proxy for a device and devices as a proxy for ' />\n                    <Span\n                        text='a person.  No information about you is sent unless you report yourself as sick, ' />\n                    <Span\n                        text='and then only the infomrration that you specifically allow.' />\n                </FormattedString>\n            </TextView>\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span\n                        text=\"This application needs permission to access both BlueTooth and your location in order \" />\n                    <Span\n                        text='to run.  It needs these while running in background, not just when active.  It also ' />\n                    <Span\n                        text='needs permission to send notifications or alerts. ' />\n                </FormattedString>\n            </TextView>\n            <StackLayout orientation=\"horizontal\">\n                <Button text=\"Proceed\" tap=\"{{ onButtonTap }}\" />\n                <Button text=\"About\" tap=\"{{ onButtonTap }}\" />\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/about/about-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/about/about-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/about/about-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");

function AboutViewModel() {
	var viewModel = observableModule.fromObject({
    htmlString: "<div><h1>HtmlView demo</h1><h2>in NativeScript App</h2></div>",


	});

	return viewModel;
}

module.exports = AboutViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/about/about-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/about/about-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var HomeViewModel = __webpack_require__("./views/home/home-view-model.js");
var homeViewModel = new HomeViewModel();

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = homeViewModel;
}


exports.pageLoaded = pageLoaded;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/home/home-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/home/home-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/home/home-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" xmlns=\"http://www.nativescript.org/tns.xsd\">\n\n    <ActionBar title=\"Home\">\n    </ActionBar>\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n            <!--Add your page content here-->\n            <Label text=\"COVID-19  ALERTER\" class='title' />\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span text='This applcation uses BlueTooth to detech other people that come near you over time. ' />\n                    <Span text='It periodically checks if anyone you have been near might be sick or exposed to ' />\n                    <Span text='someone who might be sick. If so, it alerts you that you might have been exposed and ' />\n                    <Span text='gives you the date and location of the possible exposure.' />\n                </FormattedString>\n            </TextView>\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span text='This application does not send or save any personal infomation.  It uses a secure ' />\n                    <Span text='hash of a BlueTooth address as a proxy for a device and devices as a proxy for ' />\n                    <Span text='a person.  No information about you is sent unless you report yourself as sick, ' />\n                    <Span text='and then only the infomrration that you specifically allow.' />\n                </FormattedString>\n            </TextView>\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span text=\"This application needs permission to access both BlueTooth and your location in order \" />\n                    <Span text='to run.  It needs these while running in background, not just when active.  It also ' />\n                    <Span text='needs permission to send notifications or alerts. ' />\n                </FormattedString>\n            </TextView>\n            <StackLayout orientation=\"horizontal\" >\n                <Button text=\"Proceed\" tap=\"{{ onButtonTap }}\" />\n                <Button text=\"Check\" tap=\"{{ checkButtonTap }}\" />\n                <Button text=\"About\" tap=\"{{ aboutButtonTap }}\" />\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/home/home-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/home/home-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/home/home-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var bluetooth = __webpack_require__("../node_modules/nativescript-bluetooth/bluetooth.js").getBluetoothInstance();

 
function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Proceed Button was pressed");
      frameModule.Frame.topmost().navigate({
        moduleName: "views/status/status-page",
        context: {}
      });
    },
    aboutButtonTap: function () {
      console.log("About Button was pressed");
      frameModule.Frame.topmost().navigate({
        moduleName: "views/about/about-page",
        context: {}
      } );
},
      checkButtonTap: function () {
        console.log("Check Button was pressed");
        this.checkBlueTooth();
        },


       checkBlueTooth: function() {
                bluetooth.isBluetoothEnabled()
        .then((e) => console.log("Enabled? " + e))
        .catch((e) => console.log("Enabled failed",e));
          
                console.log("CHECK");
            bluetooth.startScanning({
                servicdUUIDs: [],
                seconds: 5,
                onDiscovered: this.handleDiscovered,
                skipPermissionCheck: false,
            })
            .then( () => { console.log("Scanning complete")})
            .catch( (e) => { console.log("Scanning error",e) } ); 
        } ,

        handleDiscovered: function(device) {
            console.log("FOUND ", device.UUID, device.name, device.RSSI);
        } ,
    
  });

  return viewModel;
}

module.exports = HomeViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/home/home-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/home/home-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/report/report-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var ReportViewModel = __webpack_require__("./views/report/report-view-model.js");
var reportViewModel = new ReportViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = reportViewModel;
}

exports.pageLoaded = pageLoaded;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/report/report-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/report/report-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/report/report-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\"\n    xmlns=\"http://www.nativescript.org/tns.xsd\">\n    <ActionBar title=\"Report\" class=\"action-bar\">\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n            <Label textWrap='true'\n                text=\"Give advice such as contact doctor, self-isolate\" />\n            <Label textWrap='true'\n                text=\"Offer to report to state or local authority, getting name/address optionally\" />\n            <Label textWrap='true'\n                text=\"All buttons go back to status page\" />\n            <!--Add your page content here-->\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/report/report-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/report/report-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/report/report-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");

function ReportViewModel() {
	var viewModel = observableModule.fromObject({

	});

	return viewModel;
}

module.exports = ReportViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/report/report-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/report/report-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/status/status-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var StatusViewModel = __webpack_require__("./views/status/status-view-model.js");
var statusViewModel = new StatusViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = statusViewModel;
}

exports.pageLoaded = pageLoaded;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/status/status-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/status/status-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/status/status-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\"\n    xmlns=\"http://www.nativescript.org/tns.xsd\">\n    <ActionBar title=\"Status\" class=\"action-bar\">\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n\t\t\t<!-- Button should be green/yellow/rew/black/whiter no expose/possible/exposted/sick/over it -->\n            <Button id='statusbtn' class='statusbtn'\n                text=\"No Exposure Detected\" tap=\"{{ onButtonTap }}\"\n                width=\"70%\" height='40' backgroundColor=\"green\"\n                color='white' />\n            <TextView editable=\"false\" id='statusexplain'\n                class='statusexplain'>\n                <FormattedString>\n                    <Span\n                        text=\"No exposure to anyone who is contagious with the Covid19 virus has been detected. \" />\n                </FormattedString>\n            </TextView>\n            <TextView editable=\"false\">\n                <FormattedString>\n                    <Span\n                        text=\"Click on the status to manually update.  Automatic updates occur every hour or so. \" />\n                </FormattedString>\n            </TextView>\n\t\t\t<!-- should be report yourself better if they are sick -->\n            <Button id='sickbtn' text=\"Report Yourself Sick\" tap=\"{{ onButtonTap }}\"\n                backgroundColor='red' color='white' />\n            <StackLayout orientation=\"horizontal\">\n                <Button text=\"Preferences\" tap=\"{{ onButtonTap }}\" />\n                <Button text=\"About\" tap=\"{{ aboutButtonTap }}\" /> \n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/status/status-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/status/status-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/status/status-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");

function StatusViewModel() {
	var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },


	});

	return viewModel;
}

module.exports = StatusViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/status/status-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/status/status-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/symptoms/symptoms-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var SymptomsViewModel = __webpack_require__("./views/symptoms/symptoms-view-model.js");
var symptomsViewModel = new SymptomsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = symptomsViewModel;
}

exports.pageLoaded = pageLoaded;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/symptoms/symptoms-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/symptoms/symptoms-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/symptoms/symptoms-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\"\n    xmlns=\"http://www.nativescript.org/tns.xsd\">\n    <ActionBar title=\"Symptoms\" class=\"action-bar\">\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n            <Label textWrap='true'\n                text=\"Check list of symbols, input field for date started, cancel and accept buttons\" />\n            <Label textWrap='true'\n                text=\"Cancel goes to status, accept goes to report\" />\n            <!--Add your page content here-->\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/symptoms/symptoms-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/symptoms/symptoms-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/symptoms/symptoms-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");

function SymptomsViewModel() {
	var viewModel = observableModule.fromObject({

	});

	return viewModel;
}

module.exports = SymptomsViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/symptoms/symptoms-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/symptoms/symptoms-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/well/well-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var WellViewModel = __webpack_require__("./views/well/well-view-model.js");
var wellViewModel = new WellViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = wellViewModel;
}

exports.pageLoaded = pageLoaded;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/well/well-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/well/well-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/well/well-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\"\n    xmlns=\"http://www.nativescript.org/tns.xsd\">\n    <ActionBar title=\"Well\" class=\"action-bar\">\n    </ActionBar>\n\n    <ScrollView>\n        <StackLayout class=\"home-panel\">\n            <Label\n                text=\"Ensure person is feeling healthy again.  Ask when? Tell to self isolate for k more days\"\n                textWrap='true' />\n            <Label\n                text=\"Agreed button reports healthy and goes back to status page\"\n                textWrap='true' />\n            <!--Add your page content here-->\n        </StackLayout>\n    </ScrollView>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/well/well-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/well/well-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/well/well-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");

function WellViewModel() {
	var viewModel = observableModule.fromObject({

	});

	return viewModel;
}

module.exports = WellViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/well/well-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/well/well-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@nativescript/core/data/observable":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/data/observable");

/***/ }),

/***/ "@nativescript/core/utils/utils":
/***/ (function(module, exports) {

module.exports = require("@nativescript/core/utils/utils");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/timer":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/timer");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2Fib3V0L2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvYWJvdXQvYWJvdXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvYWJvdXQvYWJvdXQtdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9ob21lL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9ob21lL2hvbWUtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvaG9tZS9ob21lLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvcmVwb3J0L3JlcG9ydC1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3JlcG9ydC9yZXBvcnQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvcmVwb3J0L3JlcG9ydC12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9zdGF0dXMvc3RhdHVzLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3N0YXR1cy9zdGF0dXMtdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9zeW1wdG9tcy9zeW1wdG9tcy1wYWdlLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3N5bXB0b21zL3N5bXB0b21zLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3N5bXB0b21zL3N5bXB0b21zLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvd2VsbC93ZWxsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvd2VsbC93ZWxsLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3ZpZXdzL3dlbGwvd2VsbC12aWV3LW1vZGVsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuYXRpdmVzY3JpcHQvY29yZS9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFD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QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixrRUFBa0U7QUFDN0YsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDbEJBLGdFQUFrQixtQkFBTyxDQUFDLDJCQUEyQjtBQUNyRCxvQkFBb0IsbUJBQU8sQ0FBQyxpQ0FBbUI7QUFDL0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG9EQUFvRDtBQUMvRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7O0FDakJBLG1wQjtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFxRDtBQUNoRixLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNSQSxxRUFBdUIsbUJBQU8sQ0FBQyxrQ0FBa0M7O0FBRWpFO0FBQ0E7O0FBRUEsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDBEQUEwRDtBQUNyRixLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNsQkEsK0Q7Ozs7Ozs7QUNBQSwyRDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vdmlld3MvYWJvdXQvYWJvdXQtcGFnZS5qc1wiOiBcIi4vdmlld3MvYWJvdXQvYWJvdXQtcGFnZS5qc1wiLFxuXHRcIi4vdmlld3MvYWJvdXQvYWJvdXQtcGFnZS54bWxcIjogXCIuL3ZpZXdzL2Fib3V0L2Fib3V0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9hYm91dC9hYm91dC12aWV3LW1vZGVsLmpzXCI6IFwiLi92aWV3cy9hYm91dC9hYm91dC12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9ob21lL2hvbWUtcGFnZS5qc1wiOiBcIi4vdmlld3MvaG9tZS9ob21lLXBhZ2UuanNcIixcblx0XCIuL3ZpZXdzL2hvbWUvaG9tZS1wYWdlLnhtbFwiOiBcIi4vdmlld3MvaG9tZS9ob21lLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiOiBcIi4vdmlld3MvaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3ZpZXdzL3JlcG9ydC9yZXBvcnQtcGFnZS5qc1wiOiBcIi4vdmlld3MvcmVwb3J0L3JlcG9ydC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9yZXBvcnQvcmVwb3J0LXBhZ2UueG1sXCI6IFwiLi92aWV3cy9yZXBvcnQvcmVwb3J0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9yZXBvcnQvcmVwb3J0LXZpZXctbW9kZWwuanNcIjogXCIuL3ZpZXdzL3JlcG9ydC9yZXBvcnQtdmlldy1tb2RlbC5qc1wiLFxuXHRcIi4vdmlld3Mvc3RhdHVzL3N0YXR1cy1wYWdlLmpzXCI6IFwiLi92aWV3cy9zdGF0dXMvc3RhdHVzLXBhZ2UuanNcIixcblx0XCIuL3ZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZS54bWxcIjogXCIuL3ZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3N0YXR1cy9zdGF0dXMtdmlldy1tb2RlbC5qc1wiOiBcIi4vdmlld3Mvc3RhdHVzL3N0YXR1cy12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zeW1wdG9tcy9zeW1wdG9tcy1wYWdlLmpzXCI6IFwiLi92aWV3cy9zeW1wdG9tcy9zeW1wdG9tcy1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9zeW1wdG9tcy9zeW1wdG9tcy1wYWdlLnhtbFwiOiBcIi4vdmlld3Mvc3ltcHRvbXMvc3ltcHRvbXMtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3N5bXB0b21zL3N5bXB0b21zLXZpZXctbW9kZWwuanNcIjogXCIuL3ZpZXdzL3N5bXB0b21zL3N5bXB0b21zLXZpZXctbW9kZWwuanNcIixcblx0XCIuL3ZpZXdzL3dlbGwvd2VsbC1wYWdlLmpzXCI6IFwiLi92aWV3cy93ZWxsL3dlbGwtcGFnZS5qc1wiLFxuXHRcIi4vdmlld3Mvd2VsbC93ZWxsLXBhZ2UueG1sXCI6IFwiLi92aWV3cy93ZWxsL3dlbGwtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3dlbGwvd2VsbC12aWV3LW1vZGVsLmpzXCI6IFwiLi92aWV3cy93ZWxsL3dlbGwtdmlldy1tb2RlbC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgcmVjdXJzaXZlICg/PCFcXFxcYkFwcF9SZXNvdXJjZXNcXFxcYi4qKSg/PCFcXFxcLlxcXFwvXFxcXGJ0ZXN0c1xcXFxiXFxcXC8uKj8pXFxcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwidmlld3MvaG9tZS9ob21lLXBhZ2VcXFwiPjwvRnJhbWU+XFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLXJvb3QueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vYXBwLXJvb3QueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9kZWZhdWx0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2RlZmF1bHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiJ35AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzcydcIn0se1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIid+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvZGVmYXVsdC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG5cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ob21lLXBhbmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmVydGljYWwtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRlc2NyaXB0aW9uLWxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE1XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGxldCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xubGV0IHRpbWVyTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIik7XG5sZXQgYmx1ZXRvb3RoID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ibHVldG9vdGhcIikuZ2V0Qmx1ZXRvb3RoSW5zdGFuY2UoKTtcblxuY29uc29sZS5sb2coXCJTVEFSVFwiKTtcblxuXG5mdW5jdGlvbiBjaGVja0JsdWVUb290aCgpXG57XG4gICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxuLnRoZW4oKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZD8gXCIgKyBlKSlcbi5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJFbmFibGVkIGZhaWxlZFwiLGUpKTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tcIik7XG4gICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xuXHRzZXJ2aWNkVVVJRHM6IFtdLFxuXHRzZWNvbmRzOiA1LFxuXHRvbkRpc2NvdmVyZWQ6IGhhbmRsZURpc2NvdmVyZWQsXG5cdHNraXBQZXJtaXNzaW9uQ2hlY2s6IGZhbHNlLFxuICAgIH0pXG4gICAgLnRoZW4oICgpID0+IHsgY29uc29sZS5sb2coXCJTY2FubmluZyBjb21wbGV0ZVwiKX0pXG4gICAgLmNhdGNoKCAoZSkgPT4geyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGVycm9yXCIsZSkgfSApOyBcbn0gXG4gXG5cbmZ1bmN0aW9uIGhhbmRsZURpc2NvdmVyZWQoZGV2aWNlKVxue1xuICAgIGNvbnNvbGUubG9nKFwiRk9VTkQgXCIsIGRldmljZS5VVUlELCBkZXZpY2UubmFtZSwgZGV2aWNlLlJTU0kpO1xufVxuXG5sZXQgYmx1ZWNoZWNrX2l2YWwgPSB0aW1lck1vZHVsZS5zZXRJbnRlcnZhbChjaGVja0JsdWVUb290aCw2MDAwMCk7XG5cblxuXG5cbmFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTtcbi8qXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcbmJlIGV4ZWN1dGVkIG9uIGlPUy5cbiovXG5cblxuXG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9hcHAuanNcIiB9KTtcbiAgICB9KTtcbn0gXG4gICAgXG4gICAgICAgIFxuICAgICAgICAiLCJ2YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBBYm91dFZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL2Fib3V0LXZpZXctbW9kZWxcIik7XG52YXIgYWJvdXRWaWV3TW9kZWwgPSBuZXcgQWJvdXRWaWV3TW9kZWwoKTtcblxuZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzKSB7XG5cdHZhciBwYWdlID0gYXJncy5vYmplY3Q7XG5cblx0cGFnZS5iaW5kaW5nQ29udGV4dCA9IGFib3V0Vmlld01vZGVsO1xufVxuXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2Fib3V0L2Fib3V0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9hYm91dC9hYm91dC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFib3V0XFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgIDwvQWN0aW9uQmFyPlxcblxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNPVklELTE5ICBBTEVSVEVSXFxcIiBjbGFzcz0ndGl0bGUnIC8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIkNvdmlkMTlBbGVydGVyIHdhcyB3cml0dGVuIGJ5IEJyb3duIGZhY3VsdHkgYW5kIHN0dWRlbnRzIGluIHJlc3BvbnNlIHRvIHRoZSBDb3ZpZDE5IFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiZXBpZGVtaWMuICBJdCBpcyBhdmFpbGFibGUgYXMgb3BlbiBzb3VyY2UgY29kZSBvbiBHaXRIdWIuIFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIFxcXCJcXG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgPC9UZXh0Vmlldz5cXG4gICAgICAgICAgICA8SHRtbFZpZXcgYmFja2dyb3VuZENvbG9yPVxcXCJkYXJrZ3JheVxcXCIgaHRtbD1cXFwiRm9yIG1vcmUgaW5mb3JtYXRpb24gY29udGFjdCAmbHQ7YSBocmVmPSdtYWlsdG86c3ByK2NvdmlkQGNzLmJyb3duLmVkdScmZ3Q7U3RldmVuIFJlaXNzJmx0Oy9hJmd0O1xcXCIgLz5cXG5cXG4gICAgICAgICAgICA8VGV4dFZpZXcgZWRpdGFibGU9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0nVGhpcyBhcHBsY2F0aW9uIHVzZXMgQmx1ZVRvb3RoIHRvIGRldGVjaCBvdGhlciBwZW9wbGUgdGhhdCBjb21lIG5lYXIgeW91IG92ZXIgdGltZS4gJyAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSdJdCBwZXJpb2RpY2FsbHkgY2hlY2tzIGlmIGFueW9uZSB5b3UgaGF2ZSBiZWVuIG5lYXIgbWlnaHQgYmUgc2ljayBvciBleHBvc2VkIHRvICcgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0nc29tZW9uZSB3aG8gbWlnaHQgYmUgc2ljay4gSWYgc28sIGl0IGFsZXJ0cyB5b3UgdGhhdCB5b3UgbWlnaHQgaGF2ZSBiZWVuIGV4cG9zZWQgYW5kICcgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0nZ2l2ZXMgeW91IHRoZSBkYXRlIGFuZCBsb2NhdGlvbiBvZiB0aGUgcG9zc2libGUgZXhwb3N1cmUuJyAvPlxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICA8L1RleHRWaWV3PlxcbiAgICAgICAgICAgIDxUZXh0VmlldyBlZGl0YWJsZT1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSdUaGlzIGFwcGxpY2F0aW9uIGRvZXMgbm90IHNlbmQgb3Igc2F2ZSBhbnkgcGVyc29uYWwgaW5mb21hdGlvbi4gIEl0IHVzZXMgYSBzZWN1cmUgJyAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSdoYXNoIG9mIGEgQmx1ZVRvb3RoIGFkZHJlc3MgYXMgYSBwcm94eSBmb3IgYSBkZXZpY2UgYW5kIGRldmljZXMgYXMgYSBwcm94eSBmb3IgJyAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSdhIHBlcnNvbi4gIE5vIGluZm9ybWF0aW9uIGFib3V0IHlvdSBpcyBzZW50IHVubGVzcyB5b3UgcmVwb3J0IHlvdXJzZWxmIGFzIHNpY2ssICcgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD0nYW5kIHRoZW4gb25seSB0aGUgaW5mb21ycmF0aW9uIHRoYXQgeW91IHNwZWNpZmljYWxseSBhbGxvdy4nIC8+XFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgIDwvVGV4dFZpZXc+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcIlRoaXMgYXBwbGljYXRpb24gbmVlZHMgcGVybWlzc2lvbiB0byBhY2Nlc3MgYm90aCBCbHVlVG9vdGggYW5kIHlvdXIgbG9jYXRpb24gaW4gb3JkZXIgXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW5cXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PSd0byBydW4uICBJdCBuZWVkcyB0aGVzZSB3aGlsZSBydW5uaW5nIGluIGJhY2tncm91bmQsIG5vdCBqdXN0IHdoZW4gYWN0aXZlLiAgSXQgYWxzbyAnIC8+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhblxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9J25lZWRzIHBlcm1pc3Npb24gdG8gc2VuZCBub3RpZmljYXRpb25zIG9yIGFsZXJ0cy4gJyAvPlxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICA8L1RleHRWaWV3PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiUHJvY2VlZFxcXCIgdGFwPVxcXCJ7eyBvbkJ1dHRvblRhcCB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJBYm91dFxcXCIgdGFwPVxcXCJ7eyBvbkJ1dHRvblRhcCB9fVxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9hYm91dC9hYm91dC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2Fib3V0L2Fib3V0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG5mdW5jdGlvbiBBYm91dFZpZXdNb2RlbCgpIHtcblx0dmFyIHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgaHRtbFN0cmluZzogXCI8ZGl2PjxoMT5IdG1sVmlldyBkZW1vPC9oMT48aDI+aW4gTmF0aXZlU2NyaXB0IEFwcDwvaDI+PC9kaXY+XCIsXG5cblxuXHR9KTtcblxuXHRyZXR1cm4gdmlld01vZGVsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3V0Vmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2Fib3V0L2Fib3V0LXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9hYm91dC9hYm91dC12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBIb21lVmlld01vZGVsID0gcmVxdWlyZShcIi4vaG9tZS12aWV3LW1vZGVsXCIpO1xudmFyIGhvbWVWaWV3TW9kZWwgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xuXG5mdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3MpIHtcbiAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGhvbWVWaWV3TW9kZWw7XG59XG5cblxuZXhwb3J0cy5wYWdlTG9hZGVkID0gcGFnZUxvYWRlZDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9ob21lL2hvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2hvbWUvaG9tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXG5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiSG9tZVxcXCI+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaG9tZS1wYW5lbFxcXCI+XFxuICAgICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNPVklELTE5ICBBTEVSVEVSXFxcIiBjbGFzcz0ndGl0bGUnIC8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PSdUaGlzIGFwcGxjYXRpb24gdXNlcyBCbHVlVG9vdGggdG8gZGV0ZWNoIG90aGVyIHBlb3BsZSB0aGF0IGNvbWUgbmVhciB5b3Ugb3ZlciB0aW1lLiAnIC8+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PSdJdCBwZXJpb2RpY2FsbHkgY2hlY2tzIGlmIGFueW9uZSB5b3UgaGF2ZSBiZWVuIG5lYXIgbWlnaHQgYmUgc2ljayBvciBleHBvc2VkIHRvICcgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9J3NvbWVvbmUgd2hvIG1pZ2h0IGJlIHNpY2suIElmIHNvLCBpdCBhbGVydHMgeW91IHRoYXQgeW91IG1pZ2h0IGhhdmUgYmVlbiBleHBvc2VkIGFuZCAnIC8+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PSdnaXZlcyB5b3UgdGhlIGRhdGUgYW5kIGxvY2F0aW9uIG9mIHRoZSBwb3NzaWJsZSBleHBvc3VyZS4nIC8+XFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgIDwvVGV4dFZpZXc+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PSdUaGlzIGFwcGxpY2F0aW9uIGRvZXMgbm90IHNlbmQgb3Igc2F2ZSBhbnkgcGVyc29uYWwgaW5mb21hdGlvbi4gIEl0IHVzZXMgYSBzZWN1cmUgJyAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD0naGFzaCBvZiBhIEJsdWVUb290aCBhZGRyZXNzIGFzIGEgcHJveHkgZm9yIGEgZGV2aWNlIGFuZCBkZXZpY2VzIGFzIGEgcHJveHkgZm9yICcgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9J2EgcGVyc29uLiAgTm8gaW5mb3JtYXRpb24gYWJvdXQgeW91IGlzIHNlbnQgdW5sZXNzIHlvdSByZXBvcnQgeW91cnNlbGYgYXMgc2ljaywgJyAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD0nYW5kIHRoZW4gb25seSB0aGUgaW5mb21ycmF0aW9uIHRoYXQgeW91IHNwZWNpZmljYWxseSBhbGxvdy4nIC8+XFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgIDwvVGV4dFZpZXc+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCJUaGlzIGFwcGxpY2F0aW9uIG5lZWRzIHBlcm1pc3Npb24gdG8gYWNjZXNzIGJvdGggQmx1ZVRvb3RoIGFuZCB5b3VyIGxvY2F0aW9uIGluIG9yZGVyIFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9J3RvIHJ1bi4gIEl0IG5lZWRzIHRoZXNlIHdoaWxlIHJ1bm5pbmcgaW4gYmFja2dyb3VuZCwgbm90IGp1c3Qgd2hlbiBhY3RpdmUuICBJdCBhbHNvICcgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9J25lZWRzIHBlcm1pc3Npb24gdG8gc2VuZCBub3RpZmljYXRpb25zIG9yIGFsZXJ0cy4gJyAvPlxcbiAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICA8L1RleHRWaWV3PlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlByb2NlZWRcXFwiIHRhcD1cXFwie3sgb25CdXR0b25UYXAgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ2hlY2tcXFwiIHRhcD1cXFwie3sgY2hlY2tCdXR0b25UYXAgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQWJvdXRcXFwiIHRhcD1cXFwie3sgYWJvdXRCdXR0b25UYXAgfX1cXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvaG9tZS9ob21lLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vdmlld3MvaG9tZS9ob21lLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZSgndG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZScpO1xudmFyIGJsdWV0b290aCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmx1ZXRvb3RoXCIpLmdldEJsdWV0b290aEluc3RhbmNlKCk7XG5cbiBcbmZ1bmN0aW9uIEhvbWVWaWV3TW9kZWwoKSB7XG4gIHZhciB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIG9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2NlZWQgQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9zdGF0dXMvc3RhdHVzLXBhZ2VcIixcbiAgICAgICAgY29udGV4dDoge31cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWJvdXRCdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9hYm91dC9hYm91dC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHt9XG4gICAgICB9ICk7XG59LFxuICAgICAgY2hlY2tCdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVjayBCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgICAgIHRoaXMuY2hlY2tCbHVlVG9vdGgoKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgY2hlY2tCbHVlVG9vdGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxuICAgICAgICAudGhlbigoZSkgPT4gY29uc29sZS5sb2coXCJFbmFibGVkPyBcIiArIGUpKVxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZCBmYWlsZWRcIixlKSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSEVDS1wiKTtcbiAgICAgICAgICAgIGJsdWV0b290aC5zdGFydFNjYW5uaW5nKHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNkVVVJRHM6IFtdLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IDUsXG4gICAgICAgICAgICAgICAgb25EaXNjb3ZlcmVkOiB0aGlzLmhhbmRsZURpc2NvdmVyZWQsXG4gICAgICAgICAgICAgICAgc2tpcFBlcm1pc3Npb25DaGVjazogZmFsc2UsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oICgpID0+IHsgY29uc29sZS5sb2coXCJTY2FubmluZyBjb21wbGV0ZVwiKX0pXG4gICAgICAgICAgICAuY2F0Y2goIChlKSA9PiB7IGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgZXJyb3JcIixlKSB9ICk7IFxuICAgICAgICB9ICxcblxuICAgICAgICBoYW5kbGVEaXNjb3ZlcmVkOiBmdW5jdGlvbihkZXZpY2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRk9VTkQgXCIsIGRldmljZS5VVUlELCBkZXZpY2UubmFtZSwgZGV2aWNlLlJTU0kpO1xuICAgICAgICB9ICxcbiAgICBcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb21lVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgUmVwb3J0Vmlld01vZGVsID0gcmVxdWlyZShcIi4vcmVwb3J0LXZpZXctbW9kZWxcIik7XG52YXIgcmVwb3J0Vmlld01vZGVsID0gbmV3IFJlcG9ydFZpZXdNb2RlbCgpO1xuXG5mdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3MpIHtcblx0dmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuXHRwYWdlLmJpbmRpbmdDb250ZXh0ID0gcmVwb3J0Vmlld01vZGVsO1xufVxuXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3JlcG9ydC9yZXBvcnQtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3JlcG9ydC9yZXBvcnQtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIlxcbiAgICB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJSZXBvcnRcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9J3RydWUnXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIkdpdmUgYWR2aWNlIHN1Y2ggYXMgY29udGFjdCBkb2N0b3IsIHNlbGYtaXNvbGF0ZVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9J3RydWUnXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIk9mZmVyIHRvIHJlcG9ydCB0byBzdGF0ZSBvciBsb2NhbCBhdXRob3JpdHksIGdldHRpbmcgbmFtZS9hZGRyZXNzIG9wdGlvbmFsbHlcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHRXcmFwPSd0cnVlJ1xcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJBbGwgYnV0dG9ucyBnbyBiYWNrIHRvIHN0YXR1cyBwYWdlXFxcIiAvPlxcbiAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXBvcnQvcmVwb3J0LXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vdmlld3MvcmVwb3J0L3JlcG9ydC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxuZnVuY3Rpb24gUmVwb3J0Vmlld01vZGVsKCkge1xuXHR2YXIgdmlld01vZGVsID0gb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcblxuXHR9KTtcblxuXHRyZXR1cm4gdmlld01vZGVsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcG9ydFZpZXdNb2RlbDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9yZXBvcnQvcmVwb3J0LXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9yZXBvcnQvcmVwb3J0LXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG52YXIgU3RhdHVzVmlld01vZGVsID0gcmVxdWlyZShcIi4vc3RhdHVzLXZpZXctbW9kZWxcIik7XG52YXIgc3RhdHVzVmlld01vZGVsID0gbmV3IFN0YXR1c1ZpZXdNb2RlbCgpO1xuXG5mdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3MpIHtcblx0dmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuXHRwYWdlLmJpbmRpbmdDb250ZXh0ID0gc3RhdHVzVmlld01vZGVsO1xufVxuXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIlxcbiAgICB4bWxucz1cXFwiaHR0cDovL3d3dy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJTdGF0dXNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG5cXHRcXHRcXHQ8IS0tIEJ1dHRvbiBzaG91bGQgYmUgZ3JlZW4veWVsbG93L3Jldy9ibGFjay93aGl0ZXIgbm8gZXhwb3NlL3Bvc3NpYmxlL2V4cG9zdGVkL3NpY2svb3ZlciBpdCAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIGlkPSdzdGF0dXNidG4nIGNsYXNzPSdzdGF0dXNidG4nXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIk5vIEV4cG9zdXJlIERldGVjdGVkXFxcIiB0YXA9XFxcInt7IG9uQnV0dG9uVGFwIH19XFxcIlxcbiAgICAgICAgICAgICAgICB3aWR0aD1cXFwiNzAlXFxcIiBoZWlnaHQ9JzQwJyBiYWNrZ3JvdW5kQ29sb3I9XFxcImdyZWVuXFxcIlxcbiAgICAgICAgICAgICAgICBjb2xvcj0nd2hpdGUnIC8+XFxuICAgICAgICAgICAgPFRleHRWaWV3IGVkaXRhYmxlPVxcXCJmYWxzZVxcXCIgaWQ9J3N0YXR1c2V4cGxhaW4nXFxuICAgICAgICAgICAgICAgIGNsYXNzPSdzdGF0dXNleHBsYWluJz5cXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiTm8gZXhwb3N1cmUgdG8gYW55b25lIHdobyBpcyBjb250YWdpb3VzIHdpdGggdGhlIENvdmlkMTkgdmlydXMgaGFzIGJlZW4gZGV0ZWN0ZWQuIFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XFxuICAgICAgICAgICAgPC9UZXh0Vmlldz5cXG4gICAgICAgICAgICA8VGV4dFZpZXcgZWRpdGFibGU9XFxcImZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXG4gICAgICAgICAgICAgICAgICAgIDxTcGFuXFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cXFwiQ2xpY2sgb24gdGhlIHN0YXR1cyB0byBtYW51YWxseSB1cGRhdGUuICBBdXRvbWF0aWMgdXBkYXRlcyBvY2N1ciBldmVyeSBob3VyIG9yIHNvLiBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcbiAgICAgICAgICAgIDwvVGV4dFZpZXc+XFxuXFx0XFx0XFx0PCEtLSBzaG91bGQgYmUgcmVwb3J0IHlvdXJzZWxmIGJldHRlciBpZiB0aGV5IGFyZSBzaWNrIC0tPlxcbiAgICAgICAgICAgIDxCdXR0b24gaWQ9J3NpY2tidG4nIHRleHQ9XFxcIlJlcG9ydCBZb3Vyc2VsZiBTaWNrXFxcIiB0YXA9XFxcInt7IG9uQnV0dG9uVGFwIH19XFxcIlxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9J3JlZCcgY29sb3I9J3doaXRlJyAvPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiUHJlZmVyZW5jZXNcXFwiIHRhcD1cXFwie3sgb25CdXR0b25UYXAgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQWJvdXRcXFwiIHRhcD1cXFwie3sgYWJvdXRCdXR0b25UYXAgfX1cXFwiIC8+IFxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi92aWV3cy9zdGF0dXMvc3RhdHVzLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG5mdW5jdGlvbiBTdGF0dXNWaWV3TW9kZWwoKSB7XG5cdHZhciB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIG9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9LFxuXG5cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0dXNWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc3RhdHVzL3N0YXR1cy12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc3RhdHVzL3N0YXR1cy12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpO1xudmFyIFN5bXB0b21zVmlld01vZGVsID0gcmVxdWlyZShcIi4vc3ltcHRvbXMtdmlldy1tb2RlbFwiKTtcbnZhciBzeW1wdG9tc1ZpZXdNb2RlbCA9IG5ldyBTeW1wdG9tc1ZpZXdNb2RlbCgpO1xuXG5mdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3MpIHtcblx0dmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuXHRwYWdlLmJpbmRpbmdDb250ZXh0ID0gc3ltcHRvbXNWaWV3TW9kZWw7XG59XG5cbmV4cG9ydHMucGFnZUxvYWRlZCA9IHBhZ2VMb2FkZWQ7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc3ltcHRvbXMvc3ltcHRvbXMtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3N5bXB0b21zL3N5bXB0b21zLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIiBjbGFzcz1cXFwicGFnZVxcXCJcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly93d3cubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiU3ltcHRvbXNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9J3RydWUnXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIkNoZWNrIGxpc3Qgb2Ygc3ltYm9scywgaW5wdXQgZmllbGQgZm9yIGRhdGUgc3RhcnRlZCwgY2FuY2VsIGFuZCBhY2NlcHQgYnV0dG9uc1xcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dFdyYXA9J3RydWUnXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcIkNhbmNlbCBnb2VzIHRvIHN0YXR1cywgYWNjZXB0IGdvZXMgdG8gcmVwb3J0XFxcIiAvPlxcbiAgICAgICAgICAgIDwhLS1BZGQgeW91ciBwYWdlIGNvbnRlbnQgaGVyZS0tPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zeW1wdG9tcy9zeW1wdG9tcy1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL3N5bXB0b21zL3N5bXB0b21zLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG5mdW5jdGlvbiBTeW1wdG9tc1ZpZXdNb2RlbCgpIHtcblx0dmFyIHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG5cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTeW1wdG9tc1ZpZXdNb2RlbDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zeW1wdG9tcy9zeW1wdG9tcy12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc3ltcHRvbXMvc3ltcHRvbXMtdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBXZWxsVmlld01vZGVsID0gcmVxdWlyZShcIi4vd2VsbC12aWV3LW1vZGVsXCIpO1xudmFyIHdlbGxWaWV3TW9kZWwgPSBuZXcgV2VsbFZpZXdNb2RlbCgpO1xuXG5mdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3MpIHtcblx0dmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcblxuXHRwYWdlLmJpbmRpbmdDb250ZXh0ID0gd2VsbFZpZXdNb2RlbDtcbn1cblxuZXhwb3J0cy5wYWdlTG9hZGVkID0gcGFnZUxvYWRlZDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy93ZWxsL3dlbGwtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3dlbGwvd2VsbC1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIldlbGxcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPC9BY3Rpb25CYXI+XFxuXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJob21lLXBhbmVsXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwiRW5zdXJlIHBlcnNvbiBpcyBmZWVsaW5nIGhlYWx0aHkgYWdhaW4uICBBc2sgd2hlbj8gVGVsbCB0byBzZWxmIGlzb2xhdGUgZm9yIGsgbW9yZSBkYXlzXFxcIlxcbiAgICAgICAgICAgICAgICB0ZXh0V3JhcD0ndHJ1ZScgLz5cXG4gICAgICAgICAgICA8TGFiZWxcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwiQWdyZWVkIGJ1dHRvbiByZXBvcnRzIGhlYWx0aHkgYW5kIGdvZXMgYmFjayB0byBzdGF0dXMgcGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgdGV4dFdyYXA9J3RydWUnIC8+XFxuICAgICAgICAgICAgPCEtLUFkZCB5b3VyIHBhZ2UgY29udGVudCBoZXJlLS0+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3dlbGwvd2VsbC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL3dlbGwvd2VsbC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcblxuZnVuY3Rpb24gV2VsbFZpZXdNb2RlbCgpIHtcblx0dmFyIHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG5cblx0fSk7XG5cblx0cmV0dXJuIHZpZXdNb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXZWxsVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3dlbGwvd2VsbC12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvd2VsbC93ZWxsLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL2RhdGEvb2JzZXJ2YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdXRpbHMvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=