import {Offer, UserTypeEnum, CityEnum, OfferEnum, User, Coordinates, FeatureEnum} from '../../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    date,
    city,
    previewUrl,
    photos,
    isPremium,
    isFavorite,
    rating,
    type,
    rooms,
    guests,
    comments,
    features,
    payment,
    name,
    email,
    lat,
    long
  ] = offerData.replace('\n', '').split('\t');

  const author: User = {
    email,
    name,
    password: '****',
    type: UserTypeEnum.Usual
  };

  const coordinates: Coordinates = {
    lat: Number.parseFloat(lat),
    long: Number.parseFloat(long)
  };

  return {
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
    comments: Number.parseInt(comments, 10),
    features: features.split(',')
      .map((feature) => (FeatureEnum[feature as keyof typeof FeatureEnum])),
    payment: Number.parseInt(payment, 10),
    author,
    coordinates
  };
}
