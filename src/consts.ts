const AppRoute = {
  Catalog: {
    Path: '/',
    Title: 'New View: Каталог',
    TitleLink: 'Перейти в каталог',
  },
  Product: {
    Path: '/camera/:id',
    Title: 'New View: @',
    TitleLink: null,
  }
} as const;

export { AppRoute };
