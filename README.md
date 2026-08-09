# Retreat App — Stand & Setup

## Was funktioniert (Meilenstein 1–4)
- Fragebogen (Phase A, alle 5 Fragen aus dem Protokoll), Ergebnis wird lokal gespeichert (`retreat-quiz-result-v1`)
- Regelbasierte Empfehlungslogik → daheim / Campingplatz / Hotel, inkl. Begründung
- Intensiv- vs. Alltags-Modus wird erkannt
- Ausrüstungs-Hinweis bei intensiver Bewegung
- Begleitphase (Phase B): feste Bausteine (Meditation, Reflexion, WOOP), flexible Bausteine, Rezepte – alle Inhalte in `js/content-data.js`
- **WOOP-Vordruck** (`woop.html`): digital ausfüllbar, lokal gespeichert (`retreat-woop-v1`), druckbar; alternativ leerer PDF-Vordruck (`woop-vordruck.pdf`) zum Ausdrucken/handschriftlichen Ausfüllen
- **Tagesplan-Generator + Live-Guide** (`tagesplan.html`): erstellt aus Fragebogen-Ergebnis + Anzahl Tage (1–7) + Weckzeit einen Tag-für-Tag-Ablauf mit realistischen Uhrzeiten (Anker: Frühstück 8:00, Mittag 12:30, Abend 18:30 im Intensiv-Modus; Alltags-Modus: kompakter Morgen-Block + Abend-Block ab 20:00). Führt live durch den Tag: aktueller Schritt hervorgehoben, abhakbar, Fortschritt lokal gespeichert (`retreat-tagesplan-v1`), Tag-Tabs zum Umschalten
- Packlisten für daheim/Camping/Hotel + Sicherheitshinweise für naturnahe Aufenthalte
- Service Worker (`sw.js`, `retreat-v2`) cached die komplette App-Hülle beim ersten Aufruf → danach vollständig offline nutzbar (inkl. Tagesplan, WOOP, PDF)
- Installierbar als PWA (`manifest.webmanifest`)

## Ordnerstruktur
```
index.html / begleitphase.html / packlisten.html / tagesplan.html / woop.html
woop-vordruck.pdf
css/style.css
js/content-data.js
manifest.webmanifest
sw.js
icon.svg
```
Alle HTML-Dateien erwarten genau diese Struktur (relative Pfade `css/…`, `js/…`) – beim Deployen den ganzen Ordner in ein Repo legen, nichts umbenennen.

## Offen / nächste Schritte
- Meditationsaufnahmen (Audio) statt reiner Textanleitung
- Kneipp-Säulen (Wasser, Bewegung, Heilpflanzen, Lebensordnung) stärker im Tagesplan sichtbar machen
- Bewegungsanleitungen als Video-Baustein
- Echter Selbsttest durch den Nutzer

## Bewusste technische Entscheidung
Statt React/Vite: **reines HTML/CSS/JS, eine Datei**. Für einen 5-Fragen-Bogen ist kein Framework nötig — weniger Abhängigkeiten, nichts, was kaputtgehen kann, 0 € Build-Infrastruktur. Wenn die App komplexer wird (Phase B: Tagesplan-Engine, viele Content-Bausteine), lohnt sich der Umstieg auf React eher — aktuell nicht nötig.

## Lokal testen
Datei `index.html` einfach im Browser öffnen. (Für den Service Worker braucht es später einen echten Server — lokal per Doppelklick reicht zum Testen des Fragebogens völlig.)

## Kostenlos deployen (Phase 1 & 2)
1. Ordnerinhalt in ein neues GitHub-Repo legen
2. **GitHub Pages**: Repo-Settings → Pages → Branch auswählen → fertig, eigene URL
   *(Alternative: Ordner einfach auf [Netlify Drop](https://app.netlify.com/drop) ziehen — noch schneller, auch kostenlos)*
3. Fertig — 0 € laufende Kosten, funktioniert auf Handy & Desktop

## Design-Idee dahinter
Die fünf Kneipp-Säulen ziehen sich laut Protokoll als "roter Faden" durch die ganze App — das ist hier wörtlich umgesetzt: die vertikale Linie mit den fünf Punkten am Rand (Wasser, Bewegung, Ernährung, Heilpflanzen, Lebensordnung), die je nach aktueller Frage/Inhalt aufleuchtet. Dieses Element sollte sich durch alle künftigen Phasen (auch Phase B) durchziehen.

## Nächste Schritte (offen)
- [ ] Phase B: Content-Bausteine (Meditationstexte, WOOP, Bewegungsanleitungen)
- [ ] Tagesplan-Engine, die Bausteine nach Modus zusammenstellt
- [ ] Download-Mechanismus für Offline-Inhalte vor Retreat-Start (Audio/Video)
- [ ] Später, bei Bedarf: Kartendienst-/Buchungs-API-Anbindung (kostet Geld → bewusst zurückgestellt)
