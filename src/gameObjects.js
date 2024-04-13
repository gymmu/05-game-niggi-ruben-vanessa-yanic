import { k } from "./game.js"
import { TILESIZE } from "./globals.js"

/**
 * Ein Spielobjekt das sich nicht bewegen lässt und der Spieler nicht
 * hindurch laufen kann. Kann verwendet werden um mit dem Spieler darüber zu
 * laufen, oder auch um ihn zu blockieren.
 */
export function wall1_Level1(x, y) {
  k.add([
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
    // Sagt welche Grafik verwendet werden soll.
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
    // Sagt welche Grafik verwendet werden soll.
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
    // Sagt welche Grafik verwendet werden soll.
    k.sprite("plattform_ground4"),

    k.pos(k.vec2(x, y).scale(TILESIZE)),

    k.body({ isStatic: true }),

    k.area(),

    k.scale(2),

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
      dmgAmount: 10,
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
      healAmount: 5,
    },
  ])
}

/**
 * Ein Spielobjekt Ziel, das vom Spieler erreicht werden muss.
 */
export function goalJumpAndRun(x, y) {
  k.add([
    k.sprite("flag"),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body({ isStatic: true }),
    k.area(),
    "goal",
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
 * Ein Spielobjekt Blume, das den Spieler heilt.
 */
export function flowerRPG(x, y) {
  k.add([
    k.sprite("flower"),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.area(),
    "flower",
    "heal",
    {
      isConsumable: true,
    },
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
    k.sprite("key", { anim: "key_animation", animSpeed: 0.5 }),
    k.pos(x * TILESIZE + 8, y * TILESIZE + 8),
    k.area(),
    "key",
    {
      isConsumable: true,
    },
  ])
}
export function flag(x, y) {
  k.add([
    k.sprite("flag", { anim: "flag_animation", animSpeed: 0.5 }),
    k.pos(x * TILESIZE, y * TILESIZE),
    k.body({ isStatic: true }),
    k.area(),
  ])
}
export function snake(x, y) {
  k.add([
    k.sprite("snake", { anim: "run" }),
    k.pos(k.vec2(x, y).scale(TILESIZE)),
    k.body(),
    k.area(),
    k.health(15),
    "obstacle",
    "snake",
    // This defines anything that is an enemy
    "enemy",
    {
      dmgAmount: 20,
      speed: 50,
    },
  ])
}
