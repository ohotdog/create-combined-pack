const CREATE_PROPULSION_REMOVED_ITEMS = [
  'createpropulsion:solid_burner',
  'createpropulsion:liquid_burner',
  'createpropulsion:stirling_engine',
  'createpropulsion:platinum_ore',
  'createpropulsion:deepslate_platinum_ore',
  'createpropulsion:platinum_block',
  'createpropulsion:raw_platinum_block',
  'createpropulsion:platinum_casing',
  'createpropulsion:platinum_fluid_tank',
  'createpropulsion:coral_generator',
  'createpropulsion:platinum_ingot',
  'createpropulsion:platinum_nugget',
  'createpropulsion:platinum_sheet',
  'createpropulsion:raw_platinum',
  'createpropulsion:coral_bucket',
  'createpropulsion:pine_resin',
  'createpropulsion:cable',
  'createpropulsion:cable_relay',
  'createpropulsion:turpentine_bucket'
]

const CREATE_PROPULSION_REMOVED_BLOCKS = [
  'createpropulsion:solid_burner',
  'createpropulsion:liquid_burner',
  'createpropulsion:stirling_engine',
  'createpropulsion:platinum_ore',
  'createpropulsion:deepslate_platinum_ore',
  'createpropulsion:platinum_block',
  'createpropulsion:raw_platinum_block',
  'createpropulsion:platinum_casing',
  'createpropulsion:platinum_fluid_tank',
  'createpropulsion:coral_generator',
  'createpropulsion:coral',
  'createpropulsion:cable',
  'createpropulsion:cable_relay',
  'createpropulsion:turpentine'
]

const CREATE_PROPULSION_REMOVED_FLUIDS = [
  'createpropulsion:coral',
  'createpropulsion:turpentine'
]

ServerEvents.recipes(event => {
  CREATE_PROPULSION_REMOVED_ITEMS.forEach(id => {
    event.remove({ input: id })
    event.remove({ output: id })
  })

  CREATE_PROPULSION_REMOVED_FLUIDS.forEach(id => {
    event.remove({ input: Fluid.of(id) })
    event.remove({ output: Fluid.of(id) })
  })

  event.shaped('createpropulsion:redstone_converter', [
    'TET',
    'RAR'
  ], {
    T: 'minecraft:redstone_torch',
    E: 'create:electron_tube',
    R: 'minecraft:redstone',
    A: 'simulated:redstone_accumulator'
  }).id('kubejs:createpropulsion/redstone_converter')
})

ServerEvents.tags('item', event => {
  CREATE_PROPULSION_REMOVED_ITEMS.forEach(id => event.removeAllTagsFrom(id))
})

ServerEvents.tags('block', event => {
  CREATE_PROPULSION_REMOVED_BLOCKS.forEach(id => event.removeAllTagsFrom(id))
})

ServerEvents.tags('fluid', event => {
  CREATE_PROPULSION_REMOVED_FLUIDS.forEach(id => event.removeAllTagsFrom(id))
})
