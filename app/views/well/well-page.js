var frameModule = require("tns-core-modules/ui/frame");
var WellViewModel = require("./well-view-model");
var wellViewModel = new WellViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = wellViewModel;
}

exports.pageLoaded = pageLoaded;
