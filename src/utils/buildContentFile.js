
export const buildContentFile = (template, variables) => {
  return template.replace(/{{\s*name\s*}}/g, variables.name);
};