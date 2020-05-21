export class ActiveRoute {
  static get path() {
    return window.location.hash.slice(1);
  }

  static get param() {
    const param = ActiveRoute.path.split('/')[1];
    return param;
  }

  static navigate(path) {
    window.location.hash = path;
  }
}
