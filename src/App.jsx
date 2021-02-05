import './App.css'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ImagePopup from './components/ImagePopup'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ImagePopup />
    </div>
  )
}

export default App
