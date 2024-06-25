# Web_App SoSe 2024

Name: Agha Muhammad Aslam

Matrikelnr.: 1515659

## Anleitung express

install express in the target folder (if the ejs in the target folder has not been added!)
```
express --view=ejs 
```

WARNING!, please install the dependencies every time the repos is being clones or being updated!


Optional:
change things in the file `package.json`
```json
{
  "name": "<PROJECT-NAME>",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    // add this line below, 
    // Do not forget the comma before the line!
    "dev": "nodemon ./bin/www" 
  },
  "dependencies": {
    //... default dependencies
  },
  
  // add this dependencies below
  // Do not forget the comma beofre the devDependencies
  "devDependencies": {
    "nodemon": "^3.1.1"
  }
}

```

install the dependencies (additionally with bootstrap)
```sh
npm install express-fileupload 
```
run the app using start
```sh
npm start
```
run the app using dev mode (optional)
```sh
npm run dev 
```
The default port should be in `localhost:3000`

## Additional
- If you want to link Bootstrap to your website, please do so using the link provided by Bootstrap to preserve memory. Link below will show you the actual bootstrap:
https://getbootstrap.com/docs/5.3/getting-started/download/#cdn-via-jsdelivr


- If in Windows you see this error:
  > .ps1 is not digitally signed. The script will not execute on the system.
  
  then write this in power Shell:
  ```sh
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  ```
  source: https://caiomsouza.medium.com/fix-for-powershell-script-not-digitally-signed-69f0ed518715