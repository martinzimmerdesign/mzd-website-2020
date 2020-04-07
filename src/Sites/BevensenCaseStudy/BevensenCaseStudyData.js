import header from './img/header.png';

const bevensenData = {

title: "Gefässpraxis Bevensen",
subtitle: "Case Study",
overview: "Ein neuer Webauftritt, welcher den Nutzern schnell und einfach die gewünschten Informationen gibt, egal ob über den Computer oder das Smartphone. Die Seite sollte schnell und sein und durch eine intuitive und schlichte Gestaltung überzeugen.",
challenges: "Ein neuer Auftritt im Internet war eine Notwendigkeit, da die alte Webseite fehlerhaft war, worüber die Praxis durch einen Patienten informiert wurde. Funktionen funktionierten nicht und es fehlte eine 2019 gerechte Mobile/Tablet-Version. Nachdem die akuten Fehler behoben waren, wurde klar, dass ein neues Webdesign mit Programmierung nach neustem Standard der nächste logische Schritt sei. Primäres Ziel sollte sein, dass die Webseite intuitiv für die eher ältere Zielgruppe ist und diese möglichst schnell und einfach gesuchte Informationen finden. Zudem sollte die Seite schnell und fehlerfrei laufen. Auch die Einbindung in die Suchmaschinen stand im Fokus.",
weg_zum_ziel: "Eine intuitive Webseite ist an erster Stelle schlicht und einfach. Deshalb habe ich alle Informationen in logische Kategorien unterteilt, dennoch möglichst wenig, und daraus eine Navigationsstruktur erstellt. Die einzelnen Seiten sind dabei mit nur einem Klick, also schnellstmöglich, erreichbar und zeigen direkt alle wichtigen Informationen an. Die Webseite reduziert sich auf das Wichtigste, wodurch der Nutzer nie mit Informationen überladen wird. Das einheitliche Design der einzelnen Seiten und Animationen hilft dabei ein Gefühl für die Webseite zu bekommen. Die Programmierung mit React.JS mach dabei die Seite sehr schnell und das Unterteilen in Komponenten sorgt dafür, dass Inhalte nicht mehrfach neu geladen werden müssen, wodurch die Seite schnell und Ressourceneffizient ist. Dadurch bekommt der Nutzer eine optimale Erfahrung und verlässt nicht die Webseite aufgrund von langen Ladezeiten und zu großem Verbrauch von Datenvolumen.",
result: "Die Seite bringt (potentielle) Patienteninnen und Patienten schnellstmöglich an ihr Ziel und beantwortet Fragen nach angebotenen Leistungen, Öffnungszeiten und Kontaktdaten, sowie die Frage nach den Standorten ohne Aufwand. Dem Nutzer wird lästiges Suchen erspart und die positive Erfahrung färbt direkt auf das Bild der Praxis ab.",
lighthouse:
    {
      figure_subtitle: "Quelle: Google Lighthouse Score (Desktop) vom 10.12.2019",
      stats: [
      {
        id: 0,
        category: "Leistung",
        score: "15",
      },
      {
        id: 1,
        category: "Leistung",
        score: "95",
      },
      {
        id: 2,
        category: "Leistung",
        score: "85",
      },
      {
        id: 3,
        category: "Leistung",
        score: "35",
      },
   ]
  },
  header_image: header ,
  image: {
    source: header,
    figure_subtitle: "Quelle: Google Lighthouse Score (Desktop) vom 10.12.2019",
    alt: "bevensen_case_study_mockup"
  }
}

export default bevensenData;
