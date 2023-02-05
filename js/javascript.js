//Repositorio
$('.btn-repositorio').on("click",function(){
    window.open('https://www.github.com/LissaiDev', 'LissaiDev - Repository')
})

//Show
$(document).ready(()=>{
    setTimeout(()=>{
        $('#show').animate({
            'opacity' : 1
        },'slow')
    },500)
})

//Links
$('#quem-sou-eu').hover(
    ()=>{
        $('#head-sobre').css('color','#2d3411')
},
    ()=>{
        $('#head-sobre').css('color','#607026')
})

$('#tools').hover(
    ()=>{
        $('#head-tools').css('color','#2d3411')
},
    ()=>{
        $('#head-tools').css('color','#607026')
})

$('#projectos').hover(
    ()=>{
        $('#head-projectos').css('color','#2d3411')
},
    ()=>{
        $('#head-projectos').css('color','#607026')
})

$('#fale-comigo').hover(
    ()=>{
        $('#head-contactos').css('color','#2d3411')
},
    ()=>{
        $('#head-contactos').css('color','#607026')
})

//Barra de navegacao
$(document).scroll(()=>{
    if($(document).scrollTop()== 0){
        if($('header').hasClass('white')){
            $('header').removeClass('white shadow-sm')
        }
        $('header').addClass('notWhite')
    }else{
        if($('header').hasClass('notWhite')){
            $('header').removeClass('notWhite')
        }
        $('header').addClass('white shadow-sm')
    }
})


//Contacte-me
$('.whatsapp').click(function(){
    window.location.href='https://wa.me/qr/SG5NKGININPXA1'
})


//Appear

let $target = $('.hide')
    animationClass = 'appear'
    offset = $(window).height() * 3/4;

function hideScroll(){
    let documentTop = $(document).scrollTop();
    $target.each(function(){
        let itemTop = $(this).offset().top;
        console.log(itemTop)
        if(documentTop > itemTop - offset){
            $(this).addClass(animationClass)
            console.log('add class')
        }else{
            $(this).removeClass(animationClass)
        }
    })
}

$(document).scroll(()=>{
    
hideScroll()
})