"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductTagsTag = void 0;
var tag_entity_1 = require("src/tags/entities/tag.entity");
var typeorm_1 = require("typeorm");
var product_entity_1 = require("../../product/entities/product.entity");
var ProductTagsTag = /** @class */ (function () {
    function ProductTagsTag() {
    }
    __decorate([
        typeorm_1.OneToMany(function (type) { return product_entity_1.Product; }, function (product) { return product.id; })
    ], ProductTagsTag.prototype, "productid");
    __decorate([
        typeorm_1.OneToMany(function (type) { return tag_entity_1.Tag; }, function (product) { return product.id; })
    ], ProductTagsTag.prototype, "tagsid");
    ProductTagsTag = __decorate([
        typeorm_1.Entity('ProductTagsTag')
    ], ProductTagsTag);
    return ProductTagsTag;
}());
exports.ProductTagsTag = ProductTagsTag;
