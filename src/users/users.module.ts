import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExempleMiddleware } from './middlewares/exemple/exemple.middleware';
import { AnotherMiddleware } from './middlewares/another-middleware/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExempleMiddleware).forRoutes('users');
    // consumer.apply(ExempleMiddleware).forRoutes(UsersController);
    consumer
      .apply(ExempleMiddleware)
      .forRoutes({
        path: 'user',
        method: RequestMethod.GET,
      })
      .apply(AnotherMiddleware)
      .forRoutes({
        path: 'user',
        method: RequestMethod.GET,
      });
  }
}
