//Start header scripting
let icon= document.querySelector('.soluttion');

let solutionMenu= document.querySelector('.solution-menu');
icon.addEventListener("click", function(){
    solutionMenu.classList.toggle("dropMenuSolution");
    ressourcesMenu.classList.remove('dropMenuRessources');
    ressources.classList.remove('rotation');
    icon.classList.toggle('rotation');
});


let ressources= document.querySelector('.ressources');
let ressourcesMenu = document.querySelector('.ressources-menu');
ressources.addEventListener("click", function(){
    ressourcesMenu.classList.toggle('dropMenuRessources');
    ressources.classList.toggle('rotation');
    solutionMenu.classList.remove("dropMenuSolution");
    icon.classList.remove('rotation');
});

//End header scripting

// Start tab scripting

let links = document.querySelectorAll('.links a');

links.forEach(function(ele){
ele.addEventListener("click", function(event){
event.preventDefault();
// removing the class from all links
links.forEach(function(ele){
    ele.classList.remove("active");
});
// adding the class for each link when clicked
this.classList.add("active")
});
});



let checkout= document.querySelectorAll('.out');
links.forEach(function(ele){
 ele.addEventListener('click', function(){     //adding the claslist display none for all checkouts
    checkout.forEach(function(ele){
        ele.style.display='none';
    });

    let target= this.getAttribute('data-target');
    document.getElementById(target).style.display='block';
});
});

// End tab scripting


// Start  questions scripting
let question = document.querySelectorAll('.question');
let paragraphs = document.querySelectorAll('.questions .container .para');
let icons=  document.querySelectorAll('.questions i');


question.forEach(function(ele){
    ele.addEventListener("click", function(){
        paragraphs.forEach(function(ele){
            ele.style.display='none';
        });
        
        let data = this.getAttribute('data');
        document.getElementById(data).classList.toggle('toggleQuestions');
    });
});

// End questions scripting

// Start scripting fixed Buttons

let buttons = document.querySelector(' .fixedIcons');

window.addEventListener('scroll', function(){

    if(window.scrollY>1000){
        buttons.style.display='flex';
    } else {
        buttons.style.display='none';
    }
});



let chatInterface= document.querySelector('.chat-interface');
let chatIcon= document.querySelector(' .fixedIcons .fa-message')

chatIcon.addEventListener("click", function(){
    chatInterface.classList.toggle('chatDisplay')
})

let cookieInterface= document.querySelector('.cookieInterface');
let cookbtn= document.querySelector('.cookbtn');
body=document.querySelector('body')

cookbtn.addEventListener("click", function(){
    cookieInterface.classList.toggle('cookieDisplay');
    body.classList.toggle('BodyBgColor')
})


// End scripting fixed Buttons

// drop menu for the mobile 

let burger= document.querySelector('.burger');
let mobileNavigation= document.querySelector('.mobile-nav');


burger.addEventListener('click', function(){

mobileNavigation.classList.toggle('classlistNavMobile');
});

let sltion= document.querySelector('.sltion');
let list= document.querySelector('.solutionUL');
let slt = document.querySelector('.slt')
let rsc= document.querySelector('.rsc');
slt.addEventListener('click', function(){
list.classList.toggle('classlistSolution');
listt.classList.remove('classlistSolution');
sltion.classList.toggle('rotation')
});


let listt= document.querySelector('.ressourcesUL');
let sltt= document.querySelector('.sltt')
sltt.addEventListener('click', function(){
    listt.classList.toggle('classlistSolution');
    list.classList.remove('classlistSolution');
    rsc.classList.toggle('rotation');
    });


let navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(ele){
ele.addEventListener('click', function(event){
event.preventDefault('');
});
});






