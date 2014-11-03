var generalPlugin = {
	functionName : function(successCallback,
								errorCallback) {
						  cordova.exec(
							// success callback function
							successCallback,
							// error callback function
							errorCallback,
							// name of the native java class
							'GeneralPlugin',
							// name of the action to performed
							'actionName',
							// and this array of arguments to create our entry
							[]);
						},
};
module.exports = generalPlugin;
