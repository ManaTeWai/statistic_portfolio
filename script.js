const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель'],
        datasets: [{
            label: 'Компания 1',
            data: [6, 7, 5, 3],
            backgroundColor: [
                'rgb(91%, 40%, 19%, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Компания 2',
            data: [10, 13, 12, 11],
            backgroundColor: [
                'rgb(73%, 63%, 63%, 1)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },
        {
            label: 'Компания 3',
            data: [7, 10, 8, 7],
            backgroundColor: [
                'rgb(100%, 100%, 100%, 1)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        responsive: false,
        scales: {
            x: {
                ticks: {
                    color: "white"
                }
            },
            y: {
                ticks: {
                    color: "white"
                }
            }
        },
        plugins: {
            legend: {
                position: "left",
                align: "center",
                labels: {
                    color: "white",
                }
            }
        }
    }
    
});

const ctx1 = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Московская область', 'Воронежская область', 'Новгородская область', 'Ленинградская область', 'Ставропольский край', 'Краснодарский край', 'Республика Калмыкия', 'Республика Ингушетия'],   
        datasets: [{
            label: 'Колличество релевантных предприятий',
            data: [79, 58, 92, 70, 40, 87, 67, 75],
            backgroundColor: [
                '#F05A1C'
            ],
            borderColor: [
                '#F05A1C'
            ],
            borderWidth: 1
        }
    ]
    },
    options: {
        indexAxis: 'y',
        responsive: false,
        scales: {
            x: {
                min: 0,
                max: 100,
                ticks: {
                    color: "white",
                    stepSize: 10,
                }
            },
            y: {
                ticks: {
                    color: "white",
                }
            }
        },
        plugins: {
            legend: false
        }
    }
});