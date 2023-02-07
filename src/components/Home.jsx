import Navbar from "./Navbar"

function Home() {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow">
                                <div className="card-body text-center">
                                    <span className="fs-2 fw-light">Home</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home