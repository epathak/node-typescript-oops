import { Router, Request, Response } from "express";
import { SampleModule } from "./sample.module";

/**
 * This sample controller uses a route configuration to map routes to services.
 * Sample module is generic here, and has no dependencies on express, isolating buisness logic.
 * @export
 * @class SampleController
 */
export class SampleController {
  /**
   * The root mount path for all the routes of the module(sub-application)
   * @type {string}
   * @memberof SampleController
   */
  public path: string;
  /**
   * The router object for holding all the routes to services of the module.
   * @type {Router}
   * @memberof SampleController
   */
  public router: Router;

  /**
   * Creates an instance of SampleController.
   * @param {SampleModule} sampleModule Set of services which can be mapped to routes.
   * @memberof SampleController
   */
  constructor(sampleModule: SampleModule) {
    this.path = '/sample';
    this.router = Router();

    const configs = [
      { method: 'get', route: '/', handler: sampleModule.sayHelloWorld }
    ];

    configs.forEach((config: any) => {
      (this.router as any)[config.method](config.route, async (req: Request, res: Response) => {
        const requestDetails = parseExpressRequest(req);
        const { status, data } = await config.handler(requestDetails);
        res.status(status).send(data);
      })
    })
  }
}

/**
 * This function converts an express request into a generic object.
 * @param {Request} req
 * @returns
 */
function parseExpressRequest(req: Request) {
  return {
    headers: req.headers,
    path: req.params,
    query: req.query,
    body: req.body
  };
}