[![Node.js Package](https://github.com/frankgalindo/mirror-repo-cli/actions/workflows/npm-publish.yml/badge.svg?branch=main)](https://github.com/frankgalindo/mirror-repo-cli/actions/workflows/npm-publish.yml)
[![npm version](https://img.shields.io/npm/v/@frankgalindo/mirror-repo.svg?style=flat-square)](https://www.npmjs.com/package/@frankgalindo/mirror-repo)

# `@frankgalindo/mirror-repo`

🏗 CLI to help to the mirror from a GIT repository to another

## Installation

```bash
npm init @frankgalindo/mirror-repo
# or
npx @frankgalindo/mirror-repo
# or
npm install -g @frankgalindo/mirror-repo
```
## Usage

### Parameters

| Param        | Type   | Required | Description                            |
|--------------|--------|----------|----------------------------------------|
| --sourceRepo | string |    [X]   | URL from the **source** GIT repository |
| --targetRepo | string |    [X]   | URL from the **target** GIT repository |
| --y          | Bool   |          | Skip confirmation prompt               |


### Example

```bash
mirror-repo --sourceRepo https://github.com/FrankWendel/teste-source-1 --targetRepo https://github.com/FrankWendel/teste-target-1
```

If you don't provide the target and the source repos as parameters the CLI will ask you to do it:
```
❯ mirror-repo
? Please enter the source repository URL: https://github.com/FrankWendel/teste-source-1
? Please enter the target repository URL: https://github.com/FrankWendel/teste-target-1
? This command will override the target repo, do you want to continue? (Y/n) Yes
```

### Disclamer 
This type of command will override everything in the target repository, so you must have the corrects permissions to do that.


# Contribute

Fell free to contribute 😊

To run the project locally you will need:
- Node v16.x.x
- NPM

First Install the npm dependencies:
```
npm install
```

Link the project into you global NPM:
```
npm link
```

Now you can change the code and then test it by the command line.

## Road map
- Better messages (text and colors)
- Better error handling
- Tests
- Debug

## License

MIT

## Collaborators

- Frank Galindo <https://www.linkedin.com/in/frank-galindo/>