

class Common {


    static getEqualRow = ( arr, rowSize ) => {

        const len = arr.length
        let i = 0, j = 0;
        let detectFlag = false;
        let equals = []
        while ( i < rowSize && !detectFlag) {
            j = i
            equals = []
            while ( j < len ) {
                if ( arr[j] )
                    equals.push(j)
                else {
                    equals = []
                    break
                }
                j = j + rowSize
            }
            if ( equals.length === rowSize )
                detectFlag = true
            i = i + 1
        }
        return equals
    }


    static getEqualColumn = ( arr, rowSize ) => {

        let i = 0, j = 0;
        let detectFlag = false;
        let equals = []

        while ( i < rowSize && !detectFlag) {
            j = i * rowSize
            equals = []
            while ( j < (i + 1) * rowSize ) {
                if ( arr[j] )
                    equals.push(j)
                else {
                    equals = []
                    break
                }
                j = j + 1
            }
            if ( equals.length === rowSize )
                detectFlag = true
            i = i + 1
        }
        return equals

    }


    static getEqualDiagonal = ( arr, rowSize ) => {

        const len = arr.length
        let i = 0;
        let mainDiagonal = []
        let antiDiagonal = []

        //Checking mid element in odd row sizes
        if (len % 2 === 1 && !arr[(len - 1) / 2])
            return []

        //Checking main diagonal
        while ( i < len ) {
            if ( arr[i] )
                mainDiagonal.push(i)
            else {
                mainDiagonal = []
                break
            }
            i = i + ( rowSize + 1 )
        }

        //Checking anti-diagonal
        i = rowSize - 1
        while ( i < len - rowSize + 1 ) {
            if ( arr[i] )
                antiDiagonal.push(i)
            else {
                antiDiagonal = []
                break
            }
            i = i + ( rowSize - 1 )
        }

        return [].concat(mainDiagonal,antiDiagonal)
    }


     static getEqualElementsIndex = ( arr, rowSize ) => {

        const indexes = [].concat(
            Common.getEqualColumn(arr, rowSize),
                Common.getEqualRow(arr, rowSize),
                    Common.getEqualDiagonal(arr, rowSize)
        );

        return [...new Set(indexes)]
    }


    static getPatternDetectedArray = (arr, rowSize ) => {
        const len = arr.length
        let i = 0
        const indexes = Common.getEqualElementsIndex(arr, rowSize)
        const detectedElements = Array(len).fill(false)
        while ( i < indexes.length ) {
            detectedElements[indexes[i]] = true
            i = i + 1
        }

        return detectedElements
    }

}

export { Common };