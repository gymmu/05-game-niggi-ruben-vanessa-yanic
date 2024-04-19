import { k, addGeneralGameLogic } from "../game.js"
import { generateMapEnd } from "../map.js"
import { loadKeyboardJumpAndRun } from "../keyboard.js"

import "./finish.js"
import "./lose.js"

/*
 Szene für das Ende
 */
k.scene("end", async () => {
  k.setGravity(1200)
  loadKeyboardJumpAndRun()

  await generateMapEnd("maps/end.txt")

  addGeneralGameLogic()

  k.onCollide("player", "goal", (player) => {
    if (player.canExit === true) {
      const house = k.get("house")[0]
      if (house !== null) {
        house.play("door_animation")
      }
      k.wait(2, () => {
        k.go("finish")
      })
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
