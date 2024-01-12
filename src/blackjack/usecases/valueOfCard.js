/**
 * This function return the value of a given card
 * @param {string} card the card to get the value
 * @returns {number} the value of a given card
 */
export const valueOfCard = ( card ) => {

    if (card == undefined) throw 'A card is expected but nothing was given';

    const valor = card.substring(0, card.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
            
}
