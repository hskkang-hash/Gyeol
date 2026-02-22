
import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Box, Typography, Card, CardContent } from '@mui/material';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// This function is now outside the component to ensure it's pure.
const generateChartData = () => {
  const dataValues = Array.from({ length: 5 }, () => Math.floor(Math.random() * 51) + 50); // 50-100
  const score = Math.floor(dataValues.reduce((a, b) => a + b, 0) / 5);
  return {
    score,
    data: {
        labels: ['💪 신체', '💰 재물', '❤️ 관계', '🧠 지성', '🎨 감성'],
        datasets: [
          {
            label: '오늘의 결',
            data: dataValues,
            backgroundColor: 'rgba(144, 202, 249, 0.4)',
            borderColor: '#90caf9',
            borderWidth: 2,
            pointBackgroundColor: '#90caf9',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#90caf9',
          },
        ],
      }
  }
};

const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        pointLabels: {
            font: {
                size: 14,
                weight: 'bold'
            },
            color: '#ffffff'
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#ffffff',
          beginAtZero: true,
          max: 100,
          stepSize: 20
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

const GyeolChart = () => {
  // Generate data only once on the initial render
  const [chartData] = useState(generateChartData);

  return (
    <Card sx={{ background: 'none', boxShadow: 'none' }}>
      <CardContent sx={{ position: 'relative', height: '400px', textAlign: 'center' }}>
          <Typography variant="h2" component="div" sx={{ mb: 1, fontWeight: 'bold', color: 'primary.main' }}>
            {chartData.score}%
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary'}}>
            오늘은 결이 맑은 날! 새로운 도전을 해보세요.
          </Typography>
        <Radar data={chartData.data} options={options} />
      </CardContent>
    </Card>
  );
};

export default GyeolChart;
