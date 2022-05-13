import {
	Heart,
	Airplane,
	Star,
	Car,
	Cat,
	Dog,
	Flower,
	Sun,
	Moon,
	Bird,
	Bicycle,
	CurrencyCircleDollar,
	EyeClosed,
	Gift,
	Hamburger,
	Planet,
	RocketLaunch,
	Lightbulb,
	IconContext
} from "phosphor-react";

function IconBackground() {
	return (
		<IconContext.Provider value={{ size: 64, weight: "thin" }}>
			<div className="icon-background">
				<Heart />
				<Airplane />
				<Star />
				<Car />
				<Cat />
				<Dog />
				<Flower />
				<Heart />
				<Sun />
				<Moon />
				<Bird />
				<Bicycle />
				<CurrencyCircleDollar />
				<EyeClosed />
				<Gift />
				<Hamburger />
				<Planet />
				<RocketLaunch />
				<Lightbulb />
			</div>
		</IconContext.Provider>
	);
}

export default IconBackground;
