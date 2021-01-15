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

          var   dataObject={
				"myProducts":[
                    {
		"ProductId": "HT-1000",
		"Category": "LT",
		"MainCategory": "Computer Systems",
		"SupplierName": "Very Best Screens",
		"Weight": "4.2",
		"WeightUnit": "KG",
		"ShortDescription": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
		"Name": "Notebook Basic 15",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1000.jpg",
		"Status": "A",
		"Price": "956",
		"DimensionWidth": "30",
		"DimensionDepth": "18",
		"DimensionHeight": "3",
		"Unit": "cm",
		"CurrencyCode": "EUR"

	},
	{
		"ProductId": "HT-1001",
		"Category": "LT",
		"MainCategory": "Computer Systems",
		"SupplierName": "Very Best Screens",
		"Weight": "4.5",
		"WeightUnit": "KG",
		"ShortDescription": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
		"Name": "Notebook Basic 17",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1001.jpg",
		"Status": "A",
		"Price": "1249",
		"DimensionWidth": "29",
		"DimensionDepth": "17",
		"DimensionHeight": "3.1",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	},
	{
		"ProductId": "HT-1002",
		"Category": "LT",
		"MainCategory": "Computer Systems",
		"SupplierName": "Very Best Screens",
		"Weight": "4.2",
		"WeightUnit": "KG",
		"ShortDescription": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
		"Name": "Notebook Basic 18",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1002.jpg",
		"Status": "A",
		"Price": "1570",
		"DimensionWidth": "28",
		"DimensionDepth": "19",
		"DimensionHeight": "2.5",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	},
	{
		"ProductId": "HT-1003",
		"Category": "LT",
		"MainCategory": "Computer Systems",
		"SupplierName": "Smartcards",
		"Weight": "4.2",
		"WeightUnit": "KG",
		"ShortDescription": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
		"Name": "Notebook Basic 19",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1003.jpg",
		"Status": "A",
		"Price": "1650",
		"DimensionWidth": "32",
		"DimensionDepth": "21",
		"DimensionHeight": "4",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	},
	{
		"ProductId": "HT-1007",
		"Category": "AC",
		"MainCategory": "Computer Components",
		"SupplierName": "Technocom",
		"Weight": "0.2",
		"WeightUnit": "KG",
		"ShortDescription": "Digital Organizer with State-of-the-Art Storage Encryption",
		"Name": "ITelO Vault",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1007.jpg",
		"Status": "D",
		"Price": "299",
		"DimensionWidth": "32",
		"DimensionDepth": "22",
		"DimensionHeight": "3",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	},
	{
		"ProductId": "HT-1010",
		"Category": "AC",
		"MainCategory": "Computer Systems",
		"SupplierName": "Very Best Screens",
		"Weight": "4.3",
		"WeightUnit": "KG",
		"ShortDescription": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
		"Name": "Notebook Professional 15",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1010.jpg",
		"Status": "A",
		"Price": "1999",
		"DimensionWidth": "33",
		"DimensionDepth": "20",
		"DimensionHeight": "3",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	},
	{
		"ProductId": "HT-1011",
		"Category": "LT",
		"MainCategory": "Computer Systems",
		"SupplierName": "Very Best Screens",
		"Weight": "4.1",
		"WeightUnit": "KG",
		"ShortDescription": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
		"Name": "Notebook Professional 17",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1011.jpg",
		"Status": "O",
		"Price": "2299",
		"DimensionWidth": "33",
		"DimensionDepth": "23",
		"DimensionHeight": "2",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	},
	{
		"ProductId": "HT-1020",
		"Category": "AC",
		"MainCategory": "Computer Components",
		"SupplierName": "Technocom",
		"Weight": "0.16",
		"WeightUnit": "KG",
		"ShortDescription": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
		"Name": "ITelO Vault Net",
		"PictureUrl": "sap/ui/demo/mock/images/HT-1020.jpg",
		"Status": "O",
		"Price": "459",
		"DimensionWidth": "10",
		"DimensionDepth": "1.8",
		"DimensionHeight": "17",
		"Unit": "cm",
		"CurrencyCode": "EUR"
	}
			]};
        
		return Controller.extend("ns.HTML5Module.controller.View1", {
            
            onSelectionChange: function (oEvent) {
			MessageToast.show("oEvent.getParameter('item').getText(): '" + oEvent.getParameter("item").getText() + "' selected");

		},

            
            onInit:function(){
			    // var jModel=new sap.ui.model.json.JSONModel();
                // jModel.setData(dataObject);
                var dataModel = this.getOwnerComponent().getModel("productsModel");
                this.getView().byId('ProductTable').setModel(dataModel,"dataModel");
                
            
                this.byId('listViewId').setModel(dataModel,"dataModel");
                MessageToast.show("Data Loaded Successfully.");

            },

            onPress1:function(oEvent){
                     var oItem = oEvent.getSource(); 
                     var obj=oItem.getBindingContext("dataModel").getProperty("ProductId");
                     console.log('hello',obj)
                     let dat = dataObject.myProducts.filter(function (e) {
                            return e.ProductId === obj;
                        });
                     console.log(obj)  
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

          
            

        });
	});