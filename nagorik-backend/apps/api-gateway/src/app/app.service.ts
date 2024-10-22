import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(@Inject('API_SERVICE') private readonly apiClient: ClientProxy) {}

  pingApiService() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.apiClient.send<string>(pattern, payload).pipe(
      map((response) => {
        const endTs = Date.now();
        return {
          response,
          time: endTs - startTs,
        };
      })
    );
  }

  createUser(phone: string, fullname: string, password: string, email?: string) {
    const pattern = { cmd: 'create-user' };
    const payload = { phone, fullname, password, email };
    return this.apiClient.send<string>(pattern, payload).pipe(
      map((response) => {
        return {
          response,
        };
      })
    );
  }

  createPost(payload: any) {
    const pattern = { cmd: 'create-post' };
    // const payload = { phone, fullname, password, email };
    return this.apiClient.send<string>(pattern, payload).pipe(
      map((response) => {
        return {
          response,
        };
      })
    );
  }
}
