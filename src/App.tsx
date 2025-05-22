import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Input } from './components/form/input';
import { FormLabel } from './components/form/label';
import { MainContainer, PageCenterContainer } from './components/layout';
import { Table } from './components/table/table';
import { BodyTextSmall } from './components/typography/body-text';
import { prepareData } from './prepare-data';

function App() {
	const [equipmentPrice, setEquipmentPrice] = useState<number>();
	const [stonePrice, setStonePrice] = useState<number>();

	const onPriceType = (e: React.ChangeEvent<HTMLInputElement>, rawNum: string) => {
		e.target.value = rawNum;
	};

	const onStonePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawNum = e.target.value.replace(/\D/g, '');
		setStonePrice(+rawNum);
		onPriceType(e, rawNum);
	};

	const onEquipmentPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawNum = e.target.value.replace(/\D/g, '');
		setEquipmentPrice(+rawNum);
		onPriceType(e, rawNum);
	};

	const getPrice = (eq: number, st: number) => {
		if (!equipmentPrice || !stonePrice) {
			return 'please specify the price';
		}

		const price = st * stonePrice + eq * equipmentPrice;

		return price.toLocaleString('en');
	};

	const onCellClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
		const text = (e.target as HTMLElement).innerText;
		navigator.clipboard.writeText(text).then(
			function () {
				console.log('Async: Copying to clipboard was successful!');
			},
			function (err) {
				console.error('Async: Could not copy text: ', err);
			}
		);
	};

	return (
		<PageCenterContainer>
			<MainContainer className="w-[800px]">
				<h1 className="mx-auto w-fit pb-4">= ENCHANTED EQUIPMENT PRICE CALCULATOR =</h1>
				<div className="grid grid-cols-10 gap-2 items-center w-full">
					<FormLabel className="col-span-3" htmlFor="equipmentPrice">
						Equipment Price
					</FormLabel>
					<span className="text-center">:</span>
					<NumericFormat allowNegative={false} thousandSeparator={true} customInput={Input} className="col-span-6 text-right" onChange={onEquipmentPriceChange} name="equipmentPrice" placeholder="type the equipment price here ..." />

					<label className="col-span-3" htmlFor="stonePrice">
						Enchant Stones Price
					</label>
					<span className="text-center">:</span>
					<NumericFormat name="stonePrice" allowNegative={false} thousandSeparator={true} customInput={Input} className="col-span-6 text-right" onChange={onStonePriceChange} placeholder="type the enchant stone price here ..." />
					<BodyTextSmall className="col-span-10 mt-3">Complete all the fields above. The table below will show you the total price of each equipment and enchant stone combination.</BodyTextSmall>
				</div>

				<Table className="mt-10 w-full">
					<thead>
						<tr>
							<td className="py-2 px-4">+</td>
							<td className="py-2 px-4">Total Equipment</td>
							<td className="py-2 px-4">Total Enchant Stone</td>
							<td className="py-2 px-4">Total Price</td>
						</tr>
					</thead>
					<tbody>
						{prepareData().map((item, i) => {
							return (
								<tr key={item.stone} className="hover:font-bold" onClick={onCellClick}>
									<td className="py-2 px-4">{++i}</td>
									<td className="py-2 px-4">{item.equipment}</td>
									<td className="py-2 px-4">{item.stone}</td>
									<td className="py-2 px-4">{getPrice(item.equipment, item.stone)}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</MainContainer>
		</PageCenterContainer>
	);
}

export default App;
