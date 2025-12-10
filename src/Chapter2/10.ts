function getStringLen(foo: string) {
	// Stringにすると保存時にstringに変換されてしまう
	return foo.length;
}

getStringLen("hello");
getStringLen(new String("hello").toString());

const a: string = "hello";
console.log(typeof a); // string
