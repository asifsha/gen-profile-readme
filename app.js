particlesJS.load("particles-js", "assets/particles-config.json", function() {
  console.log("callback - particles.js config loaded");
});

var typ2 = new Typed("#typed", {
  strings: [
    "5",
    "4",
    "3",
    "2",
    "1",
    "Hello, I am Asif Sharif",
    "I am Fullstack, Frontend and Backend Developer",
    "Experienced with Cloud, Azure, Web Api,.Net core, ASP.NET MVC",
    "JavaScript, React, Angular, NodeJS, Sql Server, Mongo DB, Postresql",
    "See my work @ asifsha.github.io"
  ],
  typeSpeed: 30
});

console.log("end");
