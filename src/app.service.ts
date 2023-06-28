import { Injectable } from '@nestjs/common'
import { MailService } from './mail/mail.service'
// import * as kcadmin from '@keycloak/keycloak-admin-client'

@Injectable()
export class AppService {

  constructor(private mailService: MailService) {}

  async getHello (): Promise<any> {

    // const temp = kcadmin.default

  
    // const kcAdminClient = new temp()

    // await kcAdminClient.auth({
    //   username: 'admin',
    //   password: 'admin',
    //   grantType: 'password',
    //   clientId: 'nodejs-microservice',
    //   totp: '123456', // optional Time-based One-time Password if OTP is required in authentication flow
    // })

    console.log('------------------------------------------------')
    await this.mailService.sendUserConfirmation({email: 'shabs2196@gmail.com', name: 'shabs'}, 'token');
    return 'Hello Worladasdd!'
  }
}
@Injectable()
export class AppService1 {
  getHello (): { hai: number } {
    return { hai: 12345 }
  }
}


// curl --location --request POST 'http://localhost:8080/realms/Demo-Realm/protocol/openid-connect/token' \
// --header 'Content-Type: application/x-www-form-urlencoded' \
// --data-urlencode 'username=admin' \
// --data-urlencode 'password=admin' \
// --data-urlencode 'grant_type=password' \
// --data-urlencode 'client_id=nodejs-microservice'

// eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJEM0JlTFN1UGZ6MVhfSklUUXgzSnRVTDNBejVzUXhGdVNDSXJBV184cjE4In0.eyJleHAiOjE2ODM1MjQ5NzUsImlhdCI6MTY4MzUyNDkxNSwianRpIjoiMDE5ZDkyMDEtYjcyMS00NTc0LTllMzQtMGIyMDg1Y2UxNWM5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3NmRjMWUxYi02MGE3LTQ4YjQtYmJkNS0wZjU3NGRkYjc4YjQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiZTc1MzM0NjYtNWMxYy00NGY4LTgyMzctZWY2Njk0MTUwNzA0IiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImU3NTMzNDY2LTVjMWMtNDRmOC04MjM3LWVmNjY5NDE1MDcwNCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4ifQ.dWV0YuYm7rhcsXKOM9HxvFaoSXFvmMJFPzUmybz-90qK0dcEfb-Z_57e-kklqKYWtsEYkyQg9GHEU9o0wHcxX47uk55aisVhfd5u8zy4MYS6cOmkvUbhfmW1JWEejidHLuYOup9NSpjOrr2ND34usu1BEPSHWyngmv_yU0717xK9Ghi1XEly57LkaiPds36Glc8434u8IMmnFDgFw7Hn5kx6fRIBAZEYfMkkUkp7xAO4H_iyIeCpodgielhzVMlWT4oPdbsnKtK8UwUyHmYcmo1U6rE6T9wKIMy1B2bgFlRerjlR3Po18Ex2vJHtvy-sUCbzH0aZA-sw2YkXr4HPug


// curl -k -X POST http://localhost:8080/admin/realms/testrealm/users -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJEM0JlTFN1UGZ6MVhfSklUUXgzSnRVTDNBejVzUXhGdVNDSXJBV184cjE4In0.eyJleHAiOjE2ODM1MjQ5NzUsImlhdCI6MTY4MzUyNDkxNSwianRpIjoiMDE5ZDkyMDEtYjcyMS00NTc0LTllMzQtMGIyMDg1Y2UxNWM5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3NmRjMWUxYi02MGE3LTQ4YjQtYmJkNS0wZjU3NGRkYjc4YjQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiZTc1MzM0NjYtNWMxYy00NGY4LTgyMzctZWY2Njk0MTUwNzA0IiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImU3NTMzNDY2LTVjMWMtNDRmOC04MjM3LWVmNjY5NDE1MDcwNCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4ifQ.dWV0YuYm7rhcsXKOM9HxvFaoSXFvmMJFPzUmybz-90qK0dcEfb-Z_57e-kklqKYWtsEYkyQg9GHEU9o0wHcxX47uk55aisVhfd5u8zy4MYS6cOmkvUbhfmW1JWEejidHLuYOup9NSpjOrr2ND34usu1BEPSHWyngmv_yU0717xK9Ghi1XEly57LkaiPds36Glc8434u8IMmnFDgFw7Hn5kx6fRIBAZEYfMkkUkp7xAO4H_iyIeCpodgielhzVMlWT4oPdbsnKtK8UwUyHmYcmo1U6rE6T9wKIMy1B2bgFlRerjlR3Po18Ex2vJHtvy-sUCbzH0aZA-sw2YkXr4HPug" --data '{ "username": "frank", "email": "qwerty@example.com" "enabled": true, "realmRoles": [ "user", "offline_access" ], "attributes": { "uid": ["4010"], "homedir": ["/home/frank"], "shell": ["/sbin/nologin"] } }'