import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService, AppService1 } from './app.service'
import { SupertokensService } from './auth/supertokens/supertokens.service'
import { MailModule } from './mail/mail.module'

@Module({
  imports: [MailModule],
  controllers: [AppController],
  providers: [AppService, AppService1, SupertokensService],
})
export class AppModule {}
