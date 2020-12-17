import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entity';
import { UserMiddleware } from './Middleware/user.middleware';
import ProductsEntity from './user/entities/product.entity';
import { ProductModule } from './product/product.module';
import { GoogleStrategy } from './GoogleStrategy ';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { AuctionModule } from './auction/auction.module';
import { AuctionEntity } from './auction/entities/auction.entity';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    // ConfigModule.forRoot({ envFilePath: '.development.env', }),

    //DB dashboard.heroku

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   url:"postgres://mbytudqvtldqxk:8ec951398a55c1f3c659c2b81443b5499b67e8e2b803cac43f1dedb1131087e5@ec2-52-208-138-246.eu-west-1.compute.amazonaws.com:5432/d4i2j3jr7lfubh",
    //   synchronize: true,
    //   entities: [UserEntity,ProductsEntity],
    // }),

//DB localhost

    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: "1q2w3e4r",
    //   database: 'usersDB',
    //   // database: 'uDB',
    //   synchronize: true,
    //   entities: [UserEntity,ProductsEntity],
    // }),


    //DB api.elephantsql.com
    ConfigModule.forRoot({ envFilePath: '.development.env', }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:'postgres://ptrdmhfp:jvXE6XBraOP3u4M_PtbJXUXCtry8UoFh@kandula.db.elephantsql.com:5432/ptrdmhfp' ,
      autoLoadEntities: true,
      synchronize: true,
      entities: [UserEntity,ProductsEntity,AuctionEntity],
      
    }),UserModule,ProductModule, AuctionModule],
  controllers: [AppController],
  providers: [ AppService,GoogleStrategy],
})



export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes({ path: 'auth', method: RequestMethod.POST });
    // .exclude(
    //   { path: 'user', method: RequestMethod.GET },
    //   { path: 'user', method: RequestMethod.POST },
    //   'cats/(.*)',
    // )
    // .forRoutes(UserController);
  }
}
