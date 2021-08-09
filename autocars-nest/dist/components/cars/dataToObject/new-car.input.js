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
exports.NewCarInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let NewCarInput = class NewCarInput {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], NewCarInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    class_validator_1.Max(1000, {
        message: 'Too high price for daily Rent must be less or equal to 1000',
    }),
    class_validator_1.Min(10, {
        message: 'Too low price for daily Rent must be greater or equal to 10',
    }),
    __metadata("design:type", Number)
], NewCarInput.prototype, "dailyRent", void 0);
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    class_validator_1.Max(10000, {
        message: 'Too high price for Monthly Rent must be less or equal to 10000',
    }),
    class_validator_1.Min(1500, {
        message: 'Too low price for Monthly Rent must be greater or equal to 1500',
    }),
    __metadata("design:type", Number)
], NewCarInput.prototype, "monthlyRent", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], NewCarInput.prototype, "mileage", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], NewCarInput.prototype, "gas", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], NewCarInput.prototype, "gearType", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], NewCarInput.prototype, "image", void 0);
NewCarInput = __decorate([
    graphql_1.InputType()
], NewCarInput);
exports.NewCarInput = NewCarInput;
//# sourceMappingURL=new-car.input.js.map