import React from 'react'
import EntryList from '../containers/EntryList'
import Nav from '../containers/Nav'
import CommentList from '../containers/CommentList'
import Footer from '../components/Footer'

const App = () => (
  <div className="container">
    <Nav />
    <main>
      <EntryList />
      <CommentList />
    </main>
    <Footer />
  </div>
)

export default App
