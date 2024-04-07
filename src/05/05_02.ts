import {GovernmentType, HousesType} from "../02/02_02";

export function getStreetsTitlesOfGovernmentBuildings(building: GovernmentType[]) {
    return building.map(s => s.address.street.title)
}

export const getStreetsTitlesOfHouses = (building:HousesType[]) => {
    return building.map(s => s.address.street.title)
}

export const createMessages = (building:HousesType[]) => {
    return building.map(b => `Hello ${b.address.street.title}`)
}