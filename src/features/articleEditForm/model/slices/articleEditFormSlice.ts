import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleEditFormSchema } from '../types/articleEditFormSchema';

const initialState: ArticleEditFormSchema = {

};

export const articleEditFormSlice = createSlice({
    name: 'articleEditForm',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {

        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: articleEditFormActions } = articleEditFormSlice;
export const { reducer: articleEditFormReducer } = articleEditFormSlice;
