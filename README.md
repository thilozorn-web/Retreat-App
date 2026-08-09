# Retreat App — Stand & Setup

## Was funktioniert (Meilenstein 1, 2 & 3)
- Fragebogen (Phase A, alle 5 Fragen aus dem Protokoll)
- Regelbasierte Empfehlungslogik → daheim / Campingplatz / Hotel, inkl. Begründung
- Intensiv- vs. Alltags-Modus wird erkannt
- Ausrüstungs-Hinweis bei intensiver Bewegung
- Begleitphase (Phase B): feste Bausteine (Meditation, Reflexion, WOOP), flexible Bausteine, Rezepte – alle Inhalte in `js/content-data.js`
- Packlisten für daheim/Camping/Hotel + Sicherheitshinweise für naturnahe Aufenthalte
- Service Worker (`sw.js`) cached die komplette App-Hülle beim ersten Aufruf → danach vollständig offline nutzbar
- Installierbar als PWA (`manifest.webmanifest`)

## Ordnerstruktur
```
index.html / begleitphase.html / packlisten.html
css/style.css
js/content-data.js
manifest.webmanifest
sw.js
icon.svg
```
Alle HTML-Dateien erwarten genau diese Struktur (relative Pfade `css/…`, `js/…`) – beim Deployen den ganzen Ordner in ein Repo legen, nichts umbenennen.

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
