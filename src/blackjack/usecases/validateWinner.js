/**
 * This function will evaluate who wins in the game
 * @param {number} computerPoints the number reached for the computer
 * @param {number} playerPoints the number reacher by the player
 */
export const validateWinner = (computerPoints, playerPoints)  => {
    setTimeout(() => {
        if( computerPoints === playerPoints ) {
            alert('Nobody wins');
        } else if ( playerPoints > 21 ) {
            alert('Computer wins')
        } else if( computerPoints > 21 ) {
            alert('Player wins');
        } else {
            alert('Computer wins')
        }
    }, 100 );
}