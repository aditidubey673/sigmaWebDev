function createcard(title,cName,views,monyhsOld,duration,thumbnail){
    let viewsstr="";
    if(views>1000000){
        viewsstr=(views/1000000).toFixed(1)+"M"
    }else{
         viewsstr=views.toString()
    }
let html=` <div class="container">
         <div class="card">
              <div class="image">
                <img src="https://vq.pe/creator/frontend/img/29/1751711911-capture-decran-2024-06-12-121643-6669b3257cca8.png" alt="">
                <div class="capsule">${duration}</div>
              </div>
              <div class="text">
                <h1>${title}</h1>
                <p>${cName}.${viewsstr} views.${monyhsOld} Months ago</p>
              </div>
         </div>
    </div>`
    document.querySelector(".container").innerHTML+=html;
}

createcard("Introduction","code",560000,7,"31:22","https://vq.pe/creator/frontend/img/29/1751711911-capture-decran-2024-06-12-121643-6669b3257cca8.png")