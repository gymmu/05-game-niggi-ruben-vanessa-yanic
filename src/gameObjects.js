import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

/**
 * Ein Spielobjekt das sich nicht bewegen lässt und der Spieler nicht
 * hindurch laufen kann. Kann verwendet werden um mit dem Spieler darüber zu
 * laufen, oder auch um ihn zu blockieren.
 */

// Level 1
export function wall1_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }), //Spielobjekt wird nicht im Spiel angezeigt wenn es zu weit weg ist--> zeigt erst an wenn es im Bildschirm ist
    // Sagt welche Grafik verwendet werden soll.
    k.sprite("plattform_ground1"),

    // Sagt dem Spielobjekt das es eine Position auf der Spielkarte hat, und wo
    // diese ist. Die Spielposition wird mit der TILESIZE skaliert, damit alles
    // schön aufgeht so wie die Karte erzeugt wird. Da alle Spielobjekte
    // genau TILESIZE Pixel hoch und breit sind, gibt es so keine
    // Überschneidungen.
    k.pos(k.vec2(x, y).scale(TILESIZE)),

    // Mit `body` sagen wir das dieses Spielobjekt sich an die Physik halten
    // muss. Dadurch kann es auch mit anderen Spielobjekten kollidieren /
    // interagieren.
    // Mit `isStatic` können wir dem Spielobjekt sagen das es nicht von der
    // Gravitation beeinflusst wird.
    k.body({ isStatic: true }),

    // Mit `area` ermöglichen wir dem Spielobjekt mit anderen zu kollidieren.
    // Damit können wir zum Beispiel prüfen ob sich der Spieler und das
    // Objekt überschneiden, und darauf reagieren.
    k.area(),

    k.scale(2),

    // Hier können mehrere `Tags` angegeben werden. Mit diesen `Tags` können
    // dann Interaktionen zwischen Spielelementen erstellt werden.
    // Zum Beispiel: onCollide("ground", "player", () => {Was soll passieren
    // wenn der Spieler den Boden berührt.})
    "ground",
  ])
}
export function wall2_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_ground2"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function wall3_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_ground3"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function wall4_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_ground4"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}

export function plattform1_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g1"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform2_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g2"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform3_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g3"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform4_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g4"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform5_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g5"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform6_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g6"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform7_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g7"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform8_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g8"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform9_Level1(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("plattform_g9"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}

// Level 2
export function wall1_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_ground1"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function wall2_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_ground2"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function wall3_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_ground3"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function wall4_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_ground4"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform1_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g1"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform2_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g2"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform3_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g3"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform4_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g4"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform5_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g5"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform6_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g6"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform7_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g7"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform8_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g8"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform9_Level2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snow_g9"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}

// Level 3
export function ground11_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_ground11"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function ground12_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_ground12"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function ground2_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_ground2"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function ground31_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_ground31"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function ground32_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_ground32"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function ground33_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_ground33"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform1_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g11"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform2_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g12"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform3_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g13"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform4_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g21"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform5_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g22"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform6_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g23"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform7_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g24"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform8_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g31"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattform9_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g32"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattformM_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_gm"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattformd_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g41"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattformD_Level3(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava_g42"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
export function plattformb_Level3(x, y) {
  k.add([
    k.sprite("lava_g43"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    "ground",
  ])
}

/**
 * Ein Pilz Spielobjekt, das dem Spieler schaden zufügt.
 */
export function mushroomJumpAndRun(x, y) {
  k.add([
    k.sprite("mushroom"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    "obstacle",
    // Hier können wir zusätzliche Eigenschaften von einem Spielobjekt angeben.
    // Mit `isConsumable` könnten wir prüfen das dieses Objekt nur
    // aufgelesen wird, wenn der Spieler die Eigenschaft `kochen` erlernt
    // hat.
    {
      isConsumable: true,
      dmgAmount: 5,
    },
  ])
}

/**
 * Ein Spielobjekt Blume, das den Spieler heilt.
 */
export function flowerJumpAndRun(x, y) {
  k.add([
    k.sprite("flower"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    "heal",
    {
      isConsumable: true,
      healAmount: 25,
    },
  ])
}

/**
 * Ein Hintergrund Spielobjekt, das auf leeren Feldern oder als Hintergrund von
 * anderen Objekten gesetzt wird.
 */
export function backgroundRPG(x, y) {
  k.add([
    k.sprite("grass"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    // `z` wird hier verwendet um diese Kachel weiter im Hintergrund zu
    // zeichnen, damit das eigentliche Spielobjekt auf dem Feld nicht
    // überlagert wird.
    k.z(-10),
  ])
}

/**
 *  Spielobjekt Stein.
 *
 * Soll den Spieler blockieren.
 */
export function stoneRPG(x, y) {
  k.add([
    k.sprite("stone"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

/**
 * Spielobjekt Wand.
 *
 * Der Spieler kann hier nicht durchlaufen. Kann als Klippe verwendet werden.
 */
export function wallRPG(x, y) {
  k.add([
    k.sprite("wall"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

/**
 *  Ein Spielobjekt Höhle. Kann verwendet werden um ein neues Level zu betreten.
 */
export function caveRPG(x, y) {
  k.add([
    k.sprite("cave"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
    "cave",
  ])
}

/*
 * Ein Baumstumpf als Spielobjekt. Wird als Hindernis für den Spieler
 * verwendet.
 */
export function trunkRPG(x, y) {
  k.add([
    k.sprite("trunk"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

/**
 * Ein Spielobjekt Baum. Wird als Hindernis für den Spieler verwendet.
 */
export function treeRPG(x, y) {
  k.add([
    k.sprite("tree"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}

/**
 * Ein Spielobjekt Pilz, das dem Spieler schadet.
 */
export function mushroomRPG(x, y) {
  k.add([
    k.sprite("mushroom"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.area(),
    "obstacle",
    {
      isConsumable: true,
    },
  ])
}
export function key(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("key", { anim: "key_animation", animSpeed: 0.5 }),
    k.pos(x * TILESIZE + 8, y * TILESIZE + 8),
    k.area(),
    "key",
    {
      isConsumable: true,
    },
  ])
}

//falscher Schlüssel --> kann man nicht einsammeln
export function keyFake(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("keyFake"),
    k.pos(x * TILESIZE + 8, y * TILESIZE + 8),
    k.area(),
    k.z(-10),
  ])
}

/**
 * Ein Spielobjekt Ziel, das vom Spieler erreicht werden muss.
 */
export function goalJumpAndRun(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("flag", { anim: "flag_animation", animSpeed: 0.5 }),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
    "goal",
  ])
}

// falsche Flagge --> kann nicht ins nächste Level
export function flagFake(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("flagFake"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.area(),
    k.z(-10),
  ])
}
export function snake(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snake", { anim: "run" }),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body(),
    k.area(),
    k.health(15),
    "obstacle",
    "snake",
    "enemy",
    {
      dmgAmount: 25,
      speed: 50,
    },
  ])
}
export function heart(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("heart", { anim: "heart_animation", animSpeed: 0.5 }),
    k.pos(x * TILESIZE + 8, y * TILESIZE + 8),
    k.area(),
    "heart",
    "heal",
    {
      isConsumable: true,
      healAmount: 20,
    },
  ])
}

//Dekoration, steht nicht im Weg--> ist im Hintergrund
export function snowman(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("snowman"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.scale(2),
    k.z(-10),
  ])
}

// Lava, wenn man reinfällt stirbt man
export function lava(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava", { anim: "lava_animation", animSpeed: 0.5 }),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
    "lava",
  ])
}
export function lava2(x, y) {
  k.add([
    k.offscreen({ hide: true, distance: 2 * TILESIZE }),
    k.sprite("lava2"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    k.scale(2),
    "ground",
  ])
}
