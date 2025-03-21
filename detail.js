let carDetail = document.querySelector("#carDetail");
showCarDetails()
function showCarDetails(){
    let params = new URLSearchParams(window.location.search)
    let id = params.get('id');
    let car = carModels.find(item => item.id == id);        
    let wishlist = JSON.parse(localStorage.getItem("wishCarList")) || [];
    let isInWishlist = wishlist.some(item => item.id == car.id);
    carDetail.innerHTML = `
        <div class="car_details">
            <div class="model_info">
                <i class="fa-solid fa-left-long text-2xl" onclick="goBack()"></i>
                <div class="flex">
                    <h4 class="car_model">${car.marka} ${car.model}</h4>
                </div>
                <div class="flex">
                    <h4 class="car_year"> ${car.il},</h4>
                    <h4 class="engine"> ${car.mator} L,</h4>
                    <h4 class="car_color"> ${car.reng}</h4>
                </div>
            </div>
            <div class="more_info flex justify-between gap-5">
                <div class="model_img lg:w-[60%] sm:w-[90%]">
                    <img class="w-full object-cover rounded-3xl" src="${car.img}" alt="carPhoto"/>
                    <i id="heart-icon-${car.id}" class="${isInWishlist ? 'fa-solid' : 'fa-regular'} fa-heart" onclick="sec(${car.id})"></i>
                </div>
                <div class="more_details rounded-3xl lg:w-[35%] sm:w-[90%] p-5">
                    <h3 class="car_price">Qiymet: ${car.qiymet} AZN</h3>
                    <div class="car_img_small">
                        <img class="" src="${car.img}"/>
                        <div class="distrubitor ">
                            <p>Bu masindan tapa bilmezsen</p>
                            <span>Resmi numeyende ozumem</span>
                        </div>
                    </div>
                    <button class="buy_car bg-lime-500"><i class="fa-solid fa-phone"></i>Zeng et</button>
                    <p class="detail">Masinin hec bir problemi yoxdu, sadece korpuden caya dusub.
                        Hec bir ustanin yanina aparmaga ehtiyac yoxdu, eyilib altina baxsan her sey belli olacaq!</p>
                    <button class="add_to_card">Add to Card</button>
                </div>
            </div>
        </div>`
}
function sec(id) {
    let wishlist = JSON.parse(localStorage.getItem("wishCarList")) || [];
    let wishCar = carModels.find(item => item.id == id);
    let whisListVarsa = wishlist.some(item => item.id == id);
    const heartIcon = document.querySelector(`#heart-icon-${id}`);
    if (!whisListVarsa) {
        wishlist.push(wishCar);
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
    } else {
        wishlist = wishlist.filter(item => item.id != id);
        heartIcon.classList.remove("fa-solid");
        heartIcon.classList.add("fa-regular");
    }
    localStorage.setItem("wishCarList", JSON.stringify(wishlist));
    showCarDetails()
}    
function goBack(){
    window.location.href = "https://turbo-az-two.vercel.app/"
}