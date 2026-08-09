/* ---------------------------------------------------
   Content-Bausteine für die Begleitphase (Phase B)
   Alle Texte selbst verfasst, wissenschaftlich orientiert
   (MBSR, expressives Schreiben, WOOP) – keine Fremdinhalte.
--------------------------------------------------- */

const bausteine = [
  {
    titel: "Meditation",
    dauer: "3 Übungen · 10–20 Min",
    sections: [
      {
        h: "Warum",
        t: "Regelmäßige Meditation senkt nachweislich Stresslevel und verbessert die Fähigkeit, mit schwierigen Gedanken und Gefühlen umzugehen. Die drei Übungen hier sind an die MBSR-Methode (Mindfulness-Based Stress Reduction) angelehnt. Alle Anleitungen sind als Audio gedacht – Augen bleiben geschlossen."
      },
      {
        h: "Atemmeditation (10 Min)",
        t: "Setz dich aufrecht und bequem hin. Schließe die Augen. Lenke die Aufmerksamkeit auf den Atem – wo spürst du ihn am deutlichsten? Nase, Brust, Bauch. Zähle stumm bis 4 beim Einatmen, halte kurz, zähle bis 6 beim Ausatmen. Wenn die Gedanken abschweifen, ist das normal – bemerke es freundlich und kehre zum Atem zurück, ohne dich zu bewerten."
      },
      {
        h: "Body-Scan (15 Min)",
        t: "Leg dich hin oder setz dich bequem hin. Wandere gedanklich langsam durch den Körper – von den Zehen bis zum Kopf. Bei jeder Körperregion: kurz verweilen, spüren was da ist (Anspannung, Wärme, nichts Besonderes), dann bewusst loslassen und weiterziehen. Kein Ziel, kein Entspannen-Müssen – nur wahrnehmen."
      },
      {
        h: "Metta-Meditation / Liebende Güte (10 Min)",
        t: "Setz dich bequem hin, Augen geschlossen. Wiederhole innerlich Sätze wie „Ich wünsche mir Sicherheit, Ich wünsche mir Gelassenheit, Ich wünsche mir Wohlergehen.“ Nach ein paar Runden richtest du dieselben Wünsche an eine dir nahestehende Person, dann an eine neutrale Person, optional auch an eine schwierige Person. Es geht nicht um perfektes Fühlen, sondern um die Wiederholung der Absicht."
      }
    ]
  },
  {
    titel: "Reflexion: Stärken, Schwächen, Werte",
    dauer: "20–30 Min · Schreiben",
    sections: [
      {
        h: "Warum",
        t: "Expressives Schreiben – freies, ehrliches Aufschreiben von Gedanken und Gefühlen – hat eine belegte Wirkung auf die emotionale Verarbeitung. Es geht nicht um schöne Sätze, sondern um Ehrlichkeit dir selbst gegenüber. Kein Publikum, kein Anspruch."
      },
      {
        h: "Leitfragen zu Stärken",
        t: "Wann in den letzten Monaten hast du dich besonders wirksam oder stolz gefühlt? Was genau hast du dabei gut gemacht? Welche Stärke sehen andere Menschen an dir, die du selbst manchmal übersiehst?"
      },
      {
        h: "Leitfragen zu Schwächen",
        t: "Welche Situationen bringen dich immer wieder aus der Ruhe? Was vermeidest du, obwohl du weißt, dass es dir guttun würde? Wo bist du dir selbst gegenüber am kritischsten – und ist diese Kritik fair?"
      },
      {
        h: "Leitfragen zu Werten",
        t: "Wofür würdest du auch dann noch einstehen, wenn es unbequem wird? Wann hast du dich zuletzt richtig lebendig gefühlt – was war in diesem Moment wichtig für dich? Wenn du in 10 Jahren zurückblickst: worauf willst du stolz sein?"
      },
      {
        h: "Hinweis",
        t: "Schreib ohne abzusetzen, ohne zu korrigieren, 15–20 Minuten am Stück. Es muss niemand außer dir lesen."
      }
    ]
  },
  {
    titel: "Zieldefinition (WOOP)",
    dauer: "20 Min · einmal ausführlich",
    sections: [
      {
        h: "Warum",
        t: "Die WOOP-Methode (Wunsch, Ergebnis, Hindernis, Plan) ist eine wissenschaftlich untersuchte Technik zur Zielerreichung. Sie wirkt am stärksten, wenn sie wiederholt angewendet wird – deshalb: einmal ausführlich am Ende des Retreats, danach optional als wöchentliche Kurzversion (5 Min)."
      },
      {
        h: "W – Wunsch",
        t: "Was willst du in den nächsten Wochen/Monaten erreichen? Formuliere einen konkreten, für dich bedeutsamen Wunsch – realistisch, aber herausfordernd."
      },
      {
        h: "O – Outcome / Ergebnis",
        t: "Stell dir vor, der Wunsch ist erfüllt. Wie fühlt sich das an? Was verändert sich konkret in deinem Alltag? Nimm dir Zeit, dieses Bild wirklich auszumalen."
      },
      {
        h: "O – Obstacle / Hindernis",
        t: "Was in dir selbst – nicht äußere Umstände – wird dir am ehesten im Weg stehen? Ein Gedanke, eine Gewohnheit, ein Gefühl. Sei konkret und ehrlich."
      },
      {
        h: "P – Plan",
        t: "Formuliere einen Wenn-Dann-Plan: „Wenn [Hindernis tritt auf], dann werde ich [konkrete Handlung].“ Dieser Satz ist der wichtigste Teil – er macht die Absicht automatisch abrufbar, wenn die Situation eintritt."
      },
      {
        h: "Danach",
        t: "Notiere dir 3–5 konkrete Gewohnheiten für den Alltag, die aus dem Retreat mitgenommen werden. Optional: wöchentliche 5-Minuten-Erinnerung an W-O-O-P."
      }
    ]
  }
];

const flexibleBausteine = [
  {
    titel: "Achtsamkeitsspaziergang / bewusste Naturzeit",
    dauer: "20–40 Min · optional",
    sections: [
      {
        h: "Ablauf",
        t: "Ohne Ziel, ohne Kopfhörer, ohne Handy in der Hand gehen. Bewusst wahrnehmen: was siehst, hörst, riechst du gerade? Wechsle alle paar Minuten den Fokus – erst Sicht, dann Gehör, dann Bodenkontakt der Füße. Tempo egal, Hauptsache ohne Ablenkung."
      }
    ]
  },
  {
    titel: "Journaling",
    dauer: "10–15 Min · optional",
    sections: [
      {
        h: "Leitfragen",
        t: "Was war heute leicht, was war schwer? Wofür bin ich heute dankbar – auch für Kleinigkeiten? Was nehme ich mir für morgen vor, ohne mich damit unter Druck zu setzen?"
      }
    ]
  },
  {
    titel: "Schweigezeiten / Ruhephasen",
    dauer: "30–120 Min · optional",
    sections: [
      {
        h: "Idee",
        t: "Bewusst vereinbarte Zeit ohne Gespräch, ohne Bildschirm. Kein Programm – einfach da sein. Besonders wirksam am Vormittag oder späten Nachmittag, wenn der Kopf schon viele Eindrücke gesammelt hat."
      }
    ]
  },
  {
    titel: "Abschluss-Ritual zur Zielintegration",
    dauer: "15–20 Min · am letzten Tag",
    sections: [
      {
        h: "Ablauf",
        t: "Lies dir deine WOOP-Notizen und deine Reflexionen noch einmal laut vor – auch wenn niemand zuhört. Formuliere in einem Satz, was sich für dich verändert hat. Wähle ein kleines, alltagstaugliches Symbol (ein Stein, eine Notiz im Handy, ein Foto), das dich an diesen Moment erinnert, wenn der Alltag wieder einsetzt."
      }
    ]
  }
];

const rezepte = [
  {
    titel: "Ofengemüse mit Linsen (daheim)",
    dauer: "35 Min · günstig",
    sections: [
      {
        h: "Zutaten",
        t: "Saisonales Gemüse (z. B. Karotten, Zucchini, Paprika), 1 Dose Linsen, Olivenöl, Salz, Kräuter nach Wahl."
      },
      {
        h: "Zubereitung",
        t: "Gemüse würfeln, mit Öl und Kräutern mischen, 25 Min bei 200°C backen. Linsen abgießen, unterheben, warm ziehen lassen. Einfach, pflanzenbetont, wenig Aufwand."
      }
    ]
  },
  {
    titel: "Ein-Topf-Gemüsesuppe (Camping)",
    dauer: "25 Min · 1 Topf",
    sections: [
      {
        h: "Zutaten",
        t: "Zwiebel, 2–3 Gemüsesorten nach Verfügbarkeit, 1 Dose Kichererbsen oder Bohnen, Gemüsebrühwürfel, Wasser."
      },
      {
        h: "Zubereitung",
        t: "Alles in einem Topf auf dem Campingkocher köcheln lassen, bis das Gemüse weich ist. Braucht nur einen Topf und wenig Wasser – ideal für unterwegs."
      }
    ]
  },
  {
    titel: "Kalter Vollkorn-Salat (Camping, ohne Kochen)",
    dauer: "10 Min · kalt",
    sections: [
      {
        h: "Zutaten",
        t: "Vorgekochter Bulgur oder Vollkornreis (vorbereitet mitgebracht), Gurke, Tomate, Kräuter, Olivenöl, Zitrone."
      },
      {
        h: "Zubereitung",
        t: "Alles klein schneiden und mischen. Kommt ganz ohne Kochstelle aus – gut für Tage mit wenig Ausrüstung oder schlechtem Wetter."
      }
    ]
  },
  {
    titel: "Kräutertee-Ritual (abends, überall)",
    dauer: "5 Min",
    sections: [
      {
        h: "Idee",
        t: "Ein einfacher Kräutertee (z. B. Melisse, Kamille, Pfefferminz) als fester abendlicher Fixpunkt – bewusst zubereiten und ohne Ablenkung trinken. Kleines Ritual aus der Heilpflanzen-Säule, das an jedem Ort funktioniert."
      }
    ]
  }
];

const packlisten = {
  daheim: {
    titel: "Daheim",
    intro: "Kein Ortswechsel – dafür lohnt es sich, den gewohnten Raum bewusst vorzubereiten, damit er sich für die Retreat-Zeit anders anfühlt als der normale Alltag.",
    gruppen: [
      {
        h: "Raum vorbereiten",
        items: [
          "Handy in einen anderen Raum legen oder Flugmodus",
          "Sitzkissen oder bequeme Unterlage für Meditation",
          "Decke für Ruhephasen",
          "Notizbuch/Stift für Journaling und WOOP"
        ]
      },
      {
        h: "Verpflegung",
        items: [
          "Zutaten für 1–2 einfache Rezepte vorher einkaufen",
          "Kräutertee für das Abend-Ritual"
        ]
      },
      {
        h: "Organisatorisches",
        items: [
          "Familie/Mitbewohner über die Rückzugszeiten informieren",
          "Erreichbarkeit für echte Notfälle klären"
        ]
      }
    ]
  },
  camping: {
    titel: "Campingplatz",
    intro: "Mehr Naturnähe, aber auch mehr Vorbereitung. Grundausstattung wird als vorhanden vorausgesetzt (Zelt, Schlafsack) – hier der retreat-spezifische Zusatzbedarf.",
    gruppen: [
      {
        h: "Für die Bausteine",
        items: [
          "Sitzunterlage für Meditation im Freien",
          "Notizbuch/Stift, wasserfest wenn möglich",
          "Kopfhörer für Audio-Meditationen (Offline-Download vorher!)",
          "Powerbank – Handy ist vor Ort ausschließlich Werkzeug, kein Ablenker"
        ]
      },
      {
        h: "Verpflegung",
        items: [
          "Campingkocher + 1 Topf",
          "Zutaten für Ein-Topf-Rezept, gut haltbar",
          "Zutaten für kalten Vollkorn-Salat (Backup bei Schlechtwetter)",
          "Kräutertee + kleiner Becher fürs Abend-Ritual"
        ]
      },
      {
        h: "Bewegung",
        items: [
          "Wanderschuhe / feste Schuhe",
          "Ggf. Laufschuhe/leichtes Kraft-Equipment bei intensiver Bewegung"
        ]
      }
    ]
  },
  hotel: {
    titel: "Hotel",
    intro: "Keine Selbstversorgung nötig – der Fokus liegt ganz auf den Bausteinen selbst.",
    gruppen: [
      {
        h: "Für die Bausteine",
        items: [
          "Notizbuch/Stift für Reflexion und WOOP",
          "Kopfhörer für Audio-Meditationen (Offline-Download vorher!)",
          "Bequeme Kleidung für Body-Scan/Meditation"
        ]
      },
      {
        h: "Bewegung",
        items: [
          "Bequeme Schuhe für Spaziergänge",
          "Ggf. Sportkleidung bei intensiver Bewegung"
        ]
      },
      {
        h: "Organisatorisches",
        items: [
          "Zimmer möglichst frei von Arbeitsunterlagen halten",
          "Rezeption informieren, dass in bestimmten Zeitfenstern nicht gestört werden soll"
        ]
      }
    ]
  }
};

const biwakHinweis = {
  titel: "Falls es dich weiter raus in die Natur zieht",
  intro: "Für alle, die den Naturteil bewusst intensiver gestalten wollen – etwa eine Nacht im Freien oder abgelegenere Orte –, gilt: mehr Freiheit heißt mehr Eigenverantwortung.",
  wichtig: "Diese Liste ersetzt keine Wetter- und Geländekenntnis vor Ort. Bei Unsicherheit lieber die komfortablere Variante wählen.",
  gruppen: [
    {
      h: "Sicherheit",
      items: [
        "Jemandem Bescheid sagen: wo, bis wann, was tun falls keine Rückmeldung",
        "Handy voll geladen, ausschließlich für Notfälle nutzen",
        "Erste-Hilfe-Set",
        "Rettungsdecke",
        "Wetterlage vorher prüfen"
      ]
    },
    {
      h: "Ausrüstung",
      items: [
        "Biwaksack oder leichte Notunterkunft",
        "Isomatte",
        "Ausreichend Wasser + Reserve",
        "Stirnlampe"
      ]
    }
  ]
};
