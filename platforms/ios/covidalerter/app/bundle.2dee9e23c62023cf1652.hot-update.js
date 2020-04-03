webpackHotUpdate("bundle",{

/***/ "./views/home/home-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var observableModule = __webpack_require__("tns-core-modules/data/observable");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");

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
        checkBlueTooth();
        },
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9ob21lL2hvbWUtdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFFQUF1QixtQkFBTyxDQUFDLGtDQUFrQztBQUNqRSxrQkFBa0IsbUJBQU8sQ0FBQywyQkFBMkI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiwwREFBMEQ7QUFDckYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjJkZWU5ZTIzYzYyMDIzY2YxNjUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUnKTtcblxuZnVuY3Rpb24gSG9tZVZpZXdNb2RlbCgpIHtcbiAgdmFyIHZpZXdNb2RlbCA9IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgb25CdXR0b25UYXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvY2VlZCBCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL3N0YXR1cy9zdGF0dXMtcGFnZVwiLFxuICAgICAgICBjb250ZXh0OiB7fVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhYm91dEJ1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJBYm91dCBCdXR0b24gd2FzIHByZXNzZWRcIik7XG4gICAgICBmcmFtZU1vZHVsZS5GcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2Fib3V0L2Fib3V0LXBhZ2VcIixcbiAgICAgICAgY29udGV4dDoge31cbiAgICAgIH0gKTtcbn0sXG4gICAgICBjaGVja0J1dHRvblRhcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNrIEJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICAgICAgY2hlY2tCbHVlVG9vdGgoKTtcbiAgICAgICAgfSxcbiAgICBcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIb21lVmlld01vZGVsO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==