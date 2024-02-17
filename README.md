# monolithic-node-demo


## Setup

1. Install Node/NPM

2. Create empty project folder

3. Initialize Git in project folder

4. Add .gitignore (see .gitignore for content)

```shell
npm init -y
npm install express ejs mssql dotenv
npm install --save-dev nodemon
```

Add the following to package.json "scripts":
```json
"start": "nodemon index.js",
``` 

Run from project root with:
```shell
npm start
```

## Recommended VSCode Plugins for Project
https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support
https://marketplace.visualstudio.com/items?itemName=j69.ejs-beautify


Deployment
- Host the SQL DB (currently on Azure, likely also possible with WH4S)
- TODO: Deploy App Hosting (WH4S and Azure both seem viable and reasonably straightforward but not done testing)