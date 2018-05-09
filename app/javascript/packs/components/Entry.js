import React from 'react'
import moment from 'moment'

const Entry = ({
  id,
  title,
  url,
  bookmarkCount,
  published,
  comments,
  commentOnClick
}) => {
  const subInfoStyle = {
    marginLeft: '1rem'
  }
  return (
    <li>
      <p>
        {id}.{' '}
        <a href={url} target="_blank" rel="noopener">
          {title} ({getHostName(url)})
        </a>
      </p>
      <small style={subInfoStyle}>
        <a href={getBookmarkLink(url)} target="_blank" rel="noopener">
          {bookmarkCount} bookmarks
        </a>{' '}
        | <a onClick={commentOnClick}> {comments.length} comments</a> |{' '}
        {moment(published).fromNow()}
      </small>
    </li>
  )
}

const getBookmarkLink = url => {
  let hatebuEntryUrl = 'http://b.hatena.ne.jp/entry/'
  if (url.match(/^https:\/\//)) {
    hatebuEntryUrl = 'http://b.hatena.ne.jp/entry/s/'
  }
  return hatebuEntryUrl + url.replace(/(^\w+:|^)\/\//, '')
}

const getHostName = url => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === 'string' &&
    match[2].length > 0
  ) {
    return match[2]
  }
  return null
}

export default Entry
