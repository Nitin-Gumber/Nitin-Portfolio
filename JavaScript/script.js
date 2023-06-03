// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle')
//     });

// });

function openMenu(){
    const hambar= document.getElementById("hambar");
    if(hambar.style.display==="flex"){
    hambar.classList.add('hidden')
    }
    else{
        hambar.classList.remove('hidden')
    }
    }