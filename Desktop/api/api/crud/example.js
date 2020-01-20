const fs = require("fs");
const { gitCommitPush } = require("git-commit-push-via-github-api");
process.on("unhandledRejection", console.dir);
process.env.GITHUB_API_TOKEN="33de6f051cdbe3b6fb876368717ff2d2f4643e53"
if (!process.env.GITHUB_API_TOKEN) {
    throw new Error("GITHUB_API_TOKEN= 33de6f051cdbe3b6fb876368717ff2d2f4643e53 node example.js");
}
gitCommitPush({
    // commit to https://github.com/azu/commit-to-github-test
    owner: "rohini-ctrl",
    repo: "example",
    // commit files
    files: [
        { path: "C:/Users/Administrator.DEMO/Desktop/input/input.txt", content: fs.readFileSync("C:/Users/Administrator.DEMO/Desktop/input/input.txt", "utf-8") },
        // Pass binary as Buffer
    ],
    fullyQualifiedRef: "heads/master",
    //forceUpdate: false, // optional default = false
    commitMessage: "HELLO"
})
    .then(res => {
        console.log("success", res);
    })
    .catch(err => {
        console.error(err);
    });