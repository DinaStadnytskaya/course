import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { RecommendationsSchema } from './RecommendationsSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: RecommendationsSchema;
}
