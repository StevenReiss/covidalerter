webpackHotUpdate("bundle",{

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
                skipPermissionCheck: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9ob21lL2hvbWUtdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFFQUF1QixtQkFBTyxDQUFDLGtDQUFrQztBQUNqRSxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7QUFDckQsZ0JBQWdCLG1CQUFPLENBQUMscURBQXdCOzs7QUFHaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwwQkFBMEIsa0NBQWtDO0FBQzVELDRCQUE0QixrQ0FBa0MsRztBQUM5RCxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVULEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwwREFBMEQ7QUFDckYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjhiNWZjMjk3ZDg3YTQwZWRhZDRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUnKTtcbnZhciBibHVldG9vdGggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWJsdWV0b290aFwiKS5nZXRCbHVldG9vdGhJbnN0YW5jZSgpO1xuXG5cbmZ1bmN0aW9uIEhvbWVWaWV3TW9kZWwoKSB7XG4gIHZhciB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgIG9uQnV0dG9uVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlByb2NlZWQgQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9zdGF0dXMvc3RhdHVzLXBhZ2VcIixcbiAgICAgICAgY29udGV4dDoge31cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWJvdXRCdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWJvdXQgQnV0dG9uIHdhcyBwcmVzc2VkXCIpO1xuICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9hYm91dC9hYm91dC1wYWdlXCIsXG4gICAgICAgIGNvbnRleHQ6IHt9XG4gICAgICB9ICk7XG59LFxuICAgICAgY2hlY2tCdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVjayBCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgICAgIHRoaXMuY2hlY2tCbHVlVG9vdGgoKTtcbiAgICAgICAgfSxcblxuXG4gICAgICAgY2hlY2tCbHVlVG9vdGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxuICAgICAgICAudGhlbigoZSkgPT4gY29uc29sZS5sb2coXCJFbmFibGVkPyBcIiArIGUpKVxuICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKFwiRW5hYmxlZCBmYWlsZWRcIixlKSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDSEVDS1wiKTtcbiAgICAgICAgICAgIGJsdWV0b290aC5zdGFydFNjYW5uaW5nKHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNkVVVJRHM6IFtdLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IDUsXG4gICAgICAgICAgICAgICAgb25EaXNjb3ZlcmVkOiB0aGlzLmhhbmRsZURpc2NvdmVyZWQsXG4gICAgICAgICAgICAgICAgc2tpcFBlcm1pc3Npb25DaGVjazogdHJ1ZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggKCkgPT4geyBjb25zb2xlLmxvZyhcIlNjYW5uaW5nIGNvbXBsZXRlXCIpfSlcbiAgICAgICAgICAgIC5jYXRjaCggKGUpID0+IHsgY29uc29sZS5sb2coXCJTY2FubmluZyBlcnJvclwiLGUpIH0gKTsgXG4gICAgICAgIH0gLFxuXG4gICAgICAgIGhhbmRsZURpc2NvdmVyZWQ6IGZ1bmN0aW9uKGRldmljZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGT1VORCBcIiwgZGV2aWNlLlVVSUQsIGRldmljZS5uYW1lLCBkZXZpY2UuUlNTSSk7XG4gICAgICAgIH0gLFxuICAgIFxuICB9KTtcblxuICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVWaWV3TW9kZWw7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9