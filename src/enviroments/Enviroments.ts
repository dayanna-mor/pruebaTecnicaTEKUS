import * as uatEnv from "./env.qa";

export class Enviroment {
  private readonly env: any;

  constructor(enviroment: string) {
    switch (process.env.NODE_ENV) {
      case "qa":
        this.env = uatEnv.QA[enviroment];
        break;
      default:
        throw new Error("Invalid environment");
    }
  }

  public get baseURL(): string {
    return this.env.baseURL;
  }

  public get username(): string {
    return this.env.username;
  }

  public get password(): string {
    return this.env.password;
  }

  public get data(): any {
    return this.env.DATA;
  }
}
