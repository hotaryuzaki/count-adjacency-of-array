# adjacency-array-of-coin
count number of adjacency value of coin from array

#### FUNCTIONS
you can copy this or download from index.js

```
let A = [1,1,0,1,0,0,0,1,0,0];

const angkaSama = (arr) => {
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

const coin = angkaSama(A);
console.log("Adjacency coin is", coin);
```

### DEMO
just copy this to HTML file

```
<!DOCTYPE html>
<html>
<body>

<h2>Count Adjacency in array</h2>

<button type="button" onclick="lari(document.getElementById('demo').innerHTML)">
  Count Adjacency
</button>

<p id="demo">result here</p>

<script>
let A = [1,1,0,1,0,0,0,1,0,0];

const angkaSama = (arr) => {
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

const coin = angkaSama(A);

function lari(text) {
    document.getElementById('demo').innerHTML = "Adjacency coin is " + coin;
}
</script>
</body>
</html> 
```
