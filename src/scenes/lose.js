import { k } from "../game.js"

import "./level-01.js"

/**
 * Diese Szene  wird verwendet wenn das Spiel verloren ist, also wenn der
 * Spieler gestorben ist.
 */
k.scene("lose", () => {
  const player = k.get("player")[0]
  player && player.destroy()
  k.add([
    k.text("[red]GAME OVER[/red]", {
      size: 60,
      font: "Courier",
      color: "red",
      styles: {
        red: {
          color: rgb(255, 0, 0),
        },
      },
    }),
    k.pos(k.width() / 2, k.height() / 2),
    k.anchor("bot"),
  ])

  k.add([
    k.text("Press SPACE to restart", {
      size: 22,
      font: "Courier",
    }),
    k.pos(k.width() / 2, k.height() / 2 + 40),
    k.anchor("center"),
  ])

  k.onKeyPress("space", () => {
    k.go("level-01")
  })
})
