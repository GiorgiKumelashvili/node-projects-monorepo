import 'reflect-metadata';
import express from 'express';
import logger from 'morgan';
import * as bodyParser from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { IocContainer } from './libs/ioc/container';

import './controllers/home';
import './controllers/test';

export const app = express();

(async () => {
  const port = process.env.PORT || 3000;

  // container configuration
  const container = IocContainer.container();
  await container.loadAsync();

  // wrap express and inversify
  const expressContainer = new InversifyExpressServer(container);

  expressContainer.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(logger('dev'));
  });

  const server = expressContainer.build();

  server.listen(port, () => {
    console.log(`Application started at http://localhost:${port}`);
  });
})();
