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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsWUFBWSxtQkFBTyxDQUFDLDBFQUF1RDs7O0FBRzNFLFlBQVksSUFBVTtBQUN0Qiw4QkFBOEIsbUJBQU8sQ0FBQyx1REFBOEI7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGFBQWEsS0FBSztBQUM1RDtBQUNBO0FBQ0Esa0RBQWtELGFBQWE7QUFDL0QsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIseUpBQWtJO0FBQzlKO0FBQ0EsZ0JBQWdCLElBQVU7QUFDMUIscUQ7QUFDQSxtRkFBbUYsUUFBUyxRO0FBQzVGLGlCQUFpQjtBQUNqQjs7QUFFQSxRQUFRLG1CQUFPLENBQUMsc0NBQXNDO0FBQ3RELDBCQUEwQixtQkFBTyxDQUFDLDhCQUE4QjtBQUNoRSxrQkFBa0IsbUJBQU8sQ0FBQyx3QkFBd0I7QUFDbEQsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOztBQUVoRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixrQ0FBa0M7QUFDcEQsb0JBQW9CLGtDQUFrQyxHO0FBQ3RELEM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RCxLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuYjU1ZTdmMTAzYTE3ZDdlZjQyNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIExpdmVTeW5jXG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgaG90IHVwZGF0ZXMgYXJlIGFwcGxpZWQsIGFzayB0aGUgbW9kdWxlcyB0byBhcHBseSB0aGUgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBpbml0aWFsIGFwcCBzdGFydFxuICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopKD88IVxcLlxcL1xcYnRlc3RzXFxiXFwvLio/KVxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBsZXQgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmxldCB0aW1lck1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCIpO1xubGV0IGJsdWV0b290aCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYmx1ZXRvb3RoXCIpLmdldEJsdWV0b290aEluc3RhbmNlKCk7XG5cbmNvbnNvbGUubG9nKFwiU1RBUlRcIik7XG5cblxuXG5mdW5jdGlvbiBjaGVja0JsdWVUb290aCgpXG57XG4gICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxuLnRoZW4oKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZD8gXCIgKyBlKSlcbi5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJFbmFibGVkIGZhaWxlZFwiLGUpKTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tcIik7XG4gICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xuXHRzZXJ2aWNkVVVJRHM6IFtdLFxuXHRzZWNvbmRzOiA1LFxuXHRvbkRpc2NvdmVyZWQ6IGhhbmRsZURpc2NvdmVyZWQsXG5cdHNraXBQZXJtaXNzaW9uQ2hlY2s6IHRydWUsXG4gICAgfSlcbiAgICAudGhlbiggKCkgPT4geyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbXBsZXRlXCIpfSlcbiAgICAuY2F0Y2goIChlKSA9PiB7IGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgZXJyb3JcIixlKSB9ICk7IFxufSBcblxuXG5mdW5jdGlvbiBoYW5kbGVEaXNjb3ZlcmVkKGRldmljZSlcbntcbiAgICBjb25zb2xlLmxvZyhcIkZPVU5EIFwiLCBkZXZpY2UuVVVJRCwgZGV2aWNlLm5hbWUsIGRldmljZS5SU1NJKTtcbn1cblxubGV0IGJsdWVjaGVja19pdmFsID0gdGltZXJNb2R1bGUuc2V0SW50ZXJ2YWwoY2hlY2tCbHVlVG9vdGgsNjAwMDApO1xuXG5cblxuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuXG5cblxuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==