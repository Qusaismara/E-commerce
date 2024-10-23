const getproduct= async ()=>{
const params =new URLSearchParams(window.location.search).get('categorie');

const {data}= await axios.get(`https://dummyjson.com/products/category/${params}`);
    
return  data.products;


}

const displayproducts= async() =>{
    const data = await getproduct();
    const result = data.map( function(proudct){
    return`
    <div class="product"> 
    <img src=${proudct.thumbnail} />
    <h2>${proudct.title}</h2>
   <span>${proudct.price}</span>
    </div>`;
    
    }).join('');
    document.querySelector('.products .row').innerHTML=result;
}
displayproducts();