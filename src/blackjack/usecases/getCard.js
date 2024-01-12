
/**
 * This function return a card given a deck
 * @param {Array<string>} deck deck of cards in game
 * @returns {string} card to return
 */
export const getCard = (deck) => {

    if ( deck == undefined ) throw 'The function expected a deck but nothing is given';
    if ( deck.length === 0 ) throw 'There is no cards in the deck';
    const card = deck.pop();
    
    return card;
}