import * as actionTypes from '../utils/actionTypes'
import * as constants from '../constants/index'

const initialState = {
  currentFeedId: constants.FEED_LIST.ALL.id,
  items: []
}

const entry = (state = initialState, action) => {
  if (action.type === actionTypes.UPDATE_ENTRY) {
    return {
      ...state,
      items: action.items
    }
  } else if (
    action.type === actionTypes.UPDATE_CURRENT_FEED_ID &&
    state.currentFeedId !== actionTypes.UPDATE_CURRENT_FEED_ID
  ) {
    return {
      ...state,
      currentFeedId: action.feedId
    }
  }
  return state
}

export default entry
