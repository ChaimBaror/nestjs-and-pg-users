import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserMiddleware } from './user/user.middleware';
import { UserController } from './user/user.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/entities/user.entity';



@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:'postgres://svgdxyou:Y_LYIADsPdgphb2aZ_MzZFBGC3vtGYYr@kandula.db.elephantsql.com:5432/svgdxyou' ,
      autoLoadEntities: true,
      synchronize: true,
      entities: [UserEntity],
    }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.POST });
      // .exclude(
      //   { path: 'user', method: RequestMethod.GET },
      //   { path: 'user', method: RequestMethod.POST },
      //   'cats/(.*)',
      // )
      // .forRoutes(UserController);
  }
}
