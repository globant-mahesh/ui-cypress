"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var home_page_1 = __importDefault(require("../../pages/home/home_page"));
var functions_1 = require("../../../../support/functions");
var url = new functions_1.Environments().getEnv();
(0, steps_1.Given)("I open Google home page", function () {
    home_page_1.default.visit(url);
});
(0, steps_1.Given)("I open AFM home page", function () {
    home_page_1.default.visit(url);
});
(0, steps_1.Then)("I see {string} in the title", function (title) {
    cy.title().should("include", title);
});
