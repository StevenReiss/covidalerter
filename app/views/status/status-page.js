var frameModule = require("tns-core-modules/ui/frame");
var StatusViewModel = require("./status-view-model");
var statusViewModel = new StatusViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = statusViewModel;
}

exports.pageLoaded = pageLoaded;
