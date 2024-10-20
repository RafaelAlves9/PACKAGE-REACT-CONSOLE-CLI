
export const getNameAndDestinationParam = () => {
  return new Promise((resolve, reject) => {
    const args = process.argv.slice(2, 4);
    const originPath = process.cwd();

    if (args.length < 1) {
      const errorMessage = 'Erro: Por favor, forneça o nome do módulo.';
      console.error(errorMessage);
      reject(new Error(errorMessage));
      return;
    }

    let [moduleName, destinationPath] = args;

    if (!destinationPath) destinationPath = originPath;

    resolve({ moduleName, destinationPath });
  });
}