interface Person {
	name: string;
}

interface PersonSpan extends Person {
	birth: Date;
	death?: Date;
}

const ps: PersonSpan = {
	name: "Alan Turing",
	birth: new Date("1912-06-23"),
	death: new Date("1954-06-07"),
};

console.log(`${ps.name} was born in ${ps.birth.getFullYear()}.`);

// type K = keyof PersonSpan;
// type K = "name" | "birth" | "death"と同じ
