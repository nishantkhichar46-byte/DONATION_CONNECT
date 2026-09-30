import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DonationProvider } from './context/DonationContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RoleSelection from './pages/RoleSelection';
import DonorDashboard from './pages/DonorDashboard';
import OrganisationDashboard from './pages/OrganisationDashboard';
import DonationCategories from './pages/DonationCategories';
import BeneficiaryCategories from './pages/BeneficiaryCategories';
import OrganisationList from './pages/OrganisationList';
import OrganisationProfile from './pages/OrganisationProfile';
import DonationRequest from './pages/DonationRequest';
import PickupRequest from './pages/PickupRequest';
import DonationConfirmation from './pages/DonationConfirmation';
import DonationTracking from './pages/DonationTracking';
import DonationHistory from './pages/DonationHistory';
import Campaigns from './pages/Campaigns';
import Notifications from './pages/Notifications';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <AuthProvider>
      <DonationProvider>
        <Router>
          <div className="app-container">
            {/* Navigation Header */}
            <Navbar />

            {/* Main Page Routes */}
            <main className="main-content">
              <Routes>
                {/* 1. Landing / Home */}
                <Route path="/" element={<Home />} />

                {/* 2. Login */}
                <Route path="/login" element={<Login />} />

                {/* 3. Register */}
                <Route path="/register" element={<Register />} />

                {/* 4. Role Selection */}
                <Route path="/roles" element={<RoleSelection />} />

                {/* 5. Donor Dashboard */}
                <Route path="/donor-dashboard" element={<DonorDashboard />} />

                {/* 6. Organisation Dashboard */}
                <Route path="/org-dashboard" element={<OrganisationDashboard />} />

                {/* 7. Donation Categories ("Choose Donation") */}
                <Route path="/categories" element={<DonationCategories />} />

                {/* 8. Beneficiary Categories ("Choose Beneficiary") */}
                <Route path="/beneficiaries" element={<BeneficiaryCategories />} />

                {/* 9. Organisation List ("Matching Organisations") */}
                <Route path="/organisations" element={<OrganisationList />} />

                {/* 10. Organisation Profile */}
                <Route path="/organisation/:id" element={<OrganisationProfile />} />

                {/* 11. Donation Request */}
                <Route path="/donation-request" element={<DonationRequest />} />

                {/* 12. Pickup Request */}
                <Route path="/pickup-request" element={<PickupRequest />} />

                {/* 13. Donation Confirmation */}
                <Route path="/confirmation/:id" element={<DonationConfirmation />} />

                {/* 14. Donation Tracking */}
                <Route path="/track/:id" element={<DonationTracking />} />
                <Route path="/track" element={<DonationTracking />} />

                {/* 15. Donation History */}
                <Route path="/history" element={<DonationHistory />} />

                {/* 16. Campaigns */}
                <Route path="/campaigns" element={<Campaigns />} />

                {/* 17. Notifications */}
                <Route path="/notifications" element={<Notifications />} />

                {/* 18. User Profile */}
                <Route path="/profile" element={<UserProfile />} />

                {/* 19. Admin Dashboard */}
                <Route path="/admin" element={<AdminDashboard />} />

                {/* Fallback to Home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Global Toast */}
            <Toast />

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </DonationProvider>
    </AuthProvider>
  );
}
