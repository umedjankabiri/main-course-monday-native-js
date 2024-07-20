import {ages, predicate} from "common/components/04/04.ts";

test("should take old men, older then 90", ()=> {
    const oldAgesWithMethodFilter = ages.filter(age => age > 90);
    const oldAgesWithOurFunction = ages.filter(predicate);

    expect(oldAgesWithMethodFilter.length).toBe(1);
    expect(oldAgesWithMethodFilter[0]).toBe(100);
    expect(oldAgesWithOurFunction.length).toBe(1);
    expect(oldAgesWithOurFunction[0]).toBe(100);
})
