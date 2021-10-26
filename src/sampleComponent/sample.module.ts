/**
 * Framework independent implementation of services.
 * @export
 * @class SampleModule
 */
export class SampleModule {

  /**
   * Returns result in standard api response format: status-code and data.
   * @returns
   * @memberof SampleModule
   */
  sayHelloWorld() {
    return { status: 200, data: 'Hello World!' };
  }

}