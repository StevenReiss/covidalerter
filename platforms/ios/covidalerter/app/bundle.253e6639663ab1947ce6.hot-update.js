webpackHotUpdate("bundle",{

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
	skipPermissionCheck: true,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsWUFBWSxtQkFBTyxDQUFDLDBFQUF1RDs7O0FBRzNFLFlBQVksSUFBVTtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx1REFBOEI7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGFBQWEsS0FBSztBQUM1RDtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIseUpBQWtJO0FBQzlKO0FBQ0EsZ0JBQWdCLElBQVU7QUFDMUIscUQ7QUFDQSxtRkFBbUYsUUFBUyxRO0FBQzVGLGlCQUFpQjtBQUNqQjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsc0NBQXNDO0FBQ3RELDBCQUEwQixtQkFBTyxDQUFDLDhCQUE4QjtBQUNoRSxrQkFBa0IsbUJBQU8sQ0FBQyx3QkFBd0I7QUFDbEQsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOztBQUVoRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixrQ0FBa0M7QUFDcEQsb0JBQW9CLGtDQUFrQyxHO0FBQ3RELEM7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQSxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjI1M2U2NjM5NjYzYWIxOTQ3Y2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5sZXQgdGltZXJNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiKTtcbmxldCBibHVldG9vdGggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJsdWV0b290aFwiKS5nZXRCbHVldG9vdGhJbnN0YW5jZSgpO1xuXG5jb25zb2xlLmxvZyhcIlNUQVJUXCIpO1xuXG5cblxuZnVuY3Rpb24gY2hlY2tCbHVlVG9vdGgoKVxue1xuICAgICAgICBibHVldG9vdGguaXNCbHVldG9vdGhFbmFibGVkKClcbi50aGVuKChlKSA9PiBjb25zb2xlLmxvZyhcIkVuYWJsZWQ/IFwiICsgZSkpXG4uY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZCBmYWlsZWRcIixlKSk7XG4gIFxuICAgICAgICBjb25zb2xlLmxvZyhcIkNIRUNLXCIpO1xuICAgIGJsdWV0b290aC5zdGFydFNjYW5uaW5nKHtcblx0c2VydmljZFVVSURzOiBbXSxcblx0c2Vjb25kczogNSxcblx0b25EaXNjb3ZlcmVkOiBoYW5kbGVEaXNjb3ZlcmVkLFxuXHRza2lwUGVybWlzc2lvbkNoZWNrOiB0cnVlLFxuICAgIH0pXG4gICAgLnRoZW4oICgpID0+IHsgY29uc29sZS5sb2coXCJTY2FubmluZyBjb21wbGV0ZVwiKX0pXG4gICAgLmNhdGNoKCAoZSkgPT4geyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGVycm9yXCIsZSkgfSApOyBcbn0gXG5cblxuXG5mdW5jdGlvbiBoYW5kbGVEaXNjb3ZlcmVkKGRldmljZSlcbntcbiAgICBjb25zb2xlLmxvZyhcIkZPVU5EIFwiLCBkZXZpY2UuVVVJRCwgZGV2aWNlLm5hbWUsIGRldmljZS5SU1NJKTtcbn1cblxubGV0IGJsdWVjaGVja19pdmFsID0gdGltZXJNb2R1bGUuc2V0SW50ZXJ2YWwoY2hlY2tCbHVlVG9vdGgsNjAwMDApO1xuXG5cblxuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuXG5cblxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==