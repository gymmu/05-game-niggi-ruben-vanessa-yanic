import { k } from "../game.js"

import "./level-01.js"

/**
 * Diese Szene  wird verwendet wenn das Spiel verloren ist, also wenn der
 * Spieler gestorben ist.
 */
k.scene("lose", () => {
  const player = k.get("player")[0]
  player.destroy()
  k.add([
    k.text("GAME OVER", {
      size: 50,
      font: "Courier",
    }),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("bot"),
  ])

  k.add([
    k.text("Drücke SPACE um das Spiel neu zu starten", {
      size: 22,
      font: "Courier",
    }),
    k.pos(k.width() / 2, k.height() / 2 + 20),
    k.anchor("center"),
  ])

  k.onKeyPress("space", () => {
    k.go("level-01")
  })
})
