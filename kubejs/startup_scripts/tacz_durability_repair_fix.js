// Makes [TACZ] Durability (gundb) gun repair actually work in an anvil.
//
// gundb fakes durability entirely through the NeoForge Item#getMaxDamage /
// Item#setDamage hooks and never gives TaCZ items a minecraft:max_damage
// component. But ItemStack#isDamageableItem() on 1.21.1 is literally
//     has(MAX_DAMAGE) && !has(UNBREAKABLE) && has(DAMAGE)
// with no item-level hook, so it is always false for a gun. AnvilMenu#createResult
// then falls into its "not a valid repair, not the same item" branch and returns
// early -- before the broadcastChanges() call that gundb's @Inject hangs its whole
// repair implementation off. Net effect: the anvil result slot is always empty.
// (Same bug for everyone on 1.21.1, not specific to this pack.)
//
// Declaring the two components makes the stacks damageable as far as vanilla is
// concerned, so createResult() reaches gundb's injection point. The numbers here
// are placeholders only: ItemStack#getMaxDamage() routes through
// Item#getMaxDamage(stack), which gundb overrides per gun class from
// data/gundb/gundb/*.json, so real per-gun durability still wins.
ItemEvents.modification(event => {
	event.modify('tacz:modern_kinetic_gun', item => {
		item.maxDamage = 1000
		item.damage = 0
	})

	event.modify('tacz:attachment', item => {
		item.maxDamage = 1000
		item.damage = 0
	})
})
