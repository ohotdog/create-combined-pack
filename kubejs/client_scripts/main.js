const CREATE_PROPULSION_HIDDEN_ITEMS = [
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

const CREATE_PROPULSION_HIDDEN_FLUIDS = [
  'createpropulsion:coral',
  'createpropulsion:turpentine'
]

RecipeViewerEvents.removeEntries('item', event => {
  CREATE_PROPULSION_HIDDEN_ITEMS.forEach(id => event.remove(id))
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  CREATE_PROPULSION_HIDDEN_ITEMS.forEach(id => event.remove(id))
})

RecipeViewerEvents.removeEntries('fluid', event => {
  CREATE_PROPULSION_HIDDEN_FLUIDS.forEach(id => event.remove(id))
})

RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
  CREATE_PROPULSION_HIDDEN_FLUIDS.forEach(id => event.remove(id))
})
