"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.visit = function (_url) {
        cy.visit(_url + "/");
        cy.url().should("include", "google.com");
    };
    return HomePage;
}());
exports.default = HomePage;
