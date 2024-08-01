# Model (JSON-Object)

## JSON
- JavaScript Object Notation (JSON)
    - Einfach lesbare Textform
    - Datenaustausch zwischen Anwendungen
- JSON ist unabhängig von der Programmiersprache
    - Parser existieren in allen gängigen Sprachen
- Besteht aus Attribut
- Wert (Int, Float, String, ...) paaren

## JSON Datatype
JSON consists of attribute-value pairs, where each attribute is a unique identifier and its corresponding value can be of various types such as integers, floats, strings, booleans, arrays, or even nested JSON objects.

Here's an example of a JSON object:

```json
{
  "name": "John Doe",
  "age": 25,
  "isStudent": true,
  "hobbies": ["reading", "coding", "gaming"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  }
}
```

In this example, we have attributes like "name", "age", "isStudent", "hobbies", and "address". Each attribute is paired with its corresponding value. For example, the attribute "name" has the value "John Doe", the attribute "age" has the value 25, and so on.

JSON is language-independent, which means it can be used with any programming language that has a JSON parser. This makes it a versatile format for data exchange between different systems and platforms.

In JavaScript, you can work with JSON data using built-in methods. For example, you can parse a JSON string into a JavaScript object using the `JSON.parse()` method, and you can convert a JavaScript object into a JSON string using the `JSON.stringify()`method.

Here's an example of parsing a JSON string into a JavaScript object:

```javascript
const jsonString = '{"name": "John Doe", "age": 25}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John Doe
console.log(jsonObject.age); // Output: 25
```

And here's an example of converting a JavaScript object into a JSON string:

```javascript
const person = {
  name: "John Doe",
  age: 25
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"John Doe","age":25}
```

JSON is widely used in web development for tasks such as sending and receiving data from APIs, storing configuration settings, and exchanging data between the client and server. It provides a lightweight and human-readable format for data representation and communication.

## Read and Write
- Modul: „fs“ (FileStream)
- Lesen
    - readFileSync (Synchron)
    - readFile (Asynchron)
- Schreiben
    - writeFileSync (Synchron)
    - writeFile (Asynchron)

- JSON mit `require` lesen
    - Synchron
    - Wird nur 1x gelesen (cache)
    - Umwandlung von JSON zu Objekt erfolgt automatisch
- JS-Objekt mit Daten und Methoden
    - studierende.studi enthält Daten
    - setStudi speichert neue Inhalte in Struktur
    - Speichert NICHT in Datei!

```js
// Reading JSON using `require` (synchronous)
var studierende = {
    studi: require('student.json'),
    setStudi: function(data) {this.studi = data}
}

router.route('/').post((req,res) => {
    var neuerStudi = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        martikel: req.body.matrikelnummer
    }
    studierende.setStudi([...studierende.studi, neuerStudi]);
    /* Further response logic! */
})
```

### Asynchron Writing
- Bei größeren Dateien/Datensätzen
- Funktion muss als Asynchron deklariert
werden
- Aufruf der Funktion (z.B. innerhalb einer POST-Route)
```js
const fsPromises = require('fs').promises;
/* ... */
async function writeStudierende(data) {
    try {
        await fsPromises.writeFile(
            'student.json',
            JSON.stringify(data,null,2)
        )
        console.log(data);
    } catch (err) {
        res.status(500).json({ 'message': err.message})
    }
}

router.route('/').post((req,res) => {
    /* ... */
    writeStudierende(studierende.studi);
    /* Further response logic! */
})
```


# Uebungsaufgabe
In this Task we used the json to save and retrieve data.
The Form submission process is the same as the in subject [Formular](/Formular/README.md). 

The explanation below is based on the file [blog.js](/Model/routes/blog.js)

## Retrieve Value from JSON
Initialy we retrieve the database as json data. Then it will be converted into an object and added into the array `posts`
```js
// Array zur Speicherung der Posts
let posts = [];
const rawdata = fs.readFileSync('public/blog.json');
posts = JSON.parse(rawdata);

```
## Save Value  to JSON
Everytime the user submit the form, it data will be processed. after it is being added into the current array, the array elements will be converted into a String type and the old JSON database will be later overwritten.

```js
router.route('/')

  .post((req, res) => {
    const { title, username, date, text } = req.body;

    const newPost = {
      id: posts.length + 1, // Einfache ID-Zuweisung
      title,
      username,
      date,
      text,
      photo: photoName
    };
    posts.push(newPost);
    let postsJSON = JSON.stringify(posts);
    fs.writeFileSync('public/blog.json', postsJSON);

    res.status(201).send(newPost);
  });

```
