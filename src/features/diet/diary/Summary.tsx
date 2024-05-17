import { useState, FC, ReactElement, Fragment } from 'react';
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
import { VITAMIN_LIST, MINERAL_LIST } from '@/config';

export type INPUT_DATA = typeof VITAMIN_LIST & typeof MINERAL_LIST;
type Props = {
  data: INPUT_DATA;
  title: string;
  showFirstNItemsByDefault?: number;
  expanded?: boolean;
};

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

const Summary: FC<Props> = ({
  data,
  title,
  showFirstNItemsByDefault,
  expanded
}: Props): ReactElement => {
  const [isExpanded, setExpanded] = useState(expanded);
  const { t }: { t: any } = useTranslation();

  const handleToggle = () => {
    setExpanded((isExpanded) => {
      return !isExpanded;
    });
  };

  return (
    <Card>
      <Accordion
        sx={{
          p: 0
        }}
        expanded={isExpanded}
      >
        <AccordionSummaryWrapper
          expandIcon={<ExpandMore />}
          onClick={handleToggle}
        >
          <Typography variant="h5">{title}</Typography>
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
              {data.map((item) => {
                return (
                  <Fragment key={item.key}>
                    <ListItem>
                      <Typography>{t(item.key)}</Typography>
                    </ListItem>
                    <ListItem>
                      <LinearProgress
                        sx={{ width: '100%' }}
                        value={0}
                        color="info"
                        variant="determinate"
                      />
                    </ListItem>
                  </Fragment>
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

export default Summary;
