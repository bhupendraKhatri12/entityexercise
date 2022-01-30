"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductTagsTagsModule = void 0;
var common_1 = require("@nestjs/common");
var product_tags_tags_service_1 = require("./product-tags-tags.service");
var product_tags_tags_controller_1 = require("./product-tags-tags.controller");
var typeorm_1 = require("@nestjs/typeorm");
var product_tags_tag_entity_1 = require("./entities/product-tags-tag.entity");
var ProductTagsTagsModule = /** @class */ (function () {
    function ProductTagsTagsModule() {
    }
    ProductTagsTagsModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([product_tags_tag_entity_1.ProductTagsTag])],
            controllers: [product_tags_tags_controller_1.ProductTagsTagsController],
            providers: [product_tags_tags_service_1.ProductTagsTagsService]
        })
    ], ProductTagsTagsModule);
    return ProductTagsTagsModule;
}());
exports.ProductTagsTagsModule = ProductTagsTagsModule;
