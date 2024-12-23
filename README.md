# React Console CLI

**React Console CLI** é uma biblioteca para projetos React que permite criar componentes e networks diretamente do terminal, agilizando o desenvolvimento e garantindo uma organização padronizada. Inspirada na CLI do Angular, esta ferramenta facilita a criação de módulos e serviços de forma rápida e consistente.

## Instalação

Para instalar a biblioteca no seu projeto, execute o comando:

npm install react-console-cli --save-dev

## Funcionalidades

### Criar Componente

Para criar um novo componente, use o seguinte comando:
npx generate-component <NomeDoComponente> <CaminhoDoComponente>

Exemplo:
npx generate-component Header src/components/Header

Com o comando de criação de componentes, você pode gerar uma pasta completa contendo:

- `base.tsx` - Arquivo base que importa a view injetando-a a controller.
- `view.tsx` - Arquivo para renderização da interface.
- `styles.ts` - Arquivo para estilização.
- `types.ts` - Definição de tipos (usando TypeScript).
- `controller.tsx` - Controle e lógica do componente.

O usuário pode escolher o nome e o local onde o componente será gerado.

### Criar Network

Além de componentes, a CLI também gera uma camada de **Network** responsável por centralizar as consultas ao backend. Ao usar o comando de network, são criados:

Para criar um novo network, use o comando:
npx generate-network <NomeDoNetwork>

Exemplo:
npx generate-network AuthNetwork

- `Network.ts` - A lógica principal da comunicação com o backend.
- `INetwork.ts` - Interface definindo o contrato dos métodos do Network.
- `DTOResponse.ts` - Data Transfer Object para a resposta do backend.
- `DTORequest.ts` - Data Transfer Object para as requisições ao backend.

Esse comando garante que os serviços estejam devidamente organizados, facilitando o gerenciamento e a manutenção do código.

## Inspiração
Essa biblioteca foi criada com inspiração no CLI do Angular, com o objetivo de padronizar a organização de projetos React, aumentar a produtividade na criação de componentes e networks, e garantir consistência no código.

## Contribuições
Sinta-se à vontade para abrir issues e pull requests! Toda ajuda é bem-vinda para melhorar a ferramenta e adaptar a novos casos de uso.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
