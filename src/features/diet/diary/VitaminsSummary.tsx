import { useState } from 'react';
import {
  Card,
  Button,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  styled
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { VITAMIN_LIST } from '@/config/vitamins';

const AccordionSummaryWrapper = styled(AccordionSummary)(
  () => `
      &.Mui-expanded {
        min-height: 48px;
      }

      .MuiAccordionSummary-content.Mui-expanded {
        margin: 12px 0;
      }
  `
);

const VitaminsSummary = () => {
  const [expanded, setExpanded] = useState(true);
  const { t }: { t: any } = useTranslation();

  const handleToggle = () => {
    setExpanded((expanded) => {
      return !expanded;
    });
  };

  return (
    <Card>
      <Accordion
        sx={{
          p: 0
        }}
        expanded={expanded}
      >
        <AccordionSummaryWrapper
          expandIcon={<ExpandMore />}
          onClick={handleToggle}
        >
          <Typography variant="h5">{t('dietVitaminsSummary')}</Typography>
        </AccordionSummaryWrapper>
        <Divider />
        <Box>
          <AccordionDetails
            sx={{
              p: 0,
              py: 1
            }}
          >
            <List disablePadding component="div">
              {VITAMIN_LIST.map((vitamin) => {
                return (
                  <>
                    <ListItem>
                      <Typography>{t(vitamin.key)}</Typography>
                    </ListItem>
                    <ListItem>
                      <LinearProgress
                        sx={{ width: '100%' }}
                        value={0}
                        color="info"
                        variant="determinate"
                      />
                    </ListItem>
                  </>
                );
              })}
              <ListItem sx={{ justifyContent: 'center' }}>
                <Button variant="outlined" onClick={handleToggle}>
                  Zwiń
                </Button>
              </ListItem>
            </List>
          </AccordionDetails>
        </Box>
      </Accordion>
    </Card>
  );
};

export default VitaminsSummary;
