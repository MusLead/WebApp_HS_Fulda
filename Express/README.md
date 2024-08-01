# Express

## Backend vs Frontend
### BACKEND
- Teil der Applikation, der nicht sichtbar ist › Implementiert Logik
- Sorgt für Datenzugriffe
- Stellt Schnittstellen (z.B. REST) bereit
- Kommunikation erfolgt über Frontend oder REST

### FRONTEND
- Präsentationsebene
- Kann „gesehen“ werden
- Kommuniziert mit dem Backend
- Stellt Daten des Backend grafisch dar
- Nimmt Benutzereingaben entgegen und leitet diese weiter


## SERVER vs CLIENT Rendering

### Client-Side Rendering (CSR)

Client-side rendering (CSR) refers to a web development technique where the content is rendered in the user's browser using JavaScript. The initial request to the server only retrieves a minimal HTML document, typically containing references to CSS and JavaScript files. Once the browser downloads these files, the JavaScript executes and dynamically generates the HTML content, allowing for interactive and responsive user interfaces. From this topic until View, we are using the concept of CSR.

**Advantages of CSR:**
1. **Improved User Experience:** After the initial load, navigation within the application is faster because it doesn't require full-page reloads.
2. **Rich Interactivity:** CSR enables the creation of highly interactive applications, often providing a more fluid user experience.
3. **Reduced Server Load:** The server primarily serves static files and APIs, potentially reducing the load and complexity on the server side.

**Disadvantages of CSR:**
1. **Initial Load Time:** The initial load time may be longer because the browser has to download and process JavaScript before displaying content.
2. **SEO Challenges:** Search engines may have difficulty indexing JavaScript-rendered content, though modern search engines are improving in this area.
3. **Increased Client-Side Complexity:** The browser must handle more tasks, which can be resource-intensive, particularly on lower-end devices.

### Server-Side Rendering (SSR)

Server-side rendering (SSR) refers to a web development technique where the server generates the full HTML for a web page and sends it to the client upon request. When the client requests a page, the server processes the request, fetches the necessary data, and renders the HTML content before sending it back to the client's browser. This application usually uses APIs to communicate between the server and clients. We apply this concept (at least for the introduction of a web app without a database) in the [REST](/REST/) and [Fetch](/Fetch/).

**Advantages of SSR:**
1. **Faster Initial Load:** The browser can display content faster because the HTML is already rendered and ready to be displayed.
2. **Better SEO:** Search engines can easily index server-rendered pages, as the content is fully available in the initial HTML response.
3. **Simpler Client-Side:** Less JavaScript is required on the client side, potentially improving performance on low-end devices.

**Disadvantages of SSR:**
1. **Increased Server Load:** The server must handle rendering the HTML for each request, which can increase the load and complexity on the server.
2. **Slower Page Navigation:** Each navigation within the application may require a full-page reload, which can be slower compared to CSR.
3. **Reduced Interactivity:** Server-rendered pages may be less interactive unless combined with JavaScript to enhance client-side interactions.

In summary, CSR and SSR each have their own strengths and weaknesses. The choice between them often depends on the specific requirements of the application, including performance needs, SEO considerations, and the desired user experience. Some modern frameworks, like Next.js, offer hybrid approaches, allowing developers to leverage both CSR and SSR as needed.

## MERN-Stack
MERN Stack ist ein JavaScript-Stack, der für die einfachere und schnellere Bereitstellung von Full-Stack- Webanwendungen verwendet wird. MERN Stack besteht aus 4 Technologien, nämlich: MongoDB, Express, React und Node.js. Er wurde entwickelt, um den Entwicklungsprozess reibungsloser und einfacher zu gestalten.

# Uebungsaufgabe
## Aufgabe: Erste Webapplikation generieren mit Express
Führen Sie die Schritte aus den Folien durch, um Ihre erste Webapplikation zu generieren und 
diskutieren Sie: 
### Welche Strukturen des MVC-Designs können Sie in den generierten Dateien erkennen? 

- **Model:** 
  - Standardmäßig generiert der Express-Generator keine spezifischen Model-Dateien. Models können jedoch im Verzeichnis `models` erstellt werden, wenn Datenbankinteraktionen erforderlich sind.
  
- **View:**
  - Im Verzeichnis `views` befinden sich die Templates für die Benutzeroberfläche. Diese sind in der Regel in einem Template-Engine-Format wie Pug, EJS oder Handlebars geschrieben.
  
- **Controller:**
  - Die Routen in Express fungieren als Controller. Im Verzeichnis `routes` befinden sich Dateien wie `index.js` und `users.js`, die die Anwendungslogik und Routen-Handling enthalten.

#### Unter welchem Port sollte Ihre Webseite erreichbar sein und warum?

Standardmäßig ist eine Express-Anwendung auf Port **3000** erreichbar. Dies wird durch die Datei `bin/www` definiert, die den Server startet und ihn auf Port 3000 hört:

```javascript
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
```

Der Grund, warum Port 3000 verwendet wird, liegt darin, dass es sich um einen **nicht privilegierten Port** handelt, der üblicherweise für Entwicklungszwecke verwendet wird. Privilegierte Ports (unter 1024) erfordern Administratorrechte, und Ports wie 80 oder 443 sind für HTTP bzw. HTTPS vorgesehen und sollten für Produktionsanwendungen reserviert werden.

## Aufgabe: Ändern des Titels (Express & EJS)
- Wo wird der Titel Ihrer Webapplikation gesetzt? Ändern Sie den Titel Ihrer Webapplikation.  
- Wie könnten Sie weitere Daten an die View übergeben? Senden Sie neben dem Titel auch einen Namen und lassen diesen anzeigen. 

###  Titel der Webapplikation setzen

Der Titel wird in der View-Datei gesetzt. Nehmen wir an, Sie verwenden EJS als Template-Engine.

1. Öffnen Sie die Datei `views/index.ejs`.

2. Suchen Sie nach dem `<title>`-Tag. Es könnte so aussehen:
   ```html
   <title><%= title %></title>
   ```

3. Um den Titel zu ändern, müssen Sie den Wert, der an die View übergeben wird, ändern. Öffnen Sie die Datei `routes/index.js`.

4. Ändern Sie den Titel in der Route, die die View rendert. Es könnte so aussehen:
   ```javascript
   router.get('/', function(req, res, next) {
     res.render('index', { title: 'Web-App' });
   });
   ```

5. Speichern Sie die Änderungen und starten Sie die Anwendung neu, um den neuen Titel anzuzeigen.

### Neue Datenvariable an die View übergeben

Um zusätzliche Daten wie einen Namen an die View zu übergeben, folgen Sie diesen Schritten:

1. Öffnen Sie die Datei `routes/index.js`.

2. Ändern Sie die Route, um eine neue Datenvariable hinzuzufügen. Beispielsweise:
   ```javascript
   router.get('/', function(req, res, next) {
     res.render('index', { title: 'About Me', name: 'Agha' });
   });
   ```

3. Öffnen Sie die Datei `views/index.ejs`.

4. Fügen Sie den neuen Datenpunkt (Name) hinzu, um ihn anzuzeigen. Beispielsweise:
```html
   <!DOCTYPE html>
   <html>
   <head>
     <title><%= title %></title>
   </head>
   <body>
     <h1><%= title %></h1>
     <p>Welcome, <%= name %>!</p>
   </body>
   </html>
```

5. Speichern Sie die Änderungen und starten Sie die Anwendung neu, um den neuen Titel und den Namen anzuzeigen.

## Aufgabe: Zweite Seite
Erzeugen Sie im View-Ordner eine zweite Datei und verlinken Sie die beiden Views nun untereinander. Wie sehen Ihre Routen aus? Welche Parameter müssen Sie in der jeweiligen Route übergeben? 

### Schritt 1: Erzeugen einer zweiten View-Datei

1. **Erstellen Sie eine neue View-Datei im `views`-Ordner:**
   - Erstellen Sie eine Datei namens `about.ejs`.

2. **Inhalt der `about.ejs`-Datei:**
```html
   <!DOCTYPE html>
<html>
    <head>
        <title><%= title %></title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        <h1><%= title %></h1>
        <p>Welcome to <%= title %>, <%= name %></p>
        <p>About Me:</p>
        <ul>
            <li>Name: My Name</li>
            <li>Age: My Age</li>
            <li>Location: My Location</li>
            <li>Occupation: My Occupation</li>
        </ul>
        <a href="/">Homepage</a>
    </body>
</html>
```

### Schritt 2: Routen erstellen und bearbeiten

1. **Bearbeiten Sie die Datei `routes/index.js`, um eine neue Route für die zweite Seite hinzuzufügen:**
   ```javascript
        var express = require('express');
        var router = express.Router();

        /* GET home page. */
        router.get('/', function(req, res, next) {
            res.render('index', { title: 'Web-App', name: 'Agha' });
        });

        /* GET second page. */
        router.get('/about', function(req, res, next) {
        res.render('about', { title: 'About me', name: 'Agha'});
        });

    module.exports = router;
   ```

### Schritt 3: Link zur zweiten Seite in der ersten View hinzufügen

1. **Öffnen Sie die Datei `views/index.ejs` und fügen Sie einen Link zur zweiten Seite hinzu:**
   ```html
   <!DOCTYPE html>
    <html>
    <head>
        <title><%= title %></title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
    </head>
    <body>
        <h1><%= title %></h1>
        <p>Welcome to <%= title %>, <%= name %></p>
        <a href="/about">Über mich</a>
    </body>
    </html>
   ```

### Erläuterung der Parameter in den Routen:

- **Home Page Route (`/`):**
  - Parameter: `title` und `name`
  - Werte: `'Web-App'` und `'Agha'`

- **Second Page Route (`/about`):**
  - Parameter: `title` und `name`
  - Werte: `'About me'` und `'Agha'`

Mit diesen Schritten haben Sie erfolgreich eine zweite Seite erstellt und die beiden Views miteinander verlinkt. Die entsprechenden Routen und Parameter sind definiert, um die Views korrekt anzuzeigen und die Daten zu übergeben.
