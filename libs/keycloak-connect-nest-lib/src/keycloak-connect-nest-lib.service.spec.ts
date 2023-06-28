import { Test, TestingModule } from '@nestjs/testing';
import { KeycloakConnectNestLibService } from './keycloak-connect-nest-lib.service';

describe('KeycloakConnectNestLibService', () => {
  let service: KeycloakConnectNestLibService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeycloakConnectNestLibService],
    }).compile();

    service = module.get<KeycloakConnectNestLibService>(KeycloakConnectNestLibService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
