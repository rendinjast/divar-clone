type TopCities = string[];

export type CityType = {
  level: string;
  radius: number;
  centroid: { latitude: number; longitude: number };
  id: number;
  name: string;
  slug: string;
  new: boolean;
  parent: number;
  neighbors: [];
  second_slug: string;
  tags: [];
};

export interface IIncomingCitiesType {
  cities: CityType[];
  top_cities: TopCities;
}
export interface IFinalCities {
  topCities?: CityType[];
  otherCities?: CityType[];
}
