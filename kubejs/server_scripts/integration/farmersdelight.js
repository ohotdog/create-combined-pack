const KNIFE_TOOLS = [
  { type: 'farmersdelight:item_ability', action: 'knife_dig' },
  { tag: 'c:tools/knife' }
]

ServerEvents.tags('item', event => {
  event.add('c:seeds', [
    'farmersdelight:onion'
  ])

  event.add('createdieselgenerators:fermentable', [
    'farmersdelight:cabbage',
    'farmersdelight:onion',
    'farmersdelight:rice',
    'farmersdelight:rice_panicle',
    'farmersdelight:tomato'
  ])
})

ServerEvents.recipes(event => {
  const cutting = (id, input, results) => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [{ item: input }],
      result: results.map(result => ({ item: result })),
      tool: KNIFE_TOOLS
    }).id(`kubejs:farmersdelight/cutting/${id}`)
  }

  cutting('naturalist_bass', 'naturalist:bass', [
    { id: 'farmersdelight:cod_slice', count: 2 },
    { id: 'minecraft:bone_meal', count: 1 }
  ])

  cutting('naturalist_catfish', 'naturalist:catfish', [
    { id: 'farmersdelight:salmon_slice', count: 2 },
    { id: 'minecraft:bone_meal', count: 1 }
  ])

  cutting('naturalist_bushmeat', 'naturalist:bushmeat', [
    { id: 'farmersdelight:minced_beef', count: 2 }
  ])

  cutting('naturalist_duck', 'naturalist:duck', [
    { id: 'farmersdelight:chicken_cuts', count: 2 },
    { id: 'minecraft:bone_meal', count: 1 }
  ])

  cutting('naturalist_lizard_tail', 'naturalist:lizard_tail', [
    { id: 'farmersdelight:chicken_cuts', count: 1 },
    { id: 'minecraft:bone_meal', count: 1 }
  ])

  cutting('naturalist_venison', 'naturalist:venison', [
    { id: 'farmersdelight:minced_beef', count: 2 }
  ])
})
