import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from './pages/Auth'
import { ClientPage } from './pages/Client'
import { DashboardPage } from './pages/Dashboard'
import { ProfilePage } from './pages/Profile'
import { RegisterPage } from './pages/Register'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/clients' element={<ClientPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}
