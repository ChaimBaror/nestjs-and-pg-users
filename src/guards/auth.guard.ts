import { CanActivate, ExecutionContext, Injectable, Inject, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtservice: JwtService) { 
    console.log("constructor AuthGuard");
    
  }
  canActivate(
    context: ExecutionContext, ): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const jwt = req.headers['authorization']?.split(' ')[1]
    return this.jwtservice.verify(jwt)
    }
   catch(err) {
    Logger.error(err);
    return false;
  }
}

