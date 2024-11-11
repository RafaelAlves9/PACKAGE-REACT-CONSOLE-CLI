#!/usr/bin/env node
import { getNameAndDestinationParam } from "../../utils/getNameAndDestinationParam.js";
import { pascalCase } from "../../utils/formatString.js";
import path from "path";
import { readTemplate } from "../../utils/readTemplate.js";
import { buildContentFile } from "../../utils/buildContentFile.js";
import { createFile } from "../../utils/createFile.js";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const templateDir = path.resolve(dirname, "templates");
const templateList = ["service", "interface", "request", "response"];

export const generateNetwork = (moduleName, destinations) => {
   try {
      const variables = {
         name: moduleName,
         pascalCase: pascalCase(moduleName),
      };

      for (let i = 0; i < templateList.length; i++) {
         const item = templateList[i];
         const template = readTemplate(path.join(templateDir, item + ".hbs"));
         const content = buildContentFile(template, variables);
         const destination = destinations[item];
         const filePath = path.join(destination.path, destination.pathName);
         createFile(filePath, content);
      }

      console.log(`Service ${moduleName} gerada com sucesso!`);
   } catch (error) {
      console.error(error);
   }
};

const { moduleName } = await getNameAndDestinationParam();

const destinations = {
   service: {
      path: "src/services",
      pathName: `${moduleName}.service.ts`,
   },
   interface: {
      path: "src/services/interface",
      pathName: `${moduleName}.interface.ts`,
   },
   request: {
      path: "src/models/request",
      pathName: `${moduleName}.request.ts`,
   },
   response: {
      path: "src/models/response",
      pathName: `${moduleName}.response.ts`,
   },
};

generateNetwork(moduleName, destinations);
