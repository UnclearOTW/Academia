
        const menu    =document.querySelector('.nav-links');
        const burguer =document.querySelector('.burguer');
        const linha1  =document.querySelector('#linha1');

        burguer.addEventListener('click',()=>{
            console.log(menu);
            menu.classList.toggle('nav-active');
            linha1.classList.toggle('linha1-active');
        });
        

        
       
