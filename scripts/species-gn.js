Hooks.on("setup", () => {
    WFRP4E = game.wfrp4e.config
    WFRP4E.species["gnome"] = "Gnom"

    WFRP4E.speciesCharacteristics["gnome"] = {
        "ws": "2d10+20",
        "bs": "2d10+10",
        "s": "2d10+10",
        "t": "2d10+15",
        "i": "2d10+30",
        "ag": "2d10+30",
        "dex": "2d10+30",
        "int": "2d10+30",
        "wp": "2d10+40",
        "fel": "2d10+15"
    }

    WFRP4E.speciesSkills["gnome"] = [
        "Ausweichen",
        "Charme",
        "Feilschen",
        "Kanalisieren (Ulgu)",
        "Klatsch",
        "Schleichen ()",
        "Sprache (Ghassallisch)",
        "Sprache (Magick)",
        "Sprache (Westerlandisch)",
        "Unterhalten ()",
        "Überleben",
        "Zechen",
    ]

    WFRP4E.speciesTalents["gnome"] = [
        "Glückspilz, Imitator",
        "Fischer, Lesen & Schreiben",
        "Nachtsicht",
        "Unauffällig, Eins mit Ulgu",
        "Zierlich",
        "Zweites Gesicht, Sechster Sinn",
        0
    ]

    WFRP4E.speciesFate["gnome"] = 2;

    WFRP4E.speciesRes["gnome"] = 0;

    WFRP4E.speciesExtra["gnome"] = 2;

    WFRP4E.speciesMovement["gnome"] = 3;


    WFRP4E.speciesAge.gnome = "20+10d10"

    WFRP4E.speciesHeight.gnome = {
        feet : 3,
        inches : 4,
        die : "1d10"
    }
});

