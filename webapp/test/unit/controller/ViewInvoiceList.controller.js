/*global QUnit*/

sap.ui.define([
	"comdprb/invoicelist/controller/ViewInvoiceList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewInvoiceList Controller");

	QUnit.test("I should test the ViewInvoiceList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
