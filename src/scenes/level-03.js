import { k, addGeneralGameLogic } from "../game.js"
import { generateMapLevel3 } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"

import "./lose.js"
import "./end.js"
/*
 Szene für das Level 3.
 */
k.scene("level-03", async () => {
  k.setGravity(1200)
  loadKeyboardJumpAndRun()

  await generateMapLevel3("maps/level-03.txt")

  addGeneralGameLogic()

  k.onCollide("player", "goal", (player) => {
    if (player.canExit === true) {
      k.go("end")
    }
  })

  k.onCollide("player", "key", (player, key) => {
    key.destroy()
    player.canExit = true
  })

  k.onCollide("player", "lava", () => {
    k.go("lose")
  })

  k.onUpdate(() => {
    const player = k.get("player")[0]
    if (player.pos.y > 720) {
      k.go("lose")
    }
  })
})
