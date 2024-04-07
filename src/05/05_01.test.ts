import {greetingMessage, ManType} from "./05_01";

let people: ManType[]

beforeEach( () => {
   people = [
        {name: 'Andre Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('Should get array of greetin messages', () => {
    const messages = greetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andre, welcome to IT-Incubator')
    expect(messages[1]).toBe('Hello Alexander, welcome to IT-Incubator')
    expect(messages[2]).toBe('Hello Dmitry, welcome to IT-Incubator')

})