import * as actionTypes from '../utils/actionTypes'
import * as constants from '../constants/index'

const items = {}
for (let k in constants.FEED_LIST) {
  items[k] = []
}
const initialState = {
  currentFeed: constants.FEED_LIST.ALL,
  items: items,
  isFetching: true,
  isCommentOpen: false,
  commentList: [],
  commentTitle: ''
}

const entry = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.UPDATE_ALL_ENTRIES:
      return {
        ...state,
        items: action.items,
        isFetching: false
      }
    case actionTypes.UPDATE_ENTRY:
      // reset only specific feed items
      state.items[action.feed.name] = action.items
      return {
        ...state,
        items: state.items,
        isFetching: false
      }
    case actionTypes.UPDATE_CURRENT_FEED_ID:
      return {
        ...state,
        currentFeed: action.feed
      }
    case actionTypes.COMMENT_TOGGLE:
      return {
        ...state,
        isCommentOpen: !state.isCommentOpen,
        commentList: action.comments,
        commentTitle: action.title
      }
    default:
      return state
  }
}

export default entry
