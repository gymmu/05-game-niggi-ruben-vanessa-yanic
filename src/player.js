import { TILESIZE } from "./globals.js"
import { k } from "./game.js"

/**
 * Erstelle das Spielobjekt Spieler.
 * Hier werden die Eigenschaften des Spielers festgelegt. Der Spieler wird dann
 * im Level 1 erstellt, und in späteren Levels wieder geladen.
 *
 * Müssen Änderungen am Spieler gemacht werden, kann man das Spielerobjekt über
 * die Funktion `getPlayer()` holen.
 */
export default function createPlayer() {
  const player = k.add([
    k.sprite("dino", { anim: "idle" }),
    k.pos(0, 0),
    k.body(),
    k.area(),
    k.scale(TILESIZE / 20),

    // Gibt dem Spieler Lebenspunkte und die möglichkeit über die Funktionen
    // `hurt` und `heal` mit dem Spieler zu interagieren.
    k.health(100),

    // Damit wird der Spieler nicht zerstört wenn die Szene gewechselt wird.
    // Der Spieler muss dann aber bei GameOver und ähnlichen Szenen von
    // Hand gelöscht werden.
    k.stay(),

    // Das `Tag` für den Spieler, damit man Ihn einfach über kaboom erreichen
    // kann. Es sollte keine anderen Objekte geben, die auch dieses `Tag`
    // haben.
    "player",

    // Hier können Eigenschaften für den Spieler festgehalten werden, diese
    // können dann im Rest des Spiels verwendet werden.
    {
      speed: TILESIZE * 5,
      dir: null,
      dead: false,
      max_hp: 100,
      ishitting: false,
    },
  ])

  /* Immer wenn sich die Position des Spielers ändert, wird die Kamera so
   * geschoben, dass der Spieler in der Mitte ist.
   */
  player.onUpdate(() => {
    k.camPos(player.pos)
  })

  player.setMaxHP(player.max_hp)
}

/**
 *  Hilfsfunktion um das Spielobjekt von `player` einfach zu bekommen.
 */
export function getPlayer() {
  return k.get("player")[0]
}
