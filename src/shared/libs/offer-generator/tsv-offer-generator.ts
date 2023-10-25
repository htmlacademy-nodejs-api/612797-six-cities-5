import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';

import {
  generateRandomValue,
  getRandomDate,
  getRandomItem,
  getRandomItems,
} from '../../helpers/index.js';
import {CityEnum, OfferEnum, FeatureEnum} from '../../../types/index.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const MIN_COORD = -180;
const MAX_COORD = 180;
const DIGITS = 5;


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = getRandomDate(new Date(2012, 0, 1), new Date());
    const city = getRandomItem<string>(Object.keys(CityEnum));
    const previewUrl = getRandomItem<string>(this.mockData.offerImages);
    const photos = getRandomItems<string>(this.mockData.offerImages).join(',');
    const isPremium = !!generateRandomValue(0, 1);
    const isFavorite = !!generateRandomValue(0, 1);
    const rating = generateRandomValue(1, 5);
    const type = getRandomItem<string>(Object.keys(OfferEnum));
    const rooms = generateRandomValue(1, 10);
    const guests = generateRandomValue(1, 10);
    const comments = generateRandomValue(1, 10);
    const features = getRandomItems<string>(Object.keys(FeatureEnum)).join(',');
    const payment = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const name = getRandomItem(this.mockData.users);
    const email = getRandomItem(this.mockData.emails);
    const lat = generateRandomValue(MIN_COORD, MAX_COORD, DIGITS);
    const long = generateRandomValue(MIN_COORD, MAX_COORD, DIGITS);

    return [
      title, description, date,
      city, previewUrl,
      photos, isPremium, isFavorite,
      rating, type, rooms, guests, comments,
      features, payment,
      name, email, lat, long
    ].join('\t');
  }
}
