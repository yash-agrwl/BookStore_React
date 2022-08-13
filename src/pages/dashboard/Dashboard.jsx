import React from 'react'
import './Dashboard.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Home from '../../components/home/Home'
import Book from '../../components/book/Book'

function Dashboard() {
    const [currentBook, setCurrentBook] = React.useState({})
    const [view, setView] = React.useState(false)

    const openBook = (book) => {
        console.log(book)
        setCurrentBook(book)
        setView(true)
    }

    return (
        <div style={{ width: '100%' }}>

            <Header />

            {view ? <Book book={currentBook} /> : <Home openBook={openBook} />}

            {view ? null : <Footer />}

        </div>
    )
}

export default Dashboard