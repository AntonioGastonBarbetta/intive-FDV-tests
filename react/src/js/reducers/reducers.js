const initialState = {
    users: [{
        name: "Juan",
        surname: "Perez",
        country: "Argentina",
        birthday: "30/5/1988"
    }]
  }


function UsersApp(state = initialState, action) {
    switch(action.type) {
      case 'ADD_USER':
        let NewUser = Object.assign({}, state)
        NewUser.users.push(action.User)
        return NewUser
      default:
        return state
    }
  }


  export default UsersApp