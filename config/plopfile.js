module.exports = function (plop) {
  console.log("Plopfile loaded!");

  plop.setGenerator("example", {
    description: "This is an example generator",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the file?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/modules/{{name}}/{{name}}.controller.ts",
        templateFile: "templates/controller.hbs",
      },
      {
        type: "add",
        path: "../src/modules/{{name}}/{{name}}.route.ts",
        templateFile: "templates/route.hbs",
      },
      {
        type: "add",
        path: "../src/modules/{{name}}/{{name}}.service.ts",
        templateFile: "templates/service.hbs",
      },
      {
        type: "add",
        path: "../src/modules/{{name}}/{{name}}.validation.ts",
        templateFile: "templates/validation.hbs",
      },
      {
        type: "add",
        path: "../src/modules/{{name}}/{{name}}.types.ts",
        templateFile: "templates/types.hbs",
      },
    ],
  });
};
