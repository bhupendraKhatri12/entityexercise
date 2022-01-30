"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Tag = void 0;
var product_entity_1 = require("../../product/entities/product.entity");
var typeorm_1 = require("typeorm");
var category_entity_1 = require("../../category/entities/category.entity");
var Tag = /** @class */ (function () {
    function Tag() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Tag.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Tag.prototype, "name");
    __decorate([
        typeorm_1.Column({ type: Date })
    ], Tag.prototype, "createAt");
    __decorate([
        typeorm_1.Column({ type: Date })
    ], Tag.prototype, "updatedAt");
    __decorate([
        typeorm_1.Column()
    ], Tag.prototype, "userid");
    __decorate([
        typeorm_1.ManyToMany(function () { return category_entity_1.Category; }, function (category) { return category.tags; })
    ], Tag.prototype, "categories");
    __decorate([
        typeorm_1.ManyToMany(function () { return product_entity_1.Product; }, function (products) { return products.tags; })
    ], Tag.prototype, "products");
    Tag = __decorate([
        typeorm_1.Entity("Tag")
    ], Tag);
    return Tag;
}());
exports.Tag = Tag;
