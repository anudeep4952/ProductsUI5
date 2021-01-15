sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/routing/History"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,MessageToast,History) {
         "use strict";
        
           
         
		return Controller.extend("ns.HTML5Module.controller.View2", {
             
            onInit: function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    var x=oRouter.getRoute("RouteView2").attachMatched(this._onRouteMatched, this);
                    
            },

            _onRouteMatched: function(oEvent) {
                    var sObject = oEvent.getParameter("arguments").object;
                    var pid = JSON.parse(sObject) ;
                    var productsData= this.getOwnerComponent().getModel("productsModel").oData.products;
                    let dat = productsData.filter(function (e) {
                             return e.ProductId === pid.ProductId;
                        });
                    var productData=new sap.ui.model.json.JSONModel(dat[0]);
                    this.getView().setModel(productData);    
            },

            onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView1", true);
			}
		}

        });
	});
