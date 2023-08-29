import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/home'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Menu } from '../Pages/menu'
import { InstallAndroid } from '../Pages/android'
import { InstallIos } from '../Pages/ios'
import { BonusPage } from '../Pages/bonus'
import { Aviator } from '../Pages/aviator'
import { Mines } from '../Pages/mines'
import { LoginPage } from '../Pages/login'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/android" element={<InstallAndroid />} />
        <Route path="/ios" element={<InstallIos />} />
        <Route path="/bonus" element={<BonusPage />} />
        <Route path="/aviator" element={<Aviator />} />
        <Route path="/mines" element={<Mines />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}
