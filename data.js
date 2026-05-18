// ============================================================
//  LINUX HANDBUCH — Command Database (data.js)
// ============================================================

const COMMANDS = {

  dateisystem: [
    { cmd: "ls", desc: "Listet den Inhalt eines Verzeichnisses auf.", syntax: "ls [OPTIONEN] [PFAD]", level: "basic", tags: ["navigation","verzeichnis"],
      options: [{ flag: "-l", desc: "Lange Ausgabe mit Rechten, Eigentümer, Grösse und Datum" },{ flag: "-a", desc: "Alle Dateien inkl. versteckte (beginnen mit .)" },{ flag: "-h", desc: "Menschenlesbare Dateigrössen (KB, MB, GB)" },{ flag: "-R", desc: "Rekursiv alle Unterverzeichnisse" },{ flag: "-t", desc: "Nach Änderungsdatum sortieren (neueste zuerst)" },{ flag: "-S", desc: "Nach Dateigrösse sortieren (grösste zuerst)" }],
      examples: [{ label: "Einfache Auflistung", code: "ls" },{ label: "Detailliert mit versteckten Dateien", code: "ls -lah" },{ label: "Sortiert nach Datum", code: "ls -lt /var/log" },{ label: "Nur Verzeichnisse", code: "ls -d */" }],
      notes: "Tipp: `ls -la` kombiniert lange Ausgabe + versteckte Dateien — der am häufigsten genutzte Alias." },

    { cmd: "cd", desc: "Wechselt das aktuelle Arbeitsverzeichnis (Change Directory).", syntax: "cd [PFAD]", level: "basic", tags: ["navigation","verzeichnis"],
      options: [{ flag: "~", desc: "Wechsel ins Home-Verzeichnis" },{ flag: "..", desc: "Wechsel ins übergeordnete Verzeichnis" },{ flag: "-", desc: "Wechsel ins zuletzt besuchte Verzeichnis" }],
      examples: [{ label: "Ins Home-Verzeichnis", code: "cd ~" },{ label: "Ins übergeordnete Verzeichnis", code: "cd .." },{ label: "Zum letzten Verzeichnis", code: "cd -" },{ label: "Bestimmter Pfad", code: "cd /etc/nginx" }] },

    { cmd: "pwd", desc: "Gibt das aktuelle Arbeitsverzeichnis aus (Print Working Directory).", syntax: "pwd [OPTIONEN]", level: "basic", tags: ["navigation","info"],
      options: [{ flag: "-L", desc: "Logischer Pfad (Standard, folgt Symlinks)" },{ flag: "-P", desc: "Physischer Pfad (löst Symlinks auf)" }],
      examples: [{ label: "Aktuellen Pfad anzeigen", code: "pwd" },{ label: "Physischer Pfad", code: "pwd -P" }] },

    { cmd: "mkdir", desc: "Erstellt ein oder mehrere neue Verzeichnisse.", syntax: "mkdir [OPTIONEN] VERZEICHNIS...", level: "basic", tags: ["erstellen","verzeichnis"],
      options: [{ flag: "-p", desc: "Erstellt auch übergeordnete Verzeichnisse falls nötig" },{ flag: "-m", desc: "Setzt Berechtigungen direkt (z.B. -m 755)" },{ flag: "-v", desc: "Zeigt was erstellt wurde (verbose)" }],
      examples: [{ label: "Einfaches Verzeichnis", code: "mkdir projektordner" },{ label: "Verschachtelte Verzeichnisse", code: "mkdir -p /opt/app/config/logs" },{ label: "Mit Berechtigungen", code: "mkdir -m 750 /srv/secret" }] },

    { cmd: "rm", desc: "Löscht Dateien und Verzeichnisse. ACHTUNG: Kein Papierkorb!", syntax: "rm [OPTIONEN] DATEI...", level: "basic", tags: ["löschen","dateien"],
      options: [{ flag: "-r", desc: "Rekursiv — löscht Verzeichnisse und Inhalt" },{ flag: "-f", desc: "Erzwungen — kein Nachfragen" },{ flag: "-i", desc: "Interaktiv — fragt vor jeder Löschung" },{ flag: "-v", desc: "Zeigt jede gelöschte Datei" }],
      examples: [{ label: "Einzelne Datei löschen", code: "rm datei.txt" },{ label: "Verzeichnis mit Inhalt", code: "rm -rf /tmp/testordner" },{ label: "Mit Bestätigung", code: "rm -ri wichtiger_ordner" }],
      notes: "⚠️ GEFAHR: `rm -rf /` kann das gesamte System zerstören! Immer doppelt prüfen." },

    { cmd: "cp", desc: "Kopiert Dateien und Verzeichnisse von einem Ort zum anderen.", syntax: "cp [OPTIONEN] QUELLE ZIEL", level: "basic", tags: ["kopieren","dateien"],
      options: [{ flag: "-r", desc: "Rekursiv — kopiert Verzeichnisse komplett" },{ flag: "-p", desc: "Bewahrt Zeitstempel, Berechtigungen und Eigentümer" },{ flag: "-u", desc: "Nur kopieren wenn Quelle neuer (update)" },{ flag: "-v", desc: "Zeigt jede kopierte Datei" },{ flag: "-a", desc: "Archivmodus: -dpR (für Backups ideal)" }],
      examples: [{ label: "Datei kopieren", code: "cp datei.txt backup.txt" },{ label: "Verzeichnis kopieren", code: "cp -r /etc/nginx /backup/nginx" },{ label: "Rechte beibehalten", code: "cp -ap /var/www /backup/" }] },

    { cmd: "mv", desc: "Verschiebt oder benennt Dateien und Verzeichnisse um.", syntax: "mv [OPTIONEN] QUELLE ZIEL", level: "basic", tags: ["verschieben","umbenennen"],
      options: [{ flag: "-i", desc: "Fragt bevor überschrieben wird" },{ flag: "-f", desc: "Erzwungen — kein Nachfragen" },{ flag: "-v", desc: "Zeigt was verschoben wird" }],
      examples: [{ label: "Datei umbenennen", code: "mv alt.txt neu.txt" },{ label: "In Verzeichnis verschieben", code: "mv report.pdf /home/user/dokumente/" },{ label: "Mehrere Dateien", code: "mv *.jpg /bilder/" }] },

    { cmd: "find", desc: "Sucht Dateien und Verzeichnisse nach Kriterien im Dateisystem.", syntax: "find [PFAD] [BEDINGUNGEN]", level: "medium", tags: ["suchen","dateien","filter"],
      options: [{ flag: "-name", desc: "Nach Name suchen (Wildcards möglich)" },{ flag: "-iname", desc: "Case-insensitive Namenssuche" },{ flag: "-type f", desc: "Nur reguläre Dateien" },{ flag: "-type d", desc: "Nur Verzeichnisse" },{ flag: "-mtime -N", desc: "Geändert in letzten N Tagen" },{ flag: "-size +NM", desc: "Grösser als N Megabyte" },{ flag: "-exec CMD {} \\;", desc: "Aktion für jede gefundene Datei" }],
      examples: [{ label: "Alle .txt Dateien", code: "find /home -name '*.txt'" },{ label: "Leere Dateien", code: "find . -type f -empty" },{ label: "Dateien älter als 30 Tage", code: "find /tmp -mtime +30 -delete" },{ label: "Grösser als 100MB", code: "find / -size +100M -type f" }] },

    { cmd: "ln", desc: "Erstellt Hardlinks oder symbolische Links zwischen Dateien.", syntax: "ln [OPTIONEN] ZIEL LINKNAME", level: "medium", tags: ["links","symlinks"],
      options: [{ flag: "-s", desc: "Symbolischen Link erstellen" },{ flag: "-f", desc: "Existierende Links überschreiben" },{ flag: "-v", desc: "Zeigt was verlinkt wird" }],
      examples: [{ label: "Symbolischen Link erstellen", code: "ln -s /opt/app/bin/app /usr/local/bin/app" },{ label: "Hardlink erstellen", code: "ln original.txt hardlink.txt" },{ label: "Symlink prüfen", code: "readlink -f /etc/alternatives/python" }] },

    { cmd: "du", desc: "Zeigt den Speicherplatzbedarf von Dateien und Verzeichnissen (Disk Usage).", syntax: "du [OPTIONEN] [PFAD]", level: "basic", tags: ["speicher","analyse"],
      options: [{ flag: "-h", desc: "Menschenlesbare Grössen" },{ flag: "-s", desc: "Nur Gesamtsumme" },{ flag: "-a", desc: "Alle Dateien, nicht nur Verzeichnisse" },{ flag: "--max-depth=N", desc: "Nur bis Tiefe N" }],
      examples: [{ label: "Verzeichnisgrösse", code: "du -sh /var/log" },{ label: "Grösste Verzeichnisse", code: "du -h --max-depth=1 / | sort -rh | head -20" }] },

    { cmd: "df", desc: "Zeigt freien und belegten Speicherplatz aller Dateisysteme (Disk Free).", syntax: "df [OPTIONEN]", level: "basic", tags: ["speicher","festplatte"],
      options: [{ flag: "-h", desc: "Menschenlesbare Grössen" },{ flag: "-T", desc: "Dateisystemtyp anzeigen" },{ flag: "-i", desc: "Inode-Nutzung" }],
      examples: [{ label: "Alle Dateisysteme", code: "df -h" },{ label: "Mit Typ", code: "df -hT" },{ label: "Nur echte Datenträger", code: "df -hT | grep -v tmpfs" }] },

    { cmd: "touch", desc: "Erstellt leere Dateien oder aktualisiert den Zeitstempel bestehender Dateien.", syntax: "touch [OPTIONEN] DATEI...", level: "basic", tags: ["erstellen","dateien"],
      options: [{ flag: "-t STAMP", desc: "Timestamp manuell setzen" },{ flag: "-c", desc: "Keine neue Datei wenn nicht vorhanden" }],
      examples: [{ label: "Leere Datei erstellen", code: "touch neue_datei.txt" },{ label: "Mehrere Dateien", code: "touch datei1.txt datei2.txt datei3.txt" }] },

    { cmd: "file", desc: "Bestimmt den Dateityp anhand des Inhalts (nicht der Endung).", syntax: "file [OPTIONEN] DATEI...", level: "basic", tags: ["info","dateityp"],
      options: [{ flag: "-i", desc: "MIME-Typ ausgeben" },{ flag: "-b", desc: "Nur Typ, kein Dateiname" }],
      examples: [{ label: "Dateityp prüfen", code: "file /bin/bash" },{ label: "MIME-Typ", code: "file -i bild.jpg" }] },
  ],

  benutzer: [
    { cmd: "useradd", desc: "Erstellt einen neuen Benutzer im System.", syntax: "useradd [OPTIONEN] BENUTZERNAME", level: "medium", tags: ["benutzer","admin"],
      options: [{ flag: "-m", desc: "Home-Verzeichnis automatisch erstellen" },{ flag: "-s SHELL", desc: "Standard-Shell setzen" },{ flag: "-G GRUPPE", desc: "Sekundäre Gruppen" },{ flag: "-c KOMMENTAR", desc: "Vollständiger Name" }],
      examples: [{ label: "Benutzer mit Home", code: "useradd -m -s /bin/bash anna" },{ label: "Mit Gruppen", code: "useradd -m -G sudo,www-data -c 'Anna Muster' anna" },{ label: "System-Benutzer", code: "useradd -r -s /usr/sbin/nologin nginx" }] },

    { cmd: "usermod", desc: "Ändert Eigenschaften eines bestehenden Benutzerkontos.", syntax: "usermod [OPTIONEN] BENUTZERNAME", level: "medium", tags: ["benutzer","admin"],
      options: [{ flag: "-aG GRUPPE", desc: "Zu Gruppe hinzufügen (nicht ersetzen!)" },{ flag: "-s SHELL", desc: "Shell ändern" },{ flag: "-L", desc: "Konto sperren" },{ flag: "-U", desc: "Konto entsperren" }],
      examples: [{ label: "Zu sudo-Gruppe", code: "usermod -aG sudo anna" },{ label: "Konto sperren", code: "usermod -L anna" },{ label: "Shell ändern", code: "usermod -s /bin/zsh anna" }] },

    { cmd: "userdel", desc: "Löscht einen Benutzerzugang aus dem System.", syntax: "userdel [OPTIONEN] BENUTZERNAME", level: "medium", tags: ["benutzer","admin"],
      options: [{ flag: "-r", desc: "Home-Verzeichnis mitlöschen" },{ flag: "-f", desc: "Erzwungen (auch wenn angemeldet)" }],
      examples: [{ label: "Benutzer löschen (Home bleibt)", code: "userdel anna" },{ label: "Mit Home-Verzeichnis", code: "userdel -r anna" }] },

    { cmd: "passwd", desc: "Setzt oder ändert das Passwort eines Benutzers.", syntax: "passwd [OPTIONEN] [BENUTZERNAME]", level: "basic", tags: ["passwort","sicherheit"],
      options: [{ flag: "-l", desc: "Passwort sperren" },{ flag: "-u", desc: "Passwort entsperren" },{ flag: "-e", desc: "Sofort ablaufen lassen" },{ flag: "-x TAGE", desc: "Maximale Gültigkeit in Tagen" }],
      examples: [{ label: "Eigenes Passwort ändern", code: "passwd" },{ label: "Passwort für Benutzer (root)", code: "passwd anna" },{ label: "Ablaufen lassen", code: "passwd -e anna" }] },

    { cmd: "groupadd", desc: "Erstellt eine neue Benutzergruppe.", syntax: "groupadd [OPTIONEN] GRUPPENNAME", level: "medium", tags: ["gruppen","admin"],
      options: [{ flag: "-g GID", desc: "Manuelle GID vergeben" },{ flag: "-r", desc: "System-Gruppe erstellen" }],
      examples: [{ label: "Gruppe erstellen", code: "groupadd entwickler" },{ label: "Mit GID", code: "groupadd -g 2000 projektteam" }] },

    { cmd: "id", desc: "Zeigt UID, GID und Gruppen des aktuellen oder angegebenen Benutzers.", syntax: "id [BENUTZERNAME]", level: "basic", tags: ["info","benutzer"],
      options: [{ flag: "-u", desc: "Nur UID" },{ flag: "-g", desc: "Nur primäre GID" },{ flag: "-G", desc: "Alle Gruppen-IDs" }],
      examples: [{ label: "Eigene IDs", code: "id" },{ label: "Eines Benutzers", code: "id anna" }] },

    { cmd: "whoami", desc: "Gibt den Namen des aktuell angemeldeten Benutzers aus.", syntax: "whoami", level: "basic", tags: ["info","benutzer"],
      options: [], examples: [{ label: "Wer bin ich?", code: "whoami" }] },

    { cmd: "who", desc: "Zeigt alle aktuell angemeldeten Benutzer.", syntax: "who [OPTIONEN]", level: "basic", tags: ["info","session"],
      options: [{ flag: "-a", desc: "Alle Informationen" },{ flag: "-b", desc: "Letzten Systemstart" }],
      examples: [{ label: "Angemeldete Benutzer", code: "who" },{ label: "Mit letztem Boot", code: "who -b" }] },

    { cmd: "sudo", desc: "Führt Befehle mit Root-Rechten aus (SuperUser DO).", syntax: "sudo [OPTIONEN] BEFEHL", level: "basic", tags: ["rechte","admin"],
      options: [{ flag: "-i", desc: "Interaktive Root-Shell" },{ flag: "-u USER", desc: "Als bestimmten Benutzer ausführen" },{ flag: "-l", desc: "Erlaubte sudo-Befehle auflisten" }],
      examples: [{ label: "Paketliste aktualisieren", code: "sudo apt update" },{ label: "Root-Shell", code: "sudo -i" },{ label: "Rechte prüfen", code: "sudo -l" }] },

    { cmd: "last", desc: "Zeigt die letzten Anmeldungen und Reboots des Systems.", syntax: "last [OPTIONEN]", level: "basic", tags: ["log","sicherheit"],
      options: [{ flag: "-n N", desc: "Letzte N Einträge" },{ flag: "-F", desc: "Vollständige Datumsangaben" }],
      examples: [{ label: "Letzte Logins", code: "last" },{ label: "Fehlgeschlagene Logins", code: "lastb" }] },
  ],

  berechtigungen: [
    { cmd: "chmod", desc: "Ändert Zugriffsberechtigungen (Lesen/Schreiben/Ausführen) von Dateien.", syntax: "chmod [OPTIONEN] MODUS DATEI...", level: "medium", tags: ["rechte","sicherheit"],
      options: [{ flag: "-R", desc: "Rekursiv anwenden" },{ flag: "u/g/o/a", desc: "user/group/others/all" },{ flag: "+/-/=", desc: "Rechte hinzufügen/entfernen/setzen" }],
      examples: [{ label: "Script ausführbar", code: "chmod +x script.sh" },{ label: "755 setzen", code: "chmod 755 /usr/local/bin/tool" },{ label: "SSH-Key schützen", code: "chmod 600 ~/.ssh/id_rsa" },{ label: "Rekursiv Webverzeichnis", code: "chmod -R 755 /var/www/html" }],
      notes: "Oktal: 4=Lesen, 2=Schreiben, 1=Ausführen. 755=rwxr-xr-x, 644=rw-r--r--, 600=rw-------" },

    { cmd: "chown", desc: "Ändert Eigentümer und/oder Gruppe einer Datei.", syntax: "chown [OPTIONEN] [EIGENTÜMER][:GRUPPE] DATEI...", level: "medium", tags: ["rechte","eigentümer"],
      options: [{ flag: "-R", desc: "Rekursiv anwenden" },{ flag: "-v", desc: "Zeigt jede Änderung" }],
      examples: [{ label: "Eigentümer ändern", code: "chown anna datei.txt" },{ label: "Eigentümer und Gruppe", code: "chown anna:entwickler projekt/" },{ label: "Webroot", code: "chown -R www-data:www-data /var/www/" }] },

    { cmd: "umask", desc: "Setzt die Standard-Berechtigungsmaske für neue Dateien.", syntax: "umask [MODUS]", level: "medium", tags: ["rechte","standard"],
      options: [],
      examples: [{ label: "Aktuelle Maske", code: "umask" },{ label: "Symbolisch", code: "umask -S" },{ label: "Maske setzen", code: "umask 022" }],
      notes: "umask 022: neue Dateien erhalten 644, Verzeichnisse 755." },

    { cmd: "getfacl / setfacl", desc: "Liest und setzt erweiterte Zugriffsrechte (ACL) für einzelne Benutzer/Gruppen.", syntax: "getfacl DATEI / setfacl -m u:USER:RECHTE DATEI", level: "advanced", tags: ["rechte","acl"],
      options: [{ flag: "-m", desc: "ACL-Eintrag hinzufügen/ändern" },{ flag: "-x", desc: "ACL-Eintrag entfernen" },{ flag: "-R", desc: "Rekursiv" }],
      examples: [{ label: "ACL anzeigen", code: "getfacl /var/www/html" },{ label: "Benutzer Leserecht", code: "setfacl -m u:anna:r /var/log/app.log" },{ label: "Gruppe Schreibrecht", code: "setfacl -m g:entwickler:rw /srv/projekt" }] },
  ],

  prozesse: [
    { cmd: "ps", desc: "Zeigt aktuell laufende Prozesse und deren Eigenschaften.", syntax: "ps [OPTIONEN]", level: "basic", tags: ["prozesse","monitoring"],
      options: [{ flag: "aux", desc: "Alle Prozesse aller Benutzer" },{ flag: "--forest", desc: "Prozessbaum anzeigen" },{ flag: "-o FORMAT", desc: "Eigene Ausgabefelder" }],
      examples: [{ label: "Alle Prozesse", code: "ps aux" },{ label: "Prozessbaum", code: "ps aux --forest" },{ label: "Nginx-Prozesse", code: "ps aux | grep nginx" },{ label: "Top CPU-Verbrauch", code: "ps aux --sort=-%cpu | head -10" }] },

    { cmd: "top", desc: "Interaktiver Prozessmonitor mit Echtzeit-Systemauslastung.", syntax: "top [OPTIONEN]", level: "basic", tags: ["monitoring","echtzeit"],
      options: [{ flag: "-u USER", desc: "Nur Prozesse eines Benutzers" },{ flag: "-d N", desc: "Aktualisierungsintervall" },{ flag: "-b -n N", desc: "Batch-Modus für Scripts" }],
      examples: [{ label: "top starten", code: "top" },{ label: "Nur Benutzer anna", code: "top -u anna" }],
      notes: "Tasten: q=Beenden, k=Kill, M=nach RAM, P=nach CPU, 1=Kerne einzeln" },

    { cmd: "htop", desc: "Verbesserter Prozessmonitor mit Farben und Mausunterstützung.", syntax: "htop [OPTIONEN]", level: "basic", tags: ["monitoring","echtzeit"],
      options: [{ flag: "-u USER", desc: "Nur Prozesse eines Benutzers" },{ flag: "-t", desc: "Prozessbaum-Ansicht" }],
      examples: [{ label: "htop starten", code: "htop" },{ label: "Installation", code: "sudo apt install htop" }] },

    { cmd: "kill", desc: "Sendet ein Signal an einen Prozess. Verwendet die PID.", syntax: "kill [SIGNAL] PID...", level: "basic", tags: ["prozesse","beenden"],
      options: [{ flag: "-9 / -KILL", desc: "Sofort erzwingen (kann nicht ignoriert werden)" },{ flag: "-15 / -TERM", desc: "Höflich beenden (Standard)" },{ flag: "-1 / -HUP", desc: "Prozess neu laden" },{ flag: "-l", desc: "Alle Signale auflisten" }],
      examples: [{ label: "Beenden", code: "kill 1234" },{ label: "Erzwingen", code: "kill -9 1234" },{ label: "Neu laden", code: "kill -HUP $(cat /var/run/nginx.pid)" }] },

    { cmd: "nohup", desc: "Führt einen Befehl aus, der nach dem Ausloggen weiterläuft.", syntax: "nohup BEFEHL [ARGS] &", level: "medium", tags: ["background","persistent"],
      options: [],
      examples: [{ label: "Script permanent im Hintergrund", code: "nohup ./myscript.sh &" },{ label: "Mit eigener Logdatei", code: "nohup python3 app.py > app.log 2>&1 &" }],
      notes: "Das & sendet den Prozess in den Hintergrund. Ausgabe → nohup.out" },

    { cmd: "crontab", desc: "Verwaltet wiederkehrende geplante Aufgaben (Cron-Jobs).", syntax: "crontab [OPTIONEN]", level: "medium", tags: ["automatisierung","zeitplan"],
      options: [{ flag: "-e", desc: "Crontab im Editor öffnen" },{ flag: "-l", desc: "Aktuelle Crontab anzeigen" },{ flag: "-r", desc: "Crontab löschen" }],
      examples: [{ label: "Crontab bearbeiten", code: "crontab -e" },{ label: "Täglich um 2:30 Uhr", code: "30 2 * * * /usr/local/bin/backup.sh" },{ label: "Jede Stunde", code: "0 * * * * /usr/local/bin/check.sh" }],
      notes: "Syntax: Minute Stunde Tag Monat Wochentag Befehl" },
  ],

  netzwerk: [
    { cmd: "ip", desc: "Modernes Netzwerkkonfigurationstool (ersetzt ifconfig).", syntax: "ip [OBJEKT] [BEFEHL]", level: "medium", tags: ["netzwerk","konfiguration"],
      options: [{ flag: "addr", desc: "IP-Adressen anzeigen/konfigurieren" },{ flag: "link", desc: "Interfaces anzeigen/steuern" },{ flag: "route", desc: "Routing-Tabelle" }],
      examples: [{ label: "Alle IPs anzeigen", code: "ip addr show" },{ label: "Kompakt", code: "ip -c a" },{ label: "Routing-Tabelle", code: "ip route show" },{ label: "IP setzen", code: "ip addr add 192.168.1.100/24 dev eth0" }] },

    { cmd: "ping", desc: "Testet die Erreichbarkeit eines Hosts via ICMP.", syntax: "ping [OPTIONEN] HOST", level: "basic", tags: ["diagnose","verbindung"],
      options: [{ flag: "-c N", desc: "Nur N Pakete senden" },{ flag: "-i N", desc: "Intervall in Sekunden" },{ flag: "-6", desc: "IPv6 verwenden" }],
      examples: [{ label: "Host anpingen", code: "ping google.com" },{ label: "Nur 4 Pakete", code: "ping -c 4 192.168.1.1" }] },

    { cmd: "ss", desc: "Zeigt Netzwerk-Socket-Informationen (ersetzt netstat).", syntax: "ss [OPTIONEN]", level: "medium", tags: ["netzwerk","ports"],
      options: [{ flag: "-t", desc: "TCP-Verbindungen" },{ flag: "-l", desc: "Lauschende Sockets" },{ flag: "-n", desc: "Numerische Adressen" },{ flag: "-p", desc: "Prozess anzeigen" }],
      examples: [{ label: "Lauschende Ports", code: "ss -tlnp" },{ label: "Wer nutzt Port 80?", code: "ss -tlnp | grep :80" }] },

    { cmd: "curl", desc: "Überträgt Daten zu/von Servern. Unterstützt HTTP, HTTPS, FTP und mehr.", syntax: "curl [OPTIONEN] URL", level: "medium", tags: ["http","download","api"],
      options: [{ flag: "-o DATEI", desc: "In Datei speichern" },{ flag: "-L", desc: "Weiterleitungen folgen" },{ flag: "-X METHODE", desc: "HTTP-Methode (GET, POST...)" },{ flag: "-H 'Header'", desc: "HTTP-Header setzen" },{ flag: "-d DATA", desc: "POST-Daten senden" },{ flag: "-s", desc: "Stiller Modus" }],
      examples: [{ label: "Webseite abrufen", code: "curl https://example.com" },{ label: "Datei herunterladen", code: "curl -L -O https://example.com/file.tar.gz" },{ label: "API POST mit JSON", code: "curl -X POST -H 'Content-Type: application/json' -d '{\"name\":\"Anna\"}' https://api.example.com/users" },{ label: "Externe IP", code: "curl -s https://ifconfig.me" }] },

    { cmd: "wget", desc: "Lädt Dateien aus dem Internet herunter. Ideal für nicht-interaktive Downloads.", syntax: "wget [OPTIONEN] URL", level: "basic", tags: ["download","http"],
      options: [{ flag: "-O DATEI", desc: "Unter anderem Namen speichern" },{ flag: "-c", desc: "Unterbrochenen Download fortsetzen" },{ flag: "-q", desc: "Stiller Modus" }],
      examples: [{ label: "Datei herunterladen", code: "wget https://example.com/file.iso" },{ label: "Fortsetzen", code: "wget -c https://example.com/grosse.iso" }] },

    { cmd: "nmap", desc: "Netzwerk-Scanner — entdeckt Hosts und offene Ports.", syntax: "nmap [OPTIONEN] ZIEL", level: "advanced", tags: ["security","scan"],
      options: [{ flag: "-sV", desc: "Dienst-Versionen ermitteln" },{ flag: "-O", desc: "Betriebssystem erkennen" },{ flag: "-p PORTS", desc: "Bestimmte Ports" },{ flag: "-A", desc: "Aggressiv: OS, Versionen, Scripts" }],
      examples: [{ label: "Host scannen", code: "nmap 192.168.1.1" },{ label: "Netzwerk-Scan", code: "nmap 192.168.1.0/24" },{ label: "Mit Service-Erkennung", code: "nmap -sV 192.168.1.100" }],
      notes: "⚠️ Nur auf Systemen scannen für die du Erlaubnis hast!" },

    { cmd: "dig", desc: "DNS-Abfragewerkzeug für A, MX, NS, TXT Records und mehr.", syntax: "dig [TYPE] DOMAIN", level: "medium", tags: ["dns","diagnose"],
      options: [{ flag: "+short", desc: "Nur Ergebnis (kurz)" },{ flag: "@SERVER", desc: "Bestimmten DNS-Server befragen" },{ flag: "-x IP", desc: "Reverse-DNS-Lookup" }],
      examples: [{ label: "A-Record", code: "dig google.com" },{ label: "Nur IP", code: "dig +short google.com" },{ label: "MX-Records", code: "dig MX google.com" },{ label: "Reverse-DNS", code: "dig -x 8.8.8.8" }] },

    { cmd: "iptables", desc: "Firewall-Verwaltung auf Kernel-Ebene (Netfilter).", syntax: "iptables [OPTIONEN] KETTE REGEL", level: "advanced", tags: ["firewall","sicherheit"],
      options: [{ flag: "-L", desc: "Regeln auflisten" },{ flag: "-A KETTE", desc: "Regel anhängen" },{ flag: "-D KETTE", desc: "Regel löschen" },{ flag: "-F", desc: "Alle Regeln löschen (Flush)" }],
      examples: [{ label: "Regeln anzeigen", code: "iptables -L -n -v" },{ label: "SSH erlauben", code: "iptables -A INPUT -p tcp --dport 22 -j ACCEPT" },{ label: "IP blockieren", code: "iptables -A INPUT -s 192.168.1.100 -j DROP" }] },
  ],

  pakete: [
    { cmd: "apt", desc: "Paketverwaltung für Debian/Ubuntu.", syntax: "apt [BEFEHL] [PAKET]", level: "basic", tags: ["debian","ubuntu","pakete"],
      options: [{ flag: "update", desc: "Paketlisten aktualisieren" },{ flag: "upgrade", desc: "Pakete aktualisieren" },{ flag: "install PAKET", desc: "Paket installieren" },{ flag: "remove PAKET", desc: "Paket entfernen" },{ flag: "purge PAKET", desc: "Paket + Konfiguration entfernen" },{ flag: "autoremove", desc: "Verwaiste Pakete entfernen" },{ flag: "search TERM", desc: "Pakete suchen" }],
      examples: [{ label: "System aktualisieren", code: "sudo apt update && sudo apt upgrade -y" },{ label: "Paket installieren", code: "sudo apt install nginx" },{ label: "Vollständig entfernen", code: "sudo apt purge nginx && sudo apt autoremove" }] },

    { cmd: "dpkg", desc: "Niedriges Paketverwaltungssystem für .deb-Dateien.", syntax: "dpkg [OPTIONEN] PAKET", level: "medium", tags: ["debian","deb"],
      options: [{ flag: "-i DATEI.deb", desc: "Lokale .deb installieren" },{ flag: "-l MUSTER", desc: "Pakete auflisten" },{ flag: "-L PAKET", desc: "Dateien eines Pakets" },{ flag: "-S DATEI", desc: "Welches Paket hat diese Datei?" }],
      examples: [{ label: "Lokale .deb installieren", code: "sudo dpkg -i paket.deb" },{ label: "Installierte Pakete", code: "dpkg -l | grep nginx" }] },

    { cmd: "dnf / yum", desc: "Paketverwaltung für RHEL, CentOS, Fedora.", syntax: "dnf [BEFEHL] [PAKET]", level: "basic", tags: ["rhel","centos","fedora"],
      options: [{ flag: "install", desc: "Paket installieren" },{ flag: "remove", desc: "Paket entfernen" },{ flag: "update", desc: "Pakete aktualisieren" },{ flag: "search", desc: "Pakete suchen" }],
      examples: [{ label: "Paket installieren", code: "sudo dnf install httpd" },{ label: "System aktualisieren", code: "sudo dnf update -y" },{ label: "Dev-Gruppe", code: "sudo dnf groupinstall 'Development Tools'" }] },

    { cmd: "snap", desc: "Universelles Paketformat von Canonical mit Sandbox.", syntax: "snap [BEFEHL] [PAKET]", level: "basic", tags: ["ubuntu","snap"],
      options: [{ flag: "install", desc: "Snap installieren" },{ flag: "remove", desc: "Snap entfernen" },{ flag: "list", desc: "Installierte Snaps" },{ flag: "refresh", desc: "Aktualisieren" }],
      examples: [{ label: "VS Code installieren", code: "sudo snap install code --classic" },{ label: "Alle auflisten", code: "snap list" }] },
  ],

  text: [
    { cmd: "grep", desc: "Sucht nach Mustern (reguläre Ausdrücke) in Dateien oder Eingaben.", syntax: "grep [OPTIONEN] MUSTER [DATEI...]", level: "basic", tags: ["suchen","text","regex"],
      options: [{ flag: "-i", desc: "Gross/Kleinschreibung ignorieren" },{ flag: "-r", desc: "Rekursiv" },{ flag: "-n", desc: "Zeilennummern" },{ flag: "-v", desc: "Invertiert — Zeilen OHNE Muster" },{ flag: "-E", desc: "Erweiterte reguläre Ausdrücke" },{ flag: "-C N", desc: "N Zeilen Kontext" }],
      examples: [{ label: "Fehler in Logs", code: "grep -i 'error' /var/log/syslog" },{ label: "Rekursiv", code: "grep -rn 'TODO' /opt/projekt/" },{ label: "Mehrere Muster", code: "grep -E 'error|warning|critical' /var/log/syslog" }] },

    { cmd: "sed", desc: "Stream Editor — Suchen, Ersetzen, Löschen in Text-Datenströmen.", syntax: "sed [OPTIONEN] 'BEFEHL' [DATEI]", level: "medium", tags: ["text","ersetzen"],
      options: [{ flag: "-i", desc: "Datei direkt bearbeiten" },{ flag: "-n", desc: "Keine Standard-Ausgabe" },{ flag: "-E", desc: "Erweiterte Regex" }],
      examples: [{ label: "Ersetzen", code: "sed 's/alt/neu/g' datei.txt" },{ label: "In Datei ersetzen", code: "sed -i 's/localhost/0.0.0.0/g' config.ini" },{ label: "Kommentare löschen", code: "sed '/^#/d' config.txt" },{ label: "Leerzeilen entfernen", code: "sed '/^$/d' datei.txt" }] },

    { cmd: "awk", desc: "Mächtiges Textwerkzeug für spaltenweise Datenverarbeitung.", syntax: "awk 'PROGRAMM' [DATEI]", level: "medium", tags: ["text","daten"],
      options: [{ flag: "-F TRENNZ", desc: "Feldtrennzeichen setzen" },{ flag: "-v VAR=WERT", desc: "Variable setzen" }],
      examples: [{ label: "Erste Spalte", code: "awk '{print $1}' datei.txt" },{ label: "Benutzernamen aus passwd", code: "awk -F: '{print $1, $3}' /etc/passwd" },{ label: "Summe berechnen", code: "awk '{sum += $3} END {print sum}' daten.csv" }] },

    { cmd: "cat", desc: "Gibt Dateiinhalte aus oder verbindet mehrere Dateien.", syntax: "cat [OPTIONEN] [DATEI...]", level: "basic", tags: ["text","anzeigen"],
      options: [{ flag: "-n", desc: "Zeilennummern" },{ flag: "-A", desc: "Sonderzeichen sichtbar" }],
      examples: [{ label: "Datei anzeigen", code: "cat /etc/hostname" },{ label: "Mit Zeilennummern", code: "cat -n datei.txt" },{ label: "Dateien zusammenführen", code: "cat d1.txt d2.txt > gesamt.txt" }] },

    { cmd: "less", desc: "Pager zum seitenweisen Lesen langer Dateien oder Ausgaben.", syntax: "less [OPTIONEN] [DATEI]", level: "basic", tags: ["text","navigation"],
      options: [{ flag: "-N", desc: "Zeilennummern" },{ flag: "-S", desc: "Lange Zeilen nicht umbrechen" }],
      examples: [{ label: "Datei pagen", code: "less /var/log/syslog" },{ label: "Befehlsausgabe pagen", code: "ps aux | less" }],
      notes: "Tasten: q=Beenden, /=Suchen, n=nächster Treffer, G=Ende, F=folgen (wie tail -f)" },

    { cmd: "tail", desc: "Gibt letzte Zeilen aus. Mit -f für Live-Monitoring von Logfiles.", syntax: "tail [OPTIONEN] [DATEI]", level: "basic", tags: ["text","logs","monitoring"],
      options: [{ flag: "-n N", desc: "Letzte N Zeilen" },{ flag: "-f", desc: "Datei live verfolgen" },{ flag: "-F", desc: "Auch nach Log-Rotation folgen" }],
      examples: [{ label: "Letzte 10 Zeilen", code: "tail /var/log/syslog" },{ label: "Log live", code: "tail -f /var/log/nginx/access.log" },{ label: "Fehler live filtern", code: "tail -f /var/log/nginx/error.log | grep ERROR" }] },

    { cmd: "head", desc: "Gibt die ersten N Zeilen einer Datei aus (Standard: 10).", syntax: "head [OPTIONEN] [DATEI]", level: "basic", tags: ["text","anzeigen"],
      options: [{ flag: "-n N", desc: "N Zeilen ausgeben" }],
      examples: [{ label: "Erste 10 Zeilen", code: "head datei.txt" },{ label: "Erste 30 Zeilen", code: "head -n 30 datei.txt" }] },

    { cmd: "sort", desc: "Sortiert Zeilen alphabetisch, numerisch oder nach Spalten.", syntax: "sort [OPTIONEN] [DATEI]", level: "basic", tags: ["text","sortieren"],
      options: [{ flag: "-r", desc: "Umgekehrte Reihenfolge" },{ flag: "-n", desc: "Numerisch sortieren" },{ flag: "-u", desc: "Duplikate entfernen" },{ flag: "-h", desc: "Menschenlesbare Zahlen (1K, 2M)" }],
      examples: [{ label: "Alphabetisch", code: "sort namen.txt" },{ label: "Duplikate entfernen", code: "sort -u liste.txt" },{ label: "Grösste Dateien", code: "du -sh * | sort -rh" }] },

    { cmd: "wc", desc: "Zählt Zeilen, Wörter und Zeichen in Dateien (Word Count).", syntax: "wc [OPTIONEN] [DATEI]", level: "basic", tags: ["text","statistik"],
      options: [{ flag: "-l", desc: "Nur Zeilen" },{ flag: "-w", desc: "Nur Wörter" },{ flag: "-c", desc: "Nur Bytes" }],
      examples: [{ label: "Alle Statistiken", code: "wc datei.txt" },{ label: "Zeilenzahl", code: "wc -l /etc/passwd" }] },

    { cmd: "diff", desc: "Vergleicht zwei Dateien und zeigt Unterschiede.", syntax: "diff [OPTIONEN] DATEI1 DATEI2", level: "basic", tags: ["vergleichen"],
      options: [{ flag: "-u", desc: "Unified-Format (für Patches)" },{ flag: "-r", desc: "Verzeichnisse vergleichen" },{ flag: "--color", desc: "Farbig" }],
      examples: [{ label: "Zwei Dateien", code: "diff datei1.txt datei2.txt" },{ label: "Patch erstellen", code: "diff -u alt.conf neu.conf > aenderung.patch" }] },

    { cmd: "nano", desc: "Einfacher Terminal-Texteditor mit Hilfsleiste.", syntax: "nano [DATEI]", level: "basic", tags: ["editor"],
      options: [{ flag: "-l", desc: "Zeilennummern" },{ flag: "-B", desc: "Backup vor dem Speichern" }],
      examples: [{ label: "Datei öffnen", code: "nano /etc/hosts" }],
      notes: "Strg+S=Speichern, Strg+X=Beenden, Strg+W=Suchen, Strg+K=Zeile löschen" },

    { cmd: "vim", desc: "Leistungsstarker modaler Texteditor. Steile Lernkurve, extrem produktiv.", syntax: "vim [DATEI]", level: "advanced", tags: ["editor","profi"],
      options: [{ flag: "+N", desc: "Direkt zu Zeile N" },{ flag: "-R", desc: "Read-only" }],
      examples: [{ label: "Datei öffnen", code: "vim /etc/nginx/nginx.conf" }],
      notes: ":w=speichern, :q=beenden, :wq=beides, i=Einfügen, Esc=Normal, /=Suchen, dd=Zeile löschen" },
  ],

  archiv: [
    { cmd: "tar", desc: "Archivierungswerkzeug — fasst Dateien zusammen (mit/ohne Komprimierung).", syntax: "tar [OPTIONEN] [ARCHIV] [DATEIEN]", level: "medium", tags: ["archiv","backup"],
      options: [{ flag: "-c", desc: "Erstellen" },{ flag: "-x", desc: "Entpacken" },{ flag: "-t", desc: "Inhalt anzeigen" },{ flag: "-z", desc: "Gzip (.tar.gz)" },{ flag: "-j", desc: "Bzip2 (.tar.bz2)" },{ flag: "-J", desc: "XZ (.tar.xz)" },{ flag: "-C VERZ", desc: "In Verzeichnis entpacken" }],
      examples: [{ label: "Archiv erstellen", code: "tar -czf backup.tar.gz /home/anna/" },{ label: "Entpacken", code: "tar -xzf backup.tar.gz" },{ label: "In Verzeichnis entpacken", code: "tar -xzf backup.tar.gz -C /tmp/" },{ label: "Inhalt anzeigen", code: "tar -tzf archiv.tar.gz" }],
      notes: "Merkhilfe: czf=create, xzf=extract, tzf=list" },

    { cmd: "zip / unzip", desc: "ZIP-Archive erstellen und entpacken (Windows-kompatibel).", syntax: "zip -r archiv.zip DATEIEN / unzip archiv.zip", level: "basic", tags: ["archiv","zip"],
      options: [{ flag: "-r", desc: "Rekursiv" },{ flag: "-e", desc: "Mit Passwort verschlüsseln" }],
      examples: [{ label: "Verzeichnis zu ZIP", code: "zip -r archiv.zip /opt/projekt/" },{ label: "ZIP entpacken", code: "unzip archiv.zip" },{ label: "Inhalt anzeigen", code: "unzip -l archiv.zip" }] },

    { cmd: "gzip / gunzip", desc: "Komprimiert/dekomprimiert Dateien im gzip-Format (.gz).", syntax: "gzip DATEI / gunzip DATEI.gz", level: "basic", tags: ["komprimierung","gz"],
      options: [{ flag: "-k", desc: "Originaldatei behalten" },{ flag: "-1 bis -9", desc: "Komprimierungsstufe" }],
      examples: [{ label: "Komprimieren", code: "gzip -k datei.txt" },{ label: "Dekomprimieren", code: "gunzip datei.txt.gz" }] },

    { cmd: "rsync", desc: "Synchronisiert Dateien lokal oder über Netzwerk. Überträgt nur Änderungen.", syntax: "rsync [OPTIONEN] QUELLE ZIEL", level: "medium", tags: ["backup","sync","netzwerk"],
      options: [{ flag: "-a", desc: "Archivmodus" },{ flag: "-v", desc: "Verbose" },{ flag: "-z", desc: "Komprimieren" },{ flag: "--delete", desc: "Im Ziel löschen was in Quelle fehlt" },{ flag: "--dry-run", desc: "Nur simulieren" }],
      examples: [{ label: "Lokales Backup", code: "rsync -av /home/anna/ /backup/anna/" },{ label: "Auf Remote-Server", code: "rsync -avz /var/www/ user@server:/var/www/" },{ label: "Erst simulieren", code: "rsync -av --dry-run --delete /quelle/ /ziel/" }] },
  ],

  system: [
    { cmd: "uname", desc: "Zeigt Informationen über Kernel und System.", syntax: "uname [OPTIONEN]", level: "basic", tags: ["info","kernel"],
      options: [{ flag: "-a", desc: "Alle Informationen" },{ flag: "-r", desc: "Kernel-Version" },{ flag: "-m", desc: "Architektur" }],
      examples: [{ label: "Alle Infos", code: "uname -a" },{ label: "Kernel-Version", code: "uname -r" }] },

    { cmd: "free", desc: "Zeigt verfügbaren und belegten RAM und Swap-Speicher.", syntax: "free [OPTIONEN]", level: "basic", tags: ["ram","speicher"],
      options: [{ flag: "-h", desc: "Menschenlesbare Grössen" },{ flag: "-s N", desc: "Alle N Sekunden aktualisieren" }],
      examples: [{ label: "RAM-Übersicht", code: "free -h" },{ label: "Alle 2 Sekunden", code: "free -h -s 2" }] },

    { cmd: "lscpu", desc: "Zeigt detaillierte CPU-Informationen (Kerne, Cache, Virtualisierung).", syntax: "lscpu", level: "basic", tags: ["hardware","cpu"],
      options: [], examples: [{ label: "CPU-Info", code: "lscpu" },{ label: "Anzahl Kerne", code: "lscpu | grep 'CPU(s):'" }] },

    { cmd: "lsblk", desc: "Listet Blockgeräte (Festplatten, SSDs, Partitionen) in Baumstruktur.", syntax: "lsblk [OPTIONEN]", level: "basic", tags: ["hardware","festplatte"],
      options: [{ flag: "-f", desc: "Dateisysteminfo" },{ flag: "-o SPALTEN", desc: "Bestimmte Spalten" }],
      examples: [{ label: "Alle Blockgeräte", code: "lsblk" },{ label: "Mit Dateisystem", code: "lsblk -f" }] },

    { cmd: "dmesg", desc: "Zeigt Kernel-Ringpuffer-Meldungen — Bootmeldungen, Treiberfehler, Hardware.", syntax: "dmesg [OPTIONEN]", level: "medium", tags: ["kernel","logs","hardware"],
      options: [{ flag: "-T", desc: "Zeitstempel lesbar" },{ flag: "-l LEVEL", desc: "Nach Log-Level filtern" },{ flag: "-w", desc: "Live-Modus" }],
      examples: [{ label: "Kernel-Meldungen", code: "dmesg -T | less" },{ label: "Nur Fehler", code: "dmesg -l err" },{ label: "USB-Ereignisse", code: "dmesg | grep -i usb" }] },

    { cmd: "uptime", desc: "Zeigt wie lange das System läuft und die Systemlast.", syntax: "uptime", level: "basic", tags: ["info","performance"],
      options: [{ flag: "-p", desc: "Laufzeit lesbar" },{ flag: "-s", desc: "Zeitpunkt des letzten Starts" }],
      examples: [{ label: "Laufzeit und Load", code: "uptime" },{ label: "Letzter Start", code: "uptime -s" }] },

    { cmd: "lshw", desc: "Zeigt detaillierte Hardware-Informationen (CPU, RAM, Netzwerk, Laufwerke).", syntax: "lshw [OPTIONEN]", level: "medium", tags: ["hardware","info"],
      options: [{ flag: "-short", desc: "Kurze Übersicht" },{ flag: "-class TYPE", desc: "Nur bestimmte Klasse" }],
      examples: [{ label: "Hardware-Übersicht", code: "sudo lshw -short" },{ label: "Netzwerkkarten", code: "sudo lshw -class network" }] },

    { cmd: "lspci / lsusb", desc: "Listet PCI-Geräte (lspci) und USB-Geräte (lsusb) auf.", syntax: "lspci / lsusb [OPTIONEN]", level: "basic", tags: ["hardware","pci","usb"],
      options: [{ flag: "-k", desc: "Treiber anzeigen (lspci)" },{ flag: "-t", desc: "Baumstruktur (lsusb)" }],
      examples: [{ label: "Grafikkarte finden", code: "lspci | grep -i vga" },{ label: "USB-Geräte", code: "lsusb" }] },
  ],

  dienste: [
    { cmd: "systemctl", desc: "Steuert den systemd-Init-Prozess und alle Systemdienste.", syntax: "systemctl [BEFEHL] [DIENST]", level: "medium", tags: ["systemd","dienste","admin"],
      options: [{ flag: "start/stop/restart", desc: "Dienst starten/stoppen/neustarten" },{ flag: "enable/disable", desc: "Autostart aktivieren/deaktivieren" },{ flag: "status", desc: "Status und letzte Logs" },{ flag: "list-units", desc: "Alle aktiven Units" },{ flag: "daemon-reload", desc: "Konfiguration neu einlesen" }],
      examples: [{ label: "Nginx starten", code: "sudo systemctl start nginx" },{ label: "Status prüfen", code: "systemctl status nginx" },{ label: "Aktivieren + Starten", code: "sudo systemctl enable --now nginx" },{ label: "Fehlgeschlagene Dienste", code: "systemctl --failed" }] },

    { cmd: "journalctl", desc: "Zeigt systemd-Journalogs — alle Systemlogs zentral abrufbar.", syntax: "journalctl [OPTIONEN]", level: "medium", tags: ["logs","systemd"],
      options: [{ flag: "-u DIENST", desc: "Nur Logs eines Dienstes" },{ flag: "-f", desc: "Live-Modus (follow)" },{ flag: "-n N", desc: "Letzte N Zeilen" },{ flag: "--since '1h ago'", desc: "Zeitraum eingrenzen" },{ flag: "-p err", desc: "Nach Priorität filtern" },{ flag: "-b", desc: "Logs seit letztem Boot" }],
      examples: [{ label: "Alle Logs", code: "journalctl" },{ label: "Nginx live", code: "journalctl -u nginx -f" },{ label: "Letzte Stunde", code: "journalctl --since '1h ago'" },{ label: "Nur Fehler", code: "journalctl -p err -b" }] },
  ],

  // ─────────────────────────────────────────────
  //  11. SSH & REMOTE (ERWEITERT)
  // ─────────────────────────────────────────────
  ssh: [
    {
      cmd: "ssh",
      desc: "Stellt eine verschlüsselte Verbindung zu einem Remote-System her (Secure Shell). Der Standard für sichere Remote-Administration.",
      syntax: "ssh [OPTIONEN] [BENUTZER@]HOST [BEFEHL]",
      level: "basic",
      tags: ["remote", "login", "sicherheit"],
      options: [
        { flag: "-p PORT", desc: "Verbindung über anderen Port (Standard: 22)" },
        { flag: "-i KEYFILE", desc: "Bestimmten privaten Schlüssel verwenden" },
        { flag: "-l USER", desc: "Benutzername angeben (alternativ zu user@host)" },
        { flag: "-X", desc: "X11-Forwarding — grafische Anwendungen weiterleiten" },
        { flag: "-Y", desc: "Trusted X11-Forwarding (vertrauenswürdig, weniger sicher)" },
        { flag: "-A", desc: "SSH-Agent-Forwarding — Keys weiterreichen" },
        { flag: "-v / -vv / -vvv", desc: "Verbose-Modus für Debugging (mehr v = mehr Details)" },
        { flag: "-N", desc: "Kein Remote-Befehl ausführen (für Tunnels)" },
        { flag: "-f", desc: "In den Hintergrund gehen (für Tunnels)" },
        { flag: "-L LOCAL:HOST:REMOTE", desc: "Lokales Port-Forwarding (Tunnel)" },
        { flag: "-R REMOTE:HOST:LOCAL", desc: "Entferntes Port-Forwarding (Reverse-Tunnel)" },
        { flag: "-D PORT", desc: "SOCKS-Proxy erstellen (Dynamic Forwarding)" },
        { flag: "-J SPRUNGHOST", desc: "Über Jump-Host (Bastion) verbinden" },
        { flag: "-o OPTION=WERT", desc: "SSH-Config-Option direkt setzen" },
        { flag: "-T", desc: "Kein TTY zuweisen (für Skripte)" },
        { flag: "-t", desc: "TTY erzwingen (auch für Remote-Befehle)" },
      ],
      examples: [
        { label: "Einfache Verbindung", code: "ssh anna@192.168.1.10" },
        { label: "Mit spezifischem Key", code: "ssh -i ~/.ssh/id_ed25519 anna@server.example.com" },
        { label: "Anderen Port verwenden", code: "ssh -p 2222 anna@server.example.com" },
        { label: "Befehl remote ausführen", code: "ssh anna@server 'df -h && uptime'" },
        { label: "Über Jump-Host (Bastion)", code: "ssh -J bastion.example.com anna@intern-server" },
        { label: "Lokaler Tunnel (DB-Zugriff)", code: "ssh -L 5432:db-intern:5432 anna@server -N -f" },
        { label: "Reverse-Tunnel (Port nach draussen)", code: "ssh -R 8080:localhost:80 anna@public-server -N" },
        { label: "SOCKS-Proxy auf Port 1080", code: "ssh -D 1080 anna@server -N -f" },
        { label: "X11-Forwarding (GUI)", code: "ssh -X anna@server gedit" },
        { label: "Debug-Verbindungsprobleme", code: "ssh -vvv anna@server 2>&1 | less" },
      ],
      notes: "ProTip: SSH-Config unter ~/.ssh/config erspart langes Tippen:\nHost myserver\n  HostName 192.168.1.10\n  User anna\n  Port 2222\n  IdentityFile ~/.ssh/id_ed25519\nDann reicht: ssh myserver"
    },
    {
      cmd: "ssh-keygen",
      desc: "Erstellt SSH-Schlüsselpaare (privat/öffentlich) für passwortlose und sichere Authentifizierung.",
      syntax: "ssh-keygen [OPTIONEN]",
      level: "basic",
      tags: ["ssh", "keys", "sicherheit"],
      options: [
        { flag: "-t TYPE", desc: "Schlüsseltyp: ed25519 (empfohlen), rsa, ecdsa" },
        { flag: "-b BITS", desc: "Schlüssellänge (bei RSA mind. 4096)" },
        { flag: "-f DATEI", desc: "Speicherpfad des Schlüssels" },
        { flag: "-C 'KOMMENTAR'", desc: "Kommentar (z.B. E-Mail oder Zweck)" },
        { flag: "-N PASSPHRASE", desc: "Passphrase direkt setzen (leer = kein Passwort)" },
        { flag: "-p", desc: "Passphrase eines bestehenden Keys ändern" },
        { flag: "-l", desc: "Fingerabdruck eines Keys anzeigen" },
        { flag: "-R HOST", desc: "Host aus known_hosts entfernen" },
        { flag: "-y -f KEYFILE", desc: "Öffentlichen Key aus privatem extrahieren" },
      ],
      examples: [
        { label: "Modernen Ed25519-Key erstellen (empfohlen)", code: "ssh-keygen -t ed25519 -C 'anna@laptop-2024'" },
        { label: "RSA-Key (4096 Bit) erstellen", code: "ssh-keygen -t rsa -b 4096 -C 'server-deploy-key'" },
        { label: "Ohne Passwort (für Automatisierung)", code: "ssh-keygen -t ed25519 -N '' -f ~/.ssh/deploy_key" },
        { label: "Key-Fingerabdruck anzeigen", code: "ssh-keygen -l -f ~/.ssh/id_ed25519.pub" },
        { label: "Passphrase ändern", code: "ssh-keygen -p -f ~/.ssh/id_ed25519" },
        { label: "Öffentlichen Key ausgeben", code: "cat ~/.ssh/id_ed25519.pub" },
        { label: "Veralteten Host-Eintrag entfernen", code: "ssh-keygen -R server.example.com" },
      ],
      notes: "Ed25519 ist kürzer, schneller und sicherer als RSA. Private Keys immer mit Passphrase schützen — ausser für Automatisierungen."
    },
    {
      cmd: "ssh-copy-id",
      desc: "Kopiert den öffentlichen SSH-Key auf einen Remote-Server und richtet passwortlose Anmeldung ein.",
      syntax: "ssh-copy-id [OPTIONEN] BENUTZER@HOST",
      level: "basic",
      tags: ["ssh", "keys", "setup"],
      options: [
        { flag: "-i KEYFILE", desc: "Bestimmten öffentlichen Key verwenden" },
        { flag: "-p PORT", desc: "SSH-Port angeben" },
        { flag: "-n", desc: "Dry-run — nur anzeigen was kopiert würde" },
      ],
      examples: [
        { label: "Standardkey auf Server kopieren", code: "ssh-copy-id anna@192.168.1.10" },
        { label: "Bestimmten Key verwenden", code: "ssh-copy-id -i ~/.ssh/id_ed25519.pub anna@server" },
        { label: "Mit anderem Port", code: "ssh-copy-id -p 2222 -i ~/.ssh/id_ed25519.pub anna@server" },
        { label: "Manuell (wenn ssh-copy-id fehlt)", code: "cat ~/.ssh/id_ed25519.pub | ssh anna@server 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'" },
      ],
      notes: "Nach ssh-copy-id können Sie sich ohne Passwort anmelden. Der Key landet in ~/.ssh/authorized_keys auf dem Server."
    },
    {
      cmd: "ssh-agent",
      desc: "Hält entschlüsselte SSH-Keys im Speicher, damit man die Passphrase nur einmal eingeben muss.",
      syntax: "eval $(ssh-agent) && ssh-add [KEYFILE]",
      level: "medium",
      tags: ["ssh", "keys", "agent"],
      options: [
        { flag: "ssh-add", desc: "Key zum Agent hinzufügen" },
        { flag: "ssh-add -l", desc: "Geladene Keys auflisten" },
        { flag: "ssh-add -d KEYFILE", desc: "Key aus Agent entfernen" },
        { flag: "ssh-add -D", desc: "Alle Keys aus Agent entfernen" },
        { flag: "ssh-add -t SEKUNDEN", desc: "Key nur für N Sekunden laden" },
      ],
      examples: [
        { label: "Agent starten und Key laden", code: "eval $(ssh-agent) && ssh-add ~/.ssh/id_ed25519" },
        { label: "Geladene Keys anzeigen", code: "ssh-add -l" },
        { label: "Key nur für 1h laden", code: "ssh-add -t 3600 ~/.ssh/id_ed25519" },
        { label: "Alle Keys entfernen", code: "ssh-add -D" },
      ],
      notes: "In ~/.bashrc oder ~/.zshrc: `eval $(ssh-agent -s)` für automatischen Start."
    },
    {
      cmd: "scp",
      desc: "Kopiert Dateien sicher zwischen lokalem und Remote-System über SSH.",
      syntax: "scp [OPTIONEN] QUELLE ZIEL",
      level: "basic",
      tags: ["transfer", "dateien", "remote"],
      options: [
        { flag: "-r", desc: "Rekursiv — Verzeichnisse übertragen" },
        { flag: "-P PORT", desc: "SSH-Port angeben (Grossbuchstabe P!)" },
        { flag: "-i KEYFILE", desc: "SSH-Key verwenden" },
        { flag: "-C", desc: "Komprimierung aktivieren" },
        { flag: "-v", desc: "Verbose-Modus" },
        { flag: "-l LIMIT", desc: "Bandbreite begrenzen (Kbit/s)" },
        { flag: "-3", desc: "Zwischen zwei Remote-Hosts über lokale Maschine" },
      ],
      examples: [
        { label: "Datei auf Server hochladen", code: "scp datei.txt anna@server:/home/anna/" },
        { label: "Datei herunterladen", code: "scp anna@server:/home/anna/datei.txt ." },
        { label: "Verzeichnis hochladen", code: "scp -r projekt/ anna@server:/var/www/" },
        { label: "Mit anderem Port", code: "scp -P 2222 datei.txt anna@server:/tmp/" },
        { label: "Zwischen zwei Servern", code: "scp anna@server1:/datei.txt anna@server2:/ziel/" },
        { label: "Mehrere Dateien", code: "scp *.conf anna@server:/etc/nginx/conf.d/" },
      ],
      notes: "scp gilt als veraltet — rsync oder sftp sind modernere Alternativen mit mehr Funktionen."
    },
    {
      cmd: "sftp",
      desc: "Interaktiver sicherer Dateitransfer über SSH — ähnlich FTP, aber verschlüsselt.",
      syntax: "sftp [OPTIONEN] BENUTZER@HOST",
      level: "basic",
      tags: ["transfer", "interaktiv"],
      options: [
        { flag: "-P PORT", desc: "Port angeben" },
        { flag: "-i KEYFILE", desc: "SSH-Key" },
        { flag: "-b BATCHFILE", desc: "Befehle aus Datei ausführen (Batch-Modus)" },
        { flag: "-r", desc: "Rekursiv (bei put/get)" },
      ],
      examples: [
        { label: "Verbindung starten", code: "sftp anna@server.example.com" },
        { label: "Datei hochladen", code: "put /local/datei.txt /remote/pfad/" },
        { label: "Datei herunterladen", code: "get /remote/datei.txt /local/pfad/" },
        { label: "Verzeichnis hochladen", code: "put -r lokaler_ordner/ /remote/pfad/" },
        { label: "Remote-Verzeichnis auflisten", code: "ls -la /remote/pfad/" },
        { label: "Batch-Transfer", code: "sftp -b transfer.batch anna@server" },
      ],
      notes: "Nützliche sftp-Befehle: ls, cd, pwd (remote), lls, lcd, lpwd (lokal), mkdir, rm, rename, chmod"
    },
    {
      cmd: "rsync (SSH)",
      desc: "Synchronisiert Dateien effizient über SSH — überträgt nur geänderte Teile, ideal für Backups.",
      syntax: "rsync -avz [OPTIONEN] QUELLE BENUTZER@HOST:ZIEL",
      level: "medium",
      tags: ["backup", "sync", "remote"],
      options: [
        { flag: "-a", desc: "Archivmodus (Rechte, Timestamps, Symlinks)" },
        { flag: "-v", desc: "Verbose" },
        { flag: "-z", desc: "Komprimierung während Übertragung" },
        { flag: "-P", desc: "Fortschritt + partielle Dateien beibehalten" },
        { flag: "--delete", desc: "Im Ziel löschen was in Quelle fehlt" },
        { flag: "--dry-run / -n", desc: "Nur simulieren" },
        { flag: "-e 'ssh -p PORT'", desc: "Anderen SSH-Port verwenden" },
        { flag: "--bwlimit=N", desc: "Bandbreite begrenzen (KB/s)" },
        { flag: "--exclude=MUSTER", desc: "Dateien ausschliessen" },
      ],
      examples: [
        { label: "Verzeichnis auf Server synchronisieren", code: "rsync -avz /var/www/ anna@server:/var/www/" },
        { label: "Vom Server herunterladen", code: "rsync -avzP anna@server:/backup/ /local/restore/" },
        { label: "Mit anderem SSH-Port", code: "rsync -avz -e 'ssh -p 2222' /daten/ anna@server:/backup/" },
        { label: "Mit Löschung (echte Spiegelung)", code: "rsync -avz --delete /quelle/ anna@server:/ziel/" },
        { label: "Erst simulieren", code: "rsync -avz --dry-run --delete /quelle/ anna@server:/ziel/" },
        { label: "Mit Ausschlüssen", code: "rsync -avz --exclude='*.log' --exclude='.git/' /app/ anna@server:/app/" },
        { label: "Bandbreite begrenzen", code: "rsync -avz --bwlimit=1024 /backup/ anna@server:/backup/" },
      ]
    },
    {
      cmd: "ssh_config",
      desc: "SSH-Konfigurationsdatei ~/.ssh/config — vereinfacht Verbindungen mit vordefinierten Einstellungen.",
      syntax: "Host ALIAS\n  Option Wert",
      level: "medium",
      tags: ["konfiguration", "ssh", "produktivität"],
      options: [
        { flag: "Host", desc: "Aliasname für die Verbindung" },
        { flag: "HostName", desc: "Echter Hostname oder IP" },
        { flag: "User", desc: "Benutzername" },
        { flag: "Port", desc: "SSH-Port" },
        { flag: "IdentityFile", desc: "Pfad zum privaten Key" },
        { flag: "ProxyJump", desc: "Jump-Host (Bastion)" },
        { flag: "ForwardAgent", desc: "SSH-Agent weiterleiten" },
        { flag: "ServerAliveInterval", desc: "Keep-Alive-Intervall (Sekunden)" },
        { flag: "StrictHostKeyChecking", desc: "Host-Key-Prüfung (yes/no/ask)" },
      ],
      examples: [
        { label: "Einfacher Server-Alias", code: "Host webserver\n  HostName 192.168.1.100\n  User anna\n  Port 22\n  IdentityFile ~/.ssh/id_ed25519" },
        { label: "Mit Jump-Host (Bastion)", code: "Host intern-db\n  HostName 10.0.0.50\n  User dbadmin\n  ProxyJump bastion.example.com" },
        { label: "Keep-Alive für alle Server", code: "Host *\n  ServerAliveInterval 60\n  ServerAliveCountMax 3" },
        { label: "Verbindung testen", code: "ssh -vT webserver" },
      ],
      notes: "Berechtigungen korrekt setzen: chmod 700 ~/.ssh && chmod 600 ~/.ssh/config"
    },
    {
      cmd: "sshd_config",
      desc: "Server-seitige SSH-Konfigurationsdatei (/etc/ssh/sshd_config) — Härtung und Anpassung des SSH-Daemons.",
      syntax: "sudo nano /etc/ssh/sshd_config && sudo systemctl restart sshd",
      level: "advanced",
      tags: ["server", "sicherheit", "hardening"],
      options: [
        { flag: "Port N", desc: "SSH-Port ändern (Standard 22)" },
        { flag: "PermitRootLogin no", desc: "Root-Login deaktivieren (empfohlen!)" },
        { flag: "PasswordAuthentication no", desc: "Passwort-Login deaktivieren (nur Keys)" },
        { flag: "PubkeyAuthentication yes", desc: "SSH-Key-Authentifizierung aktivieren" },
        { flag: "AllowUsers USER", desc: "Nur bestimmte Benutzer erlauben" },
        { flag: "AllowGroups GRUPPE", desc: "Nur bestimmte Gruppen erlauben" },
        { flag: "MaxAuthTries N", desc: "Maximale Anmeldeversuche" },
        { flag: "ClientAliveInterval N", desc: "Keep-Alive-Intervall für Clients" },
        { flag: "LoginGraceTime N", desc: "Zeit bis Login abgebrochen (Sekunden)" },
        { flag: "X11Forwarding no", desc: "X11-Forwarding deaktivieren" },
      ],
      examples: [
        { label: "SSH-Config bearbeiten", code: "sudo nano /etc/ssh/sshd_config" },
        { label: "Syntax prüfen", code: "sudo sshd -t" },
        { label: "SSH-Dienst neustarten", code: "sudo systemctl restart sshd" },
        { label: "Root-Login verbieten", code: "# In sshd_config:\nPermitRootLogin no\nPasswordAuthentication no\nAllowUsers anna bob" },
      ],
      notes: "⚠️ Immer eine bestehende SSH-Sitzung offen lassen beim Testen! Falsche Konfiguration = gesperrt."
    },
    {
      cmd: "ssh-audit",
      desc: "Analysiert die Sicherheitskonfiguration eines SSH-Servers und zeigt Schwachstellen.",
      syntax: "ssh-audit [OPTIONEN] HOST",
      level: "advanced",
      tags: ["sicherheit", "audit", "hardening"],
      options: [
        { flag: "-p PORT", desc: "Port angeben" },
        { flag: "-l", desc: "Localhost prüfen" },
      ],
      examples: [
        { label: "Installation", code: "sudo apt install ssh-audit" },
        { label: "Server prüfen", code: "ssh-audit server.example.com" },
        { label: "Mit Port", code: "ssh-audit -p 2222 server.example.com" },
      ],
      notes: "Alternativ: `nmap -p 22 --script ssh2-enum-algos server.example.com`"
    },
    {
      cmd: "ssh-keyscan",
      desc: "Liest öffentliche Host-Keys von SSH-Servern — nützlich für bekannte Hosts-Einträge.",
      syntax: "ssh-keyscan [OPTIONEN] HOST",
      level: "advanced",
      tags: ["ssh", "keys", "automation"],
      options: [
        { flag: "-t TYPE", desc: "Schlüsseltyp: rsa, ecdsa, ed25519" },
        { flag: "-p PORT", desc: "Port angeben" },
        { flag: "-H", desc: "Hostnamen hashen (sicherer)" },
      ],
      examples: [
        { label: "Host-Key abrufen", code: "ssh-keyscan server.example.com" },
        { label: "Zu known_hosts hinzufügen", code: "ssh-keyscan server.example.com >> ~/.ssh/known_hosts" },
        { label: "Gehashed hinzufügen", code: "ssh-keyscan -H server.example.com >> ~/.ssh/known_hosts" },
        { label: "In CI/CD-Pipelines nutzen", code: "ssh-keyscan -H github.com >> ~/.ssh/known_hosts" },
      ]
    },
    {
      cmd: "autossh",
      desc: "Startet SSH-Verbindungen/Tunnel automatisch neu wenn sie abbrechen. Ideal für persistente Tunnel.",
      syntax: "autossh [OPTIONEN] [SSH-OPTIONEN] HOST",
      level: "advanced",
      tags: ["tunnel", "persistent", "automation"],
      options: [
        { flag: "-M PORT", desc: "Monitor-Port für Verbindungsüberwachung (0 = deaktiviert)" },
        { flag: "AUTOSSH_POLL", desc: "Umgebungsvariable: Prüfintervall in Sekunden" },
      ],
      examples: [
        { label: "Installation", code: "sudo apt install autossh" },
        { label: "Persistenter Reverse-Tunnel", code: "autossh -M 0 -N -R 2222:localhost:22 anna@public-server" },
        { label: "Persistenter lokaler Tunnel", code: "autossh -M 0 -N -L 5432:db:5432 anna@server" },
        { label: "Als systemd-Service starten", code: "# /etc/systemd/system/ssh-tunnel.service\n[Unit]\nDescription=SSH Tunnel\nAfter=network.target\n\n[Service]\nExecStart=/usr/bin/autossh -M 0 -N -L 5432:db:5432 anna@server\nRestart=always\n\n[Install]\nWantedBy=multi-user.target" },
      ]
    },
    {
      cmd: "mosh",
      desc: "Mobile Shell — robuste SSH-Alternative die Verbindungsabbrüche überlebt (UDP-basiert).",
      syntax: "mosh [OPTIONEN] BENUTZER@HOST",
      level: "medium",
      tags: ["remote", "mobil", "robust"],
      options: [
        { flag: "--port=N", desc: "UDP-Port angeben" },
        { flag: "--ssh='ssh -p 2222'", desc: "Angepasste SSH-Optionen" },
        { flag: "-p PORT", desc: "UDP-Port für mosh-server" },
      ],
      examples: [
        { label: "Installation (Client + Server)", code: "sudo apt install mosh" },
        { label: "Verbindung herstellen", code: "mosh anna@server.example.com" },
        { label: "Mit SSH-Port", code: "mosh --ssh='ssh -p 2222' anna@server" },
      ],
      notes: "Mosh überlebt IP-Wechsel und schlechte Verbindungen. Benötigt auf beiden Seiten installiertes mosh. UDP-Ports 60000-61000 müssen offen sein."
    },
    {
      cmd: "tmux (remote)",
      desc: "Terminal-Multiplexer — erhält SSH-Sitzungen am Leben, auch nach Verbindungsabbruch.",
      syntax: "tmux [BEFEHL]",
      level: "medium",
      tags: ["remote", "session", "produktivität"],
      options: [
        { flag: "new -s NAME", desc: "Neue Session mit Namen erstellen" },
        { flag: "attach -t NAME", desc: "An existierende Session anhängen" },
        { flag: "ls", desc: "Alle Sessions auflisten" },
        { flag: "kill-session -t NAME", desc: "Session beenden" },
      ],
      examples: [
        { label: "Neue benannte Session", code: "tmux new -s deploy" },
        { label: "Sessions auflisten", code: "tmux ls" },
        { label: "An Session anhängen", code: "tmux attach -t deploy" },
        { label: "Workflow: SSH + tmux", code: "ssh server\ntmux new -s arbeit\n# Strg+B dann D zum Trennen\ntmux attach -t arbeit" },
      ],
      notes: "Wichtige tmux-Tasten (Prefix = Strg+B): d=trennen, c=neues Fenster, n=nächstes Fenster, %=vertikal teilen, '\"'=horizontal teilen"
    },
    {
      cmd: "fail2ban",
      desc: "Schützt SSH (und andere Dienste) vor Brute-Force-Angriffen durch automatisches IP-Blocking.",
      syntax: "fail2ban-client [OPTIONEN] BEFEHL",
      level: "advanced",
      tags: ["sicherheit", "firewall", "server"],
      options: [
        { flag: "status", desc: "Status aller Jails" },
        { flag: "status sshd", desc: "Status des SSH-Jails" },
        { flag: "set sshd unbanip IP", desc: "IP-Adresse entsperren" },
        { flag: "set sshd banip IP", desc: "IP-Adresse manuell sperren" },
      ],
      examples: [
        { label: "Installation", code: "sudo apt install fail2ban" },
        { label: "Status aller Jails", code: "sudo fail2ban-client status" },
        { label: "SSH-Jail Status", code: "sudo fail2ban-client status sshd" },
        { label: "Gebannte IPs anzeigen", code: "sudo fail2ban-client status sshd | grep 'Banned IP'" },
        { label: "IP entsperren", code: "sudo fail2ban-client set sshd unbanip 1.2.3.4" },
        { label: "Jail-Konfiguration", code: "sudo nano /etc/fail2ban/jail.local" },
      ],
      notes: "jail.local Beispiel für SSH:\n[sshd]\nenabled = true\nport = ssh\nfilter = sshd\nmaxretry = 3\nbantime = 3600\nfindtime = 600"
    },
  ],

  // ─────────────────────────────────────────────
  //  12. BASH & SCRIPTING
  // ─────────────────────────────────────────────
  bash: [
    { cmd: "echo", desc: "Gibt Text auf der Standardausgabe aus.", syntax: "echo [OPTIONEN] TEXT", level: "basic", tags: ["ausgabe","bash"],
      options: [{ flag: "-n", desc: "Kein Zeilenumbruch am Ende" },{ flag: "-e", desc: "Escape-Sequenzen interpretieren (\\n, \\t...)" }],
      examples: [{ label: "Text ausgeben", code: "echo 'Hallo Welt'" },{ label: "Variable ausgeben", code: "echo \"Benutzer: $USER\"" },{ label: "In Datei schreiben", code: "echo 'konfiguration=wert' >> config.ini" }] },

    { cmd: "export", desc: "Macht Variablen für Kindprozesse der Shell verfügbar.", syntax: "export VARIABLE=WERT", level: "basic", tags: ["variablen","bash"],
      options: [],
      examples: [{ label: "Variable setzen und exportieren", code: "export PATH=$PATH:/opt/mein-tool/bin" },{ label: "Alle Umgebungsvariablen", code: "env" },{ label: "Variable anzeigen", code: "echo $HOME" }] },

    { cmd: "alias", desc: "Erstellt Kurzbefehle für lange Kommandos.", syntax: "alias NAME='BEFEHL'", level: "basic", tags: ["produktivität","bash"],
      options: [],
      examples: [{ label: "Alias erstellen", code: "alias ll='ls -lah'" },{ label: "Alle Aliases anzeigen", code: "alias" },{ label: "Alias entfernen", code: "unalias ll" },{ label: "Permanent in .bashrc", code: "echo \"alias ll='ls -lah'\" >> ~/.bashrc" }] },

    { cmd: "Pipes & Umleitung", desc: "Verbindet Befehle (|) oder leitet Ein-/Ausgabe um (>, >>, <, 2>).", syntax: "BEFEHL1 | BEFEHL2 / BEFEHL > DATEI", level: "medium", tags: ["pipes","umleitung","bash"],
      options: [{ flag: "|", desc: "Ausgabe von Cmd1 als Eingabe für Cmd2" },{ flag: ">", desc: "Ausgabe in Datei (überschreiben)" },{ flag: ">>", desc: "Ausgabe an Datei anhängen" },{ flag: "2>", desc: "Fehlerausgabe umleiten" },{ flag: "2>&1", desc: "Fehler auf Standardausgabe umleiten" },{ flag: "&>", desc: "Alles (stdout + stderr) umleiten" }],
      examples: [{ label: "Pipes verketten", code: "ps aux | grep nginx | awk '{print $2}'" },{ label: "In Datei schreiben", code: "ls -la > dateiliste.txt" },{ label: "Anhängen", code: "echo 'neue Zeile' >> log.txt" },{ label: "Fehler in Datei", code: "command 2> fehler.log" },{ label: "Alles in Datei", code: "befehl &> alles.log" }] },

    { cmd: "xargs", desc: "Übergibt Ausgabe eines Befehls als Argumente an einen anderen.", syntax: "BEFEHL | xargs [OPTIONEN] ZIELBEFEHL", level: "medium", tags: ["pipes","automation","bash"],
      options: [{ flag: "-I {}", desc: "Platzhalter für jeden Eingabewert" },{ flag: "-n N", desc: "N Argumente pro Aufruf" },{ flag: "-P N", desc: "N parallele Prozesse" }],
      examples: [{ label: "Gefundene Dateien löschen", code: "find /tmp -name '*.tmp' | xargs rm" },{ label: "Mit Platzhalter", code: "cat hosts.txt | xargs -I {} ssh {} 'uptime'" },{ label: "Parallel ausführen", code: "cat urls.txt | xargs -P 4 -I {} wget {}" }] },

    { cmd: "tee", desc: "Liest von Standardeingabe und schreibt gleichzeitig in Datei und Standardausgabe.", syntax: "BEFEHL | tee [OPTIONEN] DATEI", level: "medium", tags: ["umleitung","logging"],
      options: [{ flag: "-a", desc: "Anhängen statt überschreiben" }],
      examples: [{ label: "Ausgabe zeigen + speichern", code: "apt update | tee apt-update.log" },{ label: "Anhängen", code: "./deploy.sh | tee -a deploy.log" }] },

    { cmd: "history", desc: "Zeigt die Befehlshistorie der Shell an.", syntax: "history [N]", level: "basic", tags: ["bash","historie"],
      options: [{ flag: "-c", desc: "Historie löschen" },{ flag: "-w", desc: "In Datei schreiben" }],
      examples: [{ label: "Alle Befehle anzeigen", code: "history" },{ label: "Letzte 20", code: "history 20" },{ label: "Befehl suchen", code: "history | grep ssh" },{ label: "Letzten Befehl wiederholen", code: "!!" }] },

    { cmd: "cURL / wget (Scripting)", desc: "HTTP-Requests in Bash-Scripts für API-Aufrufe und Downloads.", syntax: "curl -s URL | jq '.field'", level: "medium", tags: ["api","scripting","http"],
      options: [],
      examples: [{ label: "JSON-API abfragen und parsen", code: "curl -s https://api.github.com/repos/linux/linux | jq '.stargazers_count'" },{ label: "Mit Auth-Header", code: "curl -s -H 'Authorization: Bearer TOKEN' https://api.example.com/data" },{ label: "HTTP-Status-Code prüfen", code: "curl -s -o /dev/null -w '%{http_code}' https://example.com" }] },

    { cmd: "Variablen & Bedingungen", desc: "Grundlegende Bash-Script-Elemente: Variablen, if-Abfragen und Schleifen.", syntax: "VAR=wert / if [ BEDINGUNG ]; then ... fi", level: "medium", tags: ["scripting","bash","programmierung"],
      options: [],
      examples: [{ label: "Variablen und if", code: "NAME='Anna'\nif [ \"$NAME\" = 'Anna' ]; then\n  echo 'Hallo Anna!'\nfi" },{ label: "For-Schleife über Dateien", code: "for f in /etc/*.conf; do\n  echo \"Datei: $f\"\ndone" },{ label: "While-Schleife", code: "while true; do\n  echo \"$(date): Server läuft\"\n  sleep 60\ndone" },{ label: "Funktionen", code: "backup() {\n  local SRC=\"$1\"\n  tar -czf \"backup-$(date +%Y%m%d).tar.gz\" \"$SRC\"\n}\nbackup /var/www" }] },
  ],
};
