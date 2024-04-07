type UserType = {
    [key: string]: { id: string, name: string }
}

export const users:UserType = {
    '1': {id: '10', name: 'Cristian'},
    '2': {id: '20', name: 'david'},
    '3': {id: '30', name: 'joe'},
    '4': {id: '40', name: 'tom'},
    '5': {id: '50', name: 'qwe'},
    '6': {id: '60', name: 'op'},
    '7': {id: '70', name: 'name'},
    '8': {id: '80', name: 'guy'},
}

let user = {id: '100', name: 'new user'}
users[user.id] = user
// delete users[user.id]
users[user.id].name = 'hello world'
console.log(users)


export const userArray = [
    {id: '10', name: 'Cristian'},
    {id: '20', name: 'david'},
    {id: '30', name: 'joe'},
    {id: '40', name: 'tom'},
    {id: '50', name: 'qwe'},
    {id: '60', name: 'op'},
    {id: '70', name: 'name'},
    {id: '80', name: 'guy'},
]

userArray.find (user => user.id === '10')
userArray.filter(user => user.id === '10')