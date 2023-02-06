//This class deals with creating the Collatz Sequence and Adding it to the Chart

//The Collatze Array is constructed from an initial value entered by the user
function constructArray(value){
    collatzArray = []

    //Keep adding to the array as long as the value hasnt reached one
    while (value != 1){

        //Push curent value to array
        collatzArray.push(value);

        //If value divides into two evenly
        if ((value % 2) == 0){
            value = value/2;
        }

        //If not multiply by 3 and add 1
        else{
            value = (3*value) + 1;
        }
    }

    //Add the last value of 1 to the array
    collatzArray.push(1);

    //Reverse the order of the array so that the results can be showed upwards to 1 on the graph
    //alert(collatzArray.reverse()); I have removed this and I dont rememeber why I put it in
    return collatzArray.reverse();
}

//Creates an array that is the length of the collatzArray but from 1 to the length of the colaltzArray for graphing use
function arrayOfIndexes(array){
    indexArray = [];
    for(let i = 1; i < (array.length + 1); i++){
        indexArray.push(i);
    }
    return indexArray;
}

//When User uses the autogenerate value of 10
function textValue(){

    //Update input box value to 10
    document.getElementById("initialValue").value = 10;

    //Simulate the click at the button location
    document.getElementById('button').click();
}

//When button is clicked the value from the input box is called
document.getElementById('button').addEventListener('click', function(){

    initialValue = document.getElementById("initialValue").value;

    //Create new Dataset that has:
    var newDataset = {

        //Label
        label: initialValue + ' Colletz Set',

        //Random Colors and 1 width
        backgroundColor: random_rgba(),
        borderColor: random_rgba(),
        borderWidth: 1,

        //A Constructed Array using the value called form the input box and formulated using the constructArray function
        data: constructArray(initialValue),
    }

    //Push dataset to the graph
    data.datasets.push(newDataset);

    //If the size of the consructedArray is greater that of the current largest array update the size of the graph axis to the new Label
    if (constructArray(initialValue).length > data.labels.length){

        //New label is now the indexs array of the constructedArray
        data.labels = arrayOfIndexes(constructArray(initialValue));
    }
    

    //Update Chart
    myChart.update();
});

//Random RGBA function where A is always 1
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
}
