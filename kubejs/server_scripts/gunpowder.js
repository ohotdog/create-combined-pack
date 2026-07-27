// Gunpowder production for TaCZ / Create Big Cannons
// Manual crafting is the fallback; Create automation pays much better.

ServerEvents.recipes(event => {
    // Manual: 2 charcoal + flint + bone meal -> 2 gunpowder
    event.shapeless(Item.of('minecraft:gunpowder', 2), [
        '2x minecraft:charcoal',
        'minecraft:flint',
        'minecraft:bone_meal'
    ]).id('golfrp:gunpowder_manual')

    // Milling: 1 charcoal -> 2 gunpowder, 50% chance of 2 extra
    // (also works in crushing wheels)
    event.recipes.create.milling([
        Item.of('minecraft:gunpowder', 2),
        CreateItem.of(Item.of('minecraft:gunpowder', 2), 0.5)
    ], 'minecraft:charcoal').id('golfrp:gunpowder_milling')

    // Heated mixing: same inputs as manual, 8x the output
    event.recipes.create.mixing(
        Item.of('minecraft:gunpowder', 8), [
            '2x minecraft:charcoal',
            'minecraft:flint',
            'minecraft:bone_meal'
        ]
    ).heated().id('golfrp:gunpowder_mixing')
})
