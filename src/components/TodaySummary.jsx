
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const TodaySummary = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          <WbSunnyIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          오늘의 총평
        </Typography>
        <Typography variant="body1">
          전반적으로 좋은 기운이 흐르는 날입니다. 특히 재물운과 관계운이 좋아 새로운 사람을 만나거나 금전적 이득을 기대해 볼 수 있습니다. 다만, 감정 기복이 있을 수 있으니 마음을 차분히 다스리는 것이 좋겠습니다.
        </Typography>
        <Typography variant="h5" align="center" sx={{ mt: 2, fontWeight: 'bold', color: 'primary.main' }}>
          "새로운 인연이 행운을 가져다주는 날"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodaySummary;
