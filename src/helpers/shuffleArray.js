/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + array.length));
        [array[i], array[j]] = [array[j], array[i]];
    }
}