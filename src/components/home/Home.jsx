import React from 'react'
import './Home.css'
import Quickview from '../../components/quickview/Quickview'
import { getAllBooks } from '../../services/dataservice'

function Home(props) {
    const [bookList, setBookList] = React.useState([])

    React.useEffect(() => {
        getAllBooks().then((response) => {
            console.log(response);
            setBookList(response.data.data)
        }).catch((error) => {
            console.log(error)
            setBookList([])
        })
    }, [])

    return (
        <div className="home_outer-box">

            <div className="home_inner-box">

                <div className="home_header">

                    <div className="home_header_box1">

                        <div className="home_heading">Books</div>

                        <div className="home_count">({bookList.length} Items)</div>

                    </div>

                </div>

                <div className="home_main-container">

                    {bookList.map((book) => (
                        <Quickview key={book.bookID} book={book} openBook={props.openBook}/>
                    ))}

                </div>

                <div className="pagenation"></div>

            </div>

        </div>
    )
}

export default Home