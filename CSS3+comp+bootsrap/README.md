# CSS & Bootstrap
With help of other resource: [w3School CSS](https://www.w3schools.com/css)
## CSS Syntax
![syntax structure](https://www.w3schools.com/css/img_selector.gif)

## CSS in HTML
### importing file css into html
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```
### within the html
```html
<head>
    <style>
        /* Your CSS code here  */
    </style>
</head>
```

## inline css
```html
<body>
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
</body>
```

### Cascading order
What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

## Selectors (Structure of CSS)
> CSS selectors are used to "find" (or select) the HTML elements you want to style.

### five categories:

- Simple selectors (select elements based on name, id, class)
- [Combinator selectors](https://www.w3schools.com/css/css_combinators.asp) (select elements based on a specific relationship between them)
- [Pseudo-class selectors](https://www.w3schools.com/css/css_pseudo_classes.asp) (select elements based on a certain state)
- [Pseudo-elements selectors](https://www.w3schools.com/css/css_pseudo_elements.asp) (select and style a part of an element)
- [Attribute selectors](https://www.w3schools.com/css/css_attribute_selectors.asp) (select elements based on an attribute or attribute value)


```css
* { /* this is universal selector, it will design the whole page*/
    /* properties and values */
}
html_tag { /*Other name: Grouping Selector*/
    /* properties and values */
}
.html_class{
    /* properties and values */
}
html_tag.html_class{
    /* properties and values */
}
#html_id{
    /* properties and values */
}
```
> In case of overlapping, the Priority of styles is **ID**, then **class**, then **element**

| Selector | Example | Example description |
|----------|---------|---------------------|
| #id      | #firstname | Selects the element with id="firstname" |
| .class   | .intro  | Selects all elements with class="intro" |
| element.class | p.intro | Selects only <p> elements with class="intro" |
| *        | *       | Selects all elements |
| element  | p       | Selects all <p> elements |
| element,element,.. | div, p | Selects all <div> elements and all <p> elements |

> Note: Do not add a space between the property value (20) and the unit (px):
> - Incorrect (space): margin-left: 20 px;
> - Correct (no space): margin-left: 20px;

#Bootstrap

## WAS IST BOOTSTRAP?
1. Frontend-Framework
    - Ursprünglich von Twitter entwickelt
2. Arbeitet mit CSS
3. Per JavaScript werden weitere Komponenten bereitgestellt
    - Grundlage ist dabei jQuery
    - Ab Bootstrap 5 vanilla JavaScript

## Ziel von Bootstrap
1. IM KERN VERSUCHEN DIE MEISTEN CSS/JAVASCRIPT FRAMEWORKS EINE ABSTRAKTION DER ZUGRUNDELIEGENDEN DYNAMISCHEN SEITENANPASSUNGEN BEREITZUSTELLEN
2. VEREINFACHTE NUTZUNG ÜBER
    - Einfach zu nutzende JavaScript-Funktionen
    - Definition von CSS-Klassen, zur Festlegung von Layout und Interaktion

## Using Bootstrap in HTML

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bootstrap Example</title>
        <!-- Include Bootstrap CSS -->
        <link rel="stylesheet" href="path/to/bootstrap.min.css">
    </head>
    <body>
        <h1>Welcome to my Bootstrap Example</h1>

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>Column 1</h2>
                    <p>This is the content of column 1.</p>
                </div>
                <div class="col-md-6">
                    <h2>Column 2</h2>
                    <p>This is the content of column 2.</p>
                </div>
            </div>
        </div>

        <!-- Include Bootstrap JavaScript -->
        <script src="path/to/bootstrap.min.js"></script>
    </body>
    </html>
```

In this example, we have included the Bootstrap CSS file using the `<link>` tag in the `<head>` section of the HTML file. We have also added a simple layout using Bootstrap's grid system, with two columns inside a container.

Finally, we have included the Bootstrap JavaScript file at the end of the `<body>` section using the `<script>` tag. This is necessary if you want to use Bootstrap's interactive components like dropdowns, modals, etc.

Make sure to replace `"path/to/bootstrap.min.css"` and `"path/to/bootstrap.min.js"` with the actual paths to your locally downloaded Bootstrap files.
