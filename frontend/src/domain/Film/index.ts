export interface Film {
  readonly characters: string[]
  readonly created: string
  readonly edited: string
  readonly episode_id: string
  readonly opening_crawl: string
  readonly planets: string[]
  readonly producer: string
  readonly director: string
  readonly release_date: string
  readonly species: string[]
  readonly starships: string[]
  readonly title: string
  readonly url: string
  readonly vehicles: string[]
}

export interface Character {
  readonly url: string
  readonly birth_year: string
  readonly gender: string
  readonly hair_color: string
  readonly height: string
  readonly name: string
  readonly skin_color: string
  readonly mass: string
  readonly eye_color: string
}