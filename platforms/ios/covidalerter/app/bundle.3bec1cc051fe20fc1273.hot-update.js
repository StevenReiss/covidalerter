webpackHotUpdate("bundle",{

/***/ "./views/home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var HomeViewModel = __webpack_require__("./views/home/home-view-model.js");
var homeViewModel = new HomeViewModel();

function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = homeViewModel;
}


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

exports.pageLoaded = pageLoaded;
exports.checkBlueTooth = checkBLueTooth;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/home/home-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/home/home-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9ob21lL2hvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUFvQixtQkFBTyxDQUFDLGlDQUFtQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLGtDQUFrQztBQUNwRCxvQkFBb0Isa0NBQWtDLEc7QUFDdEQsQzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsb0RBQW9EO0FBQy9FLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS4zYmVjMWNjMDUxZmUyMGZjMTI3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEhvbWVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9ob21lLXZpZXctbW9kZWxcIik7XG52YXIgaG9tZVZpZXdNb2RlbCA9IG5ldyBIb21lVmlld01vZGVsKCk7XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJncykge1xuICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gaG9tZVZpZXdNb2RlbDtcbn1cblxuXG5mdW5jdGlvbiBjaGVja0JsdWVUb290aCgpXG57XG4gICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxuLnRoZW4oKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZD8gXCIgKyBlKSlcbi5jYXRjaCgoZSkgPT4gY29uc29sZS5sb2coXCJFbmFibGVkIGZhaWxlZFwiLGUpKTtcbiAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tcIik7XG4gICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xuXHRzZXJ2aWNkVVVJRHM6IFtdLFxuXHRzZWNvbmRzOiA1LFxuXHRvbkRpc2NvdmVyZWQ6IGhhbmRsZURpc2NvdmVyZWQsXG5cdHNraXBQZXJtaXNzaW9uQ2hlY2s6IHRydWUsXG4gICAgfSlcbiAgICAudGhlbiggKCkgPT4geyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbXBsZXRlXCIpfSlcbiAgICAuY2F0Y2goIChlKSA9PiB7IGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgZXJyb3JcIixlKSB9ICk7IFxufSBcblxuXG5cbmZ1bmN0aW9uIGhhbmRsZURpc2NvdmVyZWQoZGV2aWNlKVxue1xuICAgIGNvbnNvbGUubG9nKFwiRk9VTkQgXCIsIGRldmljZS5VVUlELCBkZXZpY2UubmFtZSwgZGV2aWNlLlJTU0kpO1xufVxuXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xuZXhwb3J0cy5jaGVja0JsdWVUb290aCA9IGNoZWNrQkx1ZVRvb3RoO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2hvbWUvaG9tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvaG9tZS9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==