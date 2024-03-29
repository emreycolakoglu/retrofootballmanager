import { init } from "@paralleldrive/cuid2";

// The init function returns a custom createId function with the specified
// configuration. All configuration properties are optional.
export const generateId = init({
  length: 10,
});
