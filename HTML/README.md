# HTML

## Introduction
HTML5 WIRD ZUNÄCHST VON DER WHATWG, EINER GRUPPE VON BROWSERHERSTELLERN, ENTWICKELT (ab 2006 wieder beim W3C)

1. HTML: HYPERTEXT MARKUP LANGUAGE
2. SGML-BASIERTE AUSZEICHNUNGSSPRACHE
    - Textuelle Information wird angereichert
    - Markup definiert Meta-Information, also Information über Information
3. MIT HTML ZEICHNET MAN **DIE STRUKTUR** DES TEXTES AUS! (STRUKTURELLES MARKUP)
4. MIT HTML DEFINIERT MAN **NICHT DAS AUSSEHEN** DES TEXTES (~~VISUELLES MARKUP~~)

- Typ: &lt;!DOCTYPE html&gt; <br>
&lt;html&gt;
- Head: &lt;head&gt; ... &lt;/head&gt;
- Body: &lt;body&gt; ... &lt;/body&gt; <br>
&lt;/html&gt;

## Character encoding / Zeichenkodierung (meta)
[Youtube link](https://youtu.be/bi5bfH_gVWE?si=9m-VLAG5TNFyw6uw)

- Tells the web-browser about the information of the data (HTML data)
- It is a sub-closing, no need a closing tag
- with in the &lt;head&gt;... &lt;/head&gt; tag

```html
<head>
    ...
    <meta charset="UTF-8" ... /> 
</head>
```

## Überschrift
```html
<h1></h1> <h2></h2> <h3></h3> <h4></h4> <h5></h5> <h6></h6>
```
- Überschriftenelemente kennzeichnen den enthaltenen Text als Kapitelüberschrift
- Die Zahl bezeichnet die Überschriftenebene, der eine bestimmte Überschrift und Größe
zugeordnet ist
- Die Darstellung jeder einzelnen Überschriftenebene (fett, kursiv, in größerer oder kleinerer Schrift) ist vom Browser abhängig
- In Abhängigkeit der strukturellen Ebene werden die Überschriften in unterschiedlicher Fontgröße dargestellt
- Je höher die Ebene (kleinere Zahl) desto größer die Darstellung

## VERWEISE: LINKS (a)
1. Mit HTML kann man Hypertexte auszeichnen
    - Hypertexte sind definiert durch vernetzte textuelle Einheiten
2. WIE DEFINIERT MAN EINEN VERWEIS?
```html
<a href="URI">Verweistext</a>
```
3. DAS ELEMENT &lt;a&gt; (ANCHOR) DEFINIERT EINEN VERWEIS ZUR
ANGEGEBEN URI IN SEINEM ATTRIBUT `href` 
    - `href` steht für Hypertextuelle Referenz

## ABSOLUTE UND RELATIVE PFADE 
1. Der lokale Pfad in der URI bildet die Verzeichnisstruktur auf dem
Rechner/Server nach.
    - / definiert einen Verzeichniswechsel
    - . referenziert das aktuelle Verzeichnis
    - .. referenziert das übergeordnete Verzeichnis
2. beginnt der Pfad mit /, spricht man von einem absoluten Pfad
3. beginnt der Pfad mit einem Verzeichnisnamen oder einer
4. Referenz auf ein Verzeichnis (. oder ..), spricht man von einem relativen Pfad

```html
<a href="../README.md">link to Readme at the root file</a>
```

## GENERISCHES STRUKTURELLES MARKUP (div and span)
[Youtube Links](https://youtu.be/WbnCll6vvw4?si=uqr7fMXdoU-L9_pg) and [code example](./div_span.html)


1. &lt;DIV&gt;...&lt;/DIV&gt;
    - Universelles Element zur Markierung von Blockstrukturen. Verhält sich ähnlich wie das <p></p>Element.
    - Wird in Kombination mit CSS (Cascading Style Sheets) verwendet und ersetzt dort nahezu alle anderen Blockelemente.
2. &lt;SPAN&gt; ... &lt;/SPAN&gt;
    - Universelles Element zur Markierung von Inlinestrukturen.
    - Wird in Kombination mit CSS verwendet und ersetzt dort nahezu alle anderen Inlineelemente.


