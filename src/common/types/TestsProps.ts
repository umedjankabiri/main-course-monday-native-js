/* *** Student props for testing students *** */
export type StudentProps = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: StudentAddressProps
    technologies: StudentTechnologiesProps[]
}
type StudentAddressProps = {
    country: string
    city: StudentCityProps
}
type StudentCityProps = {
    title: string
    street: string
}
type StudentTechnologiesProps = {
    id: number
    title: string
}

/* *** Houses props for testing houses *** */
export type CityProps = {
    title: string
    houses: HousesProps[]
    govermentBuildings: GovermentBuildingsProps[]
    citizensNumber: number
}
export type HousesProps = {
    buildedAt: number
    repaired: boolean
    address: AddressProps
}
type AddressProps = {
    street: StreetProps
    number?: number
}
type StreetProps = {
    title: string
}
export type GovermentBuildingsProps = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressProps
}