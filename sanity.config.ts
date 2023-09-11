// import { defaultConfig } from "next/dist/server/config-shared";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "yzys4cq0",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-09-08",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
export default config;
