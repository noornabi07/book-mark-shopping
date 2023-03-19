const getData = async() =>{
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    showData(data.splice(0, 6));
    const showbtn = document.getElementById('showAllBtn');
    showbtn.classList.remove('hidden');
    // console.log(data)
}

const showData = datas =>{
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    datas.forEach(data =>{
        const myDiv = document.createElement('div');
        myDiv.innerHTML = `
        <div class="card h-[550px] w-full bg-base-100 border shadow-xl">
        <figure><img class="h-96" src="${data.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class="card-title font-bold text-5xl text-red-500">$${data.price}</h2>
          <h3 class="card-title font-bold text-lime-500"><span class="text-yellow-500">Rating:</span> ${data.rating.rate}</h3>
          <h4 class="card-title font-bold text-green-600"><span class="text-yellow-500">Catagories:</span> ${data.category}</h4>
          <p class="text-3xl font-semibold">${data.title}</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        productContainer.appendChild(myDiv);
        // console.log(data);
    })
    const showbtn = document.getElementById('showAllBtn');
    showbtn.classList.add('hidden');
}

// all button show
const allBtn = async() =>{
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}



getData();