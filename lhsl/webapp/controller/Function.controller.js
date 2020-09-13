sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("zlhsl.controller.Function", {
   	
   	onInit: function () {
			
		},
	
	onBeforeRouteMatched: function(oEvent) {
			
		},


	onRouteMatched: function (oEvent) {
			
		},
	
	getHelper: function () {
			var oFCL = this.getRootControl().byId('flexibleColumnLayout'),
				oSettings = {
					defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: sap.f.LayoutType.ThreeColumnsMidExpanded,
					initialColumnsCount: 1,
					maxColumnsCount: 3
				};

			return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
		}
		
   });
});