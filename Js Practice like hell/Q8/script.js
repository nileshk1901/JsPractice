var input = document.querySelector("input");

var data = [
    {
        name: "harh",
       imgSrc:" https://plus.unsplash.com/premium_photo-1696949706250-90624f778f6c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "harhi",
        imgSrc: "https://plus.unsplash.com/premium_photo-1696949706250-90624f778f6c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "harhit",
        imgSrc: "https://plus.unsplash.com/premium_photo-1696949706250-90624f778f6c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "harhita",
        imgSrc: "https://plus.unsplash.com/premium_photo-1696949706250-90624f778f6c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

]

var pers="";
data.forEach(function (elem) {
     pers+=` <div class="person">
                <div class="img">
                    <img src="${elem.imgSrc}">
                     

                </div>
                <h2 >${elem.name}</h2>
               
            </div>`
})
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
   var startingwith= data.filter(function (e) {
        return e.name.startsWith(input.value);
    })
    var newPeople = "";
    startingwith.forEach(function (elem) {
			newPeople += ` <div class="person">
                <div class="img">
                    <img src="${elem.imgSrc}">
                     

                </div>
                <h2 >${elem.name}</h2>
               
            </div>`;
    });
    document.querySelector(".people").innerHTML = newPeople;

})