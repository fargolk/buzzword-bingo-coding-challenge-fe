

class Common {


    static getEqualRow = ( arr, rowSize, idx ) => {

        const rowNum = Math.floor(idx / rowSize)
        let i = rowNum * rowSize;
        let equals = []
        while ( i < ( rowNum + 1) * rowSize ) {
            if (!arr[i]) {
                equals = []
                break;
            }
            equals.push(i)
            i = i + 1
        }
        return equals

    }

    static getEqualColumn = ( arr, rowSize, idx) => {

        const len = arr.length
        let i = idx % rowSize
        let equals = []
        while ( i < len ) {
            if (!arr[i]) {
                equals = []
                break;
            }
            equals.push(i)
            i = i + rowSize
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


     static getEqualElementsIndex = ( arr, rowSize, idx ) => {

        const indexes = [].concat(
            Common.getEqualColumn(arr, rowSize, idx),
                Common.getEqualRow(arr, rowSize, idx),
                    Common.getEqualDiagonal(arr, rowSize, idx)
        );

        return [...new Set(indexes)]
    }


    static getDetectedPatternIndexes = (arr, rowSize, idx ) => {
        const len = arr.length
        let i = 0
        const indexes = Common.getEqualElementsIndex(arr, rowSize, idx)
        const detectedElements = Array(len).fill(false)
        while ( i < indexes.length ) {
            detectedElements[indexes[i]] = true
            i = i + 1
        }

        return detectedElements
    }

}

export { Common };