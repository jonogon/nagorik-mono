import { CorrectedDocument } from '../typeInterfaces/type'


export interface PostInterface {
  userId: string;
  category?: string;
  subCategory?: string;
  title: string;
  description: string;
  images?: string[];
  tags?: string[];
  location: {
    type: string;
    coordinates: number[];
  };
}

export type PostDoc = PostInterface & CorrectedDocument

