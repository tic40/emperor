import React from 'react'

const Footer = () => {
  const style = {
    backgroundColor: '#f5f5f5',
    padding: '2.4rem'
  }
  return (
    <footer className="content has-text-centered" style={style}>
      <p>
        Contact:{' '}
        <a
          href="https://github.com/tic40/emperor"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        /{' '}
        <a href="https://twitter.com/tic40" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{' '}
        /{' '}
        <a href="http://tic40.hatenablog.com/" target="_blank" rel="noopener noreferrer">
          Blog
        </a>
      </p>
    </footer>
  )
}

export default Footer
