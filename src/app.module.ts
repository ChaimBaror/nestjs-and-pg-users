import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserMiddleware } from './user/user.middleware';
import { UserController } from './user/user.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsRepository } from './user/dto/events.repositry';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', }),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'lallah.db.elephantsql.com',
        port: 5432,
        url: 'postgres://svgdxyou:Y_LYIADsPdgphb2aZ_MzZFBGC3vtGYYr@kandula.db.elephantsql.com:5432/svgdxyou',
        autoLoadEntities: true,
        synchronize: true,
        entities: [EventsRepository],
      }
    ),

    UserModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      // .forRoutes({ path: 'user', method: RequestMethod.POST });
      .exclude(
        { path: 'user', method: RequestMethod.GET },
        { path: 'user', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(UserController);
  }
}
