import { AppRoute, Camera } from './consts';

type CameraType = typeof Camera['Types'][number];

type CameraCategory = typeof Camera['Categories'][number];

type CameraLevel = typeof Camera['Levels'][number];

type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: CameraType;
  category: CameraCategory;
  description: string;
  level: CameraLevel;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

type Promotion = Pick<Camera, 'id' | 'name' | 'previewImg' | 'previewImg2x' | 'previewImgWebp' | 'previewImgWebp2x'>;

type Review = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

type Page = keyof typeof AppRoute;

export type { Camera, CameraType, CameraCategory, CameraLevel, Promotion, Review, Page };
