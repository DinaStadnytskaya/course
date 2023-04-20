import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { RecommendationsSchema } from '../types/RecommendationsSchema';
import { fetchRecommendations } from '../services/fetchRecommendations/fetchRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});
export const getRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const recommendationsSlice = createSlice({
    name: 'recommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<RecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchRecommendations.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});
export const { reducer: recommendationsReducer } = recommendationsSlice;
