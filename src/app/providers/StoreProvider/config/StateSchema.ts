/* eslint-disable no-unused-vars */
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { ProfileSchema } from '@/entities/Profile';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { SaveScrollSchema } from '@/features/SavesScroll';
import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { LoginSchema } from '@/features/AuthByUsername';
import { AddCommentFormSchema } from '@/features/addNewComment';

export interface StateSchema {
  user: UserSchema;
  savescroll: SaveScrollSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  // асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true:вмонтирован, false:невмонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
