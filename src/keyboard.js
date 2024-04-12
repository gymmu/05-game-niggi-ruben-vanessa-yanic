import { k } from "./game.js"
import { getPlayer } from "./player.js"

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein Jump'n'Run-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 */
export function loadKeyboardJumpAndRun() {
  const player = getPlayer()
  // Wenn die Taste gedrückt wird, dann soll die Animation abgespielt werden.
  k.onKeyPress("a", () => {
    player.flipX = true
    player.play("run")
  })
  // Solange wie die Taste gedrückt wird, wird der Spieler in jedem Frame nach
  // links verschoben.
  k.onKeyDown("a", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  // Wenn die Taste losgelassen wird, wird die idleAnimation abgespielt.
  k.onKeyRelease("a", () => {
    player.play("idle")
  })

  k.onKeyPress("d", () => {
    player.flipX = false
    player.play("run")
  })
  k.onKeyDown("d", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("d", () => {
    player.play("idle")
  })

  k.onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump()
    }
  })
  k.onKeyPress("space", () => {
    player.play("jump")
  })
  k.onKeyRelease("space", () => {
    player.play("idle")
  })
  k.onKeyPress("e", () => {
    player.play("hit")
  })
}

/**
 * Diese Funktion lädt die Tastenbelegung wie sie pro Level sein soll. Die
 * generelle Steuerung für ein RPG-Level ist immer etwa gleich, deshalb
 * laden wir sie hier in einer eigenen Funktion.
 *
 * Da wir uns hier anders bewegen können wie in einem Jump'n'Run, haben wir
 * extra eine weitere Funktion erstellt, wo all diese Funktionen drin sind, wie
 * zum Beispiel nach oben oder unten laufen.
 */
export function loadKeyboardRPG() {
  const player = getPlayer()
  k.onKeyPress("left", () => {
    player.play("runLeft")
  })
  k.onKeyDown("left", () => {
    player.move(k.LEFT.scale(player.speed))
  })
  k.onKeyRelease("left", () => {
    player.play("idleLeft")
  })

  k.onKeyPress("right", () => {
    player.play("runRight")
  })
  k.onKeyDown("right", () => {
    player.move(k.RIGHT.scale(player.speed))
  })
  k.onKeyRelease("right", () => {
    player.play("idleRight")
  })

  k.onKeyPress("up", () => {
    player.play("runUp")
  })
  k.onKeyDown("up", () => {
    player.move(k.UP.scale(player.speed))
  })
  k.onKeyRelease("up", () => {
    player.play("idleUp")
  })

  k.onKeyPress("down", () => {
    player.play("runDown")
  })
  k.onKeyDown("down", () => {
    player.move(k.DOWN.scale(player.speed))
  })
  k.onKeyRelease("down", () => {
    player.play("idleDown")
  })
}
