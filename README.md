# P1-Segunda

- para instalar as dependencias
```
npm install
```

- para rodar o servidor
```
npm run dev
```

O arquivo sql não foi utilizado porque o banco usado foi o mongoDB

- O banco esta hospedado no mongoDB atlas com permissão de IP como 0.0.0.0
- Todas as rotas foram testadas pelo Insomnia
```
rota GET '/desenhos' = index, mostra todos os dados do banco
```
rota POST '/desenhos-inserir' = rota com body json para inserção dos dados com o seguinte padrão:
```
{ "name": " ",
"type": " ",
"category_id": " "
}
```
rota GET '/desenhos-buscar/:id' = rota de busca com base no id
```
rota DELETE '/desenhos-deletar/:id' = rota de exclusão baseado no id
```
rota PUT '/desenhos-update/:id' = rota de edição baseado no id
```
