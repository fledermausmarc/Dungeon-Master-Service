# Dungeon Master Service

Werkzeugkasten für Spielleiter in D&D 5e als einzelne Webseite (`index.html`), ohne Server und ohne Installation. Vier Hubs:

- **Fight Club**: Kampftracker mit Generator, Monsterbuch und Szene
- **NPCFindr**: NPCs mit Name, Beschreibung und Eigenart
- **Kalender von Aetheria**: 10 Monate à 30 Tage, Tage abhaken, Feiertage und Notizen
- **Questmaster**: Quests, Rätsel, Runenschloss und Geheimschrift auf Knopfdruck

## Fight Club
- Initiative mit Live-Sortierung, TP, Zustände, Runden- und Zugzähler
- Monster-Import aus Excel (Blätter „Monster“ und „Aktionen“)
- Kampfgenerator nach Heldenstufe und Schwierigkeit (Einfach bis Sicher tödlich)
- Monsterbuch mit 361 Monstern, Angriffen und Zaubern samt Zauberplätzen
- Szene: Kampfgründe mit Countdown und Wellen, Umweltereignisse, Menschenmengen (inkl. W100-Chaostabelle für panische Mengen)
- Bilder pro Monster oder Held: hochladen oder mit dem KI-Bildgenerator (Pollinations.ai) erzeugen
- Startmelodie (abschaltbar)

## Benutzen
`index.html` im Browser öffnen. Daten werden im Browser gespeichert (localStorage).
Schriften (Google Fonts) und der Excel-Import (SheetJS über cdnjs) brauchen Internet.

## Lizenz und Quellen
Monsterwerte und Zauber stammen aus dem System Reference Document 5.1 („SRD 5.1“) von Wizards of the Coast LLC,
verfügbar unter https://dnd.wizards.com/resources/systems-reference-document.
Das SRD 5.1 steht unter der Creative Commons Attribution 4.0 International License
(https://creativecommons.org/licenses/by/4.0/legalcode). Die deutschen Namen sind eigene Übersetzungen.
Mit „Eigenkreation“ markierte Monster, die Kampfgründe und die Ereignistabellen sind eigene Inhalte.
