document.addEventListener(
    'DOMContentLoaded',function (){
    const header=document.querySelector('.header');
    // console.log(header);

        function toggleHeaderTransparncy(){
            // console.log(window.scrollY);
            if(window.scrollY > 0){
                header.classList.add('transparent');
            }else{
                header.classList.remove('transparent');
            }
        }
        window.addEventListener('scroll',toggleHeaderTransparncy)

});