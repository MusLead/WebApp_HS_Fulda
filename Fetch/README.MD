# Fetch

## Javascript-Methods

| **METHOD**             | **DESCRIPTION**                                                                    |
|------------------------|------------------------------------------------------------------------------------|
| `addEventListener()`   | Attaches an event handler to the document                                          |
| `cookie`               | Returns all name/value pairs of cookies in the document                            |
| `createAttribute()`    | Creates an attribute node                                                          |
| `createElement()`      | Creates an Element node                                                            |
| `getElementByID()`     | Returns the element that has the ID attribute with the specified value             |
| `getElementByClassName()` | Returns an HTMLCollection containing all elements with the specified class name  |
| `getElementByName()`   | Returns a live NodeList containing all elements with the specified name            |
| `getElementByTagName()`| Returns an HTMLCollection containing all elements with the specified tag name      |
| `hasFocus()`           | Returns a Boolean value indicating whether the document has focus                  |
| `URL`                  | Returns the full URL of the HTML document                                          |

| **Method/Attribute**    | **Description**                                                |
|-------------------------|----------------------------------------------------------------|
| `addEventListener()`    | Attaches an event handler to an element                        |
| `appendChild()`         | Adds (appends) a new child node to an element                  |
| `attributes`            | Returns a NamedNodeMap of an element's attributes              |
| `childNodes`            | Returns a NodeList of an element's child nodes                 |
| `children`              | Returns an HTMLCollection of an element's child elements       |
| `click()`               | Simulates a mouse-click on an element                          |
| `getAttribute()`        | Returns the value of an element's attribute                    |
| `innerHTML`             | Sets or returns the content of an element                      |
| `innerText`             | Sets or returns the text content of a node and its descendants |
| `style`                 | Sets or returns the value of the style attribute of an element |

## How to use Fetch

The [`fetch`](/Fetch) function is a built-in JavaScript function that allows you to make HTTP requests to retrieve resources from a server. It is commonly used to fetch data from APIs and handle the response asynchronously.

Here's an example of how you can use the [`fetch`](/Fetch) function to retrieve data from an API:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Do something with the retrieved data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
```

In this example, we use the [`fetch`](/Fetch) function to send a GET request to the URL `'https://api.example.com/data'`. The [`fetch`](/Fetch) function returns a Promise that resolves to the `Response` object representing the response from the server.

We can then use the `json` method of the `Response` object to parse the response body as JSON. This method also returns a Promise that resolves to the parsed JSON data.

Finally, we can access the retrieved data in the second `then` block and perform any necessary operations on it. In this example, we simply log the data to the console. If any errors occur during the request, they can be caught and handled in the `catch` block.

It's important to note that the [`fetch`](/Fetch) function is asynchronous, meaning that it doesn't block the execution of the rest of your code. Instead, it returns a Promise that allows you to handle the response when it becomes available.

Additionally, the [`fetch`](/Fetch) function supports various options that allow you to customize the request, such as specifying the HTTP method, headers, and request body. These options can be passed as the second argument to the [`fetch`](/Fetch) function.

Overall, the [`fetch`](/Fetch) function provides a powerful and flexible way to retrieve data from servers in JavaScript applications.

## Uebungsaufgabe

### Fetch im Server

The main code for this logic is located within [apiCall.js](/Fetch/controllers/apiCall.js). The implementation is within the [blog.js](/Fetch/routes/blog.js)

Each time a route is being called, it will execute this codes and return the value into json.

```js
const json = await apiCall.handleAPICalls('', 'HTTP-METHOD', null);
res.render('list', { blogposts: json });
```

### Kombinierte Views

In this task we have to design a page [(post.ejs)](/Fetch/views/post.ejs) that show a choosen blog. Within this page it the blog could be edited. Using EJS-format we could design them easily. `<%- include('./particals/_form') %>` Tis part of the code let the partial page to be inserted to the HTML page and with this logic below let function the edit and view mode interchangeable.

We check if the `editPost` and `ViewButton` is there. Then if true we add the listener for each button. `.style.display` decide which page need to be shown.

```js
// Blendet das DIV-Element mit der id „formular“ aus
        document.getElementById('formular').style.display = 'none';

        // Eventlistener für den „Editieren“-Button
        if (document.getElementById('editPost')){
            document.getElementById('editPost').addEventListener('click', function(event) {
                // prevent the default action of the event
                event.preventDefault();
                document.getElementById('formular').style.display = 'block';
                document.getElementById('viewpost').style.display = 'none';
            });
        }

        // Eventlistener für den „Zurück zum View“-Button
        if (document.getElementById('viewButton')){
            document.getElementById('viewButton').addEventListener('click', function(event) {
                // prevent the default action of the event
                event.preventDefault();
                document.getElementById('formular').style.display = 'none';
                document.getElementById('viewpost').style.display = 'block';
            });
        }
```

### Fetch im Client

We write another script that allows the fetch within the HTML code [(post.ejs)](/Fetch/views/post.ejs). In there there is a function called `apiCall()`.

```js
// Funktion für den API-Aufruf nachdem editiert wurde
        function apiCall(method, id="") {
            // Retrieve Data as Key-Value Pairs
            let data = new FormData(document.getElementById('meinFormular'));
            data.append('files', document.querySelector('input[type="file"]').files[0]);
           
            fetch(`/api/blog/${id}`, {
                method: method,
                body: data
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    if(method === 'DELETE') {
                        window.location.href = "/";
                        alert('Post wurde gelöscht')
                    } else {
                        alert('Post wurde geändert');
                        history.go(0); 
                    }
                } else {
                    alert('Fehler beim Speichern');
                }
            });
        }


```

`apiCall()` is being called within even listner, so that every time the button is clicked it will send the data into the Server (Model).

```js

// Eventlistener für den „Absenden“-Button
        if (document.getElementById('submitButton')){
            document.getElementById('submitButton').addEventListener('click', function(event) {
                // prevent the default action of the event
                event.preventDefault();
                apiCall('PUT', '<%= post.id %>');
            });
        }

```
