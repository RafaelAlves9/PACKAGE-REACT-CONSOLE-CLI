#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import {createFile} from "../../utils/createFile.js";
import {pascalCase} from "../../utils/formatString.js";
import {generateFile} from "../../utils/generateFile.js";
import {getNameAndDestinationParam} from "../../utils/getNameAndDestinationParam.js";
import {readTemplate} from "../../utils/readTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateModule = (moduleName, destinationPath) => {
  const variables = {
    name: moduleName,
    pascalCase: pascalCase(moduleName),
  };
  const templateDir = path.resolve(__dirname, 'templates');

  const templateList = ['base', 'view', 'controller', 'types', 'styles'];

  templateList.forEach((t) => {
    const template = readTemplate(path.join(templateDir, t + '.hbs'));
    const content = generateFile(template, variables);
    const filePath = path.join(destinationPath, `${variables.pascalCase}/${variables.pascalCase}.${t}.tsx`);
    createFile(filePath, content);
  });

  console.log(`Módulo ${moduleName} gerado com sucesso em ${destinationPath}!`);
};

const { moduleName, destinationPath } = await getNameAndDestinationParam();
generateModule(moduleName, destinationPath);

