/**
 * This function create a HTMLImageElement given a card value
 * @param {string} card card to be create
 * @param {HTMLElement} divToInsertCard div to insert the new card created
 */
export const createCardHTML = ( card, divToInsertCard ) =>{
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`; 
    imgCard.classList.add('carta');
    divToInsertCard.append( imgCard );
}