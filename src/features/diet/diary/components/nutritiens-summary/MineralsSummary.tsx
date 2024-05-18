import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Summary } from './Summary';
import { MINERAL_LIST } from '@/config';

export const MineralsSummary = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid item sm={6} xs={12}>
      <Summary data={MINERAL_LIST} title={t('dietMineralsSummry')} expanded />
    </Grid>
  );
};
