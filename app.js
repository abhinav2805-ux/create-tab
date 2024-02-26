let arr =[
    "Home" , "Abouts" , "Blogs" , "Contact us" 

];
let brr =[
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit tempore exercitationem provident molestiae quo non nostrum ipsum quia voluptatem placeat autem perspiciatis rem vitae earum, incidunt quam porro corrupti." , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit tempore exercitationem provident molestiae quo non nostrum ipsum quia voluptatem placeat autem perspiciatis rem vitae earum, incidunt quam porro corrupti." , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit tempore exercitationem provident molestiae quo non nostrum ipsum quia voluptatem placeat autem perspiciatis rem vitae earum, incidunt quam porro corrupti." , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet fugit tempore exercitationem provident molestiae quo non nostrum ipsum quia voluptatem placeat autem perspiciatis rem vitae earum, incidunt quam porro corrupti." 

];
function call(id){

    var miniTabs = document.querySelectorAll('.mini');
    var activeTab = document.querySelector('.mini.active');

    if (activeTab) {
        activeTab.classList.remove('active');
    }

    document.getElementById(id).classList.add('active');

    document.querySelector(".title").innerHTML = arr[id];
    document.querySelector(".area").innerHTML = brr[id];
}
