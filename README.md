# Donation Connect

> **“Connect the right donation with the right cause.”**
> *Find verified organisations that need the resources you want to donate.*

**Donation Connect** is an intelligent web application built as a **Design Thinking & Ideation (DTI)** platform connecting individual and corporate donors with verified NGOs and community social organisations.

---

## 🎯 Core Problem & DTI Solution

* **The Problem:**
  * Donors want to donate useful items or money but don't know whom to contact.
  * Donation requirements are scattered across social media and unverified posters.
  * Donors frequently have items an organisation urgently requires today, but cannot find the matching organisation.
  * NGOs lack a unified system to communicate real-time, itemized requirements to nearby donors.
  * Donors face logistics friction and lack transparency on whether their contributions reached beneficiaries.

* **The Solution Matching Engine:**
  $$\text{Donor} \longrightarrow \text{Donation Type} \longrightarrow \text{Beneficiary Category} \longrightarrow \text{Matching Organisation} \longrightarrow \text{Donation Request} \longrightarrow \text{Doorstep Pickup} \longrightarrow \text{Live Tracking \& 80G Certificate}$$

---

## 🛠️ Technology Stack

* **Frontend:** React 19, JavaScript (ES6+), HTML5, Vanilla CSS3 (Custom Design System with tokens, glassmorphism, responsive grids, and micro-interactions)
* **Routing:** React Router v7 (`HashRouter` for zero-configuration local execution and instant link navigation)
* **Icons:** Lucide Icons (`lucide-react`)
* **Visual Effects:** `canvas-confetti` for celebratory confirmation
* **Data & Auth Layer:** Persistent LocalStorage state management with Firebase-ready decoupled architecture
* **Build Tooling:** Vite 5

---

## 📱 Responsive Support

* **Desktop** (1280px+)
* **Tablet** (768px - 1024px)
* **Mobile** (< 768px with full drawer navigation)

---

## 📑 Complete 19 Application Pages

| # | Page Name | Route | Description |
|---|---|---|---|
| 1 | **Landing / Home** | `#/` | Hero with tagline, How It Works (5 steps), Donation Categories, Beneficiary Categories, Urgent Campaigns, Featured Verified NGOs, DTI Problem/Solution showcase, and live stats. |
| 2 | **Login** | `#/login` | Authentication with 1-click Demo quick logins for Donor, Verified NGO, Pending NGO, and Platform Admin. |
| 3 | **Register** | `#/register` | Role-based registration for Donors and Organisations (collects Org Name, Type, Reg No, Contact, Description, and Verification Document upload). Newly registered NGOs are set to **"Verification Pending"** until reviewed. |
| 4 | **Role Selection** | `#/roles` | Visual role selection comparing Donor, Organisation, and Platform Administrator workflows. |
| 5 | **Donor Dashboard** | `#/donor-dashboard` | Donor control center with impact metrics, active pickups pipeline, quick donation actions, and recommended verified NGOs. |
| 6 | **Organisation Dashboard** | `#/org-dashboard` | NGO portal showing verified badge or pending verification alert, incoming requests (Accept/Decline), live requirements publisher, and campaign creator. |
| 7 | **Donation Categories** | `#/categories` | *"What would you like to donate?"* interactive grid with 9 category cards (Clothes, Books, Food, Toys, Furniture, Electronics, Medical, Money, Other) and condition guidelines. |
| 8 | **Beneficiary Categories** | `#/beneficiaries` | *"Who would you like to support?"* with 9 beneficiary cards (Children, Women, Men/Community, Orphanages, Elderly, Disability Support, Students, Animals, Specialised Causes). |
| 9 | **Organisation List** | `#/organisations` | 4-Dimensional matching engine filtering by Donation Type, Beneficiary, Location/City, and Verified status. Displays Org cards with current needs tags. |
| 10 | **Organisation Profile** | `#/organisation/:id` | Full NGO profile with cover photo, verified badge, 80G tax status, mission, live inventory needs progress bars, active campaigns, and donate CTA. |
| 11 | **Donation Request** | `#/donation-request` | Step-by-step form capturing specific items, quantity, condition, photo upload simulator, and fulfillment choice (Doorstep Pickup vs Self Drop-off). |
| 12 | **Pickup Request** | `#/pickup-request` | Logistics scheduler with address, preferred date, time slot, vehicle type requirement (Bike / Van / Truck), and accessibility notes. |
| 13 | **Donation Confirmation** | `#/confirmation/:id` | Celebratory screen with confetti, unique Tracking ID (`DC-2026-XXXXX`), full pass receipt, print action, and live tracking link. |
| 14 | **Donation Tracking** | `#/track/:id` | 6-stage milestone tracker with an interactive "⚡ Advance Next Status" simulator, driver details, GPS map route visualizer, and 80G certificate generator. |
| 15 | **Donation History** | `#/history` | Audit ledger with tabbed filters (All, Active, Delivered), search, pass review, and downloadable 80G impact certificates. |
| 16 | **Campaigns** | `#/campaigns` | Dedicated portal for urgent community drives (Winter Warmth, School Kits, Stray Animal Food, Laptops) with progress bars and instant pledge modal. |
| 17 | **Notifications** | `#/notifications` | Activity hub with unread indicators, mark-as-read, and direct links to tracking records. |
| 18 | **User Profile** | `#/profile` | Account settings, default pickup address, donor level badge, and notification preference toggles. |
| 19 | **Admin Dashboard** | `#/admin` | Platform governance panel featuring the **Pending NGO Verification Queue** (review uploaded documents and 1-click "Approve & Verify" or "Reject"), master NGO directory, and dispatch oversight. |

---

## ⚡ Quick Demo Accounts (1-Click Switcher)

You can toggle accounts anytime using the **Role Switcher** in the top navigation bar:

1. **👤 Demo Donor:** Priya Sharma (`priya.sharma@example.com`)
2. **🏢 Verified NGO:** Hope Children Foundation (`contact@hopechildren.org`)
3. **⏳ Pending NGO:** Green Earth Relief Shelter (`help@greenearthshelter.org`)
4. **🛡️ Platform Administrator:** System Admin (`admin@donationconnect.org`)

---

## 🚀 How to Run Locally

### Option 1: Double-Click Launcher (Windows)
Double-click `run_app.bat` in the project root folder. It will start the server and open your browser automatically.

### Option 2: Command Line
```bash
# Install dependencies (already installed)
npm install

# Start development server
npm run dev

# Open in browser:
http://localhost:5173/
```

### Option 3: Production Build Preview
```bash
npm run build
npm run preview
```
