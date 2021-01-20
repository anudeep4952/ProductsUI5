sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/Sorter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/model/FilterType",
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller,MessageToast,Sorter, Filter, FilterOperator, FilterType) {
         "use strict";

         
		return Controller.extend("ns.HTML5Module.controller.View1", {
            
           

            
            onInit:function(){
			    // var jModel=new sap.ui.model.json.JSONModel();
                // jModel.setData(dataObject);
                 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    var x=oRouter.getRoute("RouteView1").attachMatched(this._onRouteMatched, this);
                    
            },

            _onRouteMatched: function(oEvent) {
                    var sObject = oEvent.getParameter("arguments").username;
                    var pid = JSON.parse(sObject) ;
                    var username=pid["myUsername"];

                var dataModel = this.getOwnerComponent().getModel("productsModel");
                this.getView().byId('ProductTable').setModel(dataModel,"dataModel");
                this.byId('listViewId').setModel(dataModel,"dataModel");
                MessageToast.show(`Hello ${username} !!! Data Loaded Successfully.`,{duration:5000});
 
            },
               

            onPress1:function(oEvent){
                     var oItem = oEvent.getSource(); 
                     var obj=oItem.getBindingContext("dataModel").getProperty("ProductId");
                     let dat = dataObject.myProducts.filter(function (e) {
                            return e.ProductId === obj;
                        });
                     this.getOwnerComponent().getRouter().navTo("RouteView2",{object:JSON.stringify({ProductId:obj})});
            },
            
            onSearch:function(){
                var sValue = this.byId("searchField").getValue();
                var oFilter = new Filter("Name", FilterOperator.Contains, sValue);
                var tView=this.byId('ProductTable');
                var lView=this.byId('listViewId');

                tView.getBinding("items").filter(oFilter,FilterType.Application);
                lView.getBinding("items").filter(oFilter,FilterType.Application);
            },

            onSort:function(){
                var tView=this.byId('ProductTable');
                var lView=this.byId('listViewId');

				var aStates = [undefined, "asc", "desc"];
				var aStateTextIds = ["Original", "Ascending", "Descending"];
				var sMessage;
				var iOrder = tView.getModel("dataModel").getProperty("/order");
                iOrder = (iOrder + 1) % aStates.length;
                var sOrder = aStates[iOrder];

                tView.getModel("dataModel").setProperty("/order", iOrder);
                tView.getBinding("items").sort(sOrder && new Sorter("Price", sOrder === "desc"));
                
                lView.getModel("dataModel").setProperty("/order", iOrder);
                lView.getBinding("items").sort(sOrder && new Sorter("Price", sOrder === "desc"));

                MessageToast.show("Sort Order : " + aStateTextIds[iOrder]);
 
            },

            logout:function(){

                 this.getOwnerComponent().getRouter().navTo("LoginRoute");
            }

          
            

        });
	});
