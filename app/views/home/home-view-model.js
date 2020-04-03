var observableModule = require("tns-core-modules/data/observable");
var frameModule = require('tns-core-modules/ui/frame');
var bluetooth = require("nativescript-bluetooth").getBluetoothInstance();

 
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
