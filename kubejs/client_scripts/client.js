// priority: 0

onEvent('jei.hide.items', event => {
	event.hide('appliedenergistics2:facade')
	event.hide(`#buddycards:cards`)
	event.hide(`#buddycards:gummy_cards`)
})

onEvent('jei.subtypes', event => {
	event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.hide.fluids', event => {
})

onEvent('jei.add.items', event => {
	event.add('thermal:ruby')
	event.add('thermal:ruby_dust')
	event.add('thermal:ruby_ore')
	event.add('thermal:apatite_ore')
	event.add('thermal:sapphire')
	event.add('thermal:sapphire_dust')
	event.add('thermal:sapphire_ore')

	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "custommoon:moon", DimensionName: " 月球 " }))
	event.add(Item.of("advancedrocketry:planet_id_chip", { dimId: "minecraft:overworld", DimensionName: " 地球 " }))

})

onEvent('jei.remove.categories', event => {
	event.yeetIf(element => {
		let name = (element.getUid() + "")
		return name.startsWith('advancedrocketry:') || name.startsWith("thermal:centrifuge")
	});
})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标: ${stage == "4" ? "§6最终章" : "§6章节 " + stage}`, '§8思考一下如何自动化制作此物品'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7附加目标: §6章节 ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7在§7装配线§7中不消耗`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7生成高度：Y= §6${y1} §7至 §6${y2}`])

	tooltip.add("minecraft:redstone_ore", [`§7不会生成，磨朱砂可获得红石。`]);

	ore("forbidden_arcanus:arcane_crystal_ore", 1, 9)
	ore("appliedenergistics2:charged_quartz_ore", 1, 30)
	ore("forbidden_arcanus:xpetrified_ore", 1, 30)
	ore("appliedenergistics2:quartz_ore", 1, 30)
	ore("thermal:apatite_ore", 1, 30)
	ore("thermal:cinnabar_ore", 1, 30)
	ore("thermal:niter_ore", 1, 30)
	ore("thermal:nickel_ore", 1, 40)
	ore("thermal:ruby_ore", 1, 30)
	ore("thermal:sapphire_ore", 1, 30)
	ore("thermal:lead_ore", 1, 20)
	ore("minecraft:emerald_ore", 1, 30)
	ore("thermal:sulfur_ore", 12, 36)
	ore("create:zinc_ore", 15, 70)
	ore("create:copper_ore", 40, 85)

	ore("minecraft:coal_ore", 1, 128)
	ore("minecraft:iron_ore", 1, 64)
	ore("minecraft:lapis_ore", 1, 32)
	ore("minecraft:gold_ore", 1, 32)
	ore("minecraft:diamond_ore", 1, 16)

	tooltip.add("advancedrocketry:planet_id_chip", [`§3关于如何使用：`, `1. §7使用生存模式配方获得它`, `2. §7打开你的火箭UI`, `3. §7点击显示的导航电脑图标`, `4. §7在空白的格子中插入此芯片`, "§8§o（尝试使用星球选择列表将会使游戏崩溃）"]);

	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	main_assembly('kubejs:kinetic_mechanism', "1")
	bonus_assembly('kubejs:sealed_mechanism', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:infernal_mechanism', "2A")
	main_assembly('kubejs:inductive_mechanism', "3")
	bonus_assembly('kubejs:abstruse_mechanism', "3A")
	main_assembly('kubejs:calculation_mechanism', "4")

	not_consumed('cb_microblock:stone_saw')
	not_consumed('cb_microblock:iron_saw')
	not_consumed('cb_microblock:diamond_saw')
	not_consumed('projectred-core:screwdriver')
	// not_consumed('create:super_glue')
	not_consumed('kubejs:chromatic_resonator')
	not_consumed('kubejs:flash_drive')
	// not_consumed('xreliquary:mercy_cross')
	// not_consumed('xreliquary:ender_staff')

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8类型： §7火成`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8类型： §7草本`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8类型： §7不稳定`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8类型： §7晶化`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8类型： §7金属`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8类型： §7宝石`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8类型： §7催化剂`]));

	tooltip.add("structurescompass:structures_compass", [`§7右键以激活`]);

	tooltip.add("magicfeather:magicfeather", [`§6给予你创造飞行的能力`]);

	tooltip.add("xreliquary:alkahestry_tome", [`§6不能在动力合成中使用`]);

	tooltip.add("pipez:energy_pipe", [`§7潜行右键时：`, `§7标记 §f输入位置`, `§7使用 §f扳手 §7更改连接方式。`]);

	tooltip.add("kubejs:accellerator_redstone", ["§7在混沌炼金的探索中：", "  §6返回一个 §e对应的 §6反应物",
		"  §6若该反应物在 §e不正确 §6的格子里，那么它不会被消耗"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7在混沌炼金的探索中：", "  §6返回一个 §e对应的 §6反应物",
		"  §6若该反应物在 §e正确 §6的格子里，那么它不会被消耗"]);

	for (i = 0; i < 15; i++)
		tooltip.add(`kubejs:failed_alchemy_${i}`, [
			`§7放入离心分离机来辨别`,
			"",
			"§6返回物品：",
			"- 灰烬 §7表示每一个不正确的材料",
			"- 红石 §7表示每一个正确的材料 §7在不正确的格子里。",
			"- 荧石 §7表示每一个正确的材料 §7在正确的格子里"
		])
})

onEvent('jei.information', event => {
	// event.add('thermal:blitz_rod', ["通过§9充能手杖（已充能）§0加上任意数量的§9小块烟云§0经过§5炼金镭射§0获得。"])
	event.add('thermal:blizz_rod', ["通过§9熵变机械臂（已充能）§0加上任意数量的§9雪球§0经过§5炼金镭射§0获得。"])
	event.add('thermal:basalz_rod', ["通过§9通量磁铁（已充能）§0加上任意数量的§9玄武岩§0经过§5炼金镭射§0获得。"])
	event.add('kubejs:substrate_silicon', ["只能通过§9混沌催化剂§0加上任意数量的其它§9反应物§0经过§5炼金镭射§0获得。", " ", "需要的反应物§9在不同的世界中也不同§0。"])

	event.add('kubejs:alchemical_laser', ["这个物品代表了 §5炼金镭射§0 的所有机械。 使用 §9思索§0 功能以了解它如何建造。"])

	let catalyst = (name, me) =>
		[
			`通过§5炼金镭射§0找到四种§9${me ? name : name + " §0反应物"}§9正确的配方§0。`, " ",
			`§81.§0 将漏斗矿车的前4个格子都使用 §9${me ? name : name + " §0反应物"}§0占满`,
			`§82.§0 对着物品激活§5炼金镭射§0，然后你就会发现§9${me ? me : name + " §9催化剂"}§0，或是一些指向正确配方的§9提示§0`, " ",
			"§8注：§0正确的配方可能含有物品§9重复§0",
			"§8注：§0正确的配方§9因世界而异§0",
			"§8可选项：§0 在矿车的第5格放§9红石促成剂§0或§9荧石促成剂§0获取§9额外提示§0",
		]

	event.add('kubejs:substrate_igneous', catalyst("火成"))
	event.add('kubejs:substrate_herbal', catalyst("草本"))
	event.add('kubejs:substrate_volatile', catalyst("不稳定"))
	event.add('kubejs:substrate_crystal', catalyst("晶化"))
	event.add('kubejs:substrate_metal', catalyst("金属"))
	event.add('kubejs:substrate_gem', catalyst("宝石"))

	let beer = (id, igs) =>
		event.add('drinkbeer:beer_mug' + id, ["Place 4 Empty Beer Mugs, " + igs + " in a Keg to create this Beverage."])

	beer("", "3 Wheat and a Water Bucket")
	beer("_blaze_stout", "2 Wheat, 1 Blaze Powder and a Water Bucket")
	beer("_blaze_milk_stout", "1 Wheat, 1 Sugar, 1 Blaze Powder and a Water Bucket") //wtf are these drinks
	beer("_apple_lambic", "2 Wheat, an Apple and a Water Bucket")
	beer("_sweet_berry_kriek", "2 Wheat, 1 Sweet Berry and a Water Bucket")
	beer("_haars_icey_pale_lager", "3 Wheat and a block of Blue Ice")
	beer("_pumpkin_kvass", "2 Bread, a Pumpkin and a Water Bucket")

	event.add('kubejs:substrate_chaos', catalyst("催化剂", "混沌催化剂").concat([
		" ", "§8用法：§0", "使用§5炼金镭射§0混合§9混沌催化剂§0和任意数量的同种§9反应物§0时，会将该反应物§9嬗变§0成其它的反应物。每个世界都有§9不同的§0嬗变配方。"
	]))
})