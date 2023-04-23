export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CharacterApiResponse {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}
