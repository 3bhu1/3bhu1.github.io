sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("zlhsl.controller.App", {
   	
   	onInit: function () {
			
		},
	
	onBeforeRouteMatched: function(oEvent) {
			
		},


	onRouteMatched: function (oEvent) {
			var sRouteName = oEvent.getParameter("name"),
				oArguments = oEvent.getParameter("arguments");

			// Save the current route name
			this.currentRouteName = sRouteName;
			this.currentProduct = oArguments.product;
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