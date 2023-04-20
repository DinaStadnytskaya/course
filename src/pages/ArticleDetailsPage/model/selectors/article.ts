import { createSelector } from '@reduxjs/toolkit';
import { getAuthUserData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getAuthUserData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
