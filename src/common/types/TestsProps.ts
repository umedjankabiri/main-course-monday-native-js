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