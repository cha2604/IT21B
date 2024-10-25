const DATA_COUNT = 7;
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels: labels,
    datasets: [
        {
          label: 'Monthly Sales',
          data: [20, 50, 30, 90, 40, 60, 70],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgb(255, 119, 183)',
          borderWidth: 2,
        },
        {
          label: 'Monthly Salary',
          data: [30, 20, 50, 40, 50, 80, 90],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
        
        }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales and Salary Line Chart'
            }
        },
        scales: {
            y: {
                suggestedMin: 30,
                suggestedMax: 50,
            }
        }
    },
};

const myChart = new Chart( document.getElementById('myChart'), config
);