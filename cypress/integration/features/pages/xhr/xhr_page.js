"use strict";
/// <reference path="../../../../support/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var XHRTest = /** @class */ (function () {
    function XHRTest() {
    }
    XHRTest.visit = function () {
        cy.listenRoute("GET", "/api/users?page=2", "getroute");
        cy.visit("https://reqres.in");
        cy.wait("@getroute");
    };
    return XHRTest;
}());
exports.default = XHRTest;
