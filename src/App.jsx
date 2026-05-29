import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import DonorView from "./pages/DonorView"
import DriverView from "./pages/DriverView"
import RecipientView from "./pages/RecipientView"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/donorView" />} />

        <Route path="/donorView" element={<DonorView />} />

        <Route path="/driverView" element={<DriverView />} />

        <Route path="/recipientView" element={<RecipientView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App