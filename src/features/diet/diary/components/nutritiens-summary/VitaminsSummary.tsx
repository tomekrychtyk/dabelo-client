import { useTranslation } from 'react-i18next';

import { Grid } from '@mui/material';
import { Summary } from './Summary';
import { VITAMIN_LIST } from '@/config';

export const VitaminsSummary = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid item sm={6} xs={12}>
      <Summary data={VITAMIN_LIST} title={t('dietVitaminsSummary')} expanded />
    </Grid>
  );
};
