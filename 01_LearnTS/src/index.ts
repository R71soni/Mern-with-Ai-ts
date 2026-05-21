"use strict";

let uname:string="10";

console.log(uname);

// for online -> https://www.typescriptlang.org/play/
// npm init -y
// npm install -g typescript tsx 
// npx tsc --init
// created src folder and moved index.ts file to src folder
// in package.json added "build": "tsc --watch" and "dev": "tsx watch src/index.ts" in scripts
// changed tsconfig.json and uncomment "rootDir": "./src","outDir": "./dist",Style Options
// opened 2 terminals 
// in 1st terminal run "npm run build" to watch for changes and compile ts to js
// in 2nd terminal run "npm run dev" to run the compiled js file