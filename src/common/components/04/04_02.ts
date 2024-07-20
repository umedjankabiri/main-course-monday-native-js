import {CityProps, GovermentBuildingsProps} from "common/types/TestsProps.ts";

export const demolishHousesOnTheStreet = (city: CityProps, street: string) =>
    city.houses = city.houses.filter(house => house.address.street.title !== street)

export const getStreetsTitlesOfGovernmentsBuildings = (buildings: GovermentBuildingsProps[]) =>
    buildings.map(street => street.address.street)

export const getHousesOnTheStreet = (city: CityProps, street: string) =>
    city.houses.filter(house => house.address.street.title === street)

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovermentBuildingsProps[], count: number) =>
    buildings.filter(building => building.staffCount > count)