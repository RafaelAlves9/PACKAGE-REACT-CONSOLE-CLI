
export const generateFile = (template, variables) => {
  return template.replace(/{{\s*name\s*}}/g, variables.name);
};