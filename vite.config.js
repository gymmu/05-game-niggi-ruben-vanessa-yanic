import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  // TODO: Der Eintrag muss auf den Repository-Namen geändert werden.
  base: "/05-game-niggi-ruben-vanessa-yanic/",

  // Die Einträge hier sollten nicht geändert werden müssen, ausser es werden
  // wichtige Datein verschoben und umbenannt.
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        game: resolve(__dirname, "game.html"),
      },
    },
  },

  // server
  server: {
    open: "/index.html",
  },
})
