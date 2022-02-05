export type PokemonListItem = {
  readonly name: string
  readonly url: string
}

export type PokemonList = {
  readonly count: number
  readonly next: string | null
  readonly prev: string | null
  readonly results: ReadonlyArray<PokemonListItem>
}

export type Language = {
  readonly name: string
  readonly url: string
}

export type FlavorText = {
  readonly flavor_text: string
  readonly language: Language
}

export type Genust = {
  readonly genus: string
  readonly language: Language
}

export type Pokemon = {
  readonly id: number
  readonly name: string
  readonly evolution_chain: {
    readonly url: string
  }
  readonly flavor_text_entries: ReadonlyArray<FlavorText>
  readonly genera: ReadonlyArray<Genust>
  readonly names: ReadonlyArray<{
    readonly name: string
    readonly language: Language
  }>
}
