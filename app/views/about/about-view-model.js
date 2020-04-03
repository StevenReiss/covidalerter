var observableModule = require("tns-core-modules/data/observable");

function AboutViewModel() {
	var viewModel = observableModule.fromObject({
    htmlString: "<div><h1>HtmlView demo</h1><h2>in NativeScript App</h2></div>",


	});

	return viewModel;
}

module.exports = AboutViewModel;
