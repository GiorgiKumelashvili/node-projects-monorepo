import { Container } from 'inversify';

export class IocContainer {
  private static _IocContainer: Container;

  public static container(): Container {
    if (!this._IocContainer) {
      this._IocContainer = new Container();
    }

    return this._IocContainer;
  }
}
