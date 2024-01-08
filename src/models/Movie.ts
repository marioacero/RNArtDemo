export interface Movie {
  adult: boolean;
  id: number;
  vote_average: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export interface MovieDetail {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  title: string;
}
