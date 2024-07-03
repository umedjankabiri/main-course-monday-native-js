import {CityProps, GovermentBuildingsProps, HousesProps} from "common/types/TestsProps.ts";

export const addMoneyToBudget = (building: GovermentBuildingsProps, newBudget: number) => {
    return building.budget += newBudget;
}
export const repairHouse = (house: HousesProps) => {
    return house.repaired = true;
}
export const toFireStaff = (employee: GovermentBuildingsProps, staffToFired: number)=> {
    return employee.staffCount -= staffToFired;
}
export const toHireStaff = (employee: GovermentBuildingsProps, staffToHire: number)=> {
    return employee.staffCount += staffToHire;
}