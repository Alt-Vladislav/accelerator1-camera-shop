const AppRoute = {
  Catalog: {
    Path: '/',
    Title: 'Каталог - Фотошоп',
    TitleLink: 'Переход на главную',
  },
  Product: {
    Path: '/camera/:id',
    Title: '@ - Фотошоп',
    TitleLink: null,
  }
} as const;

const Camera = {
  Types: ['Коллекционная', 'Моментальная', 'Цифровая', 'Плёночная'],
  Categories: ['Видеокамера', 'Фотоаппарат'],
  Levels: ['Нулевой', 'Любительский', 'Профессиональный']
} as const;

export { AppRoute, Camera };
