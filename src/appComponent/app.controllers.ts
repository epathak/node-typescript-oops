import { SampleModule } from "../sampleComponent/sample.module";
import { SampleController } from "../sampleComponent/sample.controller";
import { Controller } from "./app.models";

/** A single point for defining all sub-applications. */
const appControllers: Controller[] = [
  new SampleController(new SampleModule())
];

export default appControllers;