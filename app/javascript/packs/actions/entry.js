import * as actionTypes from '../utils/actionTypes'
import * as constants from '../constants/index'
import axios from 'axios'

const URL_API_ENTRIES = '/api/v1/entries/'

export const receiveEntries = (res, feed) => {
  return {
    type: actionTypes.UPDATE_ENTRY,
    items: res.data,
    feed
  }
}

export const receiveAllEntries = res => {
  const items = {}
  for (let k in constants.FEED_LIST) {
    items[k] = []
  }
  res.data.forEach(v => {
    items[v.feed.name].push(v)
  })
  return {
    type: actionTypes.UPDATE_ALL_ENTRIES,
    items
  }
}

export const fetchAllEntries = () => {
  return dispatch => {
    return axios
      .get(URL_API_ENTRIES)
      .then(res => {
        dispatch(receiveAllEntries(res))
      })
      .catch(res => {
        dispatch(receiveEntries([]))
      })
  }
}

export const fetchEntries = (feed = constants.FEED_LIST.ALL) => {
  return dispatch => {
    return axios
      .get(URL_API_ENTRIES + feed.id)
      .then(res => {
        dispatch(receiveEntries(res, feed))
      })
      .catch(res => {
        dispatch(receiveEntries([]))
      })
  }
}

export const updateCurrentFeed = feed => {
  return {
    type: actionTypes.UPDATE_CURRENT_FEED_ID,
    feed
  }
}

export const sendRequest = () => {
  return {
    type: actionTypes.SEND_REQUEST
  }
}

export const commentToggle = (comments = [], title = '') => {
  return {
    type: actionTypes.COMMENT_TOGGLE,
    comments,
    title
  }
}
