export const TailwindHelper = {
    makeRows(num: number) {
        switch(num) {
            case 1:
                return 'row-span-1'
                
            case 2:
                return 'row-span-2'
                
            case 3:
                return 'row-span-3'
                
            case 4:
                return 'row-span-4'
                
            case 5:
                return 'row-span-5'
                
            case 6:
                return 'row-span-6'
                
            case 7:
                return 'row-span-7'
                
            case 8:
                return 'row-span-8'
                
            case 9:
                return 'row-span-9'
                
            case 10:
                return 'row-span-10'
                
            case 11:
                return 'row-span-11'
                
            case 12:
                return 'row-span-12'
            default:
                throw 'Invalid grid column count'
        }
    },
    makeGrid(num: number) {
        switch(num) {
            case 1:
                return 'grid grid-cols-1'
                
            case 2:
                return 'grid grid-cols-2'
                
            case 3:
                return 'grid grid-cols-3'
                
            case 4:
                return 'grid grid-cols-4'
                
            case 5:
                return 'grid grid-cols-5'
                
            case 6:
                return 'grid grid-cols-6'
                
            case 7:
                return 'grid grid-cols-7'
                
            case 8:
                return 'grid grid-cols-8'
                
            case 9:
                return 'grid grid-cols-9'
                
            case 10:
                return 'grid grid-cols-10'
                
            case 11:
                return 'grid grid-cols-11'
                
            case 12:
                return 'grid grid-cols-12'
            default:
                throw 'Invalid grid column count'
        }
    },

    makeGridCol(num: number) {
        switch(num) {
            case 1:
                return 'col-span-1'
                
            case 2:
                return 'col-span-2'
                
            case 3:
                return 'col-span-3'
                
            case 4:
                return 'col-span-4'
                
            case 5:
                return 'col-span-5'
                
            case 6:
                return 'col-span-6'
                
            case 7:
                return 'col-span-7'
                
            case 8:
                return 'col-span-8'
                
            case 9:
                return 'col-span-9'
                
            case 10:
                return 'col-span-10'
                
            case 11:
                return 'col-span-11'
                
            case 12:
                return 'col-span-12'
            default:
                throw 'Invalid grid column count'
        }
    }
}

