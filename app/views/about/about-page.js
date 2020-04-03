var frameModule = require("tns-core-modules/ui/frame");
var AboutViewModel = require("./about-view-model");
var aboutViewModel = new AboutViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = aboutViewModel;
}

exports.pageLoaded = pageLoaded;
