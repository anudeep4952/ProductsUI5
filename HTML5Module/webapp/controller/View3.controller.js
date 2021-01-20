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

          var   userObjects={
              "anudeep":"1234",
              "deep":"4321",
              "anu":"asdf"
          };
        
		return Controller.extend("ns.HTML5Module.controller.View1", {
            
        
            
            onInit:function(){
			
            },

            onLogin:function(oEvent){
                   
                var username=this.byId("usernameInput").getValue();
                    var password=this.byId("passwordInput").getValue();
                
                    if(userObjects[username]===password){
                        MessageToast.show("Login Sucessfull");   
                        this.getOwnerComponent().getRouter().navTo("RouteView1",{username:JSON.stringify({myUsername:username})});
                    }
                    else{
                        alert("Login UnSucessfull");
                    }
                    
            },
            

        });
	});
