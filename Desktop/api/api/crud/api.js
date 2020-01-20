// Simple-git without promise 
const simpleGit = require('simple-git')();
process.on("unhandledRejection", console.dir);

// Shelljs package for running shell tasks optional
//const shellJs = require('shelljs');
// Simple Git with Promise for handling success and failure
const simpleGitPromise = require('simple-git/promise')();
//shellJs.cd('C://Users/Administrator.DEMO/Desktop/api');
// Repo name
const repo = 'Hello-World';  //Repo name
// User name and password of your GitHub
const userName = 'rohini-ctrl';
const password = 'Rohini12345@';
// Set up GitHub url like this so no manual entry of user pass needed
//const gitHubUrl = "https://api@github.com/rohini-ctrl/Hello-World";
const gitHubUrl="https://git-lfs@github.com/rohini-ctrl/patching"
console.log(gitHubUrl);
// add local git config like username and email
simpleGit.addConfig('user.email','arohini1994@@gmail.com');
simpleGit.addConfig('user.name','rohini-ctrl');
simpleGitPromise.removeRemote('origin');
simpleGitPromise.exec("git lfs track '*.exe'");
simpleGitPromise.exec("git config --local lfs.https://github.com/.locksverify false");
// Add remore repo url as origin to repo
simpleGitPromise.addRemote('origin',gitHubUrl);
// Add all files for commit
  simpleGitPromise.add('.')
    .then(
       (addSuccess) => {
          console.log(addSuccess);
       }, (failedAdd) => {
          console.log('adding files failed');
    });
// Commit files as Initial Commit
 simpleGitPromise.commit('third commit by simplegit')
   .then(
      (successCommit) => {
        console.log(successCommit);
     }, (failed) => {
        console.log('failed commmit');
 });
// Finally push to online repository
 simpleGitPromise.push('origin','master')
    .then((success) => {
       console.log('repo successfully pushed');
    },(failed)=> {
       console.log('repo push failed');
 });