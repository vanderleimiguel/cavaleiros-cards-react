# cavaleiros-cards-react

Cavaleiros cards é uma pagina que permite salvar seus cavaleiros com dados como nome, constelação, categoria, tecnica e idade.
Este projeto foi construido com react e utilizado uma API propria
Possui a opção de adicionar um novo cavaleiro e deletar um já existente.

## Deploy Frontend

https://

## Deploy Backend

https://cavaleiro-api.herokuapp.com/cavaleiros

## Swagger

https://cavaleiro-api.herokuapp.com/doc

## Repositorio Frontend

https://github.com/vanderleimiguel/cavaleiros-cards-react

# Código

Ao abrir a pagina irá carregar todos seus cavaleiros ja salvos, na parte superior existe 1 botão para inserir dados de um novo cavaleiro.

Ao clicar em um cavaleiro existente, irá abrir um modal com mais dados disponiveis e a opção para deletar o cavaleiro selecionado.

## Métodos

Requisições para a API devem seguir os padrões:
| Método | Descrição |

| `GET` | Retorna todos os cavaleiros salvos no banco de dados. |
| `POST` | Utilizado para criar um cavaleiro. |
| `DELETE` | Remove um link do sistema. |

## GET - Retorna todos os cavaleiros salvos

url: https://cavaleiro-api.herokuapp.com/cavaleiros/all-cavaleiros

## POST - Criar um novo cavaleiro

url: https://cavaleiro-api.herokuapp.com/cavaleiros/create-cavaleiro

body:
 {
    "nome": "Ikki",
    "constelacao": "Fenix",
    "categoria": "Bronze",
    "tecnica": "Ave Fenix",
    "idade": 15
  }

## DEL - Deleta um cavaleiro existente por ID

url: https://cavaleiro-api.herokuapp.com/cavaleiros/delete-cavaleiro/${id}

## Dependencias

    "bootstrap": "^5.2.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.5.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-modal": "^3.15.1"

## Instalações

    npm init -y
    npm create vite@latest
    npm install
    npm run dev
    npm i react-modal
    npm i react-icons
