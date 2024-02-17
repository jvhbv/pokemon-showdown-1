export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {
	regigigas: {
		inherit: true,
		types: ["Ground"],
		abilities: {0: "Tough Claws"},
		otherFormes: ["Regigigas-Primal"],
		formeOrder: ["Regigigas", "Regigigas-Primal"],
	},
	regigigasprimal: {
		num: 486,
		name: "Regigigas-Primal",
		baseSpecies: "Regigigas",
		forme: "Primal",
		types: ["Ground", "Fighting"],
		baseStats: {hp: 110, atk: 170, def: 140, spa: 110, spd: 140, spe: 100},
		abilities: {0: "Adaptability"},
		heightm: 4.6,
		weightkg: 999.9,
		color: "Brown",
		eggGroups: ["Undiscovered"],
		requiredItem: "Mantle Fragment",
		battleOnly: "Regigigas",
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
