#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";
import { createFile } from "../../utils/createFile.js";
import { pascalCase } from "../../utils/formatString.js";
import { buildContentFile } from "../../utils/buildContentFile.js";
import { getNameAndDestinationParam } from "../../utils/getNameAndDestinationParam.js";
import { readTemplate } from "../../utils/readTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateModule = (moduleName, destinationPath) => {
   const variables = {
      name: moduleName,
      pascalCase: pascalCase(moduleName),
   };
   const templateDir = path.resolve(__dirname, "templates");

   const templateList = [
      {
         name: "base",
         path: `${variables.pascalCase}/${variables.pascalCase}.tsx`,
      },
      {
         name: "view",
         path: `${variables.pascalCase}/${variables.pascalCase}.view.tsx`,
      },
      {
         name: "controller",
         path: `${variables.pascalCase}/${variables.pascalCase}.controller.tsx`,
      },
      {
         name: "types",
         path: `${variables.pascalCase}/${variables.pascalCase}.types.tsx`,
      },
      {
         name: "styles",
         path: `${variables.pascalCase}/${variables.pascalCase}.styles.tsx`,
      },
   ];

   templateList.forEach((t) => {
      const template = readTemplate(path.join(templateDir, t.name + ".hbs"));
      const content = buildContentFile(template, variables);
      const filePath = path.join(destinationPath, t.path);
      createFile(filePath, content);
   });

   console.log(
      `Módulo ${moduleName} gerado com sucesso em ${destinationPath}!`
   );
};

const { moduleName, destinationPath } = await getNameAndDestinationParam();
generateModule(moduleName, destinationPath);
