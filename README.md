# Web_App SoSe 2024

Name: Agha Muhammad Aslam

Matrikelnr.: 1515659

## List of Contents
1. [HTML](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=2)/[file](/HTML/)
2. [CSS+Comp](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=3)+[Bootstrap](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=4)/[file](/CSS3+comp+bootsrap/)
3. [Express](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=5)/[file](/Express/)
4. [Formulare](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=6)/[file](/Formular/)
6. [Routing](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=7)/[file](/Routing/)
7. [Model](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=8)/[file](/Model/)
8. [Controller](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=9)/[file](/Controller/)
9. [View](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=10)/[file](/View/)
10. [REST](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=11)/[file](/REST/)
11. [Fetch](https://elearning.hs-fulda.de/ai/course/view.php?id=1375&section=12)/[file](/Fetch/)

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
  
  then execute this in power Shell:
  ```sh
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  ```
  source: https://caiomsouza.medium.com/fix-for-powershell-script-not-digitally-signed-69f0ed518715
