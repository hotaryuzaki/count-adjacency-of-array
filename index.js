let A = [1,1,0,1,0,0,0,1,0,0];

const angkaSama = (arr) => {
    if (arr.length > 0 && arr.length < 1001) {
        let prevValue = 0;
        let countLoop = 0;
        let countSama = 0;

        arr.map((value, index) => {
            if (prevValue === value) {
                countLoop++;
            }
            else if (prevValue !== value) {
                if (countLoop > 1) countSama += countLoop;
                countLoop = 1;
            }

            prevValue = value;
            if (index === arr.length - 1) countSama += countLoop;
        })

        return countSama;
    }

    return false;
}

const coin = angkaSama(A);
console.log("Adjacency coin is", coin);
