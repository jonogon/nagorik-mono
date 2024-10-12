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
}
