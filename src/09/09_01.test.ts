type UserType = {
    name: string;
    age: number
}

const iteration = (el: UserType) => {
    el.age += 2
}


test('Big test', () => {
    var user: UserType = {
        name: 'Ayan',
        age: 22
    }

    iteration(user)

    expect(user.age).toBe(24)

    const superman = {...user, name:'Ayan32', surname:'Nazbiyev'}

    // superman.age = 1000
    expect(superman.name).toBe('Ayan32')
    expect(superman.surname).toBe('Nazbiyev')

})