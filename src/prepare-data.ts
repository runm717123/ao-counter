export const prepareData = () => {
	const countStonesReq = (lvl: number): number => {
		if (lvl > 1) {
			return lvl + countStonesReq(lvl - 1) * 2;
		}

		return lvl;
	};

	const countEquipmentReq = (lvl: number) => {
		return 2 ** lvl;
	};

	const maxLvl = 11;
	const data = [];
	for (let i = 1; i <= maxLvl; i++) {
		data.push({ equipment: countEquipmentReq(i), stone: countStonesReq(i) });
	}

	return data;
};
