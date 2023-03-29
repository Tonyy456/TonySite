// projectData.js
const options = 
{
    filter: ["C#", "Javascript", "WebGL", "GLSL"],
    sort: ["None", "Reversed", "WIP", "Complete"], 
}
const projectData = [
//===================Planet GENERATION=============================
  {
    title: "3D viewing",
    description: "3D planet generation made with exclusively javascript and WebGL." +
                 "You can change the generation settings and see updates in real time!",
    tags: ["Javascript", "WebGL", "GLSL"],
    image: "images/planet_gen.png",
    page: "projects/planet_gen/index.html",
  }, 
//===================PYTHON PATHFINDER=============================
  
  {
    title: "Python Pathfinder",
    description: "I made a pathfinder where you can select your algorithm " +
    "and it attempts to generate a path",
    tags: ["Python", "Tkinter"],
    image: "images/pathfinder.png",
    page: "https://github.com/Tonyy456/PythonPathfinder",
  }, 
//===================MARCHING CUBES=============================
  {
    title: "Marching Cubes Complex Terrain",
    tags: ["Unity", "C#"],
    description: "Generating a complex terrain using a weird algorithm " + 
                  "called marching cubes. This generates a mesh at real time with 3D perlin noise.",
    image: "images/generation.png",
    page: "",
  },
//===================RANDOM MAZE GENERATION=============================
  {
    title: "Random Maze Generation",
    tags: ["Unity", "C#"],
    description: "Generating a maze using a algorithms like prim's, dikstras, and random depth first search",
    image: "images/maze.png",
    page: "",
  },
//===================KLOBY=============================
  {
    title: "Game Jam - Kloby",
    tags: ["Unity", "C#"],
    description: "I made a complete game and all it's assets in a game jam working solo. This is a soccer" + 
      " like game where you slap your opponent away and slap the ball into the goal",
    image: "images/kloby.png",
    page: "https://github.com/Tonyy456/Kloby",
  },
//===================ZELDA=============================
  {
    title: "CSE 3902 - Zelda Dungeon",
    tags: ["Monogame", "C#"],
    description: "In a team of 3, we recreated the first dungeon from the original zelda game. This " + 
      "was for a course and we achieved an A in this class. Ontop of the requirement we added a boss to this game",
    image: "images/zelda.png",
    page: "",
  },
//=====================Snake===========================
  {
    title: "Snake in javascript",
    tags: ["Javascript", "HTML", "CSS"],
    description: "Following a tutorial, to learn these languages I created a snake game using a canvas object and controlled in javascript",
    image: "images/snake.png",
    page: "projects/snake/snakegame.html",
  },
];
