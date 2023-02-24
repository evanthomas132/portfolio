import Crypto from '../../assets/CryptoCurrency.png'
import Homeland from "../../assets/HomeLand_real_estate.png";
import Uniform from "../../assets/e-commerce.png";
import Budget_Tracker from "../../assets/budget_tracker.png";
import Todo_TypeScript from "../../assets/todo_typescript.png";
import Recipe from "../../assets/Recipe.png";
import Weather from "../../assets/Weather.png";
import Word_Association from "../../assets/Word_Association.png";
import Todos from '../../assets/todo_app.png'
export const reactProjects = [
  {
    img: Crypto,
    title: "CrytoCurrency Website",
    seeCode: "https://github.com/evanthomas132/crypto_currency",
    seeLive: "https://crypto-currency-livid.vercel.app/",
    description:
      "A cryptocurrency converter website that utilizes the RAPID API to fetch and convert various cryptocurrencies. The site also features a newsfeed API to provide up-to-date crypto news.",
    techStack: ["React", "Axios", "RapidAPI"],
  },
  {
    img: Homeland,
    title: "HomeLand Real Estate",
    seeCode: "https://github.com/evanthomas132/homeland",
    seeLive: "https://homeland-real-estate-mu.vercel.app/",
    description:
      "The real estate website is designed using React's useContext and useReducer hooks to manage state and Rapid API to fetch and render properties. It also includes a login function with Firebase for users to access their favorites page where they can view and manage their liked properties.",
    techStack: ["React", "Axios", "RapidAPI", "Firebase"],
  },
  {
    img: Uniform,
    title: "Uniform E-Commerce",
    seeCode: "https://github.com/evanthomas132/uniform_ecommerce",
    seeLive: "https://uniform-ecommerce.vercel.app/",
    description:
      "The e-commerce website is built using React and fetches product information from an API. It utilizes the Context API for state management and  users can filter products by category.",
    techStack: ["React", "Framer-Motion", "Context API"],
  },
  {
    img: Todos,
    title: "Todo Application",
    seeCode: "https://github.com/evanthomas132/todo_application",
    seeLive: "https://todo-application-ebon.vercel.app/",
    description: "Todo application is a productivity tool that enables users to create personalized todo lists with the aid of Framer Motion. The application is built using React's Reducer and Context APIs for efficient state and data management.  The Framer Motion library is integrated to provide an intuitive and aesthetically pleasing user interface, while the use of React's Reducer and Context APIs ensures smooth and effective data management.",
    techStack: ["React", "Context API", "Reducer"]
  },
  {
    img: Recipe,
    title: "Recipe Website",
    seeCode: "https://github.com/evanthomas132/recipe_website",
    seeLive: "https://recipe-website-inky.vercel.app/",
    description:
      "This is a recipe application built with React, using Edamam API to fetch and display recipe information, including images and ingredients. It also features a search function for specific recipes. Enjoy a seamless, user-friendly experience for all your cooking needs.",
    techStack: ["React", "API's", "State Hooks"],
  },
  {
    img: Weather,
    title: "Weather Website",
    seeCode: "https://github.com/evanthomas132/weather_website",
    seeLive: "https://vercel.com/evanthomas132/weather-website",
    description:
      "This weather website is designed to provide real-time weather updates through the use of the Open Weather Map API. The platform boasts a simple and intuitive interface that facilitates easy and quick searches for weather information in any region of interest.",
    techStack: ["React", "API"],
  },
  {
    img: Word_Association,
    title: "Word Association Game",
    seeCode: null,
    seeLive: null,
    description:
      "A word association game that uses two APIs to render a random word for the user to guess. This game is designed to challenge users' word knowledge and expand their vocabulary.  The game mechanics are simple - the user is presented with a random word, and then they have to guess associated or synonymous words to gain points. The game utilizes APIs to generate a list of associated/synonymous words for the random word to help the user with their guesses.",
    techStack: ["React", "API", "Fetch"],
  },
];

export const typeScriptProjects = [
  {
    img: Todo_TypeScript,
    title: "Todo Site",
    seeCode: "https://github.com/evanthomas132/todo_typescript",
    seeLive: "https://todo-typescript-fawn-theta.vercel.app/",
    description:
      "This is a todo app built with TypeScript, which uses classes, interfaces, and other TypeScript features to provide a robust and type-safe development experience. It allows users to create, read, update, and delete tasks in a simple and intuitive way.",
    techStack: ["React", "Typescript", "Framer-Motion", "Enum", "Classes"],
  },
  {
    img: Budget_Tracker,
    title: "Budget Tracker",
    seeCode: "https://github.com/evanthomas132/budget_tracker_typescript",
    seeLive: "https://budget-tracker-typescript.vercel.app/",
    description:
      "This is a budget tracker application that allows a user to add and delete expenses so users can keep track of their bills and expenses. Project features typescript methods including interfaces, enums etc.",
    techStack: ["React", "Typescript", "Reducer", "Interface"],
  },
];
