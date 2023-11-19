# PROJECT Calypso

<p align="center">
  <img src="/images/Logo.png" />
</p>

> This project is a training ground for my Fullstack development skills.\
> In its current version, the project is a **Weather Web Application**.

## Purpose

The primary purpose of this project is to create Fullstack web apps that utilize 
whatever technology I am interested in learning. I choose the theme of the first 
version to be **Weather** because of the ease of data acquisition !

## Project Evolution

I view this project as an ongoing endeavor that evolves with time. The plan is to 
implement different versions, each iteration improving the previous one.\
These ***"improvements"*** could involve a complete change in technologies used, a 
different approach to the UI, a change in functionality or even a change in the 
theme.

> - My next versions of this might contain some 3D components, as I have taken some 
interest lately in learning 3D Graphics (I will be using [**threeJS**](https://threejs.org/)
most likely).
> - I am also interested in learning some more advanced State Management libraries
like [**Redux**](https://redux.js.org/) or [**Jotai**](https://jotai.org/) after 
the frustration I had with vanilla React state management 😅 ...

## Technologies Used

- [**NextJS:**](https://nextjs.org/) A React-based framework for building 
server-rendered applications.
- [**Typescript:**](https://www.typescriptlang.org/) A superset of JavaScript 
that adds static types and allows to write fully type safe applications.
- [**React:**](https://react.dev/) A JavaScript library for building user interfaces.
- [**Tailwindcss:**](https://tailwindcss.com/) I love this one 💙. A utility-first CSS 
framework and Design System for rapid UI development.
- [**GraphQL:**](https://graphql.org/) A query language for APIs, providing a more 
efficient and powerful alternative to traditional REST.
- [**Apollo Standalone Server & Apollo Client:**](https://www.apollographql.com/) 
A comprehensive platform for building, deploying, visualizing and managing GraphQL APIs 
on the server and handling GraphQL data statefully on the client.

## Figma Design

I have invested a decent amount of time in designing the UI mockup in figma. I tried 
to maintain a very simplistic and minimal design so I don't overwhelm myself with UI 
complexity in addition to the learning curve of every tool used.\
\
Please find the figma design file [**here**](https://www.figma.com/file/VwBthXOW4QCSYEGBqx1Wq1/Calypso-V1?type=design&node-id=0%3A1&mode=design&t=zvUlNER9ejwBUk8O-1).

## Preview

### Color Palette 
<p align="center">
  <img src="/images/Color_Palette.png" />
</p>

### Blueprint
<p align="center">
  <img src="/images/Blueprint.png" />
<

### Main Screen

<p align="center">
  <img src="/images/Main_Screen.png" />
</p>

### Loading/Suspense State

<p align="center">
  <img src="/images/Loading.png" />
</p>

### Autocomplete & Settings

<p align="center">
  <img src="/images/Autocomplete_Settings.png" />
</p>

## Getting Started

To test the project locally, follow these steps:

### Cloning Project & Installing Dependencies

1. Clone the repository.
   ```bash
   git clone https://github.com/L0DESTAR7/calypso.git/
   ```

2. Install Front-end dependencies.
   ```bash
   cd /calypso
   npm install
   ```

3. Install Backend Server dependencies.
   ```bash
   cd /graphql-backend-server
   npm install
   ```

### Getting your API Key

4. In order for the backend to work you must acquire your own API key. For that, 
please visit [**WeatherAPI.com**](https://www.weatherapi.com/) and get an API key.

5. Once you have your API key, change the value of `WEATHER_API_KEY` inside 
[**.env**](/graphql-backend-server/.env) file using your favorite text editor/IDE,
or run the following command from within `/graphql-backend-server/`:
    ```bash
    echo "WEATHER_API_KEY=YOUR-API-KEY" > .env
    ```

### Running NextJS Development Server & Apollo Server

6. Run Apollo Standalone GraphQL server.
   ```bash
   cd /graphql-backend-server
   npm run start
   ```
   This will automatically parse, generate types and run the Apollo Standalone
   on port **4000**.

7. Run NextJS dev server. (In a new terminal if the current one gets attached to Apollo server)
   ```bash
   cd /calypso
   npm run dev
   ```
   This will start NextJS server on port **3000**.

## Remaining Tasks TODO

- [ ] Implement Dark mode.
- [ ] Adapt UI to more screen sizes.
- [ ] Implement rate limiting on the API endpoints.
- [ ] Deploy publicly on the web (probably on [**Vercel**](https://vercel.com/)) for demo purposes.

Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>

<p>
  <img src="https://cdn.weatherapi.com/v4/images/weatherapi_logo.png" />
</p>
