import { Test, TestingModule } from '@nestjs/testing';
import { ProductTagsTagsController } from './product-tags-tags.controller';
import { ProductTagsTagsService } from './product-tags-tags.service';

describe('ProductTagsTagsController', () => {
  let controller: ProductTagsTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTagsTagsController],
      providers: [ProductTagsTagsService],
    }).compile();

    controller = module.get<ProductTagsTagsController>(ProductTagsTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
