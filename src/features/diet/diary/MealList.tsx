import {
  Card,
  Box,
  Typography,
  Divider,
  useTheme,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(10)};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: ${theme.general.borderRadiusSm};
    padding: ${theme.spacing(0.5, 1)};
  `
);

const MealList = () => {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        p={2.5}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography gutterBottom variant="h4">
            {t('dietMealListTitle')}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Timeline>
          <TimelineItem
            sx={{
              p: 0
            }}
          >
            <TimelineOppositeContent
              sx={{
                width: '85px',
                flex: 'none'
              }}
              color="text.secondary"
            >
              10:00
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                position: 'relative'
              }}
            >
              <TimelineDot
                sx={{
                  marginTop: 0,
                  top: theme.spacing(1.2)
                }}
                variant="outlined"
                color="primary"
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                pb: 4
              }}
            >
              <Typography>Siema</Typography>
              <Typography
                sx={{
                  pt: 1
                }}
                variant="body2"
                color="text.primary"
              >
                You sold <b>10 ETH</b> for <b>48,500 USD</b>.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Card>
  );
};

export default MealList;
