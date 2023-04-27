interface IBeerItemLabels {
  id: string
  name: string
  description: string
  image_url: string
}

export interface IBeersListI18n {
  title: string
  dataLoadError: string
  beerItem: IBeerItemLabels
}
