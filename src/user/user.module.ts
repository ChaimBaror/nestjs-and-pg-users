import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import Products from './entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity,Products]),
    JwtModule.register({
      secret: 'hard! secret chaim baror',
      signOptions: { expiresIn: '60m' }
    })
    , AuthModule],

  controllers: [UserController, AuthController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    UserService, AuthService]
})
export class UserModule { }
