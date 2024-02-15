function getDiscount(currentPrice) {

    const discountPrice = currentPrice * .20;
    return discountPrice;
}

function discountedPrice(currentPrice) {
    const discountedPrice = currentPrice - getDiscount(currentPrice)
    return discountedPrice;
}

function addDiscountBeforCLick() {
    const currentPrice = parseInt(document.getElementById('item-total').innerText)
    console.log(currentPrice);
    const inputValue = document.getElementById('input-promo-code').value;
    if (inputValue === 'SELL200') {

        const discount = getDiscount(currentPrice);
        const getDiscountElement = document.getElementById('discount');
        getDiscountElement.innerText = discount.toFixed(2);
        document.getElementById('discount-added').innerText = 'APPLIED✅'
        document.getElementById('discount-added').style.fontSize = '12px';
        document.getElementById('discount-added').style.color = 'gray'

        // total prise
        document.getElementById('final-total').innerText = currentPrice - discount;

    }
    document.getElementById('clear').addEventListener('click', function () {
        const getDiscountElement = document.getElementById('discount');
        getDiscountElement.innerText = 0;
        document.getElementById('discount-added').innerText = ''
        // total prise
        document.getElementById('final-total').innerText = currentPrice;
        document.getElementById('input-promo-code').value = ''
    }
    )

}

function addDiscountAfterCLick() {
    document.getElementById('apply-promo').addEventListener('click', function () {
        const currentPrice = parseInt(document.getElementById('item-total').innerText)
        const inputValue = document.getElementById('input-promo-code').value;
        if (inputValue === 'SELL200') {

            const discount = getDiscount(currentPrice);
            const getDiscountElement = document.getElementById('discount');
            getDiscountElement.innerText = discount.toFixed(2);
            console.log(discount);
            document.getElementById('discount-added').innerText = 'APPLIED✅'
            document.getElementById('discount-added').style.fontSize = '12px';
            document.getElementById('discount-added').style.color = 'gray'
            // total prise
            document.getElementById('final-total').innerText = currentPrice - discount;

        }
    })
    document.getElementById('clear').addEventListener('click', function () {
        const getDiscountElement = document.getElementById('discount');
        getDiscountElement.innerText = 0;
        document.getElementById('discount-added').innerText = ''
        // total prise
        document.getElementById('final-total').innerText = currentPrice;
        document.getElementById('input-promo-code').value = ''
    }
    )
}