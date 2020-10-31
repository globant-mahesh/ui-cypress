"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environments = void 0;
var Environments = /** @class */ (function () {
    function Environments() {
    }
    Environments.prototype.getEnv = function () {
        var env = Cypress.env('ENV');
        switch (env) {
            case 'dev':
                return 'https://www.cypress.io';
            case 'qa':
                return 'https://www.google.com';
            case 'stage':
                return '<my-url>';
            default:
                return 'https://www.stackoverflow.com';
        }
    };
    return Environments;
}());
exports.Environments = Environments;
