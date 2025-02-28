import { AppRoute } from './consts';
import { Page } from './types';

const getPageName = (path: string): Page | undefined => {
  const processedPath = path.replace(/\/camera\/[^/]+/, '/camera/:id');

  for (const key in AppRoute) {
    if (AppRoute[key as Page].Path === processedPath) {
      return key as Page;
    }
  }
};

export { getPageName };
