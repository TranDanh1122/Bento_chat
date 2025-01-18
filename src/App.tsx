
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='auth/:type' element={<Auth />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
