let carModels = [
    { id: 1, marka: 'Mercedes', qiymet: '10 500', model: 'w202', mator: '2.0', il: '1998', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2022%2F02%2F07%2F16%2F20%2F36%2F05ae3ec7-b845-4458-8033-99eec8aec1a2%2F83217_ryHX2Q7AONB3-jC_sEJ3mQ.jpg' },
    { id: 2, marka: 'Kia', qiymet: '21 000', model: 'Rio', mator: '1.4', il: '2014', reng: 'silver', img: 'https://turbo.azstatic.com/uploads/full/2021%2F09%2F10%2F11%2F40%2F18%2Fbe262b8b-13ff-40ee-9664-4c7c4ea93e4b%2F94552_bf7HpneCobaNn8ooAalBwg.jpg' },
    { id: 3, marka: 'Hyundai', qiymet: '12 000', model: 'Tucson', mator: '2.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/f660x496/2020%2F02%2F08%2F12%2F31%2F23%2Fdfd4bcdd-5279-4807-85cb-58aa153c900f%2F44290_Il5UqH7nhzVTrAAfdt5BuQ.jpg' },
    { id: 4, marka: 'LADA (VAZ)', qiymet: '35 000', model: '2107', mator: '1.6', il: '2010', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2022%2F09%2F29%2F04%2F48%2F26%2Ff85c3fb0-4f77-4157-8b15-a3122bbaf36d%2F15612_S_xRbeuG6jQhZhkc_JM3wg.jpg' },
    { id: 5, marka: 'BMW', qiymet: '28 700', model: 'M5 e39', mator: '4.4', il: '1998', reng: 'blue', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F15%2F17%2F42%2F55%2F5e61d0d8-ac41-42d4-8a34-33f9c563bba8%2F4747_ZOpsrcdSRl_mByG6tDsiqQ.jpg' },
    { id: 6, marka: 'Mercedes', qiymet: '86 500', model: 'CLS', mator: '5.5', il: '2013', reng: 'gray', img: 'https://turbo.azstatic.com/uploads/full/2021%2F12%2F09%2F01%2F51%2F22%2F2e3d6e19-baa7-4625-89e0-d358238808ce%2F21872_z_Z4BhoRifgwGf0Fz_hvJw.jpg' },
    { id: 7, marka: 'Toyota', qiymet: '54 000', model: 'Camry', mator: '3.0', il: '2021', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2021%2F06%2F18%2F16%2F16%2F02%2Fd4a556f8-adc6-4ff8-897b-2079ea777987%2F24971_KEan9mcELSSmUAPbxG1KEw.jpg' },
    { id: 8, marka: 'Porche', qiymet: '118 400', model: '911 Carrera', mator: '4.4', il: '2023', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2020%2F08%2F13%2F13%2F32%2F55%2F012a26df-efae-4cf0-b763-a4c3de17ae23%2F46349_cqQK5HyMFGcJOEMh1pCm1A.jpg' },
    { id: 9, marka: 'Dodge', qiymet: '38 500', model: 'Challenger', mator: '7.2', il: '2018', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2021%2F04%2F09%2F10%2F02%2F28%2F9a6bf393-9f08-476b-abc0-d6278f1d6668%2F37456_34ZTVBn26COoCWhsqBx3vw.jpg' },
    { id: 10, marka: 'Nissan', qiymet: '86 000', model: 'GTR R-35', mator: '3.0', il: '2014', reng: 'black', img: 'https://turbo.azstatic.com/uploads/full/2017%2F02%2F16%2F00%2F02%2F00%2F573%2F54000_4wUHTVdrb_-kLx6BJMuF8Q.jpg' },
    { id: 11, marka: 'Audi', qiymet: '124 100', model: 'RS7', mator: '4.0', il: '2015', reng: 'dimgrey', img: 'https://turbo.azstatic.com/uploads/full/2021%2F05%2F29%2F15%2F33%2F07%2Fc9bec2ac-97eb-4e07-bc8a-509f1898dd7d%2F82001_MmzL0_nnwbSnJI6rtabq7Q.jpg' },
    { id: 12, marka: 'Toyota',qiymet: '15 800', model: 'Corolla', mator: '1.6', il: '2016', reng: 'white',img: 'https://turbo.azstatic.com/uploads/full/2020%2F09%2F24%2F08%2F21%2F40%2Facdc9e7e-d243-46fd-b2ce-dc51a85c8343%2F66667_OxPaAqSg8MzGM7diar5WlQ.jpg'},
    { id: 13, marka: 'Honda', qiymet: '18 500', model: 'Civic', mator: '1.8', il: '2017', reng: 'cyan', img: 'https://turbo.azstatic.com/uploads/full/2023%2F03%2F29%2F18%2F06%2F09%2F1dc0eed8-15d4-46f9-abf5-0b772be61d2d%2F98117_r2JD4f3tCYHUBNquO-VTdQ.jpg'},
    { id: 14, marka: 'Volkswagen', qiymet: '23 200', model: 'Golf', mator: '2.0', il: '2019', reng: 'white', img: 'https://turbo.azstatic.com/uploads/full/2023%2F02%2F17%2F15%2F03%2F28%2F97566bce-3bcb-43ff-8c96-5274fdf59360%2F74622_ZZd9ojx9ZyTk5EOyx7D3wA.jpg'}
]
let cars = document.querySelector(".cars")
let marka = document.querySelector("#marka");
let minQiymet = document.querySelector(".min_qiymet");
let maxQiymet = document.querySelector(".max_qiymet");
let minIl = document.querySelector("#minIl");
let maxIl = document.querySelector("#maxIl");
let axtaris = document.querySelector(".serch_input");
let qiymetSort = document.querySelector("#qiymetSort");
showCars();
markaList();
minilSecim();
maxilSecim();
function showCars(carList = carModels){
    cars.innerHTML ="";
    carList
    // .filter(item => item.marka.toLocaleLowerCase().includes(axtaris.value.toLocaleLowerCase())) //! includes alinmir
    .map((masin) => {
        cars.innerHTML +=`
        <div class="car">
            <div class="car_img">
                <img src="${masin.img}" alt="carPhoto" onclick="showDetails(${masin.id})"/>
                <i class="fa-regular fa-heart" onclick="sec(this)"></i>
            </div>
            <h3 class="car_price">${masin.qiymet}</h3>
            <h4 class="car_model">${masin.marka}${masin.model}</h4>
            <div class="car_info">
                <p class="car_year">${masin.il},</p>
                <p class="engine">${masin.mator} L,</p>
                <p class="car_color"  style="color: ${masin.reng};">${masin.reng}</p>
            </div>
        </div>`
    })
}
function showDetails(id){
    let carDetail = carModels.find(masin => masin.id==id)
    cars.innerHTML =`
    <div class="car_details">
        <div class="model_info">
            <i class="fa-solid fa-left-long" onclick="goBack()"></i>
            <h4 class="car_model">${carDetail.marka}  ${carDetail.model}</h4>
            <h4 class="car_year"> ${carDetail.il},</h4>
            <h4 class="engine"> ${carDetail.mator} L,</h4>
            <h4 class="car_color"> ${carDetail.reng}</h4>
        </div>
        <div class="more_info">
            <div class="model_img">
                <img src="${carDetail.img}" alt="carPhoto" onclick="showDetails(${carDetail.id})"/>
                <i class="fa-regular fa-heart" onclick="sec(this)"></i>
            </div>
            <div class="car_info">
                <h3 class="car_price">Qiymet: ${carDetail.qiymet} AZN</h3>
                <div class="car_img_small">
                    <img src="${carDetail.img}"/>
                    <div class="distrubitor">
                        <p>Bu masindan tapa bilmezsen</p>
                        <span>Resmi numeyende ozumem</span>
                    </div>
                </div>
                <button class="buy_car"><i class="fa-solid fa-phone"></i>Zeng et</button>
                <p class="detail">Masinin hec bir problemi yoxdu, sadece korpuden caya dusub.
                    Hec bir ustanin yanina aparmaga ehtiyac yoxdu, eyilib altina baxsan her sey belli olacaq!</p>
                <button class="salon">Salona kec</button>
            </div>
        </div>
    </div>`
}
function goBack(){
    showCars()
}
function sec(icon){
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
}
function markaList(){
    marka.innerHTML += `<option value="butunmodeller">Butun modeller</option>`
    carModels.forEach(element => {
        marka.innerHTML += `<option value="${element.marka}">${element.marka}</option>`
    });
}
marka.onchange = function(){
    if(marka.value=="butunmodeller") showCars(carModels);
    else{
        let markaCar = carModels.filter(item => item.marka==marka.value)
        showCars(markaCar);
    }
}
function minilSecim(){
    let iller = new Set(carModels.map(item => item.il))
    let siralanmisIller = [...iller]
    siralanmisIller.sort((a, b) => a - b);
    minIl.innerHTML += `<option value="minimumIl" disabled selected>Min. il</option>`
    minIl.innerHTML += `<option value="butuniller">Butun iller</option>`
    siralanmisIller.forEach(item => {
        minIl.innerHTML += `<option value="${item}">${item}</option>`
    })
}
function maxilSecim(){
    let iller = new Set(carModels.map(item => item.il))
    let siralanmisIller = [...iller];
    siralanmisIller.sort((a, b) => a - b);
    maxIl.innerHTML += `<option value="maximumIl" disabled selected>Max. il</option>`
    maxIl.innerHTML += `<option value="butuniller">Butun iller</option>`
    siralanmisIller.forEach(item => {
        maxIl.innerHTML += `<option value="${item}">${item}</option>`
    })
}
minIl.onchange = function(){ //! minimum maximum  filterleme duz islemir
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
maxIl.onchange = function(){ //! minimum maximum  filterleme  duz islemir
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
axtaris.oninput = function(){
    cars.innerHTML = "";
    showCars();
}
minQiymet.oninput = function(){ //! islemir
    if(minQiymet.value == "" && +minQiymet.value <= 0) {
        showCars();
        return;
    }
    else{
        carModels.filter((item) => {
            let price = Number(item.qiymet.replace(/\s/g, ""));
            return price >= +minQiymet.value && price <= +maxQiymet.value
        })
    }
}
maxQiymet.oninput = function(){ //! islemir
    if(maxQiymet.value == "" && maxQiymet.value <= 0){
        showCars();
        return;
    }
    else{
        carModels.filter(item => {
            let price = Number(item.qiymet.replace(/\s/g, ""))
            return price <= +maxQiymet.value && price >= +minQiymet.value
        })
    }
}
