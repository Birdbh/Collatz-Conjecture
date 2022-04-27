function constructArray(value){
    collatzArray = []
    while (value != 1){
        collatzArray.push(value);
        if ((value % 2) == 0){
            value = value/2;
        }
        else{
            value = (3*value) + 1;
        }
    }

    collatzArray.push(1);

    return collatzArray.reverse();
}

function arrayOfIndexes(array){
    indexArray = [];
    for(let i = 1; i < (array.length + 1); i++){
        indexArray.push(i);
    }
    return indexArray;
}

function textValue(){
    document.getElementById("initialValue").value = 10;
    document.getElementById('button').click();
}

document.getElementById('button').addEventListener('click', function(){

    initialValue = document.getElementById("initialValue").value;
    var newDataset = {
        label: initialValue + ' Colletz Set',
        backgroundColor: random_rgba(),
        borderColor: random_rgba(),
        borderWidth: 1,
        data: constructArray(initialValue),
    }

    data.datasets.push(newDataset);
    
    determineNewLabel(initialValue);

    myChart.update();
});

function determineNewLabel(initialValue){
    let newLabel = arrayOfIndexes(constructArray(initialValue));
    if (newLabel.length > data.labels.length){
        data.labels = newLabel
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}
