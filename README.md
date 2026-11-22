# bs19-help

A lightweight, player-only **Survival Field Manual & Controls NUI** for FiveM servers running **BeyondSurvival (BS19)** and **The Apocalypse Project** map.

Built with a weathered post-apocalyptic survival UI, instant live search, and a `0.00ms` idle client footprint so new and returning players always have controls and survival mechanics one keypress away.

---

## Features

- **0.00ms Idle Resmon** — Purely client-side and event-driven with zero `Wait(0)` tick loops and zero server overhead.
- **Conflict-Free Keybind (`F9` / `/help`)** — Uses FiveM's native `RegisterKeyMapping` so it stays clear of BS19's `F3` Squad Menu and `F5` Survivor Hub. Players can rebind it anytime in `ESC > Settings > Key Bindings > FiveM`.
- **Player-Only Design** — Clean survivor onboarding with zero staff commands or admin menus exposed.
- **Fully Config-Driven (`config.lua`)** — Edit titles, keybinds, commands, and survival guides directly in Lua—no frontend build tools required.
- **Standalone Vanilla NUI** — Built with pure HTML, CSS, and JavaScript (no React, Node, or bundler needed on your server), including built-in browser preview support by opening `html/index.html` directly.
- **Safe Focus Cleanup** — Automatically releases `SetNuiFocus(false, false)` on `ESC`, Close button click, or resource restart (`onResourceStop`).

---

## Pre-Populated Content

| Section | Included Items |
| :--- | :--- |
| **Getting Started** | 4-step field briefing covering inventory, scavenging, stealth, and safezones |
| **Menus & UI** | `[I]` Inventory, `[F5]` Survivor Menu, `[U]` Alternate Survivor Menu, `[F3]` Squad Menu, `[G]` Vehicle Menu, `[ALT]` Target Dot, `[F9]` Help Menu |
| **Actions & Emotes** | `[H]` Whistle (lures nearby zombies), `[X]` Hands Up, `[B]` Point Finger, `[Z]` Go Prone / Crawl |
| **Survival Mechanics** | Infection & Medical, Downed State & Lootable Corpses, DayZ-Style Vehicle Parts, Base Building & Power Generators, Faction Safezones, Dark Zone Extraction |
| **Commands** | `/help` |

---

## Requirements

- **Dependencies:** BeyondSurvival BS19
