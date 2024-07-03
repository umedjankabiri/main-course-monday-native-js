import {CityProps} from "common/types/TestsProps.ts";
import {addMoneyToBudget, repairHouse, toFireStaff} from "common/components/03/03_01.ts";

let city: CityProps;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: ("Happy street")
                    }
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: ("Happy street")
                    }
                }
            }
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 2000,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 50000,
                staffCount: 200,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },
        ],
        citizensNumber: 20000000
    }
})

test("Budget should be changed form HOSPITAL", ()=> {
    expect(city.govermentBuildings[0].budget).toBe(200000);

    addMoneyToBudget(city.govermentBuildings[0],100000)

    expect(city.govermentBuildings[0].budget).toBe(300000);
})
test("Budget should be changed for FIRE-STATION", ()=> {
    expect(city.govermentBuildings[1].budget).toBe(50000);

    addMoneyToBudget(city.govermentBuildings[1],100000)

    expect(city.govermentBuildings[1].budget).toBe(150000);

    addMoneyToBudget(city.govermentBuildings[1],-10000)

    expect(city.govermentBuildings[1].budget).toBe(140000);
})
test("Houses should be repaired", ()=> {
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[2].repaired).toBe(false);

    repairHouse(city.houses[0]);
    repairHouse(city.houses[1]);
    repairHouse(city.houses[2]);

    expect(city.houses[0].repaired).toBe(true);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[2].repaired).toBe(true);
})
test("Staff should be fired", ()=> {
    expect(city.govermentBuildings[0].staffCount).toBe(2000);
    expect(city.govermentBuildings[1].staffCount).toBe(200);

    toFireStaff(city.govermentBuildings[0], 200)
    toFireStaff(city.govermentBuildings[1], 20)

    expect(city.govermentBuildings[0].staffCount).toBe(1800);
    expect(city.govermentBuildings[1].staffCount).toBe(180);
})