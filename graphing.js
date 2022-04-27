
const baseLabels = [1,2,3,4,5]
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

const ctx = document.getElementById('myChart').getContext('2d');

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