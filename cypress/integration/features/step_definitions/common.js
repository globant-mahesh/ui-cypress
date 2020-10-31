"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
(0, steps_1.Before)({ tags: "@home" }, function () {
    cy.log("before @home scenario");
});
(0, steps_1.After)({ tags: "@home" }, function () {
    cy.log("after @home scenario");
});
