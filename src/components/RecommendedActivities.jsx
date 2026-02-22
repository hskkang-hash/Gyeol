
import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';

const RecommendedActivities = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          <SportsEsportsIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
          추천 활동
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="새로운 프로젝트 시작" secondary="지성운이 좋아 창의적인 아이디어가 샘솟습니다." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="소개팅 또는 미팅" secondary="관계운이 최고조에 달해 좋은 인연을 만날 수 있습니다." />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default RecommendedActivities;
