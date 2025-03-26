import { useState } from "react"

function DeliveryCalculator() {
	const [tons, setTons] = useState("")
	const [km, setKm] = useState("")
	const costPerTonKm = 25

	const calculateDeliveryCost = () => tons * km * costPerTonKm

	const whatsappLink = `https://wa.me/77074989953?text=Здравствуйте!%20Хочу%20оставить%20заявку.%20Доставка%20груза%20${tons}%20тонн,%20${km}%20км. Итоговая сумма:%20${calculateDeliveryCost()}%20тенге.`

	return (
		<div className="bg-white p-8 rounded-xl">
			
			<h2 className="text-xl font-bold mb-4">Калькулятор стоимости доставки</h2>
			<div className="flex sm:flex-nowrap flex-wrap gap-3">
				<div className="w-full">
					<label className="block text-sm font-medium text-gray-700">Тоннаж</label>
					<input
						type="number"
						value={tons}
						onChange={e => setTons(e.target.value)}
						className="w-full p-2 border border-zinc-200 rounded-lg"
						placeholder="Введите тонны"
					/>
				</div>
				<div className="w-full">
					<label className="block text-sm font-medium text-gray-700">
						Расстояние (км)
					</label>
					<input
						type="number"
						value={km}
						onChange={e => setKm(e.target.value)}
						className="w-full p-2 border border-zinc-200 rounded-lg"
						placeholder="Введите километры"
					/>
				</div>
			</div>
			<div className="text-lg mt-4">
				Итоговая стоимость: <b>{calculateDeliveryCost()} тенге</b>
			</div>
			{tons && km && (
				<a
					href={whatsappLink}
					target="_blank"
					className="text-white block mt-6 transition-colors hover:bg-blue-600 bg-blue-500 rounded-lg px-5 font-medium py-2 text-center max-w-fit"
				>
					<span>Отправить информацию</span>
				</a>
			)}
		</div>
	)
}

export default DeliveryCalculator
