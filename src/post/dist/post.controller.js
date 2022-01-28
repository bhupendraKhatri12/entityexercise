"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PostController = void 0;
var common_1 = require("@nestjs/common");
var PostController = /** @class */ (function () {
    function PostController(postService) {
        this.postService = postService;
    }
    PostController.prototype.create = function (createPostDto) {
        return this.postService.create(createPostDto);
    };
    PostController.prototype.findAll = function () {
        return this.postService.findAll();
    };
    PostController.prototype.findOne = function (id) {
        return this.postService.findOne(+id);
    };
    PostController.prototype.update = function (id, updatePostDto) {
        return this.postService.update(+id, updatePostDto);
    };
    PostController.prototype.remove = function (id) {
        return this.postService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], PostController.prototype, "create");
    __decorate([
        common_1.Get()
    ], PostController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], PostController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], PostController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], PostController.prototype, "remove");
    PostController = __decorate([
        common_1.Controller('post')
    ], PostController);
    return PostController;
}());
exports.PostController = PostController;
