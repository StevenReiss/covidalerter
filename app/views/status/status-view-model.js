var observableModule = require("tns-core-modules/data/observable");

function StatusViewModel() {
	var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },


	});

	return viewModel;
}

module.exports = StatusViewModel;
