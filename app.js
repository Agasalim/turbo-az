let sebetList = [];
let cars = document.querySelector(".cars");
let more = document.querySelector(".more");
let marka = document.querySelector("#marka");
let minQiymet = document.querySelector(".min_qiymet");
let maxQiymet = document.querySelector(".max_qiymet");
let minIl = document.querySelector("#minIl");
let maxIl = document.querySelector("#maxIl");
let axtaris = document.querySelector(".search_input");
let qiymetSort = document.querySelector("#qiymetSort");
let shoppingCard = document.querySelector("#shoppingCard");
let closeBasket = document.querySelector("#closeBasket");
let sebet = document.querySelector("#sebet");
let orderList = document.querySelector(".order_list");
let totalAmount = document.querySelector(".totalAmount");
let navlinksList = document.querySelector(".navlinks_list");
let navLinks = document.querySelector(".navlinks");
let filterSection = document.querySelector("#filter");
let filterBtn =document.querySelector(".fa-filter");
let elanElave = document.querySelector("#elanElave");
let elanBtn =document.querySelector(".elan_btn");
let markaName = document.querySelector(".marka_name");
let modelName = document.querySelector(".model_name");
let motorHecmi = document.querySelector(".motor_hecmi");
let masinQiymet = document.querySelector(".masin_qiymet");
let masinIli = document.querySelector(".masin_ili");
let masinRengi = document.querySelector(".masin_rengi");
let sekilLink = document.querySelector(".sekil_linki");
let menuBtn = document.querySelector(".fa-bars");
let sliderDiv1 = document.querySelector(".slider_1");
let sliderDiv2 = document.querySelector(".slider_2");
let addInfo = document.querySelector(".addition_info");

addInfo.style.display = "none"
navLinks.style.maxHeight = "0px";
filterSection.style.maxHeight = "0px"
elanElave.style.maxHeight = "0px"
sebet.style.right = "-450px"
let reqem = 4;
randomSlider()
// carSlider();
showCars();
markaList();
minilSecim();
maxilSecim();
showSebet();

function daxilEt(){
    if(markaName.value == "" || modelName.value == "" || motorHecmi.value == "" || 
        masinQiymet.value == "" || masinIli.value == "" || masinRengi.value == "" || sekilLink.value == ""){
            alert("Butun melumatlari daxil etmemisiz...!")
    }
    else{
        let newObj = {id: carModels.length + 1, marka: `${markaName.value}`, qiymet: `${masinQiymet.value}`,
                        model: `${modelName.value}`, mator: `${motorHecmi.value}`, il: `${masinIli.value}`, 
                        reng: `${masinRengi.value}`, img: `${sekilLink.value}`}
        markaName.value = ""
        modelName.value = ""
        motorHecmi.value = ""
        masinQiymet.value = ""
        masinIli.value = ""
        masinRengi.value = ""
        sekilLink.value = ""
        carModels = [newObj, ...carModels]
        showCars();
        elanElave.style.left = "-100%";
        elanBtn.textContent = "Yeni elan"
        elanBtn.style.background = "#80D128"
        addInfo.style.display = "initial"
        setTimeout(() => {
            addInfo.style.display = "none"
        },3000)
    }
}
function menuToggle(){
    if(navLinks.style.maxHeight == "0px") navLinks.style.maxHeight = "300px"
    else navLinks.style.maxHeight = "0px"
}
document.addEventListener("click", function(event){ // navbar toggle
    if(!navLinks.contains(event.target) && !menuBtn.contains(event.target)) navLinks.style.maxHeight = "0px";
})
function filterToggle() {
    if (filterSection.style.maxHeight === "0px" || filterSection.style.maxHeight == "") {
        filterSection.style.maxHeight = filterSection.scrollHeight + "px"; //elementin tam göstərilməsi üçün lazım olan real hündürlükdür.
    } 
    else filterSection.style.maxHeight = "0px";
}
document.addEventListener("click", function(event) { // filter section toggle
    if(!filterSection.contains(event.target) && !filterBtn.contains(event.target)){ // filterBtn de elave etmek sertdir
        filterSection.style.maxHeight = "0px"
    }
});
function elanElaveEt(){
    if(elanElave.style.maxHeight == "0px" || elanElave.style.maxHeight == "") {
        elanElave.style.maxHeight = elanElave.scrollHeight + "px";
        elanBtn.textContent = "Bagla"
        elanBtn.style.background = "#2ba3f3"
        markaName.focus();
    }
    else{
        elanElave.style.maxHeight = "0px";
        elanBtn.textContent = "Yeni elan"
        elanBtn.style.background = "#80D128"
    }
}
document.addEventListener("click", function(event){ // elan section toggle
    if(!elanElave.contains(event.target) && !elanBtn.contains(event.target)){
        elanElave.style.maxHeight = "0px";
        elanBtn.textContent = "Yeni elan"
        elanBtn.style.background = "#80D128"
    }
})
shoppingCard.onclick = () => sebet.style.right = "0"
closeBasket.onclick = () => sebet.style.right = "-450px"
function showCars(carList = carModels){
    cars.innerHTML ="";
    carList
    .slice(0, reqem)
    .map((masin) => {
        cars.innerHTML +=`
        <div class="car">
            <div class="car_img mb-4">
                <img src="${masin.img}" alt="carPhoto" onclick="showDetails(${masin.id})"/>
                <i class="fa-regular fa-heart" onclick="sec(this)"></i>
            </div>
            <h3 class="car_price">${masin.qiymet}</h3>
            <h4 class="car_model">${masin.marka} ${masin.model}</h4>
            <div class="car_info justify-between">
                <p class="car_year">${masin.il},</p>
                <p class="engine">${masin.mator} L,</p>
                <p class="car_color"  style="color: ${masin.reng};">${masin.reng}</p>
            </div>
            <div class="mt-2 flex justify-center">
                <button onclick="addToCard(${masin.id})" class="add_card_btn bg-[#3DB460] text-white w-[80%] px-5 py-2 rounded-3xl">Add to Card</button>
            </div>
        </div>`
    })
    more.innerHTML = ""
    if(reqem < carList.length){
        more.innerHTML += `
                <button
                    class="more_btn mt-5 bg-slate-300 p-3 w-[200px] rounded-2xl hover:bg-slate-400 transition text-xl text-slate-800 font-medium"
                    onclick="ShowMore()">Show more
                    <i class="fa-solid fa-angles-right ml-3"></i>
                </button>`
    }
}
function ShowMore(){
    reqem = reqem + 4;
    showCars();
}
function showSebet(){
    orderList.innerHTML = ""
    if(sebetList.length == 0){
        orderList.innerHTML = `<p class="text-xl my-5">Hec bir mehsul elave edilmeyib...</p>`
    }
    else{
        sebetList.forEach(element =>{
            orderList.innerHTML += `
                <div class="order_car relative flex gap-3 py-4 mt-3">
                    <div class="order_img mt-2">
                        <img src="${element.img}" alt="sekil" class="w-32">
                    </div>
                    <div class="order_info">
                        <h6 class="order_model_name font-medium text-xl">${element.marka}</h6>
                        <h4 class="order_model_name font-medium text-xl">${element.model}</h4>
                        <p class="order_color text-base">${element.reng}</p>
                        <p class="order_count p-0 my-2">
                            <span onclick="countAzalt(${element.id})" class="px-2 py-1 m-0 bg-slate-200 cursor-pointer">-</span>
                            <span class="px-3 py-1 m-0 bg-slate-400">${element.count}</span>
                            <span onclick="countArtir(${element.id})" class="px-2 py-1 m-0 bg-slate-200 cursor-pointer">+</span>
                        </p>
                        <button onclick="removeOrder(${element.id})" class="remove_btn"><i class="fa-solid fa-trash-can mr-2"></i>Sil</button>
                        <span class="order_price absolute right-0 top-4 text-lg font-medium">${element.qiymet} AZN</span>
                    </div>
                </div>`
        })
        toplamOdenis();
    }
}
function removeOrder(id){
    let index = sebetList.findIndex(item => item.id == id)
    sebetList.splice(index, 1)
    toplamOdenis();
    showSebet();
}
function countArtir(id){
    let elaveMasin = sebetList.find(element => element.id == id)
    elaveMasin.count++
    showSebet();
}
function countAzalt(id){
    let azaltMasin = sebetList.find(element => element.id == id)
    azaltMasin.count--
    let index = sebetList.findIndex(item => item.id == id)
    if(sebetList[index].count <= 0) sebetList.splice(index,1)
    showSebet();
}
function addToCard(id){
    let secilenMasin = carModels.find(element => element.id == id)
    let sebetdeVarmi = sebetList.find(item => item.id == id)
    if(sebetdeVarmi) sebetdeVarmi.count++
    else{
        secilenMasin = {...secilenMasin, count: 1}
        sebetList.push(secilenMasin)
    }
    showSebet();
    sebet.style.right = "0"
}
function toplamOdenis(){
    totalAmount.innerHTML = ""
    let cemPrice = 0;
    sebetList.forEach(item => {
        cemPrice = cemPrice + (Number(item.qiymet.replace(/\s/g,"")) * +item.count)
        totalAmount.innerHTML = `${cemPrice} AZN`
    })
}
axtaris.oninput = function() {
    let searchTerm = axtaris.value.trim().toLowerCase();
    let filteredCars = carModels.filter(item => 
        item.marka.toLowerCase().includes(searchTerm) ||
        item.model.toLowerCase().includes(searchTerm) ||
        item.mator.toLowerCase().includes(searchTerm)
    );
    showCars(filteredCars);
}
function showDetails(id){
    window.location.href = `https://turbo-az-two.vercel.app/details.html?id=${id}`
}
goBack = showCars;
function sec(icon){
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
}
function markaList(){ // masin siyahisini yaradib selecte elave etmek
    let masinAdlari = [];
    carModels.forEach(item => {
        masinAdlari.includes(item.marka) ? '' : masinAdlari.push(item.marka)
    })
    marka.innerHTML += `<option value="butunmodeller">Butun modeller</option>`
    masinAdlari.forEach(element => {
        marka.innerHTML += `<option value="${element}">${element}</option>`
    });
}
marka.onchange = function(){
    if(marka.value=="butunmodeller") showCars(carModels);
    else{
        let markaCar = carModels.filter(item => item.marka==marka.value)
        showCars(markaCar);
    }
}
function minilSecim(){ // illeri selecte elave etmek
    let iller = new Set(carModels.map(item => item.il))
    let siralanmisIller = [...iller]
    siralanmisIller.sort((a, b) => a - b);
    minIl.innerHTML += `<option value="minimumIl" hidden selected>Min. il</option>`
    minIl.innerHTML += `<option value="butuniller">Butun iller</option>`
    siralanmisIller.forEach(item => {
        minIl.innerHTML += `<option value="${item}">${item}</option>`
    })
}
function maxilSecim(){ // illeri selecte elave etmek
    let iller = new Set(carModels.map(item => item.il))
    let siralanmisIller = [...iller];
    siralanmisIller.sort((a, b) => a - b);
    maxIl.innerHTML += `<option value="maximumIl" hidden selected>Max. il</option>`
    maxIl.innerHTML += `<option value="butuniller">Butun iller</option>`
    siralanmisIller.forEach(item => {
        maxIl.innerHTML += `<option value="${item}">${item}</option>`
    })
}
minIl.onchange = function(){
    if(minIl.value == "butuniller" || minIl.value == "minimumIl"){
        showCars(carModels);
        return;
    }
    let iller = carModels.filter(item => {
        if(maxIl.value == "butuniller" || maxIl.value == "maximumIl"){
            return +item.il >= +minIl.value
        }
        return +item.il >= +minIl.value && +item.il <= +maxIl.value
    })
    showCars(iller);
}
maxIl.onchange = function(){
    if(maxIl.value == "butuniller" || maxIl.value == "maximumIl"){
        showCars(carModels);
        return;
    }
    let iller = carModels.filter(item => {
        if(minIl.value == "butuniller" || minIl.value == "minimumIl"){
            return +item.il <= +maxIl.value
        }
        return +item.il >= +minIl.value && +item.il <= +maxIl.value
    })
    showCars(iller);
}
qiymetSort.onchange = function(){
    if(qiymetSort.value == "ucuzdan"){
        let ucuzMasinlar = [...carModels]
        ucuzMasinlar.sort((a, b) => {
            let priceA = Number(a.qiymet.replace(/\s/g, "")); // aradaki bosluqlari silirik ve numbere ceviririk!
            let priceB = Number(b.qiymet.replace(/\s/g, "")); // aradaki bosluqlari silirik ve numbere ceviririk!
            return priceA - priceB;
        })
        showCars(ucuzMasinlar);
    }
    else if(qiymetSort.value == "bahadan"){
        let bahaliMasinlar = [...carModels]
        bahaliMasinlar.sort((a,b) => {
            let priceA = Number(a.qiymet.replace(/\s/g, ""));
            let priceB = Number(b.qiymet.replace(/\s/g, ""));
            return priceB - priceA;
        })
        console.log(bahaliMasinlar);
        showCars(bahaliMasinlar);
    }
    else if(qiymetSort.value == "sifirla") showCars();
}
function priceFilter() {
    let minPrice = minQiymet.value === "" ? 0 : Number(minQiymet.value);
    let maxPrice = maxQiymet.value === "" ? Infinity : Number(maxQiymet.value);
    let filteredCars = carModels.filter(item => {
        let price = Number(item.qiymet.replace(/\s/g, ""));
        return price >= minPrice && price <= maxPrice;
    });
    showCars(filteredCars);
}
maxQiymet.oninput = priceFilter;
minQiymet.oninput = priceFilter;
function randomSlider(){ // 6 eded random secilen masinlar
    sliderDiv1.innerHTML = ""
    let randCarList = []
    let randNum = []
    for(let i=1; i<7; i++){
        let rand = Math.floor(Math.random() * +carModels.length)
        if(!randNum.includes(rand)){
            randNum.push(rand)
            randCarList.push(carModels[rand])
        }
        else i--;
    }
    randCarList.forEach(item => {
        sliderDiv1.innerHTML += `
            <div class="swiper-slide">
                <img src="${item.img}" />
            </div>`
    })
    sliderDiv2.innerHTML = ""
    randCarList.forEach(item => {
        sliderDiv2.innerHTML += `
            <div class="swiper-slide">
                <img src="${item.img}" />
            </div>`
    })
}
function carSlider(){ // butun masinlar
    sliderDiv1.innerHTML = ""
    carModels.forEach(item => {
        sliderDiv1.innerHTML += `
            <div class="swiper-slide">
                <img src="${item.img}" />
            </div>`
    })
    sliderDiv2.innerHTML = ""
    carModels.forEach(item => {
        sliderDiv2.innerHTML += `
            <div class="swiper-slide">
                <img src="${item.img}" />
            </div>`
    })
}

