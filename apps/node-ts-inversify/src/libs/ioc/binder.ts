import { decorate, injectable } from "inversify";
import { Constructor } from "../shared/generalTypes";
import { IocContainer } from "./container";

export function Singleton(cls: Constructor): void {
    IocContainer.container().bind(cls).toSelf().inSingletonScope();
    decorate(injectable(), cls);
}

export function Injectable(cls: Constructor): void {
    IocContainer.container().bind(cls).toSelf();
    decorate(injectable(), cls);
}
