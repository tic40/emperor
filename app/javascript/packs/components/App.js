import React from 'react'
import EntryList from '../containers/EntryList'
import Header from '../containers/Header'
import CommentList from '../containers/CommentList'
import Footer from '../components/Footer'

const App = () => (
  <div className="container">
    <Header />
    <EntryList />
    <CommentList />
    <Footer />
  </div>
)

export default App
