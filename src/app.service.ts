import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): object {
        return {
            one: 1,
            two: 2
        };
    }
}
