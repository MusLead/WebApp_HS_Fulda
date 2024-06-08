
Anleitung express

install express in the target folder (if the ejs in the target folder has not been added!)
```
express --view=ejs 
```

install the dependencies
```
npm install
```
WARNING!, please install the dependencies every time the repos is being clones or being updated!

The default port should be in `localhost:3000`

Optional:
change things in the file `package.json`
```json
{
  "name": "<PROJECT-NAME>",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "^3.1.10",
    "express": "^4.19.2",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.1"
  }
}

```

after changing `package.json` try to run the application using

```sh
npm install
npm run dev
```