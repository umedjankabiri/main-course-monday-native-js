import {GovermentBuildingsProps} from "common/types/TestsProps.ts";

export const addMoneyToBudget = (building: GovermentBuildingsProps, newBudget: number) => {
    return building.budget += newBudget;
}