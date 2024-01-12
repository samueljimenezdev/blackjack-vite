import { getCard, valueOfCard, createCardHTML, validateWinner } from ".";

/**
 * This function do the computer turn.
 * @param {number} puntosMinimos the number of minimum points to reach.
 * @param {Array<string>} deck the deck in game.  
 * @param {HTMLElement} puntosHTML the HTMLElement to change with the current score. 
 * @param {HTMLElement} divComputerCards the HTMLElement to add the new image of a card.
 */
export const computerTurn = ( minimumPoints, deck, puntosHTML, divComputerCards ) => {

    if (!minimumPoints) throw new Error('Is necessary puntosMinimos parameter');
    if (!deck || deck.length == 0) throw new Error('Is necessariy a valide deck');

    let computerPoints = 0;
    do {

        const card = getCard(deck);

        computerPoints += valueOfCard( card );
        puntosHTML.innerText = computerPoints;
    
        createCardHTML(card, divComputerCards);

        if( minimumPoints > 21 ) {
            break;
        }

    } while(  (computerPoints < minimumPoints)  && (minimumPoints <= 21 ) );

    validateWinner(computerPoints, minimumPoints);
}

