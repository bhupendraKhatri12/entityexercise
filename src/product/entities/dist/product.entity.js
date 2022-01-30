"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var brand_entity_1 = require("../../brand/entities/brand.entity");
var category_entity_1 = require("../../category/entities/category.entity");
var tag_entity_1 = require("../../tag/entities/tag.entity");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Product.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "skuNumber");
    __decorate([
        typeorm_1.OneToOne(function () { return brand_entity_1.Brand; }, function (brand) { return brand.id; })
    ], Product.prototype, "brandid");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "countryOfOrigin");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "userid");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "categoriesId");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "abv");
    __decorate([
        typeorm_1.Column({ type: Date })
    ], Product.prototype, "createdAt");
    __decorate([
        typeorm_1.Column({ type: Date })
    ], Product.prototype, "updateAt");
    __decorate([
        typeorm_1.ManyToOne(function () { return category_entity_1.Category; }, function (categories) { return categories.product; })
    ], Product.prototype, "categories");
    __decorate([
        typeorm_1.ManyToMany(function () { return tag_entity_1.Tag; }, function (tags) { return tags.products; }),
        typeorm_1.JoinTable()
    ], Product.prototype, "tags");
    Product = __decorate([
        typeorm_1.Entity("Product")
    ], Product);
    return Product;
}());
exports.Product = Product;
