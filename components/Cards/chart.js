import { useEffect } from "react";
import { Chart, initTE } from "tw-elements"

const ChartComponent = () => {
    initTE({ Chart });

    const dataDoughnut = {
        type: 'doughnut',
        data: {
            labels: ['Remaining Budget', 'YTD Spent', 'Projected Spending'],
            datasets: [
                {
                    label: 'Hardware Assets',
                    data: [75000, 9465, 25000],
                    backgroundColor: [
                        "rgba(139, 195, 74, 0.5)",
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                      ],
                      borderColor: [
                        "rgba(139, 195, 74, 1)",
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                      ],
                      borderWidth: 3,
                },
            ],
        },
        
    };

    useEffect(() => {        
        new Chart(document.getElementById('doughnut-chart'), dataDoughnut)
        
    })
    return (<>
        <div className="w-4/5 pt-3 mx-auto overflow-hidden">
            <canvas id="doughnut-chart"></canvas>
        </div>
    </>)
}

export default ChartComponent