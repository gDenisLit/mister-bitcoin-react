import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { contactService } from './contact.service'

const USER_KEY = 'user_db'
const LOGGED_IN_USER = 'user'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  saveLocalUser,
}

_createUsers()

async function login(userCred) {
  try {
    const users = await storageService.query(USER_KEY)
    const user = users.find(user => user.email === userCred.email && user.password === userCred.password)
    delete user.password
    return saveLocalUser(user)
  } catch (err) {
    throw err
  }

  // const user = await httpService.post('auth/login', userCred)
  // socketService.emit('set-user-socket', user._id)
  // saveLocalUser(user)
  // return user
}

async function signup(userCred) {
  const user = await storageService.post(USER_KEY, userCred)
  // const user = await httpService.post('auth/signup', userCred)
  // socketService.emit('set-user-socket', user._id)
  saveLocalUser(user)
  return user
}

async function logout() {
  sessionStorage.removeItem(LOGGED_IN_USER)
  // socketService.emit('unset-user-socket')
  return await httpService.post('auth/logout')
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(LOGGED_IN_USER) || 'null')
}

async function _createUsers() {
  var users = JSON.parse(localStorage.getItem(USER_KEY))
  if (!users) {
    try {
      const contacts = await contactService.getContacts()
      users = contacts.map(contact => {
        contact.password = '123'
        contact.coins = 100
        contact.moves = []
        return contact
      })
    } catch (err) {console.dir(err)}
  }
  localStorage.setItem(USER_KEY, JSON.stringify(users))
  return users
}

function saveLocalUser(user) {
  sessionStorage.setItem(LOGGED_IN_USER, JSON.stringify(user))
  return user
}
