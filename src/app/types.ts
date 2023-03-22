export type RootState = {
  people: PeopleState;
};

export type PeopleState = {
  characters?: Character[];
  count: number;
  previous?: string;
  next?: string;
  page: number;
  error?: string;
  fetching?: boolean;
};

export type PeopleResponse = {
  count: number;
  previous?: string;
  next?: string;
  results: Character[];
};

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films?: string[] | null;
  species?: string[] | null;
  vehicles?: string[] | null;
  starships?: string[] | null;
  created: string;
  edited: string;
  url: string;
};
