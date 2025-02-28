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

const Camera = {
  Types: ['Коллекционная', 'Моментальная', 'Цифровая', 'Плёночная'],
  Categories: ['Видеокамера', 'Фотоаппарат'],
  Levels: ['Нулевой', 'Любительский', 'Профессиональный']
} as const;

export { AppRoute, Camera };
