const APIRoute = {
  Cameras: '/cameras',
  Similar: '/similar',
  Reviews: '/reviews',
  Promo: '/promo'
} as const;

const LoadingStatus = {
  Unknown: 'Unknown',
  Loading: 'Loading',
  Loaded: 'Loaded',
  Error: 'Error'
} as const;

const SliceName = {
  Promotions: 'PROMOTIONS',
  Cameras: 'CAMERAS',
  Camera: 'CAMERA'
} as const;

export { APIRoute, LoadingStatus, SliceName };
