import arg from "arg";
import inquirer from "inquirer";
import mirrorRepo from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--sourceRepo": String,
      "--targetRepo": String,
      "--y": Boolean,
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    sourceRepo: args["--sourceRepo"] || "",
    targetRepo: args["--targetRepo"] || "",
    skipConfirmation: args["--y"] || false,
  };
}

async function promptForMissingOptions(options) {
  const questions = [];
  questions.push({
    type: "input",
    name: "sourceRepo",
    message: "Please enter the source repository URL:",
    validate: (input) => (input ? true : false),
  });

  questions.push({
    type: "input",
    name: "targetRepo",
    message: "Please enter the target repository URL:",
    validate: (input) => (input ? true : false),
  });

  if (!options.skipConfirmation){
    questions.push({
      type: "confirm",
      name: "skipConfirmation",
      message:
        "This command will override the target repo, do you want to continue?",
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    sourceRepo: options.sourceRepo || answers.sourceRepo,
    targetRepo: options.targetRepo || answers.targetRepo,
    skipConfirmation: options.skipConfirmation || answers.skipConfirmation,
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
//   await mirrorRepo(options);
}
