import { SampleModule } from "./sample.module";

test('sample test', () => {
  const sampleModule = new SampleModule();
  const response = sampleModule.sayHelloWorld();

  expect(response).toEqual({ status: 200, data: 'Hello World!' });
  // expect(response.status).toBe(200);
  // expect(response.data).toBe('Hello World!');
});