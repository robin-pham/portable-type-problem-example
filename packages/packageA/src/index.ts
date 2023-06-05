// Re-export baz here to remove the "likely not portable" error
import { Bar, unusedBar } from "packageB";
export { Bar, unusedBar };

export { fooCreator } from "./fooCreator";
