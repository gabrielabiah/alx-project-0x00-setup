import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing = () => {
	return (
		<div>
			<h1 className="text-xl font-extralight">Landing Page</h1>
			<Card />
			<Card />
			<Card />
			<div className="p-8 space-y-6">
				<h1 className="text-2xl font-bold">Button Component Demo</h1>

				<div className="space-y-4">
					<h2 className="text-xl">Small Buttons</h2>
					<div className="flex gap-4 flex-wrap">
						<Button title="Small sm" styles="text-sm py-1 px-2 rounded-sm" />
						<Button title="Small md" styles="text-sm py-1 px-2 rounded-md" />
						<Button title="Small full" styles="text-sm py-1 px-2 rounded-full" />
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="text-xl">Medium Buttons</h2>
					<div className="flex gap-4 flex-wrap">
						<Button title="Medium sm" styles="text-base py-2 px-3 rounded-sm" />
						<Button title="Medium md" styles="text-base py-2 px-3 rounded-md" />
						<Button title="Medium full" styles="text-base py-2 px-3 rounded-full" />
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="text-xl">Large Buttons</h2>
					<div className="flex gap-4 flex-wrap">
						<Button title="Large sm" styles="text-lg py-3 px-6 rounded-sm" />
						<Button title="Large md" styles="text-lg py-3 px-6 rounded-md" />
						<Button title="Large full" styles="text-lg py-3 px-6 rounded-full" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Landing;