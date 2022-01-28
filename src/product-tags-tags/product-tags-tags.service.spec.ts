import { Test, TestingModule } from '@nestjs/testing';
import { ProductTagsTagsService } from './product-tags-tags.service';

describe('ProductTagsTagsService', () => {
  let service: ProductTagsTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTagsTagsService],
    }).compile();

    service = module.get<ProductTagsTagsService>(ProductTagsTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
