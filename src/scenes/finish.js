import { k } from "../game.js"
import { getPlayer } from "../player.js"
import "./intro.js"

/**
 * Dies ist eine weitere Szene die angezeigt wird wenn das Spiel vorbei bzw.
 * gewonnen ist.
 */
k.scene("finish", () => {
  const player = getPlayer()
  player.destroy()
  k.add([
    k.text("Ziel erreicht", { size: 50, font: "Courier" }),
    k.pos(k.width() / 2, k.height() / 2 - 50),
    k.anchor("center"),
  ])

  k.add([
    k.text("Gut gemacht! Du hast Dino geholfen nach Hause zu gelangen", {
      size: 20,
      font: "Courier",
    }),
    k.pos(k.width() / 2, k.height() / 2 + 50),
    k.anchor("center"),
  ])

  k.add([
    k.text("Press SPACE to restart", {
      size: 22,
      font: "Courier",
    }),
    k.pos(k.width() / 2, k.height() / 2 + 150),
    k.anchor("center"),
  ])

  k.onKeyPress("space", () => {
    k.go("intro")
  })
})
