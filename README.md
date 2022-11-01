# <h1>Teste de Front-End e Back-End realizado pela empresa EDESOFT</h1> 

<p align="center">
<img src="https://i.imgur.com/zIhEIuL.png"/>
</p>

> Status do Projeto: :heavy_check_mark:  

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

... 

## Descrição do projeto 

<p align="justify">
Este README abrange o teste completo da empresa EDESOFT, tanto Front-end quanto Back-end. Os dois projetos são distintos, mas são descritos detalhadamente neste documento.
</p>
<p align="justify">
  Foi criado um projeto front-end para o teste. O projeto foi feito em React, sendo uma interface com as operações de cadastro de usuários, edição de usuários, listagem de usuários e remoção de usuários. 
</p>
<p align="justify">
  O back-end foi realizado de forma diferente. O projeto de back-end foi feito em python, recebendo um arquivo do S3 da AWS em formato CSV, processando os dados e então salvando-os em um banco de dados.
  </p>

## Funcionalidades

:heavy_check_mark: Cadastro de Usuários (Front-end)

:heavy_check_mark: Edição de Usuários  (Front-end)

:heavy_check_mark: Remoção de Usuários  (Front-end)

:heavy_check_mark: Listagem de Usuários  (Front-end)

:heavy_check_mark: Recebimento de bucket e nome de arquivo em função lambda  (Back-end)

:heavy_check_mark: Leitura e tratamento de dados do arquivo CSV recebido  (Back-end)

:heavy_check_mark: Armazenamento das informações no MongoDB  (Back-end)

## Deploy da Aplicação :dash:

<p align="justify"> O front-end foi deployado na seguinte URL:

</p>

> https://teste-frontend-indol.vercel.app/

## Como rodar a aplicação :arrow_forward:

<h3>Front-End</h3>
<p>No terminal, clone o projeto: 

```
git clone git@github.com:RickSoleni/Teste---FRONTEND-BACKEND.git
```
Execute os seguintes comandos no terminal:
```
cd edesoft-frontend
npm i
npm start
```
## Como rodar a aplicação :arrow_forward:

 <h3>Back-End</h3>
 <p>No terminal, clone o projeto:

```
git clone git@github.com:RickSoleni/Teste---FRONTEND-BACKEND.git
```
Execute o seguinte comandos no terminal:
```
serverless invoke -f csvImporter -d '{"bucket_id": "id do bucket", "object_key": "nome do objeto"}'
```

## Tecnologias utilizadas :books:

Front-end

<p><a href="https://reactjs.org/docs/getting-started.html">React</a>
| <a href="https://redux-toolkit.js.org/">Redux Toolkit</a>
| <a href="https://react-hook-form.com/get-started/">React-Hook-Form</a>
| <a href="https://react.semantic-ui.com/">Semantic UI</a>

Back-end

<p><a href="https://docs.python.org/3/">Python</a>
| <a href="https://requests.readthedocs.io/en/latest/">Requests</a>
| <a href="https://pymongo.readthedocs.io/en/stable/">Pymongo</a>
| <a href="https://www.mongodb.com/docs/">MongoDB</a>
| <a href="https://www.serverless.com/framework/docs">Serverless</a> 
  

## Desenvolvedor :octocat:

<a href="https://github.com/RickSoleni"> Ricardo Giantomaso </a>
