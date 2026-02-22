
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const TodayKoreanPhrase = () => {
  const { t } = useTranslation();

  const phrase = {
    korean: "오늘 완전 인싸네!",
    pronunciation: "[Oneul wanjeon in-ssa-ne!]",
    meaning: "You're a total insider (popular person) today!",
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`Today's #K-Vibe phrase from #GyeolApp: "${phrase.korean}" - ${phrase.meaning}`);
    alert('Phrase copied to clipboard! Ready to share.');
  };

  const handlePronounce = () => {
    try {
        const utterance = new SpeechSynthesisUtterance(phrase.korean);
        utterance.lang = 'ko-KR';
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        console.error("Text-to-speech not supported or failed.", error);
        alert("Sorry, text-to-speech is not available on your browser.")
    }
  };

  return (
    <Card sx={{ mt: 2, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">{t('Today\'s K-Vibe')}</Typography>
            <IconButton onClick={handleShare} size="small" sx={{ color: 'white' }}>
                <ShareIcon />
            </IconButton>
        </Box>
        <Typography variant="h4" sx={{ my: 1, fontWeight: 'bold' }}>{phrase.korean}</Typography>
        <Typography variant="body1">{phrase.pronunciation}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>{phrase.meaning}</Typography>
         <IconButton onClick={handlePronounce} size="small" sx={{ color: 'white', mt:1 }}>
            <VolumeUpIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodayKoreanPhrase;
