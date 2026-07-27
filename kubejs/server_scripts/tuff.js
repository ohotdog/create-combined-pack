ServerEvents.recipes(event => {
  event.recipes.create.mixing('2x minecraft:tuff', [
    'minecraft:andesite',
    'minecraft:soul_sand',
    Fluid.of('create:honey', 250)
  ]).heated()
})