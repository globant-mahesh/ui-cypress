"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SEARCH_FIELD = '[name="q"]';
var RESULT_CONTAINER = '//*[@id="center_col"]';
var SearchPage = /** @class */ (function () {
    function SearchPage() {
    }
    SearchPage.search = function (keyword) {
        cy.get(SEARCH_FIELD).type(keyword).type("{enter}");
    };
    return SearchPage;
}());
exports.default = SearchPage;
