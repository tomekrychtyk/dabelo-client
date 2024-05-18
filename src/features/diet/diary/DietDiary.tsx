import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  PageHeader,
  MealList,
  AddMeal,
  MainSummary,
  VitaminsSummary,
  MineralsSummary
} from './components';

const DietDiary = () => {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('dietDiaryTitle')}</title>
      </Helmet>

      <PageHeader />

      <Grid container sx={{ px: 4 }} spacing={4}>
        <MainSummary />
      </Grid>

      <Grid
        container
        sx={{ p: 4 }}
        spacing={4}
        justifyContent="center"
        direction="row"
        wrap="nowrap"
      >
        <AddMeal />
      </Grid>

      <Grid container sx={{ px: 4, pb: 4 }}>
        <Grid item sm={12} sx={{ overflow: { xs: 'auto', sm: 'visible' } }}>
          <MealList />
        </Grid>
      </Grid>

      <Grid container sx={{ px: 4 }} spacing={4}>
        <VitaminsSummary />
        <MineralsSummary />
      </Grid>
    </>
  );
};

export default DietDiary;
