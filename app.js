

let link = document.getElementById('firstname');

let tituloCard = document.getElementById('lastname');

let textCard = document.getElementById('email');

let criar = document.getElementById('submit');

let cardFlex = document.getElementById('cardflex');

let principal = document.getElementById('principal');


function criarCard(){



    if( link.value !== '' &&  tituloCard.value !== '' && textCard.value !== ''){

        const criarCarddd = `


            <div class='cardNew'>
                <img src="${link.value}" class="img_card" alt="imagem card">
                <h3 class="titulo"> ${tituloCard.value} </h3>
                <p class="texto">${textCard.value}</p>        
            </div>
    
        `

        cardFlex.innerHTML += criarCarddd;
        cardFlex.style.overflow = "hidden";
        cardFlex.style.overflowX = "scroll";
        cardFlex.style.width ="70vw";
        principal.style.justifyContent = "space-around";
        principal.style.height = "auto";
        
    } else{

        alert("Por favor preencha todos os campos!");
    }


}



criar.addEventListener('click', criarCard);