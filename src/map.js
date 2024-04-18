import { k } from "./game.js"
import { TILESIZE } from "./globals.js"
import { getPlayer } from "./player.js"
import * as GameObjects from "./gameObjects.js"

/**
 *  Diese Funktion liest eine txt-Datei ein, und erstellt aufgrund der Struktur
 * eine Karte für das Spiel. Jedes Zeichen in der txt-Datei entspricht einer
 * Kachel im Spiel, wenn in der txt-Datei kein Buchstabe ist, dann wird die
 * Stelle einfach frei gelassen.
 *
 * Die verschiedenen Buchstaben entsprechen der Art der Kachel die erzeugt
 * werden soll. Wie die folgenden Beispiele.
 *  - p: Player
 *  - o: Hindernis
 *  - f: Blume
 */

// 1. Level
export async function generateMapLevel1(mapfile) {
  // Lädt die txt-Datei die gefragt wurde, für das entsprechende Level.
  const map = await fetch(mapfile)

  // Liest den Textinhalt der txt-Datei ein.
  const mapContent = await map.text()

  // Spaltet den Text in die einzelnen Zeilen. Die Zeilennummer entspricht dann
  // gleich der y-Koordinate in der Spielkarte
  const lines = mapContent.split("\n")

  // Geht über jede einzelne Zeile drüber. Die Zeilennummer entspricht der
  // y-Koordinate auf der Spielkarte
  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]
    // Geht alle Zeichen in einer Zeile durch. Die Stelle des Zeichens
    // entspricht dann der x-Koordinate im Spiel.
    for (let x = 0; x < line.length; x++) {
      const char = line[x]

      // Wenn wir ein 'p' lesen, dann möchten wir an der Stelle den Spieler
      // platzieren.
      if (char === "p") {
        const player = getPlayer()
        player.pos = k.vec2(x, y).scale(TILESIZE)
      } else if (char === "_") {
        GameObjects.wall1_Level1(x, y)
      } else if (char === "-") {
        GameObjects.wall2_Level1(x, y)
      } else if (char === "¬") {
        GameObjects.wall3_Level1(x, y)
      } else if (char === "|") {
        GameObjects.wall4_Level1(x, y)
      } else if (char === "1") {
        GameObjects.plattform1_Level1(x, y)
      } else if (char === "2") {
        GameObjects.plattform2_Level1(x, y)
      } else if (char === "3") {
        GameObjects.plattform3_Level1(x, y)
      } else if (char === "4") {
        GameObjects.plattform4_Level1(x, y)
      } else if (char === "5") {
        GameObjects.plattform5_Level1(x, y)
      } else if (char === "6") {
        GameObjects.plattform6_Level1(x, y)
      } else if (char === "7") {
        GameObjects.plattform7_Level1(x, y)
      } else if (char === "8") {
        GameObjects.plattform8_Level1(x, y)
      } else if (char === "9") {
        GameObjects.plattform9_Level1(x, y)
      } else if (char === "k") {
        GameObjects.key(x, y)
      } else if (char === "F") {
        GameObjects.flag(x, y)
      } else if (char === "S") {
        GameObjects.snake(x, y)
      } else if (char === "h") {
        GameObjects.heart(x, y)
      } else if (char === "g") {
        GameObjects.goalJumpAndRun(x, y)
      }
    }
  }
}

// 2. Level
export async function generateMapLevel2(mapfile) {
  const map = await fetch(mapfile)

  const mapContent = await map.text()

  const lines = mapContent.split("\n")

  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]

    for (let x = 0; x < line.length; x++) {
      const char = line[x]

      if (char === "p") {
        const player = getPlayer()
        player.pos = k.vec2(x, y).scale(TILESIZE)
      } else if (char === "_") {
        GameObjects.wall1_Level2(x, y)
      } else if (char === "-") {
        GameObjects.wall2_Level2(x, y)
      } else if (char === "¬") {
        GameObjects.wall3_Level2(x, y)
      } else if (char === "|") {
        GameObjects.wall4_Level2(x, y)
      } else if (char === "1") {
        GameObjects.plattform1_Level2(x, y)
      } else if (char === "2") {
        GameObjects.plattform2_Level2(x, y)
      } else if (char === "3") {
        GameObjects.plattform3_Level2(x, y)
      } else if (char === "4") {
        GameObjects.plattform4_Level2(x, y)
      } else if (char === "5") {
        GameObjects.plattform5_Level2(x, y)
      } else if (char === "6") {
        GameObjects.plattform6_Level2(x, y)
      } else if (char === "7") {
        GameObjects.plattform7_Level2(x, y)
      } else if (char === "8") {
        GameObjects.plattform8_Level2(x, y)
      } else if (char === "9") {
        GameObjects.plattform9_Level2(x, y)
      } else if (char === "g") {
        GameObjects.goalJumpAndRun(x, y)
      } else if (char === "k") {
        GameObjects.key(x, y)
      } else if (char === "F") {
        GameObjects.flag(x, y)
      } else if (char === "S") {
        GameObjects.snake(x, y)
      } else if (char === "s") {
        GameObjects.snowman(x, y)
      } else if (char === "K") {
        GameObjects.keyFake(x, y)
      } else if (char === "h") {
        GameObjects.heart(x, y)
      }
    }
  }
}

// 3. Level
export async function generateMapLevel3(mapfile) {
  const map = await fetch(mapfile)

  const mapContent = await map.text()

  const lines = mapContent.split("\n")

  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]

    for (let x = 0; x < line.length; x++) {
      const char = line[x]

      if (char === "p") {
        const player = getPlayer()
        player.pos = k.vec2(x, y).scale(TILESIZE)
      } else if (char === "|") {
        GameObjects.ground11_Level3(x, y)
      } else if (char === "¦") {
        GameObjects.ground12_Level3(x, y)
      } else if (char === "_") {
        GameObjects.ground2_Level3(x, y)
      } else if (char === ".") {
        GameObjects.ground31_Level3(x, y)
      } else if (char === "-") {
        GameObjects.ground32_Level3(x, y)
      } else if (char === "¬") {
        GameObjects.ground33_Level3(x, y)
      } else if (char === "1") {
        GameObjects.plattform1_Level3(x, y)
      } else if (char === "2") {
        GameObjects.plattform2_Level3(x, y)
      } else if (char === "3") {
        GameObjects.plattform3_Level3(x, y)
      } else if (char === "4") {
        GameObjects.plattform4_Level3(x, y)
      } else if (char === "5") {
        GameObjects.plattform5_Level3(x, y)
      } else if (char === "6") {
        GameObjects.plattform6_Level3(x, y)
      } else if (char === "7") {
        GameObjects.plattform7_Level3(x, y)
      } else if (char === "8") {
        GameObjects.plattform8_Level3(x, y)
      } else if (char === "9") {
        GameObjects.plattform9_Level3(x, y)
      } else if (char === "m") {
        GameObjects.plattformM_Level3(x, y)
      } else if (char === "d") {
        GameObjects.plattformd_Level3(x, y)
      } else if (char === "D") {
        GameObjects.plattformD_Level3(x, y)
      } else if (char === "b") {
        GameObjects.plattformb_Level3(x, y)
      } else if (char === "k") {
        GameObjects.key(x, y)
      } else if (char === "F") {
        GameObjects.flag(x, y)
      } else if (char === "S") {
        GameObjects.snake(x, y)
      } else if (char === "f") {
        GameObjects.flagFake(x, y)
      } else if (char === "L") {
        GameObjects.lava(x, y)
      } else if (char === "l") {
        GameObjects.lava2(x, y)
      } else if (char === "h") {
        GameObjects.heart(x, y)
      } else if (char === "g") {
        GameObjects.goalJumpAndRun(x, y)
      }
    }
  }
}

// end
export async function generateMapEnd(mapfile) {
  const map = await fetch(mapfile)

  const mapContent = await map.text()

  const lines = mapContent.split("\n")

  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]

    for (let x = 0; x < line.length; x++) {
      const char = line[x]

      if (char === "p") {
        const player = getPlayer()
        player.pos = k.vec2(x, y).scale(TILESIZE)
      }
      //snow-sprites
      else if (char === "-") {
        GameObjects.wall2_Level2(x, y)
      } else if (char === "¬") {
        GameObjects.wall3_Level2(x, y)
      } else if (char === "|") {
        GameObjects.wall4_Level2(x, y)
      } else if (char === "+") {
        GameObjects.plattform1_Level2(x, y)
      } else if (char === "i") {
        GameObjects.plattform2_Level2(x, y)
      } else if (char === "_") {
        GameObjects.plattform3_Level2(x, y)
      } else if (char === "*") {
        GameObjects.plattform4_Level2(x, y)
      } else if (char === "l") {
        GameObjects.plattform5_Level2(x, y)
      } else if (char === "I") {
        GameObjects.plattform7_Level2(x, y)
      } else if (char === "L") {
        GameObjects.plattform9_Level2(x, y)
      } else if (char === "S") {
        GameObjects.snowman(x, y)
      }
      //forest-sprites
      else if (char === "1") {
        GameObjects.plattform1_Level1(x, y)
      } else if (char === "2") {
        GameObjects.plattform2_Level1(x, y)
      } else if (char === "3") {
        GameObjects.plattform3_Level1(x, y)
      } else if (char === "4") {
        GameObjects.plattform4_Level1(x, y)
      } else if (char === "5") {
        GameObjects.plattform5_Level1(x, y)
      } else if (char === "6") {
        GameObjects.plattform6_Level1(x, y)
      } else if (char === "7") {
        GameObjects.plattform7_Level1(x, y)
      } else if (char === "8") {
        GameObjects.plattform8_Level1(x, y)
      } else if (char === "9") {
        GameObjects.plattform9_Level1(x, y)
      } else if (char === "k") {
        GameObjects.key(x, y)
      } else if (char === "g") {
        GameObjects.goalJumpAndRun(x, y)
      }
      //lava-sprites
      else if (char === "q") {
        GameObjects.plattform1_Level3(x, y)
      } else if (char === "w") {
        GameObjects.plattform3_Level3(x, y)
      } else if (char === "a") {
        GameObjects.plattform4_Level3(x, y)
      } else if (char === "s") {
        GameObjects.plattform5_Level3(x, y)
      } else if (char === "d") {
        GameObjects.plattformd_Level3(x, y)
      } else if (char === "D") {
        GameObjects.plattformD_Level3(x, y)
      } else if (char === "b") {
        GameObjects.plattformb_Level3(x, y)
      } else if (char === "n") {
        GameObjects.gn_Level3(x, y)
      } else if (char === "N") {
        GameObjects.gN_Level3(x, y)
      }
    }
  }
}

/**
 //Liest das gewünschte Level ein, und erstellt die entsprechende Karte.
 //Siehe bei der Funktion generateMapJumpAndRun für mehr Dokumentation.

*export async function generateMapRPG(mapfile) {
 * const map = await fetch(mapfile)
  *const mapContent = await map.text()
  *const lines = mapContent.split("\n")
  *for (let y = 0; y < lines.length; y++) {
   * const line = lines[y]
    *for (let x = 0; x < line.length; x++) {
     * const char = line[x]

      // Das wird bei jeder Kachel hinzugefügt, damit alles einen Hintergrund
      // hat.
    *  GameObjects.backgroundRPG(x, y)
*
 *   if (char === "p") {
  *      const player = getPlayer()
   *     player.pos = k.vec2(x, y).scale(TILESIZE)
    *  } else if (char === "s") {
     *   GameObjects.stoneRPG(x, y)
    *} else if (char === "w") {
 *       GameObjects.wallRPG(x, y)
  *    } else if (char === "c") {
   *     GameObjects.caveRPG(x, y)
    *  } else if (char === "T") {
     *   GameObjects.trunkRPG(x, y)
      *} else if (char === "t") {
*        GameObjects.treeRPG(x, y)
 *     } else if (char === "f") {
  *      GameObjects.flowerRPG(x, y)
   *   } else if (char === "m") {
    *    GameObjects.mushroomRPG(x, y)
     * }
*    }
*  }
*}
*/
