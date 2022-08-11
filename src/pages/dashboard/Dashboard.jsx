import React from 'react'
import './Dashboard.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Home from '../../components/home/Home'

function Dashboard() {
    const [currentBook, setCurrentBook] = React.useState({})
    const [view, setView] = React.useState(false)

    const openBook = (book) => {
        console.log(book)
        setCurrentBook(book)
        setView(true)
    }

    return (
        <div>
            <Header />

            <Home openBook={openBook} />

            <Footer />
        </div>
    )
}

export default Dashboard