sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("studentsodatav4.controller.View1", {
        onInit() {
            var oModel=this.getOwnerComponent().getModel();
            this.getView().setModel(oModel);
            console.log(oModel,"check");
            let oBindList=oModel.bindList("/Students");
            oBindList.requestContexts().then(function (aContexts){
            aContexts.forEach(oContext=>{
                
            });
            });
            // let aFilter=new sap.ui.model.Filter("Id",sap.ui.model.FilterOperator.EQ,ID);
            oBindList.requestContexts().then(function (aContexts) {
                 aContexts[0].setProperty("branch", "new branch");
                 aContexts[0].setProperty("place","VIZAG");
                 aContexts[1].delete();
            });
            // oBindList.create({
            //     ID: "202594",
            //     branch: "SAPUI5-2",
            //     name: "prabhas",
            //     place: "uk",
            //     school: "osmania university"
            // });

        }
    });
});