import fs from "fs";

export const readTemplate = (templatePath) => {
  return fs.readFileSync(templatePath, 'utf-8');
};