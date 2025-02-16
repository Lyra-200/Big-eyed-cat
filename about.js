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