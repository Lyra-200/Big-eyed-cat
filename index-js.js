/* Picture switching */
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}



/* light dark mode swtich */
function changeMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}




/* return top */
window.onload = function(){
    var topbtn = document.getElementById("top-btn");
    var pagelookheight = document.documentElement.clientHeight;

    window.onscroll=function(){
        var backtop=document.body.scrollTop;
        if (backtop>=pagelookheight){
            topbtn.style.display="none";
        }else{
            topbtn.style.display="block";
        }
    }
}





