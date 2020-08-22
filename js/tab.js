var tabs= document.querySelectorAll(".tabs-nav li");
var tab_panel = document.querySelectorAll(".tab-panel");

tabs.forEach(function(tab,tab_index){
    tab.addEventListener("click",function(){
        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })
        tab.classList.add("active");
        tab_panel.forEach(function(content,content_index){
            if(content_index == tab_index){
                content.style.display ="block";
            }
            else{
                content.style.display = "none";
            }
        })
    })
})