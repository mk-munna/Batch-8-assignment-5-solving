addToCart()

function addToCart(event) {
    document.getElementById('card-container').addEventListener('click', function (event) {
        const clicked = event.target
        if (clicked.innerText === 'Add to cart') {
            // add item to calculate
            const newList = document.createElement('li');
            const targetElement = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
            newList.innerText = targetElement.innerText;
            newList.style.color = 'black'
            const calculatorArea = document.getElementById('added-item-list')
            calculatorArea.appendChild(newList);
            // console.log(targetElement);

            // get price and place the price
                const targetPriceElement = event.target.parentNode.previousSibling.previousSibling;
                const targetPriceString = targetPriceElement.childNodes[1].innerText;
                const targetPrice = parseInt(targetPriceString)
                // console.log(typeof targetPrice);
                // make total
                const getTotalPriceElement = document.getElementById('item-total')
                const currentPrice = parseInt(getTotalPriceElement.innerText)
                const newPrice = currentPrice + targetPrice;
                // console.log(newPrice);
            getTotalPriceElement.innerText = newPrice;
            
            // discount price
            addDiscountBeforCLick()
            

            

        } else if (clicked.innerText === 'Buy now') {
            console.log(clicked);
        }
    });

}

addDiscountAfterCLick()