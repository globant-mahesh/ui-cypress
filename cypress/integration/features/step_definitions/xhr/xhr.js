"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var steps_1 = require("cypress-cucumber-preprocessor/steps");
var xhr_page_1 = __importDefault(require("../../pages/xhr/xhr_page"));
(0, steps_1.Given)("I open REQRES home page", function () {
    xhr_page_1.default.visit();
});
