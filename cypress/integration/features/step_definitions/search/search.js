"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var search_page_1 = __importDefault(require("../../pages/search/search_page"));
(0, steps_1.When)("I search for {string}", function (keyword) {
    search_page_1.default.search(keyword);
});
(0, steps_1.Then)("I verify the result for {string}", function (result) {
    cy.contains(result);
    cy.xpath('//*[@id="center_col"]').should("exist");
});
