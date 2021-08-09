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
exports.Car = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let Car = class Car {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    graphql_1.Field(),
    __metadata("design:type", String)
], Car.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Car.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", Number)
], Car.prototype, "dailyRent", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", Number)
], Car.prototype, "monthlyRent", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Car.prototype, "mileage", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Car.prototype, "gas", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Car.prototype, "gearType", void 0);
__decorate([
    typeorm_1.Column(),
    graphql_1.Field(),
    __metadata("design:type", String)
], Car.prototype, "image", void 0);
Car = __decorate([
    typeorm_1.Entity({ name: 'cars' }),
    graphql_1.ObjectType()
], Car);
exports.Car = Car;
//# sourceMappingURL=car.js.map