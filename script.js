const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = element.querySelectorAll(".prices");
	let total = 0;
	prices.forEach((price)=>{
		total += parseInt(price.textContent);
	} )
	// const tr = document.createElement("tr");
	// tr.innerHTML = `<td>${total}</td>`;
	// const table = document.querySelector("table");
	// table.appendChild(tr);
	 document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);

