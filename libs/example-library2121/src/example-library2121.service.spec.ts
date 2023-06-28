import { Test, TestingModule } from '@nestjs/testing';
import { ExampleLibrary2121Service } from './example-library2121.service';

describe('ExampleLibrary2121Service', () => {
  let service: ExampleLibrary2121Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleLibrary2121Service],
    }).compile();

    service = module.get<ExampleLibrary2121Service>(ExampleLibrary2121Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
