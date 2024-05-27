var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));

/* GET person form. */
router.get('/', function(req, res, next) {
  res.render('person');
});

/* POST new person data. */
router.post('/neuePerson', function(req, res, next) {
  const personData = req.body;
  const geburtstag = personData.geburtstag;

  console.log('Geburtsdatum: ', geburtstag);

  // Geburtsdatum in Unix-Timestamp konvertieren
  const geburtstagDate = new Date(geburtstag);
  const geburtstagTimestamp = Math.floor(geburtstagDate.getTime() / 1000);
  console.log('Geburtsdatum (Unix-Timestamp): ', geburtstagTimestamp);

  // Aktuelles Datum in Unix-Timestamp konvertieren
  const aktuellesDatum = new Date();
  const aktuellesDatumTimestamp = Math.floor(aktuellesDatum.getTime() / 1000);
  console.log('Aktuelles Datum (Unix-Timestamp): ', aktuellesDatumTimestamp);

  // Anzahl der Tage auf Erden berechnen
  const sekundenProTag = 86400; // 60 Sekunden * 60 Minuten * 24 Stunden
  const tageAufErden = Math.floor((aktuellesDatumTimestamp - geburtstagTimestamp) / sekundenProTag);
  console.log('Tage auf Erden: ', tageAufErden);

  // Berechnung der Jahre, Monate und Tage
  let jahre = aktuellesDatum.getFullYear() - geburtstagDate.getFullYear();
  let monate = aktuellesDatum.getMonth() - geburtstagDate.getMonth();
  let tage = aktuellesDatum.getDate() - geburtstagDate.getDate();

  if (tage < 0) {
    monate -= 1;
    tage += new Date(aktuellesDatum.getFullYear(), aktuellesDatum.getMonth(), 0).getDate();
  }

  if (monate < 0) {
    jahre -= 1;
    monate += 12;
  }

  console.log(`Jahre: ${jahre}, Monate: ${monate}, Tage: ${tage}`);

  // Ergebnis an den Client zurückgeben without the page? TODO: is my understanding correct?
  // res.send(
  // `
  //   Sie haben bereits ${tageAufErden} Tage auf Erden gewandelt. <br>
  //   Das entspricht ${jahre} Jahre, ${monate} Monate und ${tage} Tage auf Erden gewandelt.  
  // `
  // );

  // Ergebnis an den Client zurückgeben und neuePerson.ejs rendern
  res.render('neuePerson', {
    name: personData.name,
    years: jahre,
    months: monate,
    days: tage
  });
});

module.exports = router;
