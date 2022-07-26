const GET_ALL_USERS = 'users/GET_ALL_USERS'

const EDIT_USER = 'users/EDIT_USER';

const getUsers = (users) => ({
  type: GET_ALL_USERS,
  users
})

const editUser = (user) => ({
  type: EDIT_USER,
  user
})

export const getUsersThunk = (users) => async(dispatch) => {
  const res = await fetch('/api/users/');
  const users = await res.json();
  dispatch(getUsers(users));
  return users;
}

export const editUserThunk = (user, photo_url) => async(dispatch) => {
  console.log('edit thunk user: ', user)
  console.log('thunk user id: ', user.id)
  const { photo_url } = user
  const res = await fetch(`/api/users/${user.id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      photo_url
    })
  })
  if(res.ok){
    const data = await res.json()
    console.log('thunk data:', data)
    dispatch(editUser(data))
    return res
  }
  else{
    return ['An error occurred.']
  }
}

export default function userReducer(state = {}, action) {
  let newState = {...state}
  switch(action.type) {
    case GET_ALL_USERS:
      // console.log("action: ", action.users.users)
      action.users.users.forEach(user => {
        newState[user.id] = user
      })
      // console.log('newState:', newState)
      return newState;

    case EDIT_USER:
      console.log('edit action: ', action)
      newState[action.user.photo_url] = action.user
      return newState
    default:
      return state
  }

}
