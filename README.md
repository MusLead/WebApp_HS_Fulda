
Anleitung express

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

### Additional
If you want to link Bootstrap to your website, please do so using the link provided by Bootstrap to preserve memory. Link below will show you the actual bootstrap:
https://getbootstrap.com/docs/5.3/getting-started/download/#cdn-via-jsdelivr


TODO: 
Try to add feature upload file within the Model!