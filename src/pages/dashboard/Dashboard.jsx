import React from 'react'
import './Dashboard.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function Dashboard() {
    return (
        <div>
            <Header />

            <div className="booklist_outer-box">

                <div className="booklist_inner-box">

                    <div className="boolist_header">

                        <div className="booklist_header_box1">

                            <div className="booklist_heading">Books</div>

                            <div className="booklist_count">(128 Items)</div>

                        </div>

                    </div>

                    <div className="booklist_main-container">



                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Dashboard