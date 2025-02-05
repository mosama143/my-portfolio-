var typed = new Typed(".textt", { 
    strings: ["Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.cardd');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) { // يمكنك تعديل المسافة حسب الحاجة
            element.classList.add('animat');
        }
    });
})


document.addEventListener("scroll", function () {
    const elements = document.querySelectorAll('.red');
    const windowHeight = window.innerHeight;

    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) { // يمكنك تعديل المسافة حسب الحاجة
            element.classList.add('animat');
        }
    });
})



// document.addEventListener("DOMContentLoaded", function () {
//     // تشغيل الكود عند التمرير
//     document.addEventListener("scroll", function () {
//       const progressBars = document.querySelectorAll(".bar");
//       const windowHeight = window.innerHeight;
  
//       progressBars.forEach(function (bar) {
//         const elementPosition = bar.getBoundingClientRect().top;
  
//         if (elementPosition < windowHeight ) { // العنصر دخل الشاشة
//           const progressValue = bar.getAttribute("data-progress"); // جلب النسبة
//           bar.style.width = progressValue; // تغيير العرض
//         }
//       });
//     });
//   });
  


document.addEventListener("DOMContentLoaded", function ()
{

    document.addEventListener("scroll",function(){

        const progress_bar=document.querySelectorAll(".bar");

        const windo_hight= window.innerHeight;
        progress_bar.forEach(function (bar){
            
            const element_postion=bar.getBoundingClientRect().top;
            if(element_postion < windo_hight){

                bar.style.width= bar.getAttribute("data-progress") ;

            }

        });


    });


});







