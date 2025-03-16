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

const Navigation = {
  Catalog: {
    Name: 'Каталог',
    Path: AppRoute.Catalog.Path
  },
  Warranty: {
    Name: 'Гарантии',
    Path: null
  },
  Delivery: {
    Name: 'Доставка',
    Path: null
  },
  CompanyInfo: {
    Name: 'О компании',
    Path: null
  }
} as const;

const Camera = {
  Types: ['Коллекционная', 'Моментальная', 'Цифровая', 'Плёночная'],
  Categories: ['Видеокамера', 'Фотоаппарат'],
  Levels: ['Нулевой', 'Любительский', 'Профессиональный']
} as const;

export { AppRoute, Navigation, Camera };
