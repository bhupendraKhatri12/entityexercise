"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Image = void 0;
var product_entity_1 = require("src/product/entities/product.entity");
var typeorm_1 = require("typeorm");
var Image = /** @class */ (function () {
    function Image() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Image.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Image.prototype, "publicid");
    __decorate([
        typeorm_1.Column()
    ], Image.prototype, "url");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (product) { return product.id; })
    ], Image.prototype, "productid");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (product) { return product.createdAt; })
    ], Image.prototype, "createdAt");
    __decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.Product; }, function (product) { return product.updateAt; })
    ], Image.prototype, "updatedAt");
    Image = __decorate([
        typeorm_1.Entity("Image")
    ], Image);
    return Image;
}());
exports.Image = Image;
