function freeTrial(){
    alert("Welcome! Your free trial starts here.");
}


function learn(){
    alert("More Salesforce features coming soon!");
}


let demo = document.querySelector("#btn2");

demo.addEventListener("click",function(){
document.querySelector("#page2").scrollIntoView({
behavior:"smooth"
});

});

let topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function(){
    if(window.scrollY>300){
        topBtn.style.display="block";
        } else{
            topBtn.style.display="none";
        }
    });

topBtn.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

