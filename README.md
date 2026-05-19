# Cena Streaming

Interface inspirada em plataformas de streaming, construída com React e consumindo a API pública do TVMaze. Este projeto é um remake aprimorado do workshop-frontend-2024.1, com nova estrutura de componentes, roteamento completo e busca funcional.

## Funcionalidades

- **Home** com Hero em destaque e seções organizadas por gênero (Drama, Comédia, Ação, Ficção Científica, Crime, Romance, Terror)
- **Busca** por séries com resultados em grid
- **Página de detalhe** com pôster, sinopse, avaliação, gêneros, rede e data de estreia
- **Página 404** para rotas não encontradas
- Carrossel de cards com navegação via **Swiper**

## Tecnologias

- [React 18](https://react.dev/)
- [React Router DOM v6](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Swiper](https://swiperjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [TVMaze API](https://www.tvmaze.com/api)

## Estrutura

```
src/
├── components/
│   ├── Card/
│   ├── Hero/
│   ├── Menu/
│   └── SectionRow/
├── hooks/
│   └── useFetch.js
├── pages/
│   ├── Home/
│   ├── Movie/
│   ├── NotFound/
│   └── Search/
├── utils/
│   └── stripHtml.js
└── config.js
```

## Como rodar

```bash
npm install
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## API

Os dados são fornecidos pela [TVMaze API](https://www.tvmaze.com/api), que é pública e não requer autenticação.
