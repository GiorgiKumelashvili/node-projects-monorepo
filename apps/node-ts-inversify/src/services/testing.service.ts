import { Singleton } from '../libs/ioc/binder';

@Singleton
export class TestingService {
  responseMessage() {
    return {
      message: 'hello from TestingService',
    };
  }
}
