let str = "";
let tstr = "";
let total;
let op;
let tnum;


const handleNum = (n) =>
{
	str = str + n;
	if (tstr == "") {
		document.getElementById("cinput").value = str;
	} else {
		document.getElementById("cinput").value = tstr + str;
	}
}
const handleOp = (op1) =>
{
	tstr = tstr + str;
	total = parseFloat(str);
	tstr = tstr + op1;
	document.getElementById("cinput").value = tstr;
	str = "";
	op = op1;

}
const handleEq = () =>
{
	tnum = parseFloat(str);

	if (op == '+') {
		total = total + tnum;
	}
	else if (op == '-') {
		total = total - tnum;
	}

	else if (op == '/') {
		total = total / tnum;
	}

	else if (op == '*') {
		total = total * tnum;
	}

	document.getElementById("cinput").value = total.toFixed(2);
	op = "";
}

const clearScreen = () =>
{
	console.log("clear");
	total = 0;
	str = "";
	tstr = "";
	tnum = 0;
	document.getElementById("cinput").value = "clear";
}
