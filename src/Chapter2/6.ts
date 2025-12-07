function getElement(elOrId: string | HTMLElement | null): HTMLElement {
	if (elOrId === null) {
		return document.body;
	}
	if (typeof elOrId === "object") {
		return elOrId;
	}
	const el = document.getElementById(elOrId);
	if (!el) {
		throw new Error(`Element with id "${elOrId}" not found.`);
	}
	return el;
}

// avoid biome check error
console.log(getElement(null));
