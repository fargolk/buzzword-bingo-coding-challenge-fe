
class Random {

    /*
    * Inputs:
    *   size => size of expected random array
    *   maxLimit => maximum possible value of the expected random value
    * Output/s:
    *   an array of random unique numbers between 0 and maxLimit
    */
    static getUniqueElementArr = (size, maxLimit) => {
        const array = []
        while (array.length < size) {
            const randomNum = Math.floor(Math.random() * maxLimit) + 1;
            if (array.indexOf(randomNum) === -1)
                array.push(randomNum)
        }
        return (array)
    }

}
export {Random} ;