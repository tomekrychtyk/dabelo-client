import {
  Card,
  Box,
  Typography,
  Divider,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { MealListItem } from './MealListItem';
import { TableHeadWrapper } from './TableHeadWrapper';
import { TableWrapper } from './TableWrapper';

export const MealList = () => {
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
            {t('Meal List')}
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
              <TableContainer
                sx={{
                  width: {
                    xs: '190px',
                    sm: '100%'
                  }
                }}
              >
                <TableWrapper>
                  <TableHeadWrapper>
                    <TableRow>
                      <TableCell>{t('Product')}</TableCell>
                      <TableCell align="center">{t('Weight')} (g)</TableCell>
                      <TableCell align="center">{t('Proteins')} (g)</TableCell>
                      <TableCell align="center">{t('Carbs')} (g)</TableCell>
                      <TableCell align="center">{t('Fat')} (g)</TableCell>
                      <TableCell align="center">
                        {t('Calories')} (kcal)
                      </TableCell>
                      <TableCell align="center"></TableCell>
                    </TableRow>
                  </TableHeadWrapper>
                  <TableBody>
                    <MealListItem
                      productName="Mleko 2%"
                      weight={250}
                      proteins={18}
                      carbs={20}
                      fat={7}
                      kcal={119}
                    />
                    <MealListItem
                      productName="Płatki kukurydziane"
                      weight={250}
                      proteins={18}
                      carbs={20}
                      fat={7}
                      kcal={119}
                    />
                  </TableBody>
                </TableWrapper>
              </TableContainer>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Card>
  );
};
