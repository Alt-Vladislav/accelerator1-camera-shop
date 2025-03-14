import { AppRoute } from './consts';
import { Page, Review } from './types';

const getPageName = (path: string): Page | undefined => {
  const processedPath = path.replace(/\/camera\/[^/]+/, '/camera/:id');

  for (const key in AppRoute) {
    if (AppRoute[key as Page].Path === processedPath) {
      return key as Page;
    }
  }
};

const sortReviews = (reviewA: Review, reviewB: Review) => new Date(reviewB.createAt).getTime() - new Date(reviewA.createAt).getTime();

export { getPageName, sortReviews };
