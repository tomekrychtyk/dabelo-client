import { Card, Box, Typography, Divider, Grid, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

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
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Płatki kukurydziane</Typography>
                </Grid>
                <Grid item xs={3}>
                  150 g
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={3}>
                      15 g białka
                    </Grid>
                    <Grid item xs={3}>
                      22 g węglowodanow
                    </Grid>
                    <Grid item xs={3}>
                      11 T
                    </Grid>
                    <Grid item xs={3}>
                      144 kcal
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  <Typography>Mleko 2%</Typography>
                </Grid>
                <Grid item xs={3}>
                  250 ml
                </Grid>
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={3}>
                      17 B
                    </Grid>
                    <Grid item xs={3}>
                      35 W
                    </Grid>
                    <Grid item xs={3}>
                      5 T
                    </Grid>
                    <Grid item xs={3}>
                      220 kcal
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={4} />
                <Grid item xs={2} />
                <Grid item xs={6}>
                  <Grid container sx={{ fontWeight: 700 }}>
                    <Grid item xs={3}>
                      <Typography sx={{ fontWeight: 700 }} color="primary">
                        32 B
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontWeight: 700 }} color="primary">
                        57 W
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontWeight: 700 }} color="primary">
                        16 T
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography sx={{ fontWeight: 700 }} color="primary">
                        364 kcal
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Card>
  );
};

export default MealList;
