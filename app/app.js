let application = require("tns-core-modules/application");
let timerModule = require("tns-core-modules/timer");
let bluetooth = require("nativescript-bluetooth").getBluetoothInstance();

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




