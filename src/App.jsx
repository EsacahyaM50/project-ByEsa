// import './App.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './components/config'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all'
import Logo from './assets/meteor.svg'

function App() {
  const navigate = useNavigate()

  const loginGoogle = async () => {
    const data = await signInWithPopup(auth, new GoogleAuthProvider())
    navigate(`/home/${data.user.email}`)
  }

  return (
    <div className='container'>
      <div className='mt-5'>
        <div className='row justify-content-center'>
          <div className=' col-lg-4 col-sm-8'>
            <div className='card border-0 shadow'>
              <div className='card-body'>
                <div className='d-flex flex-column gap-3'>
                  <div className='text-center'>
                    <img src={Logo} alt="" width={60} />
                  </div>
                  <span className='fs-2 fw-light text-center'>Login With</span>
                  <button className='align-self-center btn border rounded-pill' onClick={loginGoogle}>
                    <div className='d-flex gap-1'>
                      <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" width={20} />
                      <span className='text-primary'>Google</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className='text-center text-light my-2'>
              <span>© 2023 ByEsa</span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
