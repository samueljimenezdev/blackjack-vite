import { shuffle as _shuffle } from 'underscore';

/**
 * This function will create a deck of cards
 * @param {Array<string>} typeOfCards  basic types of cards ['C','D','H','S']
 * @param {Array<string>} typesOfSpecialCards special types of cars ['A','J','Q','K']
 * @returns {Array<string} return the deck of cards
 */
export const createDeck = (typeOfCards, typesOfSpecialCards) => {

    if ( typesOfSpecialCards == undefined ||  typesOfSpecialCards.length === 0) throw new Error('The createDeck function expected a valide array');
    if (typeOfCards == undefined || typeOfCards.length === 0) throw new Error('The createDeck function expected a valide array');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let type of typeOfCards ) {
            deck.push( i + type);
        }
    }

    for( let tipo of typeOfCards ) {
        for( let special of typesOfSpecialCards ) {
            deck.push( special + tipo);
        }
    }
    deck = _shuffle( deck );
    return deck;
}


