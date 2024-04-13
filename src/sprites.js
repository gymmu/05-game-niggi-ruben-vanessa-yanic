import { TILESIZE as TS } from "./globals"
import { k } from "./game.js"

/**
 * Diese Funktion soll alle Spritesheets in das Spiel laden.
 *
 * Diese Funktion muss ganz am Anfang einmal ausgeführt werden, bevor dann
 * Spielobjekte mit diesen Sprites erstellt werden.
 *
 * Die Spritesheets könnten auch pro Level neu bzw. anders geladen werden,
 * damit können einfach andere Atmosphären im Spiel erzeugt werden.
 */
export default function loadSprites() {
  k.loadSpriteAtlas("sprites/char.png", {
    hero: {
      // Alles war hier kommt, gehört zum Sprite `hero`
      x: 0, // x-Koordinate des Pixels wo das Sprite beginnt.
      y: 0, // y-Koordinate des Pixels wo das Sprite beginnt.
      width: 3 * TS, // Die Breite des Sprites in Pixeln. Hier sind jeweils 3 Animationen nebeneinander, deshalb 3 * TILESIZE
      height: 4 * TS, // Die Höhe des Sprites in Pixeln. Hier sind die 4 Laufrichtungen untereinander, deshalb 4 * TILESIZE
      sliceX: 3, // In der x-Richtung sind es 3 Kacheln, so wird es gleichmässig aufgeteilt.
      sliceY: 4, // In der y-Richtung sind es 4 Kacheln, so wird es gleichmässig aufgeteilt.
      anims: {
        // Hier werden die verschiedenen Animationen definiert.
        runDown: { from: 0, to: 2, loop: true }, // Die Animation nach unten rennen, besteht aus den ersten 3 Kacheln. Die Animation soll sich wiederholen wenn sie durchlaufen ist.
        idleDown: 1, // Ist es nur eine Kachel, kann diese direkt angegeben werden.
        runLeft: { from: 3, to: 5, loop: true, speed: 10 }, // Die Geschwindigkeit der Animation kann auch verändert werden.
        idleLeft: 4,
        runRight: { from: 6, to: 8, loop: true },
        idleRight: 7,
        runUp: { from: 9, to: 11, loop: true, speed: 5 },
        idleUp: 10,
      },
    },
  })

  /**
   * Hier werden alle sprites für die statischen Spielobjekte geladen.
   */
  k.loadSpriteAtlas("sprites/ground.png", {
    grass: { x: 0, y: 0, width: TS, height: TS }, // Hier geben wir in Pixeln an, wo die Grafik für das Spielobjekt anfängt, und aufhört (oben-links bis unten-rechts).
    stone: { x: 1 * TS, y: 0, width: TS, height: TS }, // Wir verwenden hier TILESIZE, weil all unsere Grafiken im Moment genau 32x32 Pixel sind.
    mushroom: { x: 2 * TS, y: 0 * TS, width: TS, height: TS },
    flower: { x: 3 * TS, y: 0 * TS, width: TS, height: TS },
    trunk: { x: 0 * TS, y: 1 * TS, width: TS, height: TS },
    tree: { x: 1 * TS, y: 1 * TS, width: TS, height: TS },
    cave: { x: 2 * TS, y: 1 * TS, width: TS, height: TS },
    wall: { x: 3 * TS, y: 1 * TS, width: TS, height: TS },
  })

  k.loadSpriteAtlas("sprites/tileset_forest.png", {
    plattform_woods: { x: 128, y: 48, width: 48, height: 16 },
    plattform_ground1: { x: 128, y: 16, width: 16, height: 16 },
    plattform_ground2: { x: 144, y: 48, width: 16, height: 16 },
    plattform_ground3: { x: 16, y: 48, width: 16, height: 16 },
    plattform_ground4: { x: 160, y: 48, width: 16, height: 16 },
  })
  k.loadSpriteAtlas("sprites/key.png", {
    key: {
      x: 0,
      y: 0,
      width: 80,
      height: 16,
      sliceX: 5,
      sliceY: 1,
      anims: {
        key_animation: { from: 0, to: 4, loop: true },
      },
    },
  })
  k.loadSpriteAtlas("sprites/flag.png", {
    flag: {
      x: 0,
      y: 0,
      width: 288,
      height: 32,
      sliceX: 9,
      sliceY: 1,
      anims: {
        flag_animation: { from: 0, to: 8, loop: true },
      },
    },
  })
}
