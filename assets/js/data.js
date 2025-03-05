// All VALUES should be arrays:
// - Index 0: English value
// - Index 1: Dutch value
// If no Dutch value is provided, it will default to the English value.
// If no values is provided at all, it will simply keep whatever the
// HTML template already contains.
const data =
{
  "header": {
    "name": [ "David Deprost" ],
    "function": [ ".NET DEVELOPER" ],
    "description": [
      "I am a creative developer with a passion for design. I love putting efficient code behind an intuitive user interface. I always strive for the optimal solution in function of maintainability vs performance. Since I have a very broad interest in society, science and technology, I am driven to always keep learning and improving. Because of this I very much enjoy being part of a team.",
      "Ik ben een creatief developer met een passie voor design. Ik hou ervan om efficiënte code achter een intuïtieve user interface te steken. Ik streef altijd naar de optimale oplossing in functie van onderhoudbaarheid vs performantie. Aangezien ik een heel brede interesse heb in maatschappij, wetenschap en technologie, ben ik gedreven me steeds verder te blijven ontwikkelen. Daarom werk ik ook graag in een team."
    ]
  },
  "sidebar": {
    "contact": {
      "phone": [],
      "email": [ "dadeprost@gmail.com" ],
      "location": [ "Ghent", "Gent" ],
      "linkedin": [ "<a href='https://www.linkedin.com/in/david-deprost'>linkedin.com/in/david-deprost</a>" ],
      "github": [ "<a href='https://github.com/davidde'>github.com/davidde</a>" ]
    },
    "about": {
      "nationality": [ "Belgian", "Belg" ],
      "birthdate": [ "° December 19, 1986", "° 19 december 1986" ],
      "languages": {
        "0": [ "Languages:", "Talen:"],
        "1": [ "Dutch: mother tongue", "Nederlands: moedertaal"],
        "2": [ "English: excellent <br> (oral & written)", "Engels: zeer goed <br> (mondeling/schriftelijk)" ],
        "3": [ "French: basic knowledge", "Frans: basiskennis" ],
      },
      "driving": {
        "license": [ "Driving License B", "Rijbewijs B" ],
        "car": [ "car available", "eigen wagen" ],
      },
    },
    "softskills": {
        "1": [ "Creative problem solver", "Creatieve probleemoplosser"],
        "2": [ "Optimistic team player", "Optimistische teamspeler" ],
        "3": [ "Eye for detail", "Oog voor detail" ],
    },
    "techskills": {
      "1": {
        "general": [ ".NET development" ],
        "specific": [ "C#, WPF, ADO.NET, Entity Framework, Unity Engine, etc." ]
      },
      "2": {
        "general": [ "Frontend development" ],
        "specific": [ "Javascript, Typescript, React, Nextjs, TailwindCSS, sass, NPM" ]
      },
      "3": {
        "general": [ "Database management" ],
        "specific": [ "SQL Server, PostgreSQL, MySQL" ]
      },
      "4": {
        "general": [ "Linux & scripting" ],
        "specific": [ "Python, BASH, zshell, Powershell" ]
      },
      "5": {
        "general": [ "Agile methodologies & Scrum" ],
        "specific": [ ]
      },
      "6": {
        "general": [ "Design" ],
        "specific": [ "Adobe Photoshop & Illustrator, Krita, Inkscape, Solidworks" ]
      },
    }
  },
  "main": {

  }
};

export default data;