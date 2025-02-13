interface PropertyAddress {
  propertyAddress: string
  propertyTown: string
  propertyState: string
  propertyCity: string
}

export interface RealEstateTypes {
  [propertyDetails: string]: PropertyAddress
}
