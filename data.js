// ============================================================
//  LINUX HANDBUCH — Command Database (data.js)
//  Über 150 Befehle in 12 Kategorien
// ============================================================

const data = {

  // ─────────────────────────────────────────────
  //  1. DATEISYSTEM
  // ─────────────────────────────────────────────
  dateisystem: [
    {
      cmd: "ls",
      desc: "Listet den Inhalt eines Verzeichnisses auf. Eines der meistgenutzten Befehle in Linux.",
      syntax: "ls [OPTIONEN] [PFAD]",
      level: "basic",
      tags: ["navigation", "verzeichnis"],
      options: [
        { flag: "-l", desc: "Lange Ausgabe mit Rechten, Eigentümer, Grösse und Datum" },
        { flag: "-a", desc: "Alle Dateien anzeigen, inkl. versteckte (beginnen mit .)" },
        { flag: "-h", desc: "Menschenlesbare Dateigrössen (KB, MB, GB)" },
        { flag: "-R", desc: "Rekursiv alle Unterverzeichnisse auflisten" },
        { flag: "-t", desc: "Nach Änderungsdatum sortieren (neueste zuerst)" },
        { flag: "-S", desc: "Nach Dateigrösse sortieren (grösste zuerst)" },
        { flag: "--color", desc: "Farbige Ausgabe aktivieren" },
      ],
      examples: [
        { label: "Einfache Auflistung", code: "ls" },
        { label: "Detaillierte Ansicht mit versteckten Dateien", code: "ls -lah" },
        { label: "Verzeichnis sortiert nach Datum", code: "ls -lt /var/log" },
        { label: "Nur Verzeichnisse anzeigen", code: "ls -d */" },
      ],
      notes: "Tipp: `ls -la` kombiniert lange Ausgabe + versteckte Dateien — der am häufigsten genutzte Alias."
    },
    {
      cmd: "cd",
      desc: "Wechselt das aktuelle Arbeitsverzeichnis (Change Directory).",
      syntax: "cd [PFAD]",
      level: "basic",
      tags: ["navigation", "verzeichnis"],
      options: [
        { flag: "~", desc: "Wechsel ins Home-Verzeichnis des aktuellen Benutzers" },
        { flag: "..", desc: "Wechsel ins übergeordnete Verzeichnis" },
        { flag: "-", desc: "Wechsel ins zuletzt besuchte Verzeichnis" },
        { flag: "/", desc: "Wechsel ins Root-Verzeichnis" },
      ],
      examples: [
        { label: "Ins Home-Verzeichnis", code: "cd ~" },
        { label: "Ins übergeordnete Verzeichnis", code: "cd .." },
        { label: "Zum letzten Verzeichnis zurück", code: "cd -" },
        { label: "In ein bestimmtes Verzeichnis", code: "cd /etc/nginx" },
      ],
      notes: "Shell-Builtin, kein eigenes Binary. `cd` ohne Argumente wechselt immer ins Home-Verzeichnis."
    },
    {
      cmd: "pwd",
      desc: "Gibt das aktuelle Arbeitsverzeichnis (Print Working Directory) aus.",
      syntax: "pwd [OPTIONEN]",
      level: "basic",
      tags: ["navigation", "info"],
      options: [
        { flag: "-L", desc: "Logischer Pfad (Standard, folgt Symlinks)" },
        { flag: "-P", desc: "Physischer Pfad (löst Symlinks auf)" },
      ],
      examples: [
        { label: "Aktuellen Pfad anzeigen", code: "pwd" },
        { label: "Physischen Pfad (ohne Symlinks)", code: "pwd -P" },
      ]
    },
    {
      cmd: "mkdir",
      desc: "Erstellt ein oder mehrere neue Verzeichnisse (Make Directory).",
      syntax: "mkdir [OPTIONEN] VERZEICHNIS...",
      level: "basic",
      tags: ["erstellen", "verzeichnis"],
      options: [
        { flag: "-p", desc: "Erstellt auch übergeordnete Verzeichnisse falls nötig (keine Fehler wenn vorhanden)" },
        { flag: "-m", desc: "Setzt die Berechtigungen direkt beim Erstellen (z.B. -m 755)" },
        { flag: "-v", desc: "Gibt aus, was erstellt wurde (verbose)" },
      ],
      examples: [
        { label: "Einfaches Verzeichnis erstellen", code: "mkdir projektordner" },
        { label: "Verschachtelte Verzeichnisse", code: "mkdir -p /opt/app/config/logs" },
        { label: "Mit spezifischen Rechten erstellen", code: "mkdir -m 750 /srv/secret" },
        { label: "Mehrere Verzeichnisse auf einmal", code: "mkdir dir1 dir2 dir3" },
      ]
    },
    {
      cmd: "rm",
      desc: "Löscht Dateien und Verzeichnisse. ACHTUNG: Kein Papierkorb — gelöschte Dateien sind weg!",
      syntax: "rm [OPTIONEN] DATEI...",
      level: "basic",
      tags: ["löschen", "dateien"],
      options: [
        { flag: "-r", desc: "Rekursiv — löscht Verzeichnisse und ihren Inhalt" },
        { flag: "-f", desc: "Erzwungen — kein Nachfragen, ignoriert nicht-existierende Dateien" },
        { flag: "-i", desc: "Interaktiv — fragt vor jeder Löschung nach" },
        { flag: "-v", desc: "Zeigt jede gelöschte Datei an (verbose)" },
      ],
      examples: [
        { label: "Einzelne Datei löschen", code: "rm datei.txt" },
        { label: "Verzeichnis mit Inhalt löschen", code: "rm -rf /tmp/testordner" },
        { label: "Mit Bestätigung löschen", code: "rm -ri wichtiger_ordner" },
        { label: "Alle .log Dateien löschen", code: "rm -f /var/log/*.log" },
      ],
      notes: "⚠️ GEFAHR: `rm -rf /` kann das gesamte System zerstören! Immer doppelt prüfen. Nutze `rm -i` bei Unsicherheit."
    },
    {
      cmd: "cp",
      desc: "Kopiert Dateien und Verzeichnisse von einem Ort zum anderen.",
      syntax: "cp [OPTIONEN] QUELLE ZIEL",
      level: "basic",
      tags: ["kopieren", "dateien"],
      options: [
        { flag: "-r", desc: "Rekursiv — kopiert Verzeichnisse komplett" },
        { flag: "-p", desc: "Bewahrt Zeitstempel, Berechtigungen und Eigentümer" },
        { flag: "-u", desc: "Nur kopieren wenn Quelle neuer als Ziel (update)" },
        { flag: "-v", desc: "Zeigt jede kopierte Datei (verbose)" },
        { flag: "-i", desc: "Fragt bevor eine Datei überschrieben wird" },
        { flag: "-a", desc: "Archivmodus: entspricht -dpR (für Backups ideal)" },
      ],
      examples: [
        { label: "Datei kopieren", code: "cp datei.txt backup.txt" },
        { label: "Verzeichnis vollständig kopieren", code: "cp -r /etc/nginx /backup/nginx" },
        { label: "Rechte & Timestamps beibehalten", code: "cp -ap /var/www /backup/" },
        { label: "Nur neuere Dateien übertragen", code: "cp -ru /quelle/* /ziel/" },
      ]
    },
    {
      cmd: "mv",
      desc: "Verschiebt oder benennt Dateien und Verzeichnisse um.",
      syntax: "mv [OPTIONEN] QUELLE ZIEL",
      level: "basic",
      tags: ["verschieben", "umbenennen", "dateien"],
      options: [
        { flag: "-i", desc: "Interaktiv — fragt bevor überschrieben wird" },
        { flag: "-f", desc: "Erzwungen — kein Nachfragen beim Überschreiben" },
        { flag: "-u", desc: "Nur verschieben wenn Quelle neuer als Ziel" },
        { flag: "-v", desc: "Zeigt was verschoben wird (verbose)" },
      ],
      examples: [
        { label: "Datei umbenennen", code: "mv alt.txt neu.txt" },
        { label: "Datei in Verzeichnis verschieben", code: "mv report.pdf /home/user/dokumente/" },
        { label: "Mehrere Dateien in Ordner", code: "mv *.jpg /bilder/" },
        { label: "Verzeichnis verschieben", code: "mv /tmp/projekt /opt/projekt" },
      ]
    },
    {
      cmd: "find",
      desc: "Sucht Dateien und Verzeichnisse nach verschiedenen Kriterien im Dateisystem.",
      syntax: "find [PFAD] [BEDINGUNGEN] [AKTIONEN]",
      level: "medium",
      tags: ["suchen", "dateien", "filter"],
      options: [
        { flag: "-name", desc: "Nach Name suchen (case-sensitive, Wildcards möglich)" },
        { flag: "-iname", desc: "Nach Name suchen (case-insensitive)" },
        { flag: "-type f", desc: "Nur reguläre Dateien finden" },
        { flag: "-type d", desc: "Nur Verzeichnisse finden" },
        { flag: "-mtime -N", desc: "Dateien die in den letzten N Tagen geändert wurden" },
        { flag: "-size +NM", desc: "Dateien grösser als N Megabyte" },
        { flag: "-exec CMD {} \\;", desc: "Aktion für jede gefundene Datei ausführen" },
        { flag: "-perm MODE", desc: "Dateien mit bestimmten Berechtigungen" },
      ],
      examples: [
        { label: "Alle .txt Dateien suchen", code: "find /home -name '*.txt'" },
        { label: "Leere Dateien finden", code: "find . -type f -empty" },
        { label: "Dateien älter als 30 Tage", code: "find /tmp -mtime +30 -delete" },
        { label: "Dateien grösser als 100MB", code: "find / -size +100M -type f" },
        { label: "Mit SUID-Bit (Sicherheitscheck)", code: "find / -perm /4000 -type f" },
        { label: "Gefundene Dateien löschen", code: "find /tmp -name '*.tmp' -exec rm {} \\;" },
      ]
    },
    {
      cmd: "ln",
      desc: "Erstellt Hardlinks oder symbolische Links (Shortcuts) zwischen Dateien.",
      syntax: "ln [OPTIONEN] ZIELDATEI LINKNAME",
      level: "medium",
      tags: ["links", "symlinks"],
      options: [
        { flag: "-s", desc: "Symbolischen Link erstellen (soft link)" },
        { flag: "-f", desc: "Existierende Links überschreiben" },
        { flag: "-v", desc: "Zeigt was verlinkt wird" },
      ],
      examples: [
        { label: "Symbolischen Link erstellen", code: "ln -s /opt/app/bin/app /usr/local/bin/app" },
        { label: "Hardlink erstellen", code: "ln original.txt hardlink.txt" },
        { label: "Link prüfen", code: "ls -la /usr/local/bin/app" },
        { label: "Symlink Ziel anzeigen", code: "readlink -f /etc/alternatives/python" },
      ]
    },
    {
      cmd: "du",
      desc: "Zeigt den Speicherplatzbedarf von Dateien und Verzeichnissen (Disk Usage).",
      syntax: "du [OPTIONEN] [PFAD]",
      level: "basic",
      tags: ["speicher", "analyse"],
      options: [
        { flag: "-h", desc: "Menschenlesbare Grössen (KB, MB, GB)" },
        { flag: "-s", desc: "Nur Gesamtsumme (summary)" },
        { flag: "-a", desc: "Alle Dateien, nicht nur Verzeichnisse" },
        { flag: "--max-depth=N", desc: "Nur bis Tiefe N aufschlüsseln" },
      ],
      examples: [
        { label: "Verzeichnisgrösse gesamt", code: "du -sh /var/log" },
        { label: "Grösste Verzeichnisse finden", code: "du -h --max-depth=1 / | sort -rh | head -20" },
        { label: "Alle Unterverzeichnisse", code: "du -h /home/user" },
      ]
    },
    {
      cmd: "df",
      desc: "Zeigt freien und belegten Speicherplatz aller eingehängten Dateisysteme (Disk Free).",
      syntax: "df [OPTIONEN] [DATEISYSTEM]",
      level: "basic",
      tags: ["speicher", "festplatte"],
      options: [
        { flag: "-h", desc: "Menschenlesbare Grössen" },
        { flag: "-T", desc: "Dateisystemtyp anzeigen" },
        { flag: "-i", desc: "Inode-Nutzung anzeigen" },
      ],
      examples: [
        { label: "Alle Dateisysteme", code: "df -h" },
        { label: "Mit Dateisystemtyp", code: "df -hT" },
        { label: "Nur echte Datenträger", code: "df -hT | grep -v tmpfs" },
      ]
    },
    {
      cmd: "mount",
      desc: "Hängt Dateisysteme (Festplatten, USB, NFS etc.) in den Verzeichnisbaum ein.",
      syntax: "mount [OPTIONEN] GERÄT EINHÄNGEPUNKT",
      level: "medium",
      tags: ["dateisystem", "hardware"],
      options: [
        { flag: "-t TYPE", desc: "Dateisystemtyp angeben (ext4, ntfs, vfat...)" },
        { flag: "-o OPTIONS", desc: "Mount-Optionen (ro, rw, noexec, bind...)" },
        { flag: "-a", desc: "Alle in /etc/fstab definierten Dateisysteme einh." },
      ],
      examples: [
        { label: "USB-Stick einbinden", code: "mount /dev/sdb1 /mnt/usb" },
        { label: "ISO-Datei mounten", code: "mount -o loop image.iso /mnt/iso" },
        { label: "Netzwerkfreigabe mounten", code: "mount -t nfs 192.168.1.10:/share /mnt/nfs" },
        { label: "Alle Einhängepunkte anzeigen", code: "mount | column -t" },
      ]
    },
    {
      cmd: "touch",
      desc: "Erstellt leere Dateien oder aktualisiert den Zeitstempel bestehender Dateien.",
      syntax: "touch [OPTIONEN] DATEI...",
      level: "basic",
      tags: ["erstellen", "dateien"],
      options: [
        { flag: "-t STAMP", desc: "Timestamp manuell setzen: [[CC]YY]MMDDhhmm[.ss]" },
        { flag: "-c", desc: "Keine neue Datei erstellen falls nicht vorhanden" },
      ],
      examples: [
        { label: "Leere Datei erstellen", code: "touch neue_datei.txt" },
        { label: "Mehrere Dateien erstellen", code: "touch datei1.txt datei2.txt datei3.txt" },
        { label: "Timestamp auf jetzt setzen", code: "touch -c existierende_datei.conf" },
      ]
    },
    {
      cmd: "file",
      desc: "Bestimmt den Dateityp einer Datei anhand ihres Inhalts (nicht Endung).",
      syntax: "file [OPTIONEN] DATEI...",
      level: "basic",
      tags: ["info", "dateityp"],
      options: [
        { flag: "-i", desc: "MIME-Typ ausgeben" },
        { flag: "-b", desc: "Nur Typ, kein Dateiname" },
      ],
      examples: [
        { label: "Dateitype prüfen", code: "file /bin/bash" },
        { label: "MIME-Typ ausgeben", code: "file -i bild.jpg" },
        { label: "Mehrere Dateien", code: "file /etc/*" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  2. BENUTZER & GRUPPEN
  // ─────────────────────────────────────────────
  benutzer: [
    {
      cmd: "useradd",
      desc: "Erstellt einen neuen Benutzer im System.",
      syntax: "useradd [OPTIONEN] BENUTZERNAME",
      level: "medium",
      tags: ["benutzer", "admin"],
      options: [
        { flag: "-m", desc: "Erstellt das Home-Verzeichnis automatisch" },
        { flag: "-s SHELL", desc: "Standard-Shell setzen (z.B. /bin/bash)" },
        { flag: "-G GRUPPE", desc: "Sekundäre Gruppen zuweisen (kommasepariert)" },
        { flag: "-u UID", desc: "Manuelle UID vergeben" },
        { flag: "-c KOMMENTAR", desc: "Kommentarfeld (z.B. Vollständiger Name)" },
        { flag: "-e DATUM", desc: "Ablaufdatum des Kontos (YYYY-MM-DD)" },
      ],
      examples: [
        { label: "Benutzer mit Home erstellen", code: "useradd -m -s /bin/bash anna" },
        { label: "Mit Gruppen und Kommentar", code: "useradd -m -G sudo,www-data -c 'Anna Muster' anna" },
        { label: "System-Benutzer (kein Login)", code: "useradd -r -s /usr/sbin/nologin nginx" },
      ]
    },
    {
      cmd: "usermod",
      desc: "Ändert Eigenschaften eines bestehenden Benutzerkontos.",
      syntax: "usermod [OPTIONEN] BENUTZERNAME",
      level: "medium",
      tags: ["benutzer", "admin"],
      options: [
        { flag: "-aG GRUPPE", desc: "Benutzer zu Gruppe hinzufügen (append, nicht ersetzen!)" },
        { flag: "-g GRUPPE", desc: "Primäre Gruppe ändern" },
        { flag: "-s SHELL", desc: "Shell ändern" },
        { flag: "-l NEUNAME", desc: "Benutzername umbenennen" },
        { flag: "-L", desc: "Konto sperren (Lock)" },
        { flag: "-U", desc: "Konto entsperren (Unlock)" },
        { flag: "-d VERZ", desc: "Home-Verzeichnis ändern" },
      ],
      examples: [
        { label: "Benutzer zur sudo-Gruppe", code: "usermod -aG sudo anna" },
        { label: "Konto sperren", code: "usermod -L anna" },
        { label: "Shell ändern", code: "usermod -s /bin/zsh anna" },
        { label: "Benutzername ändern", code: "usermod -l anna_neu anna_alt" },
      ]
    },
    {
      cmd: "userdel",
      desc: "Löscht einen Benutzerzugang aus dem System.",
      syntax: "userdel [OPTIONEN] BENUTZERNAME",
      level: "medium",
      tags: ["benutzer", "admin"],
      options: [
        { flag: "-r", desc: "Home-Verzeichnis und Mail-Spool mitlöschen" },
        { flag: "-f", desc: "Erzwungen (auch wenn angemeldet)" },
      ],
      examples: [
        { label: "Benutzer löschen (Home bleibt)", code: "userdel anna" },
        { label: "Benutzer mit Home löschen", code: "userdel -r anna" },
      ]
    },
    {
      cmd: "passwd",
      desc: "Setzt oder ändert das Passwort eines Benutzers.",
      syntax: "passwd [OPTIONEN] [BENUTZERNAME]",
      level: "basic",
      tags: ["passwort", "sicherheit"],
      options: [
        { flag: "-l", desc: "Passwort sperren (lock)" },
        { flag: "-u", desc: "Passwort entsperren (unlock)" },
        { flag: "-d", desc: "Passwort löschen (leeres Passwort)" },
        { flag: "-e", desc: "Passwort sofort ablaufen lassen (Pflichtänderung)" },
        { flag: "-n TAGE", desc: "Minimale Anzahl Tage bis Änderung möglich" },
        { flag: "-x TAGE", desc: "Maximale Gültigkeit in Tagen" },
      ],
      examples: [
        { label: "Eigenes Passwort ändern", code: "passwd" },
        { label: "Passwort eines Benutzers setzen (root)", code: "passwd anna" },
        { label: "Passwort ablaufen lassen", code: "passwd -e anna" },
        { label: "Konto sperren", code: "passwd -l anna" },
      ]
    },
    {
      cmd: "groupadd",
      desc: "Erstellt eine neue Benutzergruppe im System.",
      syntax: "groupadd [OPTIONEN] GRUPPENNAME",
      level: "medium",
      tags: ["gruppen", "admin"],
      options: [
        { flag: "-g GID", desc: "Manuelle GID vergeben" },
        { flag: "-r", desc: "System-Gruppe erstellen (niedrige GID)" },
      ],
      examples: [
        { label: "Gruppe erstellen", code: "groupadd entwickler" },
        { label: "Mit manueller GID", code: "groupadd -g 2000 projektteam" },
      ]
    },
    {
      cmd: "id",
      desc: "Zeigt UID, GID und Gruppenmitgliedschaften des aktuellen oder angegebenen Benutzers.",
      syntax: "id [OPTIONEN] [BENUTZERNAME]",
      level: "basic",
      tags: ["info", "benutzer"],
      options: [
        { flag: "-u", desc: "Nur UID ausgeben" },
        { flag: "-g", desc: "Nur primäre GID ausgeben" },
        { flag: "-G", desc: "Alle Gruppen-IDs ausgeben" },
        { flag: "-n", desc: "Namen statt Zahlen ausgeben" },
      ],
      examples: [
        { label: "Eigene ID anzeigen", code: "id" },
        { label: "Benutzers IDs anzeigen", code: "id anna" },
        { label: "Nur Gruppenname", code: "id -gn" },
      ]
    },
    {
      cmd: "whoami",
      desc: "Gibt den Namen des aktuell angemeldeten Benutzers aus.",
      syntax: "whoami",
      level: "basic",
      tags: ["info", "benutzer"],
      options: [],
      examples: [
        { label: "Wer bin ich?", code: "whoami" },
      ]
    },
    {
      cmd: "who",
      desc: "Zeigt alle aktuell angemeldeten Benutzer mit Terminal, Zeit und IP.",
      syntax: "who [OPTIONEN]",
      level: "basic",
      tags: ["info", "benutzer", "session"],
      options: [
        { flag: "-a", desc: "Alle Informationen anzeigen" },
        { flag: "-b", desc: "Letzten Systemstart anzeigen" },
        { flag: "-q", desc: "Nur Benutzernamen und Anzahl" },
      ],
      examples: [
        { label: "Angemeldete Benutzer", code: "who" },
        { label: "Mit letztem Boot", code: "who -b" },
      ]
    },
    {
      cmd: "su",
      desc: "Wechselt den Benutzerkontext (Switch User) — öffnet Shell als anderer Benutzer.",
      syntax: "su [OPTIONEN] [BENUTZERNAME]",
      level: "basic",
      tags: ["benutzer", "wechsel"],
      options: [
        { flag: "-", desc: "Login-Shell (lädt vollständige Umgebung des Benutzers)" },
        { flag: "-c CMD", desc: "Nur einen Befehl als anderer Benutzer ausführen" },
        { flag: "-s SHELL", desc: "Bestimmte Shell verwenden" },
      ],
      examples: [
        { label: "Zu root wechseln", code: "su -" },
        { label: "Zu Benutzer anna wechseln", code: "su - anna" },
        { label: "Befehl als root ausführen", code: "su -c 'apt update' root" },
      ]
    },
    {
      cmd: "sudo",
      desc: "Führt Befehle mit den Rechten eines anderen Benutzers (meist root) aus.",
      syntax: "sudo [OPTIONEN] BEFEHL",
      level: "basic",
      tags: ["rechte", "admin", "sicherheit"],
      options: [
        { flag: "-u USER", desc: "Als bestimmten Benutzer ausführen" },
        { flag: "-i", desc: "Interaktive Root-Shell öffnen (Login-Shell)" },
        { flag: "-s", desc: "Root-Shell öffnen (ohne Login-Umgebung)" },
        { flag: "-l", desc: "Erlaubte sudo-Befehle auflisten" },
        { flag: "-k", desc: "Sudo-Zeitstempel zurücksetzen (Passwort erneut nötig)" },
      ],
      examples: [
        { label: "Paketliste aktualisieren", code: "sudo apt update" },
        { label: "Root-Shell öffnen", code: "sudo -i" },
        { label: "Sudo-Rechte anzeigen", code: "sudo -l" },
        { label: "Als anderer User ausführen", code: "sudo -u www-data whoami" },
      ]
    },
    {
      cmd: "last",
      desc: "Zeigt die letzten Anmeldungen und Reboots des Systems.",
      syntax: "last [OPTIONEN] [BENUTZER]",
      level: "basic",
      tags: ["log", "info", "sicherheit"],
      options: [
        { flag: "-n N", desc: "Nur die letzten N Einträge" },
        { flag: "-F", desc: "Vollständige Datumsangaben" },
        { flag: "-x", desc: "System-Shutdowns und Run-Level einbeziehen" },
      ],
      examples: [
        { label: "Letzte Logins", code: "last" },
        { label: "Letzte 10 Logins", code: "last -n 10" },
        { label: "Nur für Benutzer anna", code: "last anna" },
        { label: "Fehlgeschlagene Logins", code: "lastb" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  3. BERECHTIGUNGEN
  // ─────────────────────────────────────────────
  berechtigungen: [
    {
      cmd: "chmod",
      desc: "Ändert die Zugriffsberechtigungen (Lesen/Schreiben/Ausführen) von Dateien und Verzeichnissen.",
      syntax: "chmod [OPTIONEN] MODUS DATEI...",
      level: "medium",
      tags: ["rechte", "sicherheit"],
      options: [
        { flag: "-R", desc: "Rekursiv für alle Dateien und Unterverzeichnisse" },
        { flag: "-v", desc: "Zeigt jede Änderung (verbose)" },
        { flag: "u/g/o/a", desc: "Ziel: user/group/others/all" },
        { flag: "+/-/=", desc: "Rechte hinzufügen/entfernen/exakt setzen" },
        { flag: "r/w/x", desc: "Lesen/Schreiben/Ausführen" },
      ],
      examples: [
        { label: "Script ausführbar machen", code: "chmod +x script.sh" },
        { label: "Oktal: rwxr-xr-x", code: "chmod 755 /usr/local/bin/tool" },
        { label: "Nur Eigentümer darf lesen/schreiben", code: "chmod 600 ~/.ssh/id_rsa" },
        { label: "Rekursiv für Webverzeichnis", code: "chmod -R 755 /var/www/html" },
        { label: "Gruppe darf schreiben", code: "chmod g+w datei.txt" },
        { label: "Alle execute-Bits entfernen", code: "chmod a-x datei.txt" },
      ],
      notes: "Oktal-Tabelle: 4=Lesen, 2=Schreiben, 1=Ausführen. 755=rwxr-xr-x, 644=rw-r--r--, 600=rw-------"
    },
    {
      cmd: "chown",
      desc: "Ändert den Eigentümer und/oder die Gruppe einer Datei oder eines Verzeichnisses.",
      syntax: "chown [OPTIONEN] [EIGENTÜMER][:GRUPPE] DATEI...",
      level: "medium",
      tags: ["rechte", "eigentümer"],
      options: [
        { flag: "-R", desc: "Rekursiv auf alle Unterverzeichnisse anwenden" },
        { flag: "-v", desc: "Zeigt jede Änderung (verbose)" },
        { flag: "--from=ALT", desc: "Nur ändern wenn aktueller Eigentümer ALT ist" },
      ],
      examples: [
        { label: "Eigentümer ändern", code: "chown anna datei.txt" },
        { label: "Eigentümer und Gruppe", code: "chown anna:entwickler projekt/" },
        { label: "Nur Gruppe ändern", code: "chown :www-data /var/www/html" },
        { label: "Rekursiv für Webroot", code: "chown -R www-data:www-data /var/www/" },
      ]
    },
    {
      cmd: "chgrp",
      desc: "Ändert die Gruppe einer Datei oder eines Verzeichnisses.",
      syntax: "chgrp [OPTIONEN] GRUPPE DATEI...",
      level: "medium",
      tags: ["rechte", "gruppen"],
      options: [
        { flag: "-R", desc: "Rekursiv anwenden" },
      ],
      examples: [
        { label: "Gruppe ändern", code: "chgrp www-data /var/www/html" },
        { label: "Rekursiv", code: "chgrp -R entwickler /opt/projekt" },
      ]
    },
    {
      cmd: "umask",
      desc: "Setzt oder zeigt die Standard-Berechtigungsmaske für neu erstellte Dateien.",
      syntax: "umask [MODUS]",
      level: "medium",
      tags: ["rechte", "standard"],
      options: [],
      examples: [
        { label: "Aktuelle Maske anzeigen", code: "umask" },
        { label: "Maske symbolisch anzeigen", code: "umask -S" },
        { label: "Neue Maske setzen (022 → 755 für dirs)", code: "umask 022" },
      ],
      notes: "umask 022: neue Dateien erhalten 644, Verzeichnisse 755. umask 077: nur für Eigentümer."
    },
    {
      cmd: "getfacl",
      desc: "Zeigt erweiterte Zugriffsrechte (ACL — Access Control Lists) einer Datei.",
      syntax: "getfacl [OPTIONEN] DATEI...",
      level: "advanced",
      tags: ["rechte", "acl", "erweitert"],
      options: [
        { flag: "-R", desc: "Rekursiv" },
        { flag: "-t", desc: "Tabellarische Ausgabe" },
      ],
      examples: [
        { label: "ACL einer Datei anzeigen", code: "getfacl /var/www/html/index.php" },
        { label: "Rekursiv für Verzeichnis", code: "getfacl -R /srv/projekte" },
      ]
    },
    {
      cmd: "setfacl",
      desc: "Setzt oder ändert erweiterte Zugriffsrechte (ACL) für bestimmte Benutzer/Gruppen.",
      syntax: "setfacl [OPTIONEN] EINTRAG DATEI...",
      level: "advanced",
      tags: ["rechte", "acl", "erweitert"],
      options: [
        { flag: "-m", desc: "ACL-Eintrag hinzufügen/ändern" },
        { flag: "-x", desc: "ACL-Eintrag entfernen" },
        { flag: "-b", desc: "Alle ACL-Einträge entfernen" },
        { flag: "-R", desc: "Rekursiv anwenden" },
      ],
      examples: [
        { label: "Benutzer Leserecht geben", code: "setfacl -m u:anna:r /var/log/app.log" },
        { label: "Gruppe Schreibrecht geben", code: "setfacl -m g:entwickler:rw /srv/projekt" },
        { label: "ACL-Eintrag entfernen", code: "setfacl -x u:anna /var/log/app.log" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  4. PROZESSE & JOBS
  // ─────────────────────────────────────────────
  prozesse: [
    {
      cmd: "ps",
      desc: "Zeigt aktuell laufende Prozesse und deren Eigenschaften an.",
      syntax: "ps [OPTIONEN]",
      level: "basic",
      tags: ["prozesse", "monitoring"],
      options: [
        { flag: "aux", desc: "Alle Prozesse aller Benutzer (BSD-Syntax, sehr gebräuchlich)" },
        { flag: "-ef", desc: "Alle Prozesse im vollen Format (UNIX-Syntax)" },
        { flag: "-u USER", desc: "Nur Prozesse eines bestimmten Benutzers" },
        { flag: "--forest", desc: "Prozessbaum / Eltern-Kind-Beziehungen anzeigen" },
        { flag: "-o FORMAT", desc: "Ausgabefelder selbst bestimmen" },
      ],
      examples: [
        { label: "Alle Prozesse anzeigen", code: "ps aux" },
        { label: "Prozessbaum darstellen", code: "ps aux --forest" },
        { label: "Nur Nginx-Prozesse", code: "ps aux | grep nginx" },
        { label: "Top-Prozesse nach CPU", code: "ps aux --sort=-%cpu | head -10" },
        { label: "Prozesse von anna", code: "ps -u anna" },
      ]
    },
    {
      cmd: "top",
      desc: "Interaktiver Prozessmonitor — zeigt Echtzeit-Systemauslastung (CPU, RAM, Prozesse).",
      syntax: "top [OPTIONEN]",
      level: "basic",
      tags: ["monitoring", "echtzeit"],
      options: [
        { flag: "-u USER", desc: "Nur Prozesse eines Benutzers anzeigen" },
        { flag: "-p PID", desc: "Nur bestimmte PIDs beobachten" },
        { flag: "-d N", desc: "Aktualisierungsintervall in Sekunden" },
        { flag: "-b", desc: "Batch-Modus (für Scripts/Logs)" },
        { flag: "-n N", desc: "N Iterationen dann beenden (mit -b)" },
      ],
      examples: [
        { label: "top starten", code: "top" },
        { label: "Nur Prozesse von anna", code: "top -u anna" },
        { label: "Einmalige Ausgabe für Script", code: "top -b -n 1 | head -20" },
      ],
      notes: "Tastenkürzel in top: q=beenden, k=Kill, r=Renice, M=nach RAM sortieren, P=nach CPU sortieren, 1=CPU-Kerne einzel"
    },
    {
      cmd: "htop",
      desc: "Verbesserter interaktiver Prozessmonitor mit Farbdarstellung und Mausunterstützung.",
      syntax: "htop [OPTIONEN]",
      level: "basic",
      tags: ["monitoring", "echtzeit"],
      options: [
        { flag: "-u USER", desc: "Nur Prozesse eines Benutzers" },
        { flag: "-p PID", desc: "Nur bestimmte Prozesse" },
        { flag: "-t", desc: "Prozessbaum-Ansicht" },
      ],
      examples: [
        { label: "htop starten", code: "htop" },
        { label: "Installation falls nicht vorhanden", code: "sudo apt install htop" },
      ],
      notes: "htop bietet Mausbedienung, Prozessbaum, einfaches Beenden per F9 und ist meist lesbarer als top."
    },
    {
      cmd: "kill",
      desc: "Sendet ein Signal an einen Prozess (meist zum Beenden). Verwendet die PID.",
      syntax: "kill [SIGNAL] PID...",
      level: "basic",
      tags: ["prozesse", "beenden"],
      options: [
        { flag: "-9 / -KILL", desc: "Sofort erzwingen (SIGKILL) — Prozess kann nicht ignorieren" },
        { flag: "-15 / -TERM", desc: "Höflich beenden (SIGTERM, Standard)" },
        { flag: "-1 / -HUP", desc: "Prozess neu laden (SIGHUP) — bei Daemons" },
        { flag: "-l", desc: "Alle verfügbaren Signale auflisten" },
      ],
      examples: [
        { label: "Prozess höflich beenden", code: "kill 1234" },
        { label: "Prozess sofort erzwingen", code: "kill -9 1234" },
        { label: "Service ohne Neustart neu laden", code: "kill -HUP $(cat /var/run/nginx.pid)" },
        { label: "Alle Signale anzeigen", code: "kill -l" },
      ]
    },
    {
      cmd: "killall",
      desc: "Sendet Signale an alle Prozesse mit einem bestimmten Namen.",
      syntax: "killall [OPTIONEN] PROZESSNAME",
      level: "basic",
      tags: ["prozesse", "beenden"],
      options: [
        { flag: "-9", desc: "SIGKILL (sofortiger Abbruch)" },
        { flag: "-u USER", desc: "Nur Prozesse eines bestimmten Benutzers" },
        { flag: "-i", desc: "Interaktiv — fragt vor jedem Kill" },
      ],
      examples: [
        { label: "Alle Firefox-Prozesse beenden", code: "killall firefox" },
        { label: "Alle nginx-Prozesse sofort", code: "killall -9 nginx" },
      ]
    },
    {
      cmd: "jobs",
      desc: "Listet alle Hintergrundprozesse (Jobs) der aktuellen Shell-Sitzung auf.",
      syntax: "jobs [OPTIONEN]",
      level: "basic",
      tags: ["jobs", "background"],
      options: [
        { flag: "-l", desc: "PID zusätzlich anzeigen" },
        { flag: "-r", desc: "Nur laufende Jobs" },
        { flag: "-s", desc: "Nur gestoppte Jobs" },
      ],
      examples: [
        { label: "Alle Jobs anzeigen", code: "jobs" },
        { label: "Mit PID anzeigen", code: "jobs -l" },
      ]
    },
    {
      cmd: "bg",
      desc: "Führt einen gestoppten Job im Hintergrund weiter aus.",
      syntax: "bg [JOB-ID]",
      level: "basic",
      tags: ["jobs", "background"],
      options: [],
      examples: [
        { label: "Letzten gestoppten Job in Hintergrund", code: "bg" },
        { label: "Job Nr. 2 in Hintergrund", code: "bg %2" },
      ],
      notes: "Workflow: Prozess starten → Strg+Z (stoppen) → bg (im Hintergrund weiterlaufen lassen)"
    },
    {
      cmd: "fg",
      desc: "Holt einen Hintergrundjob in den Vordergrund zurück.",
      syntax: "fg [JOB-ID]",
      level: "basic",
      tags: ["jobs", "foreground"],
      options: [],
      examples: [
        { label: "Letzten Job in den Vordergrund", code: "fg" },
        { label: "Job Nr. 1 in den Vordergrund", code: "fg %1" },
      ]
    },
    {
      cmd: "nohup",
      desc: "Führt einen Befehl aus, der auch nach dem Ausloggen weiterläuft (No Hangup).",
      syntax: "nohup BEFEHL [ARGS] &",
      level: "medium",
      tags: ["background", "persistent"],
      options: [],
      examples: [
        { label: "Script im Hintergrund permanent", code: "nohup ./myscript.sh &" },
        { label: "Mit eigener Logdatei", code: "nohup python3 app.py > app.log 2>&1 &" },
      ],
      notes: "Ausgabe wird standardmässig in nohup.out geschrieben. Das & am Ende sendet den Prozess in den Hintergrund."
    },
    {
      cmd: "nice / renice",
      desc: "Setzt oder ändert die Priorität (Niceness) eines Prozesses. -20 = höchste, 19 = niedrigste Priorität.",
      syntax: "nice -n WERT BEFEHL / renice WERT -p PID",
      level: "medium",
      tags: ["priorität", "performance"],
      options: [
        { flag: "-n WERT", desc: "Niceness-Wert (-20 bis 19). Standard: 10" },
      ],
      examples: [
        { label: "Script mit niedriger Priorität", code: "nice -n 19 ./schwerer_prozess.sh" },
        { label: "Priorität eines Prozesses erhöhen (root)", code: "renice -n -5 -p 1234" },
        { label: "Alle Prozesse von anna priorisieren", code: "renice 10 -u anna" },
      ]
    },
    {
      cmd: "pgrep / pkill",
      desc: "Sucht Prozess-IDs nach Name (pgrep) oder sendet Signal nach Name (pkill).",
      syntax: "pgrep [OPTIONEN] MUSTER / pkill [OPTIONEN] MUSTER",
      level: "medium",
      tags: ["prozesse", "suchen"],
      options: [
        { flag: "-u USER", desc: "Nur Prozesse eines Benutzers" },
        { flag: "-l", desc: "PID und Name anzeigen (pgrep)" },
        { flag: "-a", desc: "PID und vollständige Kommandozeile (pgrep)" },
      ],
      examples: [
        { label: "PID von nginx finden", code: "pgrep nginx" },
        { label: "Mit Name anzeigen", code: "pgrep -la python" },
        { label: "nginx sanft beenden", code: "pkill -TERM nginx" },
      ]
    },
    {
      cmd: "cron / crontab",
      desc: "Planer für wiederkehrende Aufgaben (Cron-Jobs). crontab verwaltet die Aufgabenliste.",
      syntax: "crontab [OPTIONEN]",
      level: "medium",
      tags: ["automatisierung", "zeitplan"],
      options: [
        { flag: "-e", desc: "Crontab im Editor öffnen" },
        { flag: "-l", desc: "Aktuelle Crontab anzeigen" },
        { flag: "-r", desc: "Crontab löschen" },
        { flag: "-u USER", desc: "Crontab eines anderen Benutzers (root)" },
      ],
      examples: [
        { label: "Crontab bearbeiten", code: "crontab -e" },
        { label: "Crontab anzeigen", code: "crontab -l" },
        { label: "Täglich um 2:30 Uhr", code: "30 2 * * * /usr/local/bin/backup.sh" },
        { label: "Jede Stunde", code: "0 * * * * /usr/local/bin/check.sh" },
        { label: "Jeden Montag um 8 Uhr", code: "0 8 * * 1 /usr/local/bin/report.sh" },
      ],
      notes: "Cron-Syntax: Minute Stunde Tag Monat Wochentag Befehl (0-59, 0-23, 1-31, 1-12, 0-7)"
    },
  ],

  // ─────────────────────────────────────────────
  //  5. NETZWERK
  // ─────────────────────────────────────────────
  netzwerk: [
    {
      cmd: "ip",
      desc: "Modernes Tool zur Netzwerkkonfiguration (ersetzt ifconfig). Zeigt und ändert IP-Adressen, Routen und Interfaces.",
      syntax: "ip [OBJEKT] [BEFEHL]",
      level: "medium",
      tags: ["netzwerk", "konfiguration"],
      options: [
        { flag: "addr", desc: "IP-Adressen anzeigen/konfigurieren" },
        { flag: "link", desc: "Netzwerk-Interfaces anzeigen/steuern" },
        { flag: "route", desc: "Routing-Tabelle anzeigen/bearbeiten" },
        { flag: "neigh", desc: "ARP-Cache anzeigen" },
        { flag: "-c", desc: "Farbige Ausgabe" },
      ],
      examples: [
        { label: "Alle IP-Adressen anzeigen", code: "ip addr show" },
        { label: "Kompakt: IPs aller Interfaces", code: "ip -c a" },
        { label: "Routing-Tabelle", code: "ip route show" },
        { label: "IP-Adresse setzen", code: "ip addr add 192.168.1.100/24 dev eth0" },
        { label: "Interface aktivieren", code: "ip link set eth0 up" },
        { label: "ARP-Cache anzeigen", code: "ip neigh" },
      ]
    },
    {
      cmd: "ping",
      desc: "Testet die Erreichbarkeit eines Hosts über das Netzwerk mittels ICMP-Paketen.",
      syntax: "ping [OPTIONEN] HOST",
      level: "basic",
      tags: ["diagnose", "verbindung"],
      options: [
        { flag: "-c N", desc: "Nur N Pakete senden" },
        { flag: "-i N", desc: "Intervall zwischen Paketen (Sekunden)" },
        { flag: "-t N", desc: "TTL setzen" },
        { flag: "-s N", desc: "Paketgrösse setzen" },
        { flag: "-6", desc: "IPv6 verwenden" },
      ],
      examples: [
        { label: "Host anpingen", code: "ping google.com" },
        { label: "Nur 4 Pakete senden", code: "ping -c 4 192.168.1.1" },
        { label: "Schneller Test", code: "ping -c 3 -i 0.2 8.8.8.8" },
      ]
    },
    {
      cmd: "ss",
      desc: "Zeigt Netzwerk-Socket-Informationen (ersetzt netstat). Schnell und detailliert.",
      syntax: "ss [OPTIONEN]",
      level: "medium",
      tags: ["netzwerk", "sockets", "ports"],
      options: [
        { flag: "-t", desc: "TCP-Verbindungen" },
        { flag: "-u", desc: "UDP-Verbindungen" },
        { flag: "-l", desc: "Nur lauschende Sockets (listening)" },
        { flag: "-n", desc: "Numerische Adressen (kein DNS)" },
        { flag: "-p", desc: "Prozess anzeigen der den Socket nutzt" },
        { flag: "-a", desc: "Alle Sockets (nicht nur verbundene)" },
      ],
      examples: [
        { label: "Alle TCP-Verbindungen", code: "ss -tn" },
        { label: "Lauschende Ports", code: "ss -tlnp" },
        { label: "Welcher Prozess nutzt Port 80?", code: "ss -tlnp | grep :80" },
        { label: "UDP-Sockets", code: "ss -ulnp" },
      ]
    },
    {
      cmd: "netstat",
      desc: "Netzwerkstatistiken, aktive Verbindungen und lauschende Ports (veraltet, aber weit verbreitet).",
      syntax: "netstat [OPTIONEN]",
      level: "basic",
      tags: ["netzwerk", "ports", "verbindungen"],
      options: [
        { flag: "-t", desc: "TCP-Verbindungen" },
        { flag: "-u", desc: "UDP-Verbindungen" },
        { flag: "-l", desc: "Lauschende Ports" },
        { flag: "-n", desc: "Numerisch (kein DNS/Hostname-Lookup)" },
        { flag: "-p", desc: "PID und Programmname anzeigen" },
        { flag: "-r", desc: "Routing-Tabelle anzeigen" },
      ],
      examples: [
        { label: "Alle lauschenden Ports", code: "netstat -tlnp" },
        { label: "Alle Verbindungen", code: "netstat -an" },
        { label: "Routing-Tabelle", code: "netstat -r" },
      ]
    },
    {
      cmd: "traceroute",
      desc: "Verfolgt den Netzwerkpfad zu einem Zielhost Hop für Hop.",
      syntax: "traceroute [OPTIONEN] HOST",
      level: "medium",
      tags: ["diagnose", "routing"],
      options: [
        { flag: "-n", desc: "Keine DNS-Auflösung (schneller)" },
        { flag: "-m N", desc: "Maximale Hop-Anzahl (Standard: 30)" },
        { flag: "-I", desc: "ICMP statt UDP verwenden" },
      ],
      examples: [
        { label: "Pfad zu google.com", code: "traceroute google.com" },
        { label: "Schnell, numerisch", code: "traceroute -n 8.8.8.8" },
      ]
    },
    {
      cmd: "curl",
      desc: "Überträgt Daten zu/von Servern. Unterstützt HTTP, HTTPS, FTP, SCP und viele weitere Protokolle.",
      syntax: "curl [OPTIONEN] URL",
      level: "medium",
      tags: ["http", "download", "api"],
      options: [
        { flag: "-o DATEI", desc: "Ausgabe in Datei speichern" },
        { flag: "-O", desc: "Dateiname aus URL übernehmen" },
        { flag: "-L", desc: "Weiterleitungen (Redirects) folgen" },
        { flag: "-I", desc: "Nur HTTP-Header abrufen (HEAD)" },
        { flag: "-X METHODE", desc: "HTTP-Methode (GET, POST, PUT, DELETE)" },
        { flag: "-H 'Header'", desc: "HTTP-Header setzen" },
        { flag: "-d DATA", desc: "POST-Daten senden" },
        { flag: "-u USER:PASS", desc: "HTTP-Authentifizierung" },
        { flag: "-k", desc: "SSL-Zertifikat-Prüfung deaktivieren" },
        { flag: "-s", desc: "Stiller Modus (keine Fortschrittsanzeige)" },
        { flag: "-v", desc: "Ausführlich (verbose) — zeigt alle Header" },
      ],
      examples: [
        { label: "Webseite abrufen", code: "curl https://example.com" },
        { label: "Datei herunterladen", code: "curl -L -O https://example.com/file.tar.gz" },
        { label: "HTTP-Header anzeigen", code: "curl -I https://example.com" },
        { label: "API GET-Request", code: "curl -s https://api.example.com/users | jq" },
        { label: "API POST mit JSON", code: "curl -X POST -H 'Content-Type: application/json' -d '{\"name\":\"Anna\"}' https://api.example.com/users" },
        { label: "Externe IP anzeigen", code: "curl -s https://ifconfig.me" },
      ]
    },
    {
      cmd: "wget",
      desc: "Lädt Dateien aus dem Internet herunter. Ideal für nicht-interaktive Downloads und Mirroring.",
      syntax: "wget [OPTIONEN] URL",
      level: "basic",
      tags: ["download", "http"],
      options: [
        { flag: "-O DATEI", desc: "Unter anderem Dateinamen speichern" },
        { flag: "-c", desc: "Unterbrochenen Download fortsetzen" },
        { flag: "-r", desc: "Rekursiv herunterladen" },
        { flag: "-q", desc: "Stiller Modus" },
        { flag: "--limit-rate=N", desc: "Downloadrate begrenzen (z.B. 1m)" },
        { flag: "-P VERZ", desc: "In bestimmtes Verzeichnis herunterladen" },
      ],
      examples: [
        { label: "Datei herunterladen", code: "wget https://example.com/file.iso" },
        { label: "Download fortsetzen", code: "wget -c https://example.com/großedatei.iso" },
        { label: "Webseite spiegeln", code: "wget -r -np https://example.com/" },
      ]
    },
    {
      cmd: "nmap",
      desc: "Netzwerk-Scanner — entdeckt Hosts und offene Ports. Unverzichtbar für Netzwerkadministration.",
      syntax: "nmap [OPTIONEN] ZIEL",
      level: "advanced",
      tags: ["security", "scan", "ports"],
      options: [
        { flag: "-sV", desc: "Dienst-Versionen ermitteln" },
        { flag: "-O", desc: "Betriebssystem erkennen" },
        { flag: "-p PORTS", desc: "Bestimmte Ports scannen (z.B. -p 80,443,22)" },
        { flag: "-sS", desc: "SYN-Scan (Stealth)" },
        { flag: "-A", desc: "Aggressiv: OS, Versionen, Scripts" },
        { flag: "-oN DATEI", desc: "Ergebnis in Datei speichern" },
      ],
      examples: [
        { label: "Host und Ports scannen", code: "nmap 192.168.1.1" },
        { label: "Netzwerk-Scan", code: "nmap 192.168.1.0/24" },
        { label: "Mit Service-Erkennung", code: "nmap -sV 192.168.1.100" },
        { label: "Top 1000 Ports", code: "nmap --top-ports 1000 zielhost.de" },
      ],
      notes: "⚠️ Nur auf Systemen scannen für die du eine Erlaubnis hast. Nmap-Scans können als Angriff gewertet werden."
    },
    {
      cmd: "iptables",
      desc: "Firewall-Verwaltung auf Kernel-Ebene (Netfilter). Regelt ein- und ausgehenden Netzwerkverkehr.",
      syntax: "iptables [OPTIONEN] TABELLE KETTE REGEL",
      level: "advanced",
      tags: ["firewall", "sicherheit"],
      options: [
        { flag: "-L", desc: "Alle Regeln auflisten" },
        { flag: "-A KETTE", desc: "Regel anhängen (Append)" },
        { flag: "-I KETTE N", desc: "Regel einfügen an Position N" },
        { flag: "-D KETTE", desc: "Regel löschen" },
        { flag: "-F", desc: "Alle Regeln einer Kette löschen (Flush)" },
        { flag: "-n", desc: "Numerische Ausgabe (kein DNS)" },
        { flag: "-v", desc: "Ausführlich mit Paketzähler" },
      ],
      examples: [
        { label: "Alle Regeln anzeigen", code: "iptables -L -n -v" },
        { label: "SSH erlauben", code: "iptables -A INPUT -p tcp --dport 22 -j ACCEPT" },
        { label: "HTTP und HTTPS", code: "iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT" },
        { label: "IP blockieren", code: "iptables -A INPUT -s 192.168.1.100 -j DROP" },
        { label: "Regeln speichern", code: "iptables-save > /etc/iptables/rules.v4" },
      ]
    },
    {
      cmd: "dig",
      desc: "DNS-Abfragewerkzeug — fragt DNS-Server nach Einträgen (A, MX, NS, TXT etc.).",
      syntax: "dig [OPTIONEN] [TYPE] DOMAIN",
      level: "medium",
      tags: ["dns", "diagnose"],
      options: [
        { flag: "+short", desc: "Nur das Ergebnis (kurze Ausgabe)" },
        { flag: "+noall +answer", desc: "Nur die Antwortsektion" },
        { flag: "@SERVER", desc: "Bestimmten DNS-Server befragen" },
        { flag: "-x IP", desc: "Reverse-DNS-Lookup" },
      ],
      examples: [
        { label: "A-Record abfragen", code: "dig google.com" },
        { label: "Nur IP ausgeben", code: "dig +short google.com" },
        { label: "MX-Records (Mail)", code: "dig MX google.com" },
        { label: "Mit spezifischem DNS-Server", code: "dig @8.8.8.8 google.com" },
        { label: "Reverse-DNS", code: "dig -x 8.8.8.8" },
        { label: "TXT-Records (SPF)", code: "dig TXT google.com +short" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  6. PAKETVERWALTUNG
  // ─────────────────────────────────────────────
  pakete: [
    {
      cmd: "apt",
      desc: "Paketverwaltung für Debian/Ubuntu — installiert, aktualisiert und entfernt Software.",
      syntax: "apt [UNTERBEFEHL] [OPTIONEN] [PAKET]",
      level: "basic",
      tags: ["debian", "ubuntu", "pakete"],
      options: [
        { flag: "update", desc: "Paketlisten vom Server aktualisieren" },
        { flag: "upgrade", desc: "Installierte Pakete aktualisieren" },
        { flag: "install PAKET", desc: "Paket installieren" },
        { flag: "remove PAKET", desc: "Paket entfernen (Konfiguration bleibt)" },
        { flag: "purge PAKET", desc: "Paket + Konfiguration vollständig entfernen" },
        { flag: "autoremove", desc: "Nicht mehr benötigte Pakete entfernen" },
        { flag: "search TERM", desc: "In Paketnamen suchen" },
        { flag: "show PAKET", desc: "Paketinformationen anzeigen" },
        { flag: "list --installed", desc: "Alle installierten Pakete auflisten" },
      ],
      examples: [
        { label: "System aktualisieren", code: "sudo apt update && sudo apt upgrade -y" },
        { label: "Paket installieren", code: "sudo apt install nginx" },
        { label: "Paket entfernen + bereinigen", code: "sudo apt purge nginx && sudo apt autoremove" },
        { label: "Paket suchen", code: "apt search 'text editor'" },
        { label: "Paketinfo anzeigen", code: "apt show nginx" },
      ]
    },
    {
      cmd: "dpkg",
      desc: "Niedriges Paketverwaltungssystem für Debian (.deb-Dateien). Direktes Paketmanagement.",
      syntax: "dpkg [OPTIONEN] PAKET",
      level: "medium",
      tags: ["debian", "pakete", "deb"],
      options: [
        { flag: "-i DATEI.deb", desc: "Lokale .deb-Datei installieren" },
        { flag: "-r PAKET", desc: "Paket entfernen" },
        { flag: "-P PAKET", desc: "Paket + Konfiguration entfernen (purge)" },
        { flag: "-l MUSTER", desc: "Installierte Pakete auflisten" },
        { flag: "-L PAKET", desc: "Dateien eines Pakets auflisten" },
        { flag: "-s PAKET", desc: "Paketstatus anzeigen" },
        { flag: "--get-selections", desc: "Alle Paketstatus ausgeben" },
      ],
      examples: [
        { label: "Lokale .deb installieren", code: "sudo dpkg -i paket.deb" },
        { label: "Paket auflisten", code: "dpkg -l | grep nginx" },
        { label: "Dateien eines Pakets", code: "dpkg -L nginx" },
        { label: "Welches Paket hat diese Datei?", code: "dpkg -S /usr/bin/nginx" },
      ]
    },
    {
      cmd: "yum / dnf",
      desc: "Paketverwaltung für RHEL, CentOS, Fedora. dnf ist der moderne Nachfolger von yum.",
      syntax: "dnf [BEFEHL] [OPTIONEN] [PAKET]",
      level: "basic",
      tags: ["rhel", "centos", "fedora", "pakete"],
      options: [
        { flag: "install PAKET", desc: "Paket installieren" },
        { flag: "remove PAKET", desc: "Paket entfernen" },
        { flag: "update", desc: "Alle Pakete aktualisieren" },
        { flag: "search TERM", desc: "Pakete suchen" },
        { flag: "info PAKET", desc: "Paketinformationen" },
        { flag: "list installed", desc: "Installierte Pakete" },
        { flag: "autoremove", desc: "Verwaiste Pakete entfernen" },
        { flag: "history", desc: "Installationshistorie anzeigen" },
      ],
      examples: [
        { label: "Paket installieren", code: "sudo dnf install httpd" },
        { label: "System aktualisieren", code: "sudo dnf update -y" },
        { label: "Paket suchen", code: "dnf search 'web server'" },
        { label: "Gruppe installieren", code: "sudo dnf groupinstall 'Development Tools'" },
      ]
    },
    {
      cmd: "rpm",
      desc: "RPM-Paketmanager — verwaltet .rpm-Dateien direkt auf RHEL/CentOS.",
      syntax: "rpm [OPTIONEN] PAKET",
      level: "medium",
      tags: ["rhel", "pakete", "rpm"],
      options: [
        { flag: "-i DATEI.rpm", desc: "Lokale .rpm-Datei installieren" },
        { flag: "-U DATEI.rpm", desc: "Paket aktualisieren (oder installieren)" },
        { flag: "-e PAKET", desc: "Paket entfernen" },
        { flag: "-q PAKET", desc: "Paket abfragen" },
        { flag: "-qa", desc: "Alle installierten Pakete" },
        { flag: "-ql PAKET", desc: "Dateien des Pakets auflisten" },
        { flag: "-qf DATEI", desc: "Welches Paket enthält diese Datei?" },
      ],
      examples: [
        { label: "Lokales RPM installieren", code: "sudo rpm -ivh paket.rpm" },
        { label: "Alle Pakete auflisten", code: "rpm -qa | sort" },
        { label: "Datei einem Paket zuordnen", code: "rpm -qf /usr/sbin/httpd" },
      ]
    },
    {
      cmd: "snap",
      desc: "Canonical's universelles Paketformat — installiert Snap-Pakete mit integrierter Sandbox.",
      syntax: "snap [BEFEHL] [PAKET]",
      level: "basic",
      tags: ["ubuntu", "snap", "universal"],
      options: [
        { flag: "install PAKET", desc: "Snap-Paket installieren" },
        { flag: "remove PAKET", desc: "Snap-Paket entfernen" },
        { flag: "list", desc: "Installierte Snaps auflisten" },
        { flag: "refresh", desc: "Snaps aktualisieren" },
        { flag: "find TERM", desc: "Snaps suchen" },
        { flag: "info PAKET", desc: "Snap-Informationen anzeigen" },
      ],
      examples: [
        { label: "VS Code installieren", code: "sudo snap install code --classic" },
        { label: "Alle Snaps auflisten", code: "snap list" },
        { label: "Alle Snaps aktualisieren", code: "sudo snap refresh" },
      ]
    },
    {
      cmd: "flatpak",
      desc: "Distributionsunabhängiges Paketformat. Pakete aus Flathub und anderen Quellen.",
      syntax: "flatpak [BEFEHL] [PAKET]",
      level: "basic",
      tags: ["universal", "desktop"],
      options: [
        { flag: "install REMOTE PAKET", desc: "Paket installieren" },
        { flag: "uninstall PAKET", desc: "Paket entfernen" },
        { flag: "update", desc: "Alle Flatpaks aktualisieren" },
        { flag: "list", desc: "Installierte Flatpaks" },
      ],
      examples: [
        { label: "Flathub hinzufügen", code: "flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo" },
        { label: "Paket installieren", code: "flatpak install flathub org.gimp.GIMP" },
        { label: "Alle aktualisieren", code: "flatpak update" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  7. TEXT & SUCHE
  // ─────────────────────────────────────────────
  text: [
    {
      cmd: "grep",
      desc: "Sucht nach Mustern (reguläre Ausdrücke) in Dateien oder der Standardeingabe.",
      syntax: "grep [OPTIONEN] MUSTER [DATEI...]",
      level: "basic",
      tags: ["suchen", "text", "regex"],
      options: [
        { flag: "-i", desc: "Gross/Kleinschreibung ignorieren" },
        { flag: "-r", desc: "Rekursiv in Verzeichnissen suchen" },
        { flag: "-n", desc: "Zeilennummern anzeigen" },
        { flag: "-c", desc: "Nur Anzahl der Treffer ausgeben" },
        { flag: "-v", desc: "Invertiert — Zeilen OHNE Muster" },
        { flag: "-l", desc: "Nur Dateinamen mit Treffern" },
        { flag: "-E", desc: "Erweiterte reguläre Ausdrücke (egrep)" },
        { flag: "-o", desc: "Nur das Treffer-Teil ausgeben" },
        { flag: "-A N", desc: "N Zeilen nach dem Treffer anzeigen" },
        { flag: "-B N", desc: "N Zeilen vor dem Treffer anzeigen" },
        { flag: "-C N", desc: "N Zeilen Kontext um den Treffer" },
        { flag: "--color", desc: "Treffer farbig hervorheben" },
      ],
      examples: [
        { label: "Fehler in Logdatei finden", code: "grep -i 'error' /var/log/syslog" },
        { label: "Rekursiv in Verzeichnis", code: "grep -rn 'TODO' /opt/projekt/" },
        { label: "IP-Adressen finden", code: "grep -oE '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' access.log" },
        { label: "Zeilen ausschliessen", code: "grep -v '#' /etc/hosts" },
        { label: "Mehrere Muster", code: "grep -E 'error|warning|critical' /var/log/syslog" },
        { label: "Mit Kontext", code: "grep -C 3 'segfault' /var/log/kern.log" },
      ]
    },
    {
      cmd: "sed",
      desc: "Stream Editor — bearbeitet Text in Dateien oder Datenströmen (suchen, ersetzen, löschen).",
      syntax: "sed [OPTIONEN] 'BEFEHLE' [DATEI]",
      level: "medium",
      tags: ["text", "bearbeiten", "ersetzen"],
      options: [
        { flag: "-i", desc: "Datei direkt bearbeiten (in-place)" },
        { flag: "-i.bak", desc: "In-place mit Backup (.bak)" },
        { flag: "-n", desc: "Keine Standard-Ausgabe (nur explizite)" },
        { flag: "-e", desc: "Mehrere sed-Ausdrücke kombinieren" },
        { flag: "-r / -E", desc: "Erweiterte reguläre Ausdrücke" },
      ],
      examples: [
        { label: "Einfaches Ersetzen", code: "sed 's/alt/neu/g' datei.txt" },
        { label: "Direkt in Datei ersetzen", code: "sed -i 's/localhost/0.0.0.0/g' config.ini" },
        { label: "Mit Backup ersetzen", code: "sed -i.bak 's/debug/info/' app.conf" },
        { label: "Zeilen mit Muster löschen", code: "sed '/^#/d' config.txt" },
        { label: "Zeile N ausgeben", code: "sed -n '5p' datei.txt" },
        { label: "Zeilen 5-10 ausgeben", code: "sed -n '5,10p' datei.txt" },
        { label: "Leerzeilen entfernen", code: "sed '/^$/d' datei.txt" },
      ]
    },
    {
      cmd: "awk",
      desc: "Mächtiges Text-Verarbeitungswerkzeug. Ideal für spaltenweise Datenverarbeitung.",
      syntax: "awk 'PROGRAMM' [DATEI]",
      level: "medium",
      tags: ["text", "daten", "programmierung"],
      options: [
        { flag: "-F TRENNZ", desc: "Feldtrennzeichen setzen (z.B. -F ':')" },
        { flag: "-v VAR=WERT", desc: "Variable setzen" },
        { flag: "-f DATEI", desc: "awk-Programm aus Datei lesen" },
      ],
      examples: [
        { label: "Erste Spalte ausgeben", code: "awk '{print $1}' datei.txt" },
        { label: "Bestimmte Spalten mit Trennzeichen", code: "awk -F: '{print $1, $3}' /etc/passwd" },
        { label: "Zeilen filtern", code: "awk '/error/ {print $0}' /var/log/syslog" },
        { label: "Summe berechnen", code: "awk '{sum += $3} END {print sum}' umsatz.csv" },
        { label: "Zeilen mit Bedingung", code: "awk -F: '$3 >= 1000 {print $1}' /etc/passwd" },
        { label: "Letztes Feld", code: "awk '{print $NF}' datei.txt" },
      ]
    },
    {
      cmd: "cat",
      desc: "Gibt Dateiinhalte aus oder verbindet mehrere Dateien (Concatenate).",
      syntax: "cat [OPTIONEN] [DATEI...]",
      level: "basic",
      tags: ["text", "anzeigen"],
      options: [
        { flag: "-n", desc: "Zeilennummern anzeigen" },
        { flag: "-b", desc: "Nur nicht-leere Zeilen nummerieren" },
        { flag: "-A", desc: "Sonderzeichen sichtbar machen" },
        { flag: "-s", desc: "Mehrfache Leerzeilen zu einer zusammenfassen" },
      ],
      examples: [
        { label: "Datei ausgeben", code: "cat /etc/hostname" },
        { label: "Mit Zeilennummern", code: "cat -n datei.txt" },
        { label: "Dateien zusammenführen", code: "cat datei1.txt datei2.txt > gesamt.txt" },
        { label: "Neue Datei erstellen", code: "cat > neue_datei.txt << EOF\nZeile 1\nEOF" },
      ]
    },
    {
      cmd: "less",
      desc: "Pager zum seitenweisen Lesen langer Dateien oder Ausgaben. Besser als `more`.",
      syntax: "less [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["text", "anzeigen", "navigation"],
      options: [
        { flag: "-N", desc: "Zeilennummern anzeigen" },
        { flag: "-S", desc: "Lange Zeilen nicht umbrechen" },
        { flag: "-i", desc: "Suche case-insensitive" },
        { flag: "+PATTERN", desc: "Direkt zum Muster springen" },
      ],
      examples: [
        { label: "Datei pagen", code: "less /var/log/syslog" },
        { label: "Mit Zeilennummern", code: "less -N /etc/nginx/nginx.conf" },
        { label: "Befehlsausgabe pagen", code: "ps aux | less" },
      ],
      notes: "Tasten in less: q=beenden, /=suchen, n=nächster Treffer, G=Ende, g=Anfang, Leertaste=nächste Seite, F=folgen (wie tail -f)"
    },
    {
      cmd: "head",
      desc: "Gibt die ersten N Zeilen einer Datei aus (Standard: 10 Zeilen).",
      syntax: "head [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["text", "anzeigen"],
      options: [
        { flag: "-n N", desc: "N Zeilen ausgeben" },
        { flag: "-c N", desc: "Erste N Bytes ausgeben" },
      ],
      examples: [
        { label: "Erste 10 Zeilen", code: "head /var/log/syslog" },
        { label: "Erste 30 Zeilen", code: "head -n 30 datei.txt" },
        { label: "Ersten 100 Bytes", code: "head -c 100 binary_file" },
      ]
    },
    {
      cmd: "tail",
      desc: "Gibt die letzten N Zeilen einer Datei aus. Mit -f für Live-Monitoring von Logfiles.",
      syntax: "tail [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["text", "logs", "monitoring"],
      options: [
        { flag: "-n N", desc: "Letzte N Zeilen ausgeben" },
        { flag: "-f", desc: "Datei laufend verfolgen (follow) — ideal für Logs" },
        { flag: "-F", desc: "Wie -f, aber auch wenn Datei rotiert wird" },
        { flag: "-c N", desc: "Letzte N Bytes" },
      ],
      examples: [
        { label: "Letzte 10 Zeilen", code: "tail /var/log/syslog" },
        { label: "Log live verfolgen", code: "tail -f /var/log/nginx/access.log" },
        { label: "Fehler live beobachten", code: "tail -f /var/log/nginx/error.log | grep ERROR" },
        { label: "Letzte 50 Zeilen", code: "tail -n 50 app.log" },
      ]
    },
    {
      cmd: "wc",
      desc: "Zählt Zeilen, Wörter und Zeichen in Dateien (Word Count).",
      syntax: "wc [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["text", "statistik"],
      options: [
        { flag: "-l", desc: "Nur Zeilen zählen" },
        { flag: "-w", desc: "Nur Wörter zählen" },
        { flag: "-c", desc: "Nur Bytes/Zeichen zählen" },
        { flag: "-m", desc: "Zeichen (Multibyte-fähig)" },
      ],
      examples: [
        { label: "Zeilen, Wörter, Bytes", code: "wc datei.txt" },
        { label: "Nur Zeilenzahl", code: "wc -l /etc/passwd" },
        { label: "Anzahl laufender Prozesse", code: "ps aux | wc -l" },
      ]
    },
    {
      cmd: "sort",
      desc: "Sortiert Zeilen in Textdateien alphabetisch, numerisch oder nach Spalten.",
      syntax: "sort [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["text", "sortieren"],
      options: [
        { flag: "-r", desc: "Umgekehrte Reihenfolge (reverse)" },
        { flag: "-n", desc: "Numerisch sortieren" },
        { flag: "-k N", desc: "Nach Spalte N sortieren" },
        { flag: "-t ZEICHEN", desc: "Feldtrennzeichen setzen" },
        { flag: "-u", desc: "Duplikate entfernen (unique)" },
        { flag: "-h", desc: "Menschenlesbare Zahlen (1K, 2M) sortieren" },
      ],
      examples: [
        { label: "Alphabetisch sortieren", code: "sort namen.txt" },
        { label: "Numerisch, absteigend", code: "sort -rn zahlen.txt" },
        { label: "Duplikate entfernen", code: "sort -u liste.txt" },
        { label: "Grösste Dateien (du-Ausgabe)", code: "du -sh * | sort -rh" },
      ]
    },
    {
      cmd: "uniq",
      desc: "Entfernt oder zählt doppelte aufeinanderfolgende Zeilen. Meist in Kombination mit sort.",
      syntax: "uniq [OPTIONEN] [EINGABE] [AUSGABE]",
      level: "basic",
      tags: ["text", "deduplizieren"],
      options: [
        { flag: "-c", desc: "Häufigkeit der Zeilen voranstellen" },
        { flag: "-d", desc: "Nur doppelte Zeilen ausgeben" },
        { flag: "-u", desc: "Nur eindeutige Zeilen ausgeben" },
        { flag: "-i", desc: "Gross/Kleinschreibung ignorieren" },
      ],
      examples: [
        { label: "Duplikate entfernen", code: "sort datei.txt | uniq" },
        { label: "Häufigkeit zählen", code: "sort access.log | uniq -c | sort -rn | head -20" },
        { label: "Nur Duplikate anzeigen", code: "sort datei.txt | uniq -d" },
      ]
    },
    {
      cmd: "cut",
      desc: "Extrahiert Spalten oder Zeichenbereiche aus Zeilen.",
      syntax: "cut [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["text", "spalten"],
      options: [
        { flag: "-d TRENNER", desc: "Trennzeichen für Felder (Standard: Tab)" },
        { flag: "-f N", desc: "Feld/Spalte N ausgeben" },
        { flag: "-c N-M", desc: "Zeichen N bis M ausgeben" },
      ],
      examples: [
        { label: "Erstes Feld aus CSV", code: "cut -d',' -f1 daten.csv" },
        { label: "Benutzernamen aus /etc/passwd", code: "cut -d: -f1 /etc/passwd" },
        { label: "Spalten 1 und 3", code: "cut -d: -f1,3 /etc/passwd" },
        { label: "Zeichen 1-10", code: "cut -c1-10 datei.txt" },
      ]
    },
    {
      cmd: "tr",
      desc: "Übersetzt oder löscht Zeichen aus dem Eingabestrom (Translate characters).",
      syntax: "tr [OPTIONEN] SET1 [SET2]",
      level: "medium",
      tags: ["text", "transformieren"],
      options: [
        { flag: "-d", desc: "Zeichen löschen" },
        { flag: "-s", desc: "Wiederholte Zeichen zu einem zusammenfassen (squeeze)" },
        { flag: "-c", desc: "Komplement (alle Zeichen AUSSER SET1)" },
      ],
      examples: [
        { label: "Kleinbuchstaben zu Grossbuchstaben", code: "echo 'hallo welt' | tr 'a-z' 'A-Z'" },
        { label: "Leerzeichen zu Zeilenumbrüchen", code: "echo 'eins zwei drei' | tr ' ' '\\n'" },
        { label: "Ziffern entfernen", code: "echo 'abc123' | tr -d '0-9'" },
        { label: "Mehrfache Leerzeichen zu einem", code: "cat datei.txt | tr -s ' '" },
      ]
    },
    {
      cmd: "diff",
      desc: "Vergleicht zwei Dateien und zeigt die Unterschiede an.",
      syntax: "diff [OPTIONEN] DATEI1 DATEI2",
      level: "basic",
      tags: ["vergleichen", "text"],
      options: [
        { flag: "-u", desc: "Unified-Format (am gebräuchlichsten, für Patches)" },
        { flag: "-i", desc: "Gross/Kleinschreibung ignorieren" },
        { flag: "-r", desc: "Verzeichnisse rekursiv vergleichen" },
        { flag: "--color", desc: "Farbige Ausgabe" },
        { flag: "-b", desc: "Leerzeichen-Unterschiede ignorieren" },
      ],
      examples: [
        { label: "Zwei Dateien vergleichen", code: "diff datei1.txt datei2.txt" },
        { label: "Unified-Format (für Patches)", code: "diff -u alt.conf neu.conf > aenderung.patch" },
        { label: "Verzeichnisse vergleichen", code: "diff -r /backup/etc /etc" },
      ]
    },
    {
      cmd: "nano",
      desc: "Einfacher, benutzerfreundlicher Terminal-Texteditor mit Tastenkombinationen am unteren Rand.",
      syntax: "nano [OPTIONEN] [DATEI]",
      level: "basic",
      tags: ["editor", "text"],
      options: [
        { flag: "-l", desc: "Zeilennummern anzeigen" },
        { flag: "-c", desc: "Cursor-Position anzeigen" },
        { flag: "-w", desc: "Lange Zeilen nicht umbrechen" },
        { flag: "-B", desc: "Backup vor dem Speichern erstellen" },
      ],
      examples: [
        { label: "Datei öffnen/erstellen", code: "nano /etc/hosts" },
        { label: "Mit Zeilennummern", code: "nano -l datei.txt" },
      ],
      notes: "Wichtige Tasten: Strg+S=Speichern, Strg+X=Beenden, Strg+W=Suchen, Strg+K=Zeile löschen, Strg+G=Hilfe"
    },
    {
      cmd: "vim",
      desc: "Leistungsstarker, modaler Texteditor. Steile Lernkurve, aber extrem produktiv.",
      syntax: "vim [OPTIONEN] [DATEI]",
      level: "advanced",
      tags: ["editor", "text", "profi"],
      options: [
        { flag: "+N", desc: "Direkt zu Zeile N springen" },
        { flag: "+/MUSTER", desc: "Direkt zu erstem Treffer" },
        { flag: "-R", desc: "Read-only Modus" },
      ],
      examples: [
        { label: "Datei öffnen", code: "vim /etc/nginx/nginx.conf" },
        { label: "Zu Zeile 42 springen", code: "vim +42 datei.txt" },
        { label: "Read-only öffnen", code: "vim -R wichtig.conf" },
      ],
      notes: "Modi: Normal (Esc), Einfügen (i), Command (:). Wichtig: :w=speichern, :q=beenden, :wq=beides, :q!=erzwingen. /=suchen, n=nächster Treffer, dd=Zeile löschen, yy=kopieren, p=einfügen"
    },
  ],

  // ─────────────────────────────────────────────
  //  8. ARCHIVIERUNG
  // ─────────────────────────────────────────────
  archiv: [
    {
      cmd: "tar",
      desc: "Archivierungswerkzeug — fasst Dateien und Verzeichnisse zusammen (mit/ohne Komprimierung).",
      syntax: "tar [OPTIONEN] [ARCHIV] [DATEIEN...]",
      level: "medium",
      tags: ["archiv", "backup"],
      options: [
        { flag: "-c", desc: "Archiv erstellen (create)" },
        { flag: "-x", desc: "Archiv entpacken (extract)" },
        { flag: "-t", desc: "Inhalt anzeigen (list)" },
        { flag: "-v", desc: "Ausführlich (verbose)" },
        { flag: "-f DATEI", desc: "Archivdatei angeben (immer nötig!)" },
        { flag: "-z", desc: "Gzip-Komprimierung (.tar.gz)" },
        { flag: "-j", desc: "Bzip2-Komprimierung (.tar.bz2)" },
        { flag: "-J", desc: "XZ-Komprimierung (.tar.xz)" },
        { flag: "-C VERZ", desc: "In Verzeichnis entpacken" },
        { flag: "--exclude=MUSTER", desc: "Dateien/Verzeichnisse ausschliessen" },
      ],
      examples: [
        { label: "Komprimiertes Archiv erstellen", code: "tar -czf backup.tar.gz /home/anna/" },
        { label: "Archiv entpacken", code: "tar -xzf backup.tar.gz" },
        { label: "In bestimmtes Verzeichnis entpacken", code: "tar -xzf backup.tar.gz -C /tmp/restore/" },
        { label: "Inhalt anzeigen (ohne entpacken)", code: "tar -tzf archiv.tar.gz" },
        { label: "Mit XZ (beste Komprimierung)", code: "tar -cJf archiv.tar.xz /opt/daten/" },
        { label: "Mit Ausschlüssen", code: "tar -czf backup.tar.gz --exclude='*.log' /var/www/" },
      ],
      notes: "Merkhilfe: czf=create, xzf=extract, tzf=list. Das z steht für gzip, j für bzip2, J für xz."
    },
    {
      cmd: "gzip / gunzip",
      desc: "Komprimiert oder dekomprimiert einzelne Dateien im gzip-Format (.gz).",
      syntax: "gzip [OPTIONEN] DATEI / gunzip DATEI.gz",
      level: "basic",
      tags: ["komprimierung", "gz"],
      options: [
        { flag: "-k", desc: "Originaldatei behalten (keep)" },
        { flag: "-r", desc: "Verzeichnisse rekursiv komprimieren" },
        { flag: "-d", desc: "Dekomprimieren (wie gunzip)" },
        { flag: "-1 bis -9", desc: "Komprimierungsstufe (1=schnell, 9=klein)" },
        { flag: "-l", desc: "Komprimierungsinfos anzeigen" },
      ],
      examples: [
        { label: "Datei komprimieren", code: "gzip datei.txt" },
        { label: "Original behalten", code: "gzip -k datei.txt" },
        { label: "Dekomprimieren", code: "gunzip datei.txt.gz" },
        { label: "Komprimierungsinfos", code: "gzip -l archiv.gz" },
      ]
    },
    {
      cmd: "zip / unzip",
      desc: "Erstellt und entpackt ZIP-Archive (kompatibel mit Windows und anderen Systemen).",
      syntax: "zip [OPTIONEN] ARCHIV.zip DATEIEN / unzip ARCHIV.zip",
      level: "basic",
      tags: ["archiv", "zip", "windows"],
      options: [
        { flag: "-r", desc: "Verzeichnisse rekursiv hinzufügen" },
        { flag: "-9", desc: "Maximale Komprimierung" },
        { flag: "-e", desc: "Archiv mit Passwort verschlüsseln" },
        { flag: "-l", desc: "Inhalt auflisten (unzip)" },
        { flag: "-d VERZ", desc: "In Verzeichnis entpacken (unzip)" },
      ],
      examples: [
        { label: "Verzeichnis zu ZIP", code: "zip -r archiv.zip /opt/projekt/" },
        { label: "ZIP entpacken", code: "unzip archiv.zip" },
        { label: "In Verzeichnis entpacken", code: "unzip archiv.zip -d /tmp/entpackt/" },
        { label: "ZIP-Inhalt anzeigen", code: "unzip -l archiv.zip" },
        { label: "Mit Passwortschutz", code: "zip -re geheim.zip vertraulich/" },
      ]
    },
    {
      cmd: "bzip2 / bunzip2",
      desc: "Komprimiert Dateien im bzip2-Format — bessere Komprimierung als gzip, aber langsamer.",
      syntax: "bzip2 [OPTIONEN] DATEI",
      level: "basic",
      tags: ["komprimierung", "bz2"],
      options: [
        { flag: "-k", desc: "Originaldatei behalten" },
        { flag: "-d", desc: "Dekomprimieren" },
        { flag: "-1 bis -9", desc: "Komprimierungsstufe" },
      ],
      examples: [
        { label: "Datei komprimieren", code: "bzip2 -k grosse_datei.xml" },
        { label: "Dekomprimieren", code: "bunzip2 datei.bz2" },
      ]
    },
    {
      cmd: "rsync",
      desc: "Synchronisiert Dateien und Verzeichnisse lokal oder über das Netzwerk. Überträgt nur Änderungen.",
      syntax: "rsync [OPTIONEN] QUELLE ZIEL",
      level: "medium",
      tags: ["backup", "sync", "netzwerk"],
      options: [
        { flag: "-a", desc: "Archivmodus (rekursiv, Rechte, Timestamps...)" },
        { flag: "-v", desc: "Ausführlich (verbose)" },
        { flag: "-z", desc: "Daten komprimieren bei Übertragung" },
        { flag: "--delete", desc: "Im Ziel löschen was in Quelle fehlt" },
        { flag: "--dry-run / -n", desc: "Nur simulieren, nichts wirklich tun" },
        { flag: "--exclude=MUSTER", desc: "Dateien ausschliessen" },
        { flag: "-P", desc: "Fortschritt und partielle Dateien" },
        { flag: "--bwlimit=N", desc: "Bandbreite begrenzen (KB/s)" },
      ],
      examples: [
        { label: "Lokales Backup", code: "rsync -av /home/anna/ /backup/anna/" },
        { label: "Auf Remote-Server synchronisieren", code: "rsync -avz /var/www/ user@server:/var/www/" },
        { label: "Mit Löschung gelöschter Dateien", code: "rsync -av --delete /quelle/ /ziel/" },
        { label: "Erst simulieren", code: "rsync -av --dry-run --delete /quelle/ /ziel/" },
        { label: "Von Remote herunterladen", code: "rsync -avzP user@server:/backup/ /local/restore/" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  9. SYSTEMINFORMATIONEN
  // ─────────────────────────────────────────────
  system: [
    {
      cmd: "uname",
      desc: "Zeigt Informationen über den Linux-Kernel und das System.",
      syntax: "uname [OPTIONEN]",
      level: "basic",
      tags: ["info", "kernel", "system"],
      options: [
        { flag: "-a", desc: "Alle Informationen" },
        { flag: "-r", desc: "Nur Kernel-Version" },
        { flag: "-m", desc: "Maschinenarchitektur (x86_64, arm...)" },
        { flag: "-n", desc: "Hostname" },
        { flag: "-s", desc: "Kernel-Name" },
      ],
      examples: [
        { label: "Alle Systeminformationen", code: "uname -a" },
        { label: "Nur Kernel-Version", code: "uname -r" },
        { label: "Architektur", code: "uname -m" },
      ]
    },
    {
      cmd: "hostname",
      desc: "Zeigt oder setzt den Hostnamen des Systems.",
      syntax: "hostname [OPTIONEN] [NEUERNAME]",
      level: "basic",
      tags: ["info", "netzwerk"],
      options: [
        { flag: "-I", desc: "Alle IP-Adressen des Hosts" },
        { flag: "-f", desc: "Vollständiger Domainname (FQDN)" },
      ],
      examples: [
        { label: "Hostname anzeigen", code: "hostname" },
        { label: "FQDN anzeigen", code: "hostname -f" },
        { label: "IP-Adressen", code: "hostname -I" },
        { label: "Temporär setzen (root)", code: "hostname neuer-servername" },
      ]
    },
    {
      cmd: "lscpu",
      desc: "Zeigt detaillierte CPU-Informationen (Kerne, Architektur, Cache, Virtualisierung).",
      syntax: "lscpu [OPTIONEN]",
      level: "basic",
      tags: ["hardware", "cpu"],
      options: [
        { flag: "-J", desc: "JSON-Ausgabe" },
        { flag: "-e", desc: "Erweiterte Informationen pro CPU" },
      ],
      examples: [
        { label: "CPU-Info anzeigen", code: "lscpu" },
        { label: "Anzahl Kerne", code: "lscpu | grep 'CPU(s):'" },
      ]
    },
    {
      cmd: "lsblk",
      desc: "Listet Blockgeräte (Festplatten, SSDs, Partitionen) in Baumstruktur auf.",
      syntax: "lsblk [OPTIONEN]",
      level: "basic",
      tags: ["hardware", "festplatte"],
      options: [
        { flag: "-f", desc: "Dateisysteminfo anzeigen" },
        { flag: "-o SPALTEN", desc: "Bestimmte Spalten anzeigen" },
        { flag: "-d", desc: "Nur Geräte, keine Partitionen" },
      ],
      examples: [
        { label: "Alle Blockgeräte", code: "lsblk" },
        { label: "Mit Dateisystem-Info", code: "lsblk -f" },
        { label: "Erweiterte Infos", code: "lsblk -o NAME,SIZE,FSTYPE,MOUNTPOINT" },
      ]
    },
    {
      cmd: "lshw",
      desc: "Zeigt detaillierte Hardware-Informationen (CPU, RAM, Netzwerk, Laufwerke).",
      syntax: "lshw [OPTIONEN]",
      level: "medium",
      tags: ["hardware", "info"],
      options: [
        { flag: "-short", desc: "Kurze Übersicht" },
        { flag: "-class TYPE", desc: "Nur bestimmte Klasse (disk, network, memory...)" },
        { flag: "-html", desc: "HTML-Ausgabe" },
        { flag: "-json", desc: "JSON-Ausgabe" },
      ],
      examples: [
        { label: "Kurze Hardware-Übersicht", code: "sudo lshw -short" },
        { label: "Nur Netzwerkkarten", code: "sudo lshw -class network" },
        { label: "Nur Speicher", code: "sudo lshw -class memory" },
      ]
    },
    {
      cmd: "free",
      desc: "Zeigt den verfügbaren und belegten RAM und Swap-Speicher.",
      syntax: "free [OPTIONEN]",
      level: "basic",
      tags: ["ram", "speicher", "monitoring"],
      options: [
        { flag: "-h", desc: "Menschenlesbare Grössen" },
        { flag: "-m", desc: "In Megabyte" },
        { flag: "-g", desc: "In Gigabyte" },
        { flag: "-s N", desc: "Jede N Sekunden aktualisieren" },
      ],
      examples: [
        { label: "RAM-Übersicht", code: "free -h" },
        { label: "Alle 2 Sekunden", code: "free -h -s 2" },
      ]
    },
    {
      cmd: "vmstat",
      desc: "Zeigt Statistiken zu virtuellem Speicher, Prozessen, CPU und I/O.",
      syntax: "vmstat [OPTIONEN] [INTERVALL] [ANZAHL]",
      level: "medium",
      tags: ["performance", "ram", "cpu"],
      options: [
        { flag: "-s", desc: "Zusammenfassung in Tabellenform" },
        { flag: "-d", desc: "Disk-Statistiken" },
        { flag: "-n", desc: "Header nur einmal anzeigen" },
      ],
      examples: [
        { label: "Einmalige Ausgabe", code: "vmstat" },
        { label: "Alle 2 Sekunden, 5 mal", code: "vmstat 2 5" },
        { label: "Speicher-Zusammenfassung", code: "vmstat -s" },
      ]
    },
    {
      cmd: "iostat",
      desc: "Zeigt CPU-Auslastung und I/O-Statistiken für Geräte und Partitionen.",
      syntax: "iostat [OPTIONEN] [GERÄT] [INTERVALL]",
      level: "medium",
      tags: ["disk", "performance", "io"],
      options: [
        { flag: "-x", desc: "Erweiterte Statistiken" },
        { flag: "-d", desc: "Nur Gerätstatistiken" },
        { flag: "-h", desc: "Menschenlesbare Ausgabe" },
      ],
      examples: [
        { label: "Übersicht", code: "iostat" },
        { label: "Erweitert, alle 2s", code: "iostat -x 2" },
        { label: "Nur Disk-Statistiken", code: "iostat -d -h" },
      ]
    },
    {
      cmd: "uptime",
      desc: "Zeigt wie lange das System läuft und die durchschnittliche Systemlast.",
      syntax: "uptime [OPTIONEN]",
      level: "basic",
      tags: ["info", "performance"],
      options: [
        { flag: "-p", desc: "Laufzeit in lesbarem Format" },
        { flag: "-s", desc: "Zeitpunkt des letzten Starts" },
      ],
      examples: [
        { label: "Laufzeit und Load", code: "uptime" },
        { label: "Lesbare Laufzeit", code: "uptime -p" },
        { label: "Letzter Start", code: "uptime -s" },
      ]
    },
    {
      cmd: "dmesg",
      desc: "Zeigt Kernel-Ringpuffer-Meldungen — Bootmeldungen, Hardware-Ereignisse, Treiberfehler.",
      syntax: "dmesg [OPTIONEN]",
      level: "medium",
      tags: ["kernel", "logs", "hardware"],
      options: [
        { flag: "-H", desc: "Menschenlesbare Ausgabe (lesbar für less)" },
        { flag: "-T", desc: "Zeitstempel im lesbaren Format" },
        { flag: "-l LEVEL", desc: "Nach Log-Level filtern (err, warn, info)" },
        { flag: "-w", desc: "Live-Modus — neue Meldungen anzeigen" },
        { flag: "--color", desc: "Farbige Ausgabe" },
      ],
      examples: [
        { label: "Alle Kernel-Meldungen", code: "dmesg" },
        { label: "Lesbar mit Timestamps", code: "dmesg -T | less" },
        { label: "Nur Fehler", code: "dmesg -l err" },
        { label: "Hardware-Ereignisse live", code: "dmesg -w" },
        { label: "USB-Gerät gefunden?", code: "dmesg | grep -i usb" },
      ]
    },
    {
      cmd: "lspci",
      desc: "Listet alle PCI-Geräte auf (Grafikkarten, Netzwerkkarten, Controller...).",
      syntax: "lspci [OPTIONEN]",
      level: "basic",
      tags: ["hardware", "pci"],
      options: [
        { flag: "-v", desc: "Ausführliche Info" },
        { flag: "-vv", desc: "Sehr ausführlich" },
        { flag: "-k", desc: "Treiber anzeigen" },
        { flag: "-nn", desc: "Vendor- und Device-IDs" },
      ],
      examples: [
        { label: "Alle PCI-Geräte", code: "lspci" },
        { label: "Grafikkarte", code: "lspci | grep -i vga" },
        { label: "Mit Treiber", code: "lspci -k | grep -A 3 'Network'" },
      ]
    },
    {
      cmd: "lsusb",
      desc: "Listet alle angeschlossenen USB-Geräte und ihre Eigenschaften auf.",
      syntax: "lsusb [OPTIONEN]",
      level: "basic",
      tags: ["hardware", "usb"],
      options: [
        { flag: "-v", desc: "Ausführlich" },
        { flag: "-t", desc: "Baumstruktur der USB-Topologie" },
        { flag: "-d VENDOR:PRODUCT", desc: "Bestimmtes Gerät" },
      ],
      examples: [
        { label: "Alle USB-Geräte", code: "lsusb" },
        { label: "USB-Baum", code: "lsusb -t" },
      ]
    },
  ],

  // ─────────────────────────────────────────────
  //  10. DIENSTE & SYSTEMD
  // ─────────────────────────────────────────────
  dienste: [
    {
      cmd: "systemctl",
      desc: "Steuert den systemd-Init-Prozess und Systemdienste — das zentrale Verwaltungswerkzeug.",
      syntax: "systemctl [BEFEHL] [DIENST]",
      level: "medium",
      tags: ["systemd", "dienste", "admin"],
      options: [
        { flag: "start DIENST", desc: "Dienst starten" },
        { flag: "stop DIENST", desc: "Dienst stoppen" },
        { flag: "restart DIENST", desc: "Dienst neu starten" },
        { flag: "reload DIENST", desc: "Konfiguration neu laden (ohne Neustart)" },
        { flag: "enable DIENST", desc: "Autostart beim Booten aktivieren" },
        { flag: "disable DIENST", desc: "Autostart deaktivieren" },
        { flag: "status DIENST", desc: "Status und letzte Logs anzeigen" },
        { flag: "is-active DIENST", desc: "Nur prüfen ob aktiv (für Scripts)" },
        { flag: "list-units", desc: "Alle aktiven Units auflisten" },
        { flag: "daemon-reload", desc: "Systemd-Konfiguration neu einlesen" }
      ],
      examples: [
        { label: "Dienst starten", code: "systemctl start nginx" },
        { label: "Dienststatus prüfen", code: "systemctl status nginx" },
        { label: "Dienst aktivieren", code: "systemctl enable nginx" }
      ]
    },
  ],
  ssh: [
  {
    cmd: "ssh",
    desc: "Stellt eine sichere Verbindung zu einem Remote-Server her (Secure Shell).",
    syntax: "ssh [OPTIONEN] BENUTZER@HOST",
    level: "basic",
    tags: ["remote", "login", "sicherheit"],
    options: [
      { flag: "-p PORT", desc: "Verbindet über einen bestimmten Port" },
      { flag: "-i KEY", desc: "Privaten SSH-Key verwenden" },
      { flag: "-X", desc: "X11-Forwarding aktivieren (GUI weiterleiten)" },
      { flag: "-L", desc: "Lokales Port-Forwarding" },
      { flag: "-v", desc: "Verbose (Debug-Ausgabe)" },
    ],
    examples: [
      { label: "Verbindung herstellen", code: "ssh user@192.168.1.10" },
      { label: "Mit Key verbinden", code: "ssh -i ~/.ssh/id_rsa user@server" },
      { label: "Mit Port 2222", code: "ssh -p 2222 user@server" },
    ]
  },
  {
    cmd: "scp",
    desc: "Kopiert Dateien sicher zwischen lokalem und Remote-System.",
    syntax: "scp [OPTIONEN] QUELLE ZIEL",
    level: "basic",
    tags: ["transfer", "dateien"],
    options: [
      { flag: "-r", desc: "Rekursiv für Verzeichnisse" },
      { flag: "-P PORT", desc: "SSH-Port angeben" },
      { flag: "-i KEY", desc: "SSH-Key verwenden" },
      { flag: "-v", desc: "Verbose-Modus" },
    ],
    examples: [
      { label: "Datei hochladen", code: "scp file.txt user@server:/home/user/" },
      { label: "Datei herunterladen", code: "scp user@server:/home/user/file.txt ." },
      { label: "Ordner kopieren", code: "scp -r projekt/ user@server:/var/www/" },
    ]
  },
  {
    cmd: "sftp",
    desc: "Interaktiver Datei-Transfer über SSH (ähnlich wie FTP, aber sicher).",
    syntax: "sftp [OPTIONEN] BENUTZER@HOST",
    level: "basic",
    tags: ["transfer", "ftp"],
    options: [
      { flag: "-P PORT", desc: "Port angeben" },
      { flag: "-i KEY", desc: "SSH-Key verwenden" },
    ],
    examples: [
      { label: "Verbindung starten", code: "sftp user@server" },
      { label: "Datei hochladen", code: "put file.txt" },
      { label: "Datei herunterladen", code: "get file.txt" },
    ]
  },
  {
    cmd: "rsync",
    desc: "Synchronisiert Dateien effizient zwischen Systemen (lokal oder remote).",
    syntax: "rsync [OPTIONEN] QUELLE ZIEL",
    level: "medium",
    tags: ["backup", "sync"],
    options: [
      { flag: "-a", desc: "Archivmodus (alles behalten)" },
      { flag: "-v", desc: "Verbose" },
      { flag: "-z", desc: "Komprimieren" },
      { flag: "--delete", desc: "Löscht im Ziel, was in Quelle fehlt" },
    ],
    examples: [
      { label: "Backup erstellen", code: "rsync -av /home/user/ /backup/" },
      { label: "Remote sync", code: "rsync -avz /var/www user@server:/var/www" },
    ]
  },
  {
    cmd: "ssh-keygen",
    desc: "Erstellt ein SSH-Schlüsselpaar für sichere Authentifizierung.",
    syntax: "ssh-keygen [OPTIONEN]",
    level: "basic",
    tags: ["ssh", "keys", "sicherheit"],
    options: [
      { flag: "-t TYPE", desc: "Schlüsseltyp (rsa, ed25519)" },
      { flag: "-b BITS", desc: "Schlüssellänge" },
      { flag: "-f FILE", desc: "Dateiname des Keys" },
    ],
    examples: [
      { label: "Standard-Key erstellen", code: "ssh-keygen" },
      { label: "Ed25519 Key", code: "ssh-keygen -t ed25519" },
    ]
  },
],
bash: [
  {
    cmd: "echo",
    desc: "Gibt Text oder Variablen auf der Konsole aus.",
    syntax: "echo [OPTIONEN] TEXT",
    level: "basic",
    tags: ["output", "debug"],
    options: [
      { flag: "-n", desc: "Kein Zeilenumbruch am Ende" },
      { flag: "-e", desc: "Escape-Sequenzen interpretieren (\\n, \\t)" },
    ],
    examples: [
      { label: "Text ausgeben", code: "echo Hallo Welt" },
      { label: "Neue Zeile", code: "echo -e \"Hallo\\nWelt\"" },
    ]
  },
  {
    cmd: "read",
    desc: "Liest Benutzereingaben aus der Konsole.",
    syntax: "read VARIABLE",
    level: "basic",
    tags: ["input", "user"],
    options: [
      { flag: "-p", desc: "Prompt anzeigen" },
      { flag: "-s", desc: "Eingabe verstecken (z.B. Passwort)" },
    ],
    examples: [
      { label: "Eingabe lesen", code: "read name" },
      { label: "Mit Prompt", code: "read -p \"Name: \" name" },
    ]
  },
  {
    cmd: "export",
    desc: "Setzt Umgebungsvariablen für die aktuelle Shell und Unterprozesse.",
    syntax: "export VARIABLE=WERT",
    level: "basic",
    tags: ["env", "variablen"],
    options: [],
    examples: [
      { label: "Variable setzen", code: "export PATH=$PATH:/opt/bin" },
      { label: "Eigene Variable", code: "export NAME=Anna" },
    ]
  },
  {
    cmd: "alias",
    desc: "Erstellt Kurzbefehle für längere Kommandos.",
    syntax: "alias NAME='BEFEHL'",
    level: "basic",
    tags: ["shortcut", "shell"],
    options: [],
    examples: [
      { label: "Alias erstellen", code: "alias ll='ls -lah'" },
      { label: "Alias anzeigen", code: "alias" },
    ]
  },
  {
    cmd: "history",
    desc: "Zeigt die zuletzt ausgeführten Befehle an.",
    syntax: "history",
    level: "basic",
    tags: ["debug", "commands"],
    options: [
      { flag: "-c", desc: "History löschen" },
    ],
    examples: [
      { label: "History anzeigen", code: "history" },
      { label: "Bestimmten Befehl suchen", code: "history | grep ssh" },
    ]
  },
  {
    cmd: "chmod +x",
    desc: "Macht ein Script ausführbar.",
    syntax: "chmod +x script.sh",
    level: "basic",
    tags: ["script", "rechte"],
    options: [],
    examples: [
      { label: "Script ausführbar machen", code: "chmod +x script.sh" },
    ]
  },
  {
    cmd: "./script.sh",
    desc: "Führt ein Script im aktuellen Verzeichnis aus.",
    syntax: "./script.sh",
    level: "basic",
    tags: ["script", "execute"],
    options: [],
    examples: [
      { label: "Script starten", code: "./script.sh" },
    ]
  },
  {
    cmd: "if",
    desc: "Bedingte Ausführung in Bash-Skripten.",
    syntax: "if [ BEDINGUNG ]; then ... fi",
    level: "medium",
    tags: ["logik", "bedingungen"],
    options: [],
    examples: [
      { label: "Einfaches if", code: "if [ $x -eq 1 ]; then echo ok; fi" },
    ]
  },
  {
    cmd: "for",
    desc: "Schleife für wiederholte Ausführung.",
    syntax: "for VAR in LISTE; do ... done",
    level: "medium",
    tags: ["loop", "iteration"],
    options: [],
    examples: [
      { label: "Schleife", code: "for i in 1 2 3; do echo $i; done" },
    ]
  },
],
};