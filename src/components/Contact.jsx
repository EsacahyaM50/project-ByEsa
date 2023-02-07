import { useState } from "react"
import Navbar from "./Navbar"

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-sm-10">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <div className="text-center mb-3">
                                        <span className="fs-2 fw-light">Contact Us</span>
                                    </div>
                                    <div className="row justify-content-around mb-3">
                                        <div className="col-lg-6 col-sm-6">
                                            <form action="">
                                                <div className="d-flex flex-column gap-3">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        value={name}
                                                        onChange = {(e) => setName(e.target.value)}
                                                        placeholder="Full Name"
                                                        required
                                                    />
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange = {(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <textarea
                                                        className="form-control"
                                                        value={message}
                                                        onChange = {(e) => setMessage(e.target.value)}
                                                        placeholder="Message"
                                                        required
                                                    ></textarea>
                                                    <button className="btn rounded-pill border-0 text-light w-75 align-self-center shadow" style={{ background: '#febf63' }}>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="d-flex flex-column gap-3">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                    <span>Sukoharjo, Central Java</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-phone"></i>
                                                    <span>+62 8954 2263 5281</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-envelope"></i>
                                                    <span>esacahya.m50@gmail.com</span>
                                                </div>
                                            </div>
                                            <hr className="mb-1" />
                                            <div className="d-flex flex-row">
                                                <a href="https://web.facebook.com/esa.cahyakuntadi/" title="Esa Cahya Kuntadi" target={"_blank"}>
                                                    <img src="https://cdn.cdnlogo.com/logos/f/9/facebook.svg" alt="" width={40} />
                                                </a>
                                                <a href="https://www.instagram.com/esacahya_m50/" title="esacahya_m50" target={"_blank"}>
                                                    <img src="https://cdn.cdnlogo.com/logos/i/59/instagram.svg" alt="" width={40} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact