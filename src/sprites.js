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
  k.loadSpriteAtlas("sprites/dino.png", {
    dino: {
      // Alles war hier kommt, gehört zum Sprite `dino`
      x: 0, // x-Koordinate des Pixels wo das Sprite beginnt.
      y: 0, // y-Koordinate des Pixels wo das Sprite beginnt.
      width: 24 * 24, // Die Breite des Sprites in Pixeln. Hier sind jeweils 24 Animationen nebeneinander, deshalb 24 * TILESIZE
      height: 1 * 21, // Die Höhe des Sprites in Pixeln. Hier ist 1 Laufrichtung untereinander, deshalb 1 * TILESIZE
      sliceX: 24, // In der x-Richtung sind es 24 Kacheln, so wird es gleichmässig aufgeteilt.
      sliceY: 1, // In der y-Richtung ist es 1 Kachel, so wird es gleichmässig aufgeteilt.
      anims: {
        // Hier werden die verschiedenen Animationen definiert.
        idle: { from: 0, to: 2, loop: true }, // Die Animation idle, besteht aus den ersten 2 Kacheln. Die Animation soll sich wiederholen wenn sie durchlaufen ist. // Ist es nur eine Kachel, kann diese direkt angegeben werden.
        run: { from: 3, to: 10, loop: true, speed: 10 }, // Die Geschwindigkeit der Animation kann auch verändert werden.
        hit: { from: 11, to: 13, loop: false, speed: 5 },
        dmg: { from: 14, to: 16, loop: false, speed: 5 },
        jump: { from: 17, to: 20, loop: false, speed: 5 },
      },
    },
  })
  k.loadSpriteAtlas("sprites/snake.png", {
    snake: {
      // Alles war hier kommt, gehört zum Sprite `snake`
      x: 0, // x-Koordinate des Pixels wo das Sprite beginnt.
      y: 0, // y-Koordinate des Pixels wo das Sprite beginnt.
      width: 4 * TS, // Die Breite des Sprites in Pixeln. Hier sind jeweils 4 Animationen nebeneinander, deshalb 4 * TILESIZE
      height: 1 * TS, // Die Höhe des Sprites in Pixeln. Hier ist 1 Laufrichtung untereinander, deshalb 1 * TILESIZE
      sliceX: 4, // In der x-Richtung sind es 4 Kacheln, so wird es gleichmässig aufgeteilt.
      sliceY: 1, // In der y-Richtung ist es 1 Kachel, so wird es gleichmässig aufgeteilt.
      anims: {
        // Hier werden die verschiedenen Animationen definiert.
        idle: 0,
        run: { from: 1, to: 3, loop: true, speed: 10 }, // Die Animation nach unten rennen, besteht aus den ersten 3 Kacheln. Die Animation soll sich wiederholen wenn sie durchlaufen ist.
      },
    },
  })

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

  // sprite sheet for snow/ Level2
  k.loadSpriteAtlas("sprites/tileset_forest.png", {
    plattform_ground1: { x: 128, y: 16, width: 16, height: 16 },
    plattform_ground2: { x: 144, y: 48, width: 16, height: 16 },
    plattform_ground3: { x: 160, y: 48, width: 16, height: 16 },
    plattform_ground4: { x: 128, y: 48, width: 16, height: 16 },
    plattform_g1: { x: 16, y: 32, width: 16, height: 16 },
    plattform_g2: { x: 16, y: 48, width: 16, height: 16 },
    plattform_g3: { x: 48, y: 16, width: 16, height: 16 },
    plattform_g4: { x: 96, y: 32, width: 16, height: 16 },
    plattform_g5: { x: 96, y: 48, width: 16, height: 16 },
    plattform_g6: { x: 56, y: 32, width: 16, height: 16 },
    plattform_g7: { x: 16, y: 64, width: 16, height: 16 },
    plattform_g8: { x: 32, y: 64, width: 16, height: 16 },
    plattform_g9: { x: 96, y: 64, width: 16, height: 16 },
  })

  // sprite sheet for snow/ Level2
  k.loadSpriteAtlas("sprites/tileset_snow.png", {
    snow_ground1: { x: 112, y: 16, width: 16, height: 16 },
    snow_ground2: { x: 138, y: 48, width: 16, height: 16 },
    snow_ground3: { x: 144, y: 48, width: 16, height: 16 },
    snow_ground4: { x: 112, y: 48, width: 16, height: 16 },
    snow_g1: { x: 16, y: 32, width: 16, height: 16 },
    snow_g2: { x: 16, y: 48, width: 16, height: 16 },
    snow_g3: { x: 48, y: 16, width: 16, height: 16 },
    snow_g4: { x: 80, y: 32, width: 16, height: 16 },
    snow_g5: { x: 80, y: 48, width: 16, height: 16 },
    snow_g6: { x: 32, y: 48, width: 16, height: 16 },
    snow_g7: { x: 16, y: 64, width: 16, height: 16 },
    snow_g8: { x: 32, y: 64, width: 16, height: 16 },
    snow_g9: { x: 80, y: 64, width: 16, height: 16 },
    snowman: { x: 144, y: 32, width: 16, height: 16 },
  })

  // sprite sheet for lava/ Level3
  k.loadSpriteAtlas("sprites/tileset_lava.png", {
    lava_ground11: { x: 96, y: 16, width: 16, height: 16 },
    lava_ground12: { x: 112, y: 16, width: 16, height: 16 },
    lava_ground2: { x: 144, y: 16, width: 16, height: 16 },
    lava_ground31: { x: 176, y: 16, width: 16, height: 16 },
    lava_ground32: { x: 192, y: 16, width: 16, height: 16 },
    lava_ground33: { x: 208, y: 16, width: 16, height: 16 },
    lava_g11: { x: 32, y: 16, width: 16, height: 16 },
    lava_g12: { x: 48, y: 16, width: 16, height: 16 },
    lava_g13: { x: 64, y: 16, width: 16, height: 16 },
    lava_g21: { x: 16, y: 32, width: 16, height: 16 },
    lava_g22: { x: 32, y: 32, width: 16, height: 16 },
    lava_g23: { x: 64, y: 32, width: 16, height: 16 },
    lava_g24: { x: 80, y: 32, width: 16, height: 16 },
    lava_g31: { x: 16, y: 48, width: 16, height: 16 },
    lava_g32: { x: 80, y: 48, width: 16, height: 16 },
    lava_gm: { x: 48, y: 32, width: 16, height: 16 },
    lava_g41: { x: 16, y: 64, width: 16, height: 16 },
    lava_g42: { x: 32, y: 64, width: 16, height: 16 },
    lava_g43: { x: 80, y: 64, width: 16, height: 16 },
  })

  k.loadSpriteAtlas("sprites/snow_background.jpg", {
    snow_background: {
      x: 0,
      y: 0,
      width: 1920,
      height: 885,
    },
  })

  k.loadSpriteAtlas("sprites/lava_background.png", {
    lava_background: {
      x: 0,
      y: 0,
      width: 1500,
      height: 936,
    },
  })

  k.loadSpriteAtlas("sprites/forest_background.png", {
    forest_background: {
      x: 0,
      y: 0,
      width: 1792,
      height: 1024,
    },
  })

  // falscher Schlüssel--> kann man nicht einsammeln/ hat keine Funktion
  k.loadSpriteAtlas("sprites/key.png", {
    keyFake: {
      x: 0,
      y: 0,
      width: 16,
      height: 16,
    },
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
  k.loadSpriteAtlas("sprites/heart.png", {
    heart: {
      x: 0,
      y: 0,
      width: 48,
      height: 16,
      sliceX: 3,
      sliceY: 1,
      anims: {
        heart_animation: { from: 0, to: 2, loop: true },
      },
    },
  })
  // falsche Flagge
  k.loadSpriteAtlas("sprites/flag.png", {
    flagFake: {
      x: 0,
      y: 0,
      width: 32,
      height: 32,
    },
  })
  k.loadSpriteAtlas("sprites/lava.png", {
    lava: {
      x: 0,
      y: 7,
      width: 384,
      height: 41,
      sliceX: 8,
      sliceY: 1,
      anims: {
        lava_animation: { from: 0, to: 7, loop: true },
      },
    },
    lava2: {
      x: 0,
      y: 32,
      width: 16,
      height: 16,
    },
  })
  // falsche Flagge
  k.loadSpriteAtlas("sprites/flag.png", {
    flagFake: {
      x: 0,
      y: 0,
      width: 32,
      height: 32,
    },
  })
  k.loadSpriteAtlas("sprites/house.png", {
    house: {
      x: 0,
      y: 0,
      width: 1460,
      height: 127,
      sliceX: 10,
      sliceY: 1,
      anims: {
        door_animation: { from: 0, to: 9, loop: false },
      },
    },
  })
}
