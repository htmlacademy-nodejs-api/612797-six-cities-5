import {CityEnum} from "./city.enum.js";
import type {User} from "./user.type.js";
import type {Coordinates} from "./coordinates.type.js";
import {FeatureEnum} from "./feature.enum.js";
import {OfferEnum} from "./offer.enum.js";

export type Offer = {
  title: string;
  description: string;
  date: Date;
  city: CityEnum;
  previewUrl: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferEnum;
  rooms: number;
  guests: number;
  payment: number;
  features: FeatureEnum[];
  author: User;
  comments: number;
  coordinates: Coordinates;
}
