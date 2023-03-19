// slider part
const images = [
    'images/shirt-1.jpg',
    'images/shirt-2.jpg',
    'images/shirt-3.jpg',
    'images/shirt-4.jpg',
    'images/shirt-5.jpg',
 
]
const startSlider = () =>{
    let imgCount = 0;
setInterval(() =>{
    const imgContainer = document.getElementById('slider-img');
    if(imgCount === images.length){
        imgCount = 0;
    }
    const imgUrl = images[imgCount];
    imgContainer.setAttribute('src', imgUrl);
    imgCount++;
    // console.log(count)
}, 1000);
};


// api get data part
const getData = async() =>{
   const progress = document.getElementById('progress')
    progress.classList.remove('hidden');
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
        <div class="card h-[750px] w-full bg-base-100 border shadow-xl">

        <figure>
          <img class="h-96 z-10 relative" src="${data.image}" alt="Shoes" />

          <div class="absolute top-px right-px p-3">
          <i class="fa-solid fa-bookmark text-5xl z-20 mr-3 text-purple-500"></i>
          <i class="fa-regular fa-bookmark text-5xl z-20 text-lime-600"></i>
          </div>
        </figure>

        <div class="card-body text-center">
          <h2 class="card-title font-bold text-5xl text-red-500">$${data.price}</h2>
          <h3 class="card-title font-bold text-lime-500"><span class="text-yellow-500">Rating:</span> ${data.rating.rate}</h3>
          <h4 class="card-title font-bold text-green-600"><span class="text-yellow-500">Catagories:</span> ${data.category}</h4>
          <p class="text-3xl font-semibold">${data.title}</p>
          <div class="card-actions justify-center">
            <button onclick="showAlert()" class="btn btn-outline btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        `;
        productContainer.appendChild(myDiv);
        // console.log(data);
    })
    const progress = document.getElementById('progress')
    progress.classList.add('hidden');

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

const showAlert = () =>{
    Swal.fire(
        'Good job!',
        'Congratulation!! You Buy This Product!',
        'success'
      )
    // console.log('hello')
}


getData();