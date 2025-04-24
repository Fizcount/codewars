

function accum(s) {
	return s.split("").map((v,i)=> v.toUpperCase + v.toLowerCase().repeat(i)).join("-")
}