
Anleitung express

express --view=ejs 
npm install

optional:
```json
{
  "name": "formular",
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
Todo: create gitignore to solve this problem