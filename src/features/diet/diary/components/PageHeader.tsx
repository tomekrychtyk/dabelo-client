import { useRef, useState } from 'react';
import {
  Typography,
  Button,
  Box,
  alpha,
  lighten,
  Avatar,
  MenuItem,
  Menu,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  DateRangeTwoTone,
  DocumentScannerTwoTone,
  KeyboardArrowDownTwoTone
} from '@mui/icons-material';
import { PageTitleWrapper } from '@/components';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${
        theme.palette.mode === 'dark'
          ? theme.colors.alpha.trueWhite[10]
          : theme.colors.alpha.white[50]
      };
      box-shadow: ${
        theme.palette.mode === 'dark'
          ? '0 1px 0 ' +
            alpha(lighten(theme.colors.primary.main, 0.8), 0.2) +
            ', 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)'
          : '0px 2px 4px -3px ' +
            alpha(theme.colors.alpha.black[100], 0.4) +
            ', 0px 5px 16px -4px ' +
            alpha(theme.colors.alpha.black[100], 0.2)
      };
`
);

export function PageHeader() {
  const { t }: { t: any } = useTranslation();

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_week',
      text: t('Last Week')
    },
    {
      value: 'last_month',
      text: t('Last Month')
    },
    {
      value: 'last_year',
      text: t('Last Year')
    }
  ];

  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);
  const actionRef1 = useRef<any>(null);

  return (
    <PageTitleWrapper>
      <Box
        display="flex"
        alignItems={{ xs: 'stretch', md: 'center' }}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <AvatarPageTitle variant="rounded">
            <DateRangeTwoTone fontSize="large" />
          </AvatarPageTitle>
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('Diet diary')}
            </Typography>
            <Typography variant="subtitle2">
              {t(
                'Track your daily calories intake, create reports, check if you have enough of micro and macro nutritiens in your diet'
              )}
            </Typography>
          </Box>
        </Box>
        <Box mt={{ xs: 3, md: 0 }}>
          <Button
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            sx={{
              mr: 1
            }}
            endIcon={<KeyboardArrowDownTwoTone fontSize="small" />}
          >
            {period}
          </Button>
          <Menu
            disableScrollLock
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuPeriod(false)}
            open={openPeriod}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            {periods.map((_period) => (
              <MenuItem
                key={_period.value}
                onClick={() => {
                  setPeriod(_period.text);
                  setOpenMenuPeriod(false);
                }}
              >
                {_period.text}
              </MenuItem>
            ))}
          </Menu>

          <Button variant="contained" startIcon={<DocumentScannerTwoTone />}>
            {t('Export')}
          </Button>
        </Box>
      </Box>
    </PageTitleWrapper>
  );
}
