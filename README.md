# Create Combined

NeoForge 1.21.1 modpack. Managed with [packwiz](https://packwiz.infra.link/) — mods, configs, and scripts all sync automatically.

## Player setup (one time, ~2 minutes)

1. In Prism Launcher, create a new instance: **Minecraft 1.21.1**, install **NeoForge 21.1.244** (Edit → Version → Install NeoForge).
2. Download [packwiz-installer-bootstrap.jar](https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar) and put it in the instance's `minecraft` folder (right-click instance → Folder).
3. Instance → Edit → Settings → **Custom commands** → enable and set **Pre-launch command** to:

   ```
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://raw.githubusercontent.com/ohotdog/create-combined-pack/master/pack.toml
   ```

4. Launch. Every launch checks for updates and downloads exactly what changed — you never manually install mods again.

Give the instance 4–6 GB of RAM (Edit → Settings → Java → Memory).

## Updating the pack (maintainers)

```
packwiz mr add <modrinth-slug>     # add a mod from Modrinth
packwiz cf add <curseforge-slug>   # add a mod from CurseForge
packwiz update --all               # update all mods
packwiz refresh                    # re-index after editing configs/scripts
git add -A && git commit -m "..." && git push
```

Players get the change on their next launch.
