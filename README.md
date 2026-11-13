# Dungeon Master Service

Werkzeugkasten für Spielleiter in D&D 5e als einzelne Webseite (`index.html`), ohne Server und ohne Installation. Acht Hubs:

- **Fight Club**: Kampftracker mit Generator, Monsterbuch und Szene
- **Charakteristico**: Charakterbögen im 5.5e-Stil, Werte mit einem Tipp in den Fight Club
- **NPCFindr**: NPCs mit Name, Beschreibung und Eigenart
- **Kalender von Aetheria**: 10 Monate à 30 Tage, Tage abhaken, Feiertage und Notizen
- **Questmaster**: Quests, Rätsel, Runenschloss und Geheimschrift auf Knopfdruck
- **Loreyer**: Sitzungsnotizen nach Kategorien (auch per Spracheingabe), automatisches Recap, optional KI-Zusammenfassung (Pollinations.ai)
- **VTT Caster**: Karten und Videos (JPG, PNG, WebP, MP4, WebM) auf einem zweiten Bildschirm, mit Nebel des Krieges und eigenem Ausschnitt
- **Mystery Shop**: Zum Wunderbaren Unfug, Wundertruhen und Generator für unnütze magische Gegenstände

## Fight Club
- Initiative mit Live-Sortierung, TP, Zustände, Runden- und Zugzähler
- Monster-Import aus Excel (Blätter „Monster“ und „Aktionen“)
- Kampfgenerator nach Heldenstufe und Schwierigkeit (Einfach bis Sicher tödlich)
- Monsterbuch mit 361 Monstern, Angriffen und Zaubern samt Zauberplätzen
- Szene: Kampfgründe mit Countdown und Wellen, Umweltereignisse, Menschenmengen (inkl. W100-Chaostabelle für panische Mengen)
- Bilder pro Monster oder Held: hochladen oder mit dem KI-Bildgenerator (Pollinations.ai) erzeugen
- Startmelodie (abschaltbar)

## Benutzen
`index.html` im Browser öffnen. Nach dem ersten Besuch funktioniert die Seite auch offline und lässt sich als App auf dem Startbildschirm installieren. Daten werden im Browser gespeichert (localStorage).
Schriften (Google Fonts) und der Excel-Import (SheetJS über cdnjs) brauchen Internet.

## Lizenz und Quellen
Monsterwerte und Zauber stammen aus dem System Reference Document 5.1 („SRD 5.1“) von Wizards of the Coast LLC,
verfügbar unter https://dnd.wizards.com/resources/systems-reference-document.
Das SRD 5.1 steht unter der Creative Commons Attribution 4.0 International License
(https://creativecommons.org/licenses/by/4.0/legalcode). Die deutschen Namen sind eigene Übersetzungen.
Mit „Eigenkreation“ markierte Monster, die Kampfgründe und die Ereignistabellen sind eigene Inhalte.


## Regelalmanach

Schlagwortsuche und Regel-Chat über das deutsche SRD 5.2.1 (`regeln.json`).

Dieses Werk enthält Material aus dem Systemreferenzdokument 5.2.1 („SRD 5.2.1“) von Wizards of the Coast LLC, verfügbar unter https://www.dndbeyond.com/srd. Das SRD 5.2.1 ist lizenziert gemäß Creative Commons Namensnennung 4.0 International Public License (verfügbar unter https://creativecommons.org/licenses/by/4.0/legalcode.de). Deutsche Markdown-Fassung: https://github.com/netzrenner/dnd.srd.5.2.1-de


## Kartenschmiede

Karten für Region, Kontinent, Stadt, Stadtviertel und Dungeon erzeugen, bestehende Karten laden und mit Stempeln, Wegen, Texten und Raster ergänzen (`kartenschmiede.html`, auch einzeln aufrufbar).
