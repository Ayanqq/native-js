import { demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04";
import {CityType} from "../02/02_02";

test('Should be ages > 90', () => {
    const ages = [18, 20, 45, 53, 59, 60, 100]

    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate);



    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('Should take the most cheapest course', () => {
    const courser = [
        {title: 'React', price: 160},
        {title: 'HTML&CSS', price: 130},
        {title: 'JS', price: 180},
    ]



    const cheapCourse = courser.filter(course => course.price > 130)

    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].price).toBe(160)
    expect(cheapCourse[1].price).toBe(180)

})

test('get only completed tasks', ()=> {
    const tasks = [
        {id:1, title:'HTML', isDone:false},
        {id:2, title:'CSS', isDone:true},
        {id:3, title:'JS', isDone:false},
        {id:4, title:'React', isDone:true},
        {id:5, title:'Java', isDone:false},
    ]

    type tasksType = {
        id:number
        title:string;
        isDone:boolean
    }

    const isDoneXui = (isDone:tasksType) => {
        return isDone.isDone
    }


    const isDoneTasks = tasks.filter(isDoneXui)



    expect(isDoneTasks.length).toBe(2)
    expect(isDoneTasks[0].id).toBe(2)
    expect(isDoneTasks[1].id).toBe(4)

})

let city:CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id:1,
                buildedAt:2012,
                repaired:false,
                address:{
                    number:100,
                    street:{
                        title:'White street'
                    }
                }
            },
            {
                id:2,
                buildedAt:2008,
                repaired:false,
                address:{
                    number:100,
                    street:{
                        title:'Happy street'
                    }
                }
            },
            {
                id:3,
                buildedAt:2020,
                repaired:false,
                address:{
                    number:101,
                    street:{
                        title:'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type:'HOSPITAL',
                budget:200000,
                staffCount:200,
                address: {
                    street:{
                        title:'Central Str'
                    }
                }
            },
            {
                type:'FIRE-STATION',
                budget:500000,
                staffCount:600,
                address: {
                    street:{
                        title:'South Str'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли


test('House should be destroyed', () => {

    demolishHousesOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('FIRE-STATION')
})