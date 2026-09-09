import type { SchemaTypeDefinition } from "sanity";
import { project } from "./project";
import { footer } from "./footer";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, footer],
};
