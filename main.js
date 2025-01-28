function search() {
    console.log('called')
    const searchInput = document.querySelector('.search').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productDesc = product.querySelector('.desc p').innerText.toLowerCase();
        if (productDesc.includes(searchInput)) {
            product.style.display = 'block';
        }
          else {

             product.style.display = 'none';
         }
    });
}

