import express from 'express';
import { controller, httpGet, response } from 'inversify-express-utils';

@controller('/')
export class Home {
  @httpGet('/')
  index(@response() res: express.Response) {
    res.json({
      x: 123,
    });
  }
}
