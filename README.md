# React Console CLI

**React Console CLI** é uma biblioteca para projetos React que permite criar componentes e services diretamente do terminal, agilizando o desenvolvimento e garantindo uma organização padronizada. Inspirada na CLI do Angular, esta ferramenta facilita a criação de módulos e serviços de forma rápida e consistente.

## Funcionalidades

### Geração de Componentes

Com o comando de criação de componentes, você pode gerar uma pasta completa contendo:

- `base.tsx` - Arquivo base que importa a view injetando-a a controller.
- `view.tsx` - Arquivo para renderização da interface.
- `styles.ts` - Arquivo para estilização.
- `types.ts` - Definição de tipos (usando TypeScript).
- `controller.tsx` - Controle e lógica do componente.

O usuário pode escolher o nome e o local onde o componente será gerado.

### Geração de Services

Além de componentes, a CLI também gera uma camada de **Service** responsável por centralizar as consultas ao backend. Ao usar o comando de service, são criados:

- `Service.ts` - A lógica principal da comunicação com o backend.
- `IService.ts` - Interface definindo o contrato dos métodos do Service.
- `DTOResponse.ts` - Data Transfer Object para a resposta do backend.
- `DTORequest.ts` - Data Transfer Object para as requisições ao backend.

Esse comando garante que os serviços estejam devidamente organizados, facilitando o gerenciamento e a manutenção do código.

## Instalação

Para instalar a biblioteca no seu projeto, execute o comando:

```bash
npm install react-console-cli --save-dev
