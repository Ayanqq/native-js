import {CityType, GovernmentType} from "../02/02_02";

export function demolishHousesOnTheStreet(city:CityType, street:string)  {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings:GovernmentType[], staff:number) => {
    return buildings.filter((el)=> el.staffCount > staff)
}

//1. Почему в city.houses должно перезатирать
//2. Почему city.governmentBuilding - мы записали в параметры как массив из этой фигни