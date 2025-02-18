import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import NotificationProvider from './context/NotificationContext'
import { BrowserRouter } from "react-router-dom"
createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotificationProvider>
    </Provider>
  </StrictMode>,
)
