import * as actionTypes from '../utils/actionTypes'
import * as constants from '../constants/index'
import axios from 'axios'

const URL_API_ENTRIES = '/api/v1/entries/'

export const receiveEntries = res => {
  return {
    type: actionTypes.UPDATE_ENTRY,
    items: res.data
  }
}

export const fetchEntries = (feedId = constants.FEED_LIST.ALL.id) => {
  return dispatch => {
    return axios
      .get(URL_API_ENTRIES + feedId)
      .then(res => {
        dispatch(receiveEntries(res))
      })
      .catch(res => {
        dispatch(receiveEntries([]))
      })
  }
}

export const updateCurrentFeed = feedId => {
  return {
    type: actionTypes.UPDATE_CURRENT_FEED_ID,
    feedId
  }
}
