import { Repo } from "../index";
import fetch from "node-fetch";
import { Response } from "node-fetch";

function checkRepo(repo: Repo): boolean {
  return repo.full_name === "froi/github-types";
}
fetch("https://api.github.com/repos/froi/github-types")
  .then((res: Response) => res.json())
  .then((repo: Repo) => {
    if (checkRepo(repo)) {
      console.log("All good.");
    } else {
      console.error("All bad");
    }
  });
