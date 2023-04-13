import './App.scss'
import Step1 from './components/Step1/Step1'
import Step2 from './components/Step2/Step2'
import Step3 from './components/Step3/Step3'
import Step4 from './components/Step4/Step4'
import Step5 from './components/Step5/Step5'
import Step6 from './components/Step6/Step6'
import Step7 from './components/Step7/Step7'
import Step8 from './components/Step8/Step8'
import Step9 from './components/Step9/Step9'
import NavBar from './components/NavBar/NavBar'
import Form from './pages/Form'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.withCredentials = true

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/new-note" element={<Step1 />} />
          <Route path="/find-delay" element={<Step2 />} />
          <Route path="/enter-details" element={<Step3 />} />
          <Route path="/loading-draft" element={<Step4 />} />
          <Route path="/review-draft" element={<Step5 />} />
          <Route path="/confirmation" element={<Step6 />} />
          <Route path="/loading-letter" element={<Step7 />} />
          <Route path="/letter" element={<Step8 />} />
          <Route path="/aboutus" element={<Step9 />} />
          {/* <Route path="/form" element={<Form />} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
