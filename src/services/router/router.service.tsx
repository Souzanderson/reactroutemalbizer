import { Component, ReactNode } from "react";
import { IRouteModel } from "./router.service.interface";

class RouteModel implements IRouteModel {
  component!: any;
  path!: string;

  constructor(props: IRouteModel) {
    this.component = props.component;
    this.path = props.path;
  }

  get isShow() {
    return window.location.pathname === `/${this.path}`;
  }
}

export class RouterService {
  private static _instance: RouterService;

  private _routes: RouteModel[] = [];
  public actual_route!: RouteModel;

  public static getInstance() {
    if (!RouterService._instance) {
      RouterService._instance = new RouterService();
    }
    return RouterService._instance;
  }

  get allroutes() {
    return this._routes;
  }

  set routes(routes: IRouteModel[]) {
    this._routes = routes.map((r) => new RouteModel(r));
  }

  public addRoute(route: IRouteModel) {
    this._routes.push(new RouteModel(route));
  }

  public getRoute(path: string) {
    return this._routes.find((item: IRouteModel) => item.path === path);
  }
}

export class RouterStruct extends Component {
  private router = RouterService.getInstance();

  state = {
    actual_route: window.location.pathname.replace("/", ""),
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        actual_route: window.location.pathname.replace("/", ""),
      });
    }, 100);
  }

  get components() {
    return this.router.allroutes.map((value: RouteModel, index) => {
      const Mycomponent = value.component;
      return (
        <main key={index.toString()}>
          {value.path === this.state.actual_route ? <Mycomponent /> : null}
        </main>
      );
    });
  }

  render(): ReactNode {
    return <>{this.components}</>;
  }
}

export class NavigationRouter {
  public static go(path: string) {
    window.history.pushState("", "", `/${path}`);
  }
}
