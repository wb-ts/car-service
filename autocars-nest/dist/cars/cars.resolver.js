"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cars_service_1 = require("./cars.service");
let CarsResolver = class CarsResolver {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async cars() {
        return 'Hella and welcome to autocars';
    }
};
__decorate([
    graphql_1.Query((returns) => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "cars", null);
CarsResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsResolver);
exports.CarsResolver = CarsResolver;
//# sourceMappingURL=cars.resolver.js.map