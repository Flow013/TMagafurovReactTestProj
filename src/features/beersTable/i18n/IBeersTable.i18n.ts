interface IBeerItemLabels {
  id: string
  name: string
  description: string
  image_url: string
}

export interface IBeersTableI18n {
  title: string
  dataLoadError: string
  beerItem: IBeerItemLabels
}
