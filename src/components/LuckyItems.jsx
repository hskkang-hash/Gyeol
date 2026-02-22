
import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';

const LuckyItems = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          <DiamondIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          행운 아이템
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label="파란색 셔츠" color="primary" />
          <Chip label="금속 액세서리" color="secondary" />
          <Chip label="숫자 7" color="success" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LuckyItems;
