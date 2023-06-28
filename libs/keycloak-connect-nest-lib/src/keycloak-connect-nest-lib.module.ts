import { Module } from '@nestjs/common';
import { KeycloakConnectNestLibService } from './keycloak-connect-nest-lib.service';

@Module({
  providers: [KeycloakConnectNestLibService],
  exports: [KeycloakConnectNestLibService],
})
export class KeycloakConnectNestLibModule {}
