

class Product {
    constructor(id, name, price, stock, img ) {
        this.id     = id;
        this.name   = name;
        this.price  = price;
        this.stock  = stock;
        this.img    = img;
        this.quanty = 1;
    }
}

const  mandoble      = new Product(1, 'Mandoble', 700, 200, "/img/Mandoble.jpg")
const  brigantine    = new Product(2, 'Brigantine', 750, 150, "/img/brigantina.jpg")
const  trebuchet     = new Product(3, 'Trebuchet', 20000, 5, "/img/trebuchet.jpg" )
const  ram           = new Product(4, 'Ram', 7000, 20, " /img/ram.jpg" )
const  longBow       = new Product(5, 'Long Bow', 500, 400, "/img/longBow.jpg" )
const  butcherKnife  = new Product(6, 'Butcher Knife', 150, 10000, "/img/butcherKnife.jpg" )
const  armingSword   = new Product(7, 'Arming Sword', 600, 2000,"/img/armingSword.jpg" )
const  cannonGun     = new Product(8, 'Cannon gun', 10000, 40,"/img/cannonGun.jpg" )
const  crossBow      = new Product(9, 'Crossbow', 1200, 1500,"/img/crossbow.jpg" )
const  shield        = new Product(10, 'Shield', 200, 15000,"/img/shield.jpg" )
const  arcabuz       = new Product(11, 'Arcabuz', 2500, 10000, "/img/arcabuz.jpg" )
const  alabard       = new Product(12, 'Alabard', 2500, 10000, "/img/alabard.jpg" )
const  musket        = new Product(13, 'Musket', 150, 10000, "/img/musket.jpg" )
const  winchester    = new Product(14, 'Winchester rifle', 210, 10000, "/img/winchester.jpg" )
const  gewehr98      = new Product(15, 'Gewehr 98', 220, 10000, "/img/gewehr98.jpg" )
const  enfield       = new Product(16, 'Lee Enfield', 270, 10000, "/img/enfield.jpg" )
const  arisaka       = new Product(17, 'Arisaka type 99', 220, 10000, "/img/arisaka.jpg" )
const  carcano       = new Product(18, 'Carcano m91', 290, 10000, "/img/carcano.jpg" )
const  springfield   = new Product(19, 'Sprinfield', 250, 10000, "/img/springfield.jpg" )
const  k98           = new Product(20, 'Kark 98k', 450, 150000, "/img/k98.jpg" )
const  mp18          = new Product(21, 'MP-18', 250, 5000, "/img/mp18.jpg" )
const  bar           = new Product(22, 'BAR', 400, 1000, "/img/bar.jpg" )
const  mosin         = new Product(23, 'Mosin Nagant', 200, 100000, "/img/mosin.jpg" )
const  mauser        = new Product(24, 'Mauser 1909 modelo Argentino', 350, 1000, "/img/mauser.jpg" )
const  thompson      = new Product(25, 'Thompson M1', 350, 20000, "/img/thompson.jpg" )
const  stg44         = new Product(26, 'STG-44', 550, 3000, "/img/stg44.jpg" )
const  ppsh41        = new Product(27, 'PPSH-41', 150, 30800, "/img/ppsh41.jpg" )
const  ak47          = new Product(28, 'AK-47', 150, 5000000, "/img/ak47.jpg" )
const  m16           = new Product(29, 'M-16a2', 350, 300090, "/img/m16.jpg" )
const  m4            = new Product(30, 'M4 Mk18', 2000, 100000, "/img/m4.jpg" )
const  g36           = new Product(31, 'Gewehr H&K 36', 1250, 200000, "/img/g36.jpg" )
const  fal           = new Product(32, 'FAL', 950, 200000, "/img/fal.jpg" )
const  unimog        = new Product(33, 'Mercedes-Benz Unimog', 5000, 10050, "/img/unimog.jpg" )
const  kubelwagen    = new Product(34, 'Kubelwagen', 1550, 2000, "/img/kubelwagen.jpg" )
const  hetzer        = new Product(35, 'Hetzer', 150000, 5, "/img/hetzer.jpg" )
const  sherman       = new Product(36, 'M4a1 Sherman', 90000, 20, "/img/sherman.jpg" )
const  jumbo         = new Product(37, 'M4A3E8 Sherman Jumbo 76mm', 190000, 15, "/img/jumbo.jpg" )
const  panther       = new Product(38, 'Pz. Kpfw V Panther', 290000, 8, "/img/panther.jpg" )
const  tiger         = new Product(39, 'Pz.Kpfw VI Tiger', 390000, 3, "/img/tiger.jpg" )
const  konigstiger   = new Product(40, 'Pz.Kpfw VI Tiger 2 "Königstiger" ', 1000000, 1, "/img/konigstiger.jpg" )
const  t34           = new Product(41, 'T-34-85 ', 150000, 1000, "/img/t34.jpg" )
const  t62           = new Product(42, 'T-62 ', 550000, 10000, "/img/t62.jpg" )








const products = [mandoble, brigantine, trebuchet, ram, longBow, butcherKnife, armingSword, cannonGun, crossBow, shield, arcabuz, alabard, musket, winchester, gewehr98, enfield, arisaka, carcano, springfield, k98, mp18, bar, mosin, mauser, thompson, stg44, ppsh41, ak47, m16, m4, g36, fal, unimog, kubelwagen, hetzer, sherman, jumbo, panther,  tiger, konigstiger, t34, t62];



let carry = [];



if(localStorage.getItem("carry")){
    carry = JSON.parse(localStorage.getItem("carry"));
}


const container__products = document.getElementById("container__products");


const showProducts = () => {
    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-9");
        card.innerHTML = `
           <div class="card">
                <img src="${product.img}" class="card-img-top imgProducts" alt="${product.name}">
                <div class="card-body">
                <h3 class="card-title"> ${product.name} </h3>
                <p class="card-text"> $ ${product.price}  </p>
                <button class="btn colorBotonera" id="boton ${product.id}"> Agree to carry </button>
                </div>
           </div>
        `
        container__products.appendChild(card);

        // Agregar productos al carrito:
        const boton = document.getElementById(`boton ${product.id}`)
          boton.addEventListener("click", () => {
              addToCarry(product.id)
          })
    })

}

// Funcion agregar al carrito :
    const addToCarry = (id) => {
        const product      = products.find((product) => product.id === id);
        const productCarry = carry.find((product) => product.id === id);
          if(productCarry){
            productCarry.quanty++;
        }else {
            carry.push(product);
            //  localStorage:
            localStorage.setItem("carry", JSON.stringify(carry));
        }
        calculoTotal();
    }

showProducts();

// // MOSTRAR EL CARRITO :

const container__carry = document.getElementById("container__carry");
const show__carry = document.getElementById("show__carry");

show__carry.addEventListener("click",() =>{
    okCarry();
});

// Funcion para mostrar Carrito :

const okCarry = () => {
    container__carry.innerHTML="";
    carry.forEach((product) =>{ 
        const card = document.createElement("div");
        card.classList.add("col-xl-3","col-md-6","col-xs-9");
        card.innerHTML = `
           <div class="card">
                <img src=" ${product.img}" class="card-img-top imgProducts" alt="${product.name}">
                <div class=" card-body ">
                <h3 class="card-title">${product.name} </h3>
                <p class="card-text"> $ ${product.price}  </p>
                <p class="card-text">  ${product.quanty}  </p>
                <button class="btn colorBotonera" id="delete ${product.id}"> Delete product </button>
             </div>
           </div>
        `
        container__carry.appendChild(card);

        const boton = document.getElementById(`delete ${product.id}`);
        boton.addEventListener("click",() => {
            deleteProductCarry(product.id);
        })
    })
    calculoTotal();
}

//  ELIMINA EL PRODUCTO DEL CARRY :

const deleteProductCarry = (id) => {
    const product = carry.find((product) => product.id === id);
    const index   = carry.indexOf(product);
    carry.splice(index, 1);
    okCarry();
    // localStorage:
      localStorage.setItem("carry", JSON.stringify(carry));

}

// RESET CARRY

const reset = document.getElementById("reset");
reset.addEventListener("click",() => {
    deleteAllCarry();
})

//  delete todo el carrito:

const deleteAllCarry = () => {
    carry =[];
    okCarry();

    localStorage.clear();

    
}

//  total de la compra

const total = document.getElementById("total");

const calculoTotal = () => {
    let totalBuy = 0;
    carry.forEach((product)=>{
        totalBuy += product.price * product.quanty;
        
    })
    total.innerHTML = `Total:$${totalBuy}`
   
} 

