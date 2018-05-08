import React from 'react'

const Entry = ({ id, title, url, bookmarkCount, published, comments }) => {
  return (
    <li>
      <span>
        {id}. {title}{' '}
        <a href={url} target="_blank">
          {url}
        </a>
      </span>
      <p>
        {bookmarkCount} bookmarks | {comments.length} comments
      </p>
    </li>
  )
}

export default Entry
