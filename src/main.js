import shell from "shelljs";

export default async function mirrorRepo(options) {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git");
    shell.exit(1);
  }

  const tempFolder = `temp-${new Date()
    .toLocaleDateString()
    .replaceAll("/", "")}`;

  // Try delete the folder in case it already exists
  shell.rm("-rf", tempFolder);

  if (
    shell.exec(`git clone --bare ${options.sourceRepo} ${tempFolder}`).code !==
    0
  ) {
    shell.echo("Error: Git commit failed");
    shell.rm("-rf", tempFolder);
    shell.exit(1);
  }

  shell.cd(tempFolder);

  if (shell.exec(`git push --mirror ${options.targetRepo}`).code !== 0) {
    shell.echo("Error: Git commit failed");
    shell.rm("-rf", tempFolder);
    shell.exit(1);
  }

  shell.cd("..");
  shell.rm("-rf", tempFolder);

  shell.echo("Success: Git Repo mirrored");

  return true;
}
