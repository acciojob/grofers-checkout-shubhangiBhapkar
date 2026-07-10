const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = element.querySelectorAll(".price");
	let total = 0;
	prices.forEach((price)=>{
		total +=price;
	} )
	const tr = document.createElement("tr");
	tr.innerHTML = `<td>${total}</td>`
};

getSumBtn.addEventListener("click", getSum);

