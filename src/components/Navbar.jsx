import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/js/all'
import { signOut, getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './config'
import Logo from '../assets/meteor.svg'

function Navbar() {
    const dataLogin = getAuth()
    const userPhoto = dataLogin.currentUser.photoURL
    const userName = dataLogin.currentUser.displayName
    const userEmail = dataLogin.currentUser.email
    // console.log(dataLogin.currentUser)

    const navigate = useNavigate()
    const pageHome = () => {
        navigate(`/home/${userEmail}`)
    }
    const pageAbout = () => {
        navigate('/about')
    }
    const pageContact = () => {
        navigate('/contact')
    }
    const logout = () => {
        signOut(auth)
        navigate('/')
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light shadow'>
                <div className='container-fluid'>
                    <button className='btn border-0 d-lg-none' data-bs-toggle='collapse' data-bs-target='#navbarContent'>
                        <div className=''>
                            <span className='d-none'>Nav</span>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </button>

                    <div className='d-sm-none d-lg-block'>
                        <div className='d-flex align-items-center'>
                            <div className='navbar-brand p-0 my-0'>
                                <img src={Logo} alt="" width={32} />
                            </div>

                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <button className='btn border-0 nav-link' onClick={pageHome}>
                                        <i className='fa-solid fa-home'></i>
                                        <span> Home</span>
                                    </button>
                                </li>
                                <li className='nav-item'>
                                    <button className='btn border-0 nav-link' onClick={pageAbout}>
                                        <i className='fa-solid fa-user'></i>
                                        <span> About</span>
                                    </button>
                                </li>
                                <li className='nav-item'>
                                    <button className='btn border-0 nav-link' onClick={pageContact}>
                                        <i className='fa-solid fa-phone'></i>
                                        <span> Contact</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='navbar-brand d-lg-none p-0 m-0'>
                        <img src={Logo} alt="" width={32} />
                    </div>

                    <div className='dropdown d-lg-none me-4'>
                        <div className='d-flex align-items-center gap-2'>
                            <img className='rounded-circle' src={userPhoto} alt="" width={32} />
                            <button className='btn border-0 p-0 dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'></button>
                            <ul className='dropdown-menu border-0 shadow position-absolute translate-middle-x'>
                                <ul className='navbar-nav px-3'>
                                    <li className='nav-item'>
                                        <button className='btn border-0 nav-link' onClick={logout}>
                                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                            <span> Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <div className='collapse navbar-collapse' id='navbarContent'>
                        <ul className='navbar-nav flex-column d-lg-none'>
                            <li className='nav-item'>
                                <button className='btn border-0 nav-link' onClick={pageHome}>
                                    <i className='fa-solid fa-home'></i>
                                    <span> Home</span>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button className='btn border-0 nav-link' onClick={pageAbout}>
                                    <i className='fa-solid fa-user'></i>
                                    <span> About</span>
                                </button>
                            </li>
                            <li className='nav-item'>
                                <button className='btn border-0 nav-link' onClick={pageContact}>
                                    <i className='fa-solid fa-phone'></i>
                                    <span> Contact</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className='dropdown d-sm-none d-lg-block me-4'>
                        <div className='d-flex align-items-center gap-2'>
                            <img className='rounded-circle' src={userPhoto} alt="" width={32} />
                            <button className='btn border-0 p-0 dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                                <span>{userName}</span>
                            </button>
                            <ul className='dropdown-menu border-0 shadow'>
                                <ul className='navbar-nav px-3'>
                                    <li className='nav-item'>
                                        <button className='btn border-0 nav-link' onClick={logout}>
                                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                            <span> Logout</span>
                                        </button>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar