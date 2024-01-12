import { valueOfCard, getCard, createDeck, computerTurn, createCardHTML } from './usecases/';

const typesOfCards      = ['C','D','H','S'];
const typesOfSpecialCards = ['A','J','Q','K'];

let puntosJugador = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

let deck = createDeck(typesOfCards, typesOfSpecialCards);


btnPedir.addEventListener('click', () => {

    const card = getCard(deck);
    
    puntosJugador = puntosJugador + valueOfCard( card );
    puntosHTML[0].innerText = puntosJugador;
    

    createCardHTML(card, divCartasJugador);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerTurn( puntosJugador, deck, puntosHTML[1], divCartasComputadora );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerTurn( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    computerTurn( puntosJugador, deck, puntosHTML[1], divCartasComputadora );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck(typesOfCards,typesOfSpecialCards);

    puntosJugador     = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
