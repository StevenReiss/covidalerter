var frameModule = require("tns-core-modules/ui/frame");
var ReportViewModel = require("./report-view-model");
var reportViewModel = new ReportViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = reportViewModel;
}

exports.pageLoaded = pageLoaded;
