import {FileReader} from './file-reader.interface.js';
import type {Offer} from "../../../types/offer.type.js";
import {OfferEnum} from "../../../types/offer.enum.js";
import {CityEnum} from "../../../types/city.enum.js";
import {FeatureEnum} from "../../../types/feature.enum.js";
import {UserTypeEnum} from "../../../types/userType.enum.js";
import {readFileSync} from "node:fs";

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, date, city, previewUrl, photos, isPremium, isFavorite, rating, type, rooms, guests, payment, features, user, comments, long, lat]) => ({
        title,
        description,
        date: new Date(date),
        city: CityEnum[city as keyof typeof CityEnum],
        previewUrl,
        photos: photos.split(','),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseInt(rating, 10),
        type: OfferEnum[type as keyof typeof OfferEnum],
        rooms: Number.parseInt(rooms, 10),
        guests: Number.parseInt(guests, 10),
        features: features.split(',')
          .map((name) => (FeatureEnum[name as keyof typeof FeatureEnum])),
        payment: Number.parseInt(payment, 10),
        author: {name: user, email: 'mockEmail', password: '****', type: UserTypeEnum.usual},
        comments: Number.parseInt(comments, 10),
        coordinates: {lat: Number.parseFloat(lat), long: Number.parseFloat(long),},
      }));
  }
}
