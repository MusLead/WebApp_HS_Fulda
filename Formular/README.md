# FORMULARE

## Important components of Formular
- Form-Tag
    - Definiert ein Formular zur Benutzereingabe
    - Attribute action und method
- Ein Formular kann multiple Elemente enthalten
    - Label, Input, Button, Select, Option, Optgroup, fieldset, Textarea, Output
    - Attribut `type` ist essenziell
- `action` definiert Ziel des Formulars
    - Wohin soll der Inhalt des Formulars gesendet werden?
- `method` definiert die Methode mit welcher gesendet wird 
    - Kann den Wert get oder post annehmen
- Beschriftung `Label` von Eingaben
    - `for`-Attribut bezieht sich auf die
`id` des Elements
    - Formulare ohne Beschriftungen sind sinnlos!
```html
    <form action="/neuePerson" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </form>
```

- `submit` sendet Daten des Formulars
```html
    <form action="/neuePerson" method="POST">
        ...
        <button type="submit">Absenden</button>
    </form>
```
Sure! Here's an example of using the `<select>` element in an HTML form:

```html
<form action="/submitForm" method="POST">
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        <option value="uk">UK</option>
        <option value="germany">Germany</option>
    </select>
    <button type="submit">Submit</button>
</form>
```

In this example, the `<select>` element is used to create a dropdown list for selecting a country. Each `<option>` element represents an option in the dropdown list, with the `value` attribute specifying the value that will be sent to the server when the form is submitted.

In the `<select>` tag, the `name` attribute is used to identify the form field when the form is submitted. It is the name that will be used to retrieve the selected value on the server-side.

On the other hand, the `id` attribute is used to uniquely identify the `<select>` element within the HTML document. It is often used in conjunction with the `<label>` element's `for` attribute to associate the label with the form field.

## Request & Respon
- router.get
    - Reagiert auf Route (Adresse)
    - Get-Methode
- req
    - Request
    - Kann Daten von einem Formular beinhalten 
- res
    - Response des Servers 
- console.log
    - Ausgabe auf Console 
    - Debug!

[Difference between Request (querry,body,and params)](https://dev.to/gathoni/express-req-params-req-query-and-req-body-4lpc)

[List of Responses Objects](https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm)

# Uebungaufgabe

## The process of submiting form
1. The form will be rendered [(index.js)](/Formular/routes/index.js)
2. Fill the form and submit with path `/neuePerson` [(person.ejs)](/Formular/views/person.ejs)
3. After Submission the router in this function will be executed [(index.js)](/Formular/routes/index.js)
    - within this function the form data will be retrieved from `req.body`
```js
router.post('/neuePerson', function(req, res, next) {...})
```
4. Render the page and show the value to the next page `view/neuePerson.ejs` [(index.js)](/Formular/routes/index.js)
```js
router.post('/neuePerson', function(req, res, next) {
    
    /* Rest of the logic */
    
    res.render('neuePerson', { //render the data into view/neuePerson.ejs
        name: personData.name,
        years: jahre,
        months: monate,
        days: tage
    });
});
```




