export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	regigigas: {
		inherit: true,
		types: ["Fairy", "Dragon"],
		abilities: {0: "Protosmosis", H: "Cute Charm"},
	},
	screamtail: {
		inherit: true,
		types: ["Fairy", "Dragon"],
		abilities: {0: "Protosmosis", H: "Cute Charm"},
	},
	revavroom: {
		inherit: true,
		abilities: {0: "Overcoat", 1: "Momentum", H: "Filter"},
		otherFormes: ["Revavroom-Segin", "Revavroom-Schedar", "Revavroom-Navi", "Revavroom-Ruchbah", "Revavroom-Caph"],
		formeOrder: ["Revavroom", "Revavroom-Segin", "Revavroom-Schedar", "Revavroom-Navi", "Revavroom-Ruchbah", "Revavroom-Caph"],
	},
	revavroomsegin: {
		num: 966,
		name: "Revavroom-Segin",
		baseSpecies: "Revavroom",
		forme: "Segin",
		types: ["Dark"],
		gender: "N",
		baseStats: {hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90},
		abilities: {0: "Intimidate"},
		heightm: 1.8,
		weightkg: 120,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Segin Star Shard",
		battleOnly: "Revavroom",
	},
	revavroomschedar: {
		num: 966,
		name: "Revavroom-Schedar",
		baseSpecies: "Revavroom",
		forme: "Schedar",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90},
		abilities: {0: "Speed Boost"},
		heightm: 1.8,
		weightkg: 120,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Schedar Star Shard",
		battleOnly: "Revavroom",
	},
	revavroomnavi: {
		num: 966,
		name: "Revavroom-Navi",
		baseSpecies: "Revavroom",
		forme: "Navi",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90},
		abilities: {0: "Toxic Debris"},
		heightm: 1.8,
		weightkg: 120,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Navi Star Shard",
		battleOnly: "Revavroom",
	},
	revavroomruchbah: {
		num: 966,
		name: "Revavroom-Ruchbah",
		baseSpecies: "Revavroom",
		forme: "Ruchbah",
		types: ["Fairy"],
		gender: "N",
		baseStats: {hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90},
		abilities: {0: "Misty Surge"},
		heightm: 1.8,
		weightkg: 120,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Ruchbah Star Shard",
		battleOnly: "Revavroom",
	},
	revavroomcaph: {
		num: 966,
		name: "Revavroom-Caph",
		baseSpecies: "Revavroom",
		forme: "Ruchbah",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 80, atk: 119, def: 90, spa: 54, spd: 67, spe: 90},
		abilities: {0: "Stamina"},
		heightm: 1.8,
		weightkg: 120,
		color: "Gray",
		eggGroups: ["Mineral"],
		requiredItem: "Caph Star Shard",
		battleOnly: "Revavroom",
	},
};
