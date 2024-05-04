import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { IPolishLeagueState } from '@/interfaces';

const initialState: IPolishLeagueState = {
  standings: [],
  positionsHistory: {},
  teams: []
};

const polishExtraLeagueSlice = createSlice({
  name: 'polishExtraLeague',
  initialState,
  reducers: {}
});

export default polishExtraLeagueSlice.reducer;
