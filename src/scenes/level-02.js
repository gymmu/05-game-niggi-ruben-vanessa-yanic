import { k, addGeneralGameLogic } from "../game.js"
import { generateMapRPG } from "../map.js"
import { loadKeyboardRPG } from "../keyboard.js"

import "./finish.js"

/**
 * Szene für das Level 2.
 *
 * Hier gibt es keine Gravitation, wir sind hier in einem RPG-Setting.
 */
k.scene("level-02", async () => {
  k.setGravity(0)
  loadKeyboardRPG()

  await generateMapRPG("maps/level-02.txt")

  addGeneralGameLogic()

  k.onCollide("player", "cave", (player) => {
    if (player.canExit === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "flower", (player, flower) => {
    flower.destroy()
    player.canExit = true
  })

  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.canExit = true
  })
})
