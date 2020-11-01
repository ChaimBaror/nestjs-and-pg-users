import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req.method + ' ' + req.url + ' ' + req.rawHeaders);
    next();
  }
}
