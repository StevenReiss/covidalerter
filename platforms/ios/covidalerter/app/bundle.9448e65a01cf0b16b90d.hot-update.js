webpackHotUpdate("bundle",{

/***/ "./views/home/home-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var bluetooth = __webpack_require__("../node_modules/nativescript-bluetooth/bluetooth.js");


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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9ob21lL2hvbWUtdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFFQUF1QixtQkFBTyxDQUFDLGtDQUFrQztBQUNqRSxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7QUFDckQsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOzs7QUFHaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwwQkFBMEIsa0NBQWtDO0FBQzVELDRCQUE0QixrQ0FBa0MsRztBQUM5RCxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVULEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwwREFBMEQ7QUFDckYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjk0NDhlNjVhMDFjZjBiMTZiOTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUnKTtcbnZhciBibHVldG9vdGggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJsdWV0b290aFwiKTtcblxuXG5mdW5jdGlvbiBIb21lVmlld01vZGVsKCkge1xuICB2YXIgdmlld01vZGVsID0gb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBvbkJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJQcm9jZWVkIEJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwidmlld3Mvc3RhdHVzL3N0YXR1cy1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHt9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFib3V0QnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkFib3V0IEJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvYWJvdXQvYWJvdXQtcGFnZVwiLFxuICAgICAgICBjb250ZXh0OiB7fVxuICAgICAgfSApO1xufSxcbiAgICAgIGNoZWNrQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2sgQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgICAgICB0aGlzLmNoZWNrQmx1ZVRvb3RoKCk7XG4gICAgICAgIH0sXG5cblxuICAgICAgIGNoZWNrQmx1ZVRvb3RoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBibHVldG9vdGguaXNCbHVldG9vdGhFbmFibGVkKClcbiAgICAgICAgLnRoZW4oKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZD8gXCIgKyBlKSlcbiAgICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmxvZyhcIkVuYWJsZWQgZmFpbGVkXCIsZSkpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0hFQ0tcIik7XG4gICAgICAgICAgICBibHVldG9vdGguc3RhcnRTY2FubmluZyh7XG4gICAgICAgICAgICAgICAgc2VydmljZFVVSURzOiBbXSxcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiA1LFxuICAgICAgICAgICAgICAgIG9uRGlzY292ZXJlZDogdGhpcy5oYW5kbGVEaXNjb3ZlcmVkLFxuICAgICAgICAgICAgICAgIHNraXBQZXJtaXNzaW9uQ2hlY2s6IGZhbHNlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7IGNvbnNvbGUubG9nKFwiU2Nhbm5pbmcgY29tcGxldGVcIil9KVxuICAgICAgICAgICAgLmNhdGNoKCAoZSkgPT4geyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGVycm9yXCIsZSkgfSApOyBcbiAgICAgICAgfSAsXG5cbiAgICAgICAgaGFuZGxlRGlzY292ZXJlZDogZnVuY3Rpb24oZGV2aWNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZPVU5EIFwiLCBkZXZpY2UuVVVJRCwgZGV2aWNlLm5hbWUsIGRldmljZS5SU1NJKTtcbiAgICAgICAgfSAsXG4gICAgXG4gIH0pO1xuXG4gIHJldHVybiB2aWV3TW9kZWw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSG9tZVZpZXdNb2RlbDtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=