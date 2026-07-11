const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);