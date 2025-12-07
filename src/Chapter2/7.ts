interface Person {
	name: string;
}

interface LifeSpan {
	birth: Date;
	death?: Date;
}

type PersonSpan = Person & LifeSpan;

const ps: PersonSpan = {
	name: "Alan Turing",
	birth: new Date("1912-06-23"),
	death: new Date("1954-06-07"),
};

console.log(`${ps.name} was born in ${ps.birth.getFullYear()}.`);
