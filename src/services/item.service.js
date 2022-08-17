import { httpService } from './http.service'
import { utilService } from './util.service'
import { storageService } from './async-storage.service'
import { userService } from './user.service'
// import { socketService, SOCKET_EVENT_ITEM_ADDED } from './socket.service'

export const itemService = {
  query,
  save,
  remove,
  getById
}

_createItems()

function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  // return httpService.get('item')
  return storageService.query('item')
}

async function getById(itemId) {
  // return httpService.get(`item/${itemId}`)
  return storageService.get('item', itemId) 
}

function save(item) {
  if (item._id) return storageService.put('item', item)
  else return storageService.post('item', item)

  // if (item._id) return httpService.put(`item/${item._id}`, item)
  // else return httpService.post('item', item) 
}

function remove(itemId) {
  // return httpService.delete(`item/${itemId}`)
  return storageService.remove('item', itemId)
}

function _createItems() {
  let items = JSON.parse(localStorage.getItem('item'))
  if (!items) { items = utilService.getDemoItems() }
  localStorage.setItem('item', JSON.stringify(items))
}


