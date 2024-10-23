 async function getcategories(){
const {data}= await axios.get(`https://dummyjson.com/products/categories`);

return data;

}
async function displaycategories(){
const data=await getcategories();
const result= data.map(function(categorie){
return`
<div class="categorie">
<h2>${categorie.name}</h2>
<a href="categorie.html?categorie=${categorie.name}">Details</a>
</div>`;

}).join('');


document.querySelector(".categories .row").innerHTML=result;
}
displaycategories();


async function getproduct(){
    const {data}= await axios.get(`https://dummyjson.com/products`);

    return data.products;
    
    }
async function displayproducts(){
        const data=await getproduct();
        const result= data.map(function(proudct){
        return`
        <div class="product">
        <h2>${proudct.title}</h2>
        <img src=${proudct.thumbnail} />
        </div>`;
        
        }).join('');

        document.querySelector(".products .row").innerHTML=result;
    }
    displayproducts();