import { controller, httpGet } from 'inversify-express-utils';
import { TestingService } from '../services/testing.service';
import { inject } from 'inversify';

@controller('/test')
export class Test {
  constructor(
    @inject(TestingService)
    private readonly testingService: TestingService
  ) {}

  @httpGet('/')
  index() {
    const response = this.testingService.responseMessage();
    return { response, another: Math.random() };
  }
}
