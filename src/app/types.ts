export type RootState = {
  people: PeopleState;
};

export type PeopleState = {
  characters: Character[];
  count: number;
  previous?: string;
  next?: string;
  error?: string;
  fetching: boolean;
};

export type PeopleResponse = {
  count: number;
  previous?: string;
  next?: string;
  results: CharacterResponse[];
};

export type PlanetResponse = {
  name: string;
  diameter: string;
  climate: string;
  population: string;
  url?: string;
  rotation_period?: string;
  orbital_period?: string;
  gravity?: string;
  terrain?: string;
  surface_water?: string;
  residents?: string[];
  films?: string[];
  created?: Date;
  edited?: Date;
};

export type CharacterResponse = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  planet?: PlanetResponse;
  films?: string[] | null;
  species?: string[] | null;
  vehicles?: string[] | null;
  starships?: string[] | null;
  created: Date;
  edited: Date;
  url: string;
};

export type Planet = {
  name: string;
  diameter: string;
  climate: string;
  population: string;
  url: string;
};

export type Character = {
  name: string;
  height: string;
  mass: string;
  homeworld?: Planet;
  created: string;
  edited: string;
};
