//This Class Deals with the general Display Properties of the Chart from Chart JS

//Inital Labels for the graph so it looks blank to start
const baseLabels = [1,2,3,4,5]

//First dataset added to the graph with no data present so there is a blank slate
const data = {
    labels: baseLabels,
    datasets: [{
        label: 'Base Set',
        axis: 'y',
        data: null,
        fill: false,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
        ]
    }]
};

//Canvas is assinged to ctx
const ctx = document.getElementById('myChart').getContext('2d');


//Chart is created
const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAt: false
            },

        },
        legend:{
            display:false
        },
        plugins:{
            tooltip:{
                enabled: true,

            }
        }
    }
});