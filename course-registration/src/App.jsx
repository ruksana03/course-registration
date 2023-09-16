import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <>
      <Header></Header>
      <Courses></Courses>
      <div>
      {/* Your application content */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
    </>
  )
}

export default App
