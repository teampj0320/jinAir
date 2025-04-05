import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  const generateLabels = () => {
    const labels = [];
    const startDate = new Date(2025, 3, 2); // 2025년 4월 2일
    const endDate = new Date(2025, 4, 2); // 2025년 5월 2일

    while (startDate <= endDate) {
      const day = String(startDate.getDate()).padStart(2, '0'); // 날짜 두 자릿수로
      const month = String(startDate.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
      labels.push(`${month}/${day}`);
      startDate.setDate(startDate.getDate() + 1); // 하루씩 증가
    }

    return labels;
  };
  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: '# 최저가',
        data: [198000, 184020, 168150, 80470, 118860, 74850, 203420, 249540, 121090, 188170, 142550, 167860, 200440, 167510, 109410, 148190, 58230, 229490, 58960, 144850, 108120, 71990, 180940, 92120, 150440, 98270, 198000, 180410, 171000, 173710, 214460]
        ,
        backgroundColor: [ 
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [ 
          'rgba(75, 192, 192, 1)' 
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;