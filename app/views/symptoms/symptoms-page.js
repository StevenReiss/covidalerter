var frameModule = require("tns-core-modules/ui/frame");
var SymptomsViewModel = require("./symptoms-view-model");
var symptomsViewModel = new SymptomsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = symptomsViewModel;
}

exports.pageLoaded = pageLoaded;
