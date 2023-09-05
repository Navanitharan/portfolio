$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar') .addClass("sticky");
            
        }
        else{
            $('.navbar') .removeClass("sticky");
        }
    })

    // toggle menu/navigation script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    ///////
    $('.card').on('click',function(){
        alert("under maintance");
    })

    var typed = new Typed(".typing",{
        strings: ["FullStack Developer","Software Developer","learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["FullStack Developer","Software Developer","learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
})