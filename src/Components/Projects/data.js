import voyagrImag from "./images/voyagr-background.png";
import rouletteImag from "./images/project1.png";
import workPlannerImag from "./images/workplanner.png";
import weatherImag from "./images/weathertracker.png";
import codeImag from "./images/codingquiz1.png";
import noteImag from "./images/notetaker.png";
import passwordImag from "./images/generatepassword.png";
import burgerImag from "./images/burger.png";
var data = [
  {
    projectTitle: "Voyagr",
    image: { voyagrImag },
    alt: "Voyagr",
    description: " This 'Voyagr' was created for user to record their travel.",
    demo: "http://voyagrs.com/",
    code: "https://github.com/Kayvonk/voyagr",
    skills:
      "mapbox,react map gl,react hook form,cloudinary,auth0,heroku,mongodb,netlify,web",
  },
  {
    projectTitle: "Restaurant Roulette",
    image: { rouletteImag },
    alt: "Restaurant Roulette",
    description:
      "Roulette was create for user to decide what restaurant to eat out.",
    demo: "https://johnsonr84.github.io/restaurant-roulette/",
    code: "https://github.com/johnsonr84/restaurant-roulette",
    skills: "bulma,jquery,css,zippoptamus api,zomato api,google maps api,web",
  },

  {
    projectTitle: "Work Planner",
    image: { workPlannerImag },
    alt: "Work Planner",
    description:
      " Planner was created to help the user plan his/her daily schedule.",
    demo: "https://koffidanh.github.io/workplanner/",
    code: "https://github.com/Koffidanh/workplanner",
    skills: "bootstrap,jquery,css,moment().js api,web",
  },
  {
    projectTitle: "Weather Tracker",
    image: { weatherImag },
    alt: "Weather Tracker",
    description: "Tracker was created to help plan his/her trip around world.",
    demo: "https://koffidanh.github.io/weather-tracker/",
    code: "https://github.com/Koffidanh/weather-tracker",
    skills: "bootstrap,jquery,css,openweather api,web",
  },
  {
    projectTitle: "Coding Quiz",
    image: { codeImag },
    alt: "Coding Quiz",
    description:
      "Quiz was created to test the user Knowledge on Web Development.",
    demo: "https://koffidanh.github.io/coding-quiz/",
    code: "https://github.com/Koffidanh/coding-quiz",
    skills: "bootstrap,javascript,css,web",
  },
  {
    projectTitle: "Note Taker",
    image: { noteImag },
    alt: "Note Taker",
    description:
      "Taker was created to generate to help the user to organize daily life or work.",
    demo: "https://limitless-hamlet-20887.herokuapp.com/",
    code: "https://github.com/Koffidanh/note-taker",
    skills: "html,javascript,css,express,heroku,web",
  },
  {
    projectTitle: "Password Generator",
    image: { passwordImag },
    alt: "Password Generator",
    description: "Generator was created to generate a high security password.",
    demo: "https://koffidanh.github.io/password-generator/",
    code: "https://github.com/Koffidanh/password-generator",
    skills: "bootstrap,javascript,css,web",
  },
  {
    projectTitle: "Burger Logger",
    image: { burgerImag },
    alt: "Burger Logger",
    description: "Logger was created to log in your favorite burger.",
    demo: "https://rhubarb-surprise-45818.herokuapp.com/",
    code: "https://github.com/Koffidanh/burger",
    skills: "mysql,node,express,handlebars,orm,web",
  },
];
export default data;
