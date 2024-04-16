import { k, addGeneralGameLogic } from "../game.js"
import { generateMapLevel2 } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"

import "./finish.js"
import "./lose.js"

/*
 Szene für das Level 2.
 */
k.scene("level-02", async () => {
  k.setGravity(1200)
  loadKeyboardJumpAndRun()

  await generateMapLevel2("maps/level-02.txt")

  addGeneralGameLogic()

  k.onCollide("player", "goal", (player) => {
    if (player.canExit === true) {
      k.go("finish")
    }
  })

  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.canExit = true
  })

  k.onUpdate(() => {
    const player = k.get("player")[0]
    if (player.pos.y > 720) {
      k.go("lose")
    }
  })
})
