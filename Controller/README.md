# Controller

## STRUKTUR DES BACKEND-SERVERS

1. BACKEND IMPLEMENTIERT
    - Routes
    - Controllers
    - Models
2. BEINHALTET EINEN TEIL DES MVC-PATTERNS

## CONTROLLER

1. „ROUTEN“ LEITEN ANFRAGEN AN DEN ENTSPRECHENDEN CONTROLLER WEITER
2. CONTROLLER
    - Holen Daten aus dem Model
    - Aktualisieren das Model
    - Senden Response an den Client oder die Route zurück

## Function of controller

1. CONTROLLER LIEST DATEN DES MODELS EIN
2. ENTHÄLT FUNKTIONEN UND RÜCKGABEN AN CLIENT ODER DIE ROUTE
3. `module.exports` STELLT FUNKTIONEN BEREIT [blogController.js](/Controller/controllers/blogController.js)

4. ROUTE BINDET CONTROLLER EIN [blog.js](/Controller/routes/blog.js)

    ```js
        var postController = require('../controllers/blogController');
    ```

5. RUFT ENTSPRECHENDE FUNKTIONEN DES CONTROLLERS AUF [blog.js](/Controller/routes/blog.js)

## MVC UND ROUTEN

1. ROUTEN BINDEN CONTROLLER EIN UND LEITEN ANFRAGEN AN DIESEN WEITER
2. MODEL ENTHÄLT DATEN
3. VIEW ENTHÄLT DARSTELLUNG
4. CONTROLLER
    - lesen/schreiben in Model
    - Erstellen Rückgabe an Client
5. RÜCKGABE KANN HTML SEIN, MUSS ES ABER NICHT
    - res.send 
    - res.json
    - res.render 
    - return 
    - ...