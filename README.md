# 📄 Documentação – Cocktail App


## 📌 Sobre o Projeto

O **Cocktail App** é uma aplicação web minimalista que permite visualizar informações de drinks utilizando a [TheCocktailDB API](https://www.thecocktaildb.com/api.php). Foi desenvolvido utilizando **React**, **Axios** para requisições HTTP e **CSS puro** para estilização.

---

## ✅ Funcionalidades

- Exibição de um drink aleatório ao iniciar a aplicação
- Campo de pesquisa para buscar drinks pelo nome
- Exibição de nome, imagem, categoria, tipo, copo e instruções
- Spinner de carregamento durante requisições
- Interface clean em preto e branco com a fonte Montserrat

---

## 🚀 Tecnologias Utilizadas

- React 18 (sem JSX)
- Vite
- Axios
- CSS puro
- API TheCocktailDB

---

## 🛠 Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/cocktail-app.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

---

## 📁 Estrutura de Arquivos

```
cocktail-app/
├── index.html
├── package.json
├── vite.config.js
├── /src
│   ├── App.js
│   ├── index.css
│   └── main.js
```

---

## 🌐 Consumo da API

A aplicação consome dados da [TheCocktailDB](https://www.thecocktaildb.com), utilizando os seguintes endpoints:

- `https://www.thecocktaildb.com/api/json/v1/1/random.php` – Retorna um drink aleatório
- `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}` – Pesquisa drinks por nome

---

## 📸 Preview

![Preview do Cocktail App](https://cdn.discordapp.com/attachments/1348395981947011112/1358707276252446720/image.png?ex=67f4d242&is=67f380c2&hm=b0fae351435995644629ceb09da941f042550180f41ebecd97dd510ca351afad)

---

## 👨‍💻 Autor

- GitHub: [@nyxpdb](https://github.com/nyxpdb)

---
