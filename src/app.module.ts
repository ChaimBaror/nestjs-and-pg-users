import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:'postgres://svgdxyou:Y_LYIADsPdgphb2aZ_MzZFBGC3vtGYYr@kandula.db.elephantsql.com:5432/svgdxyou' ,
      autoLoadEntities: true,
      synchronize: true,
      entities: [User],
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
