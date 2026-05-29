# ResQTrack

AI-powered surplus food redistribution and chain-of-custody tracking platform.

## Overview

ResQTrack helps reduce food waste by creating a secure, verifiable transfer workflow between food donors, transport drivers, and recipient organizations.

The platform generates a digital chain of custody using QR-based verification, environmental risk monitoring, and delivery validation to ensure food reaches recipients safely and transparently.

## Problem Statement

Large quantities of edible surplus food are wasted because organizations lack:

* Reliable redistribution workflows
* Transfer accountability
* Delivery verification
* Spoilage monitoring during transit

ResQTrack addresses these challenges through a secure digital custody network.

---

## Features

### Donor Operations

* Register surplus food batches
* Categorize available inventory
* Generate secure transfer QR tokens
* Initiate verified chain-of-custody transfers

### Driver Transit Console

* Pickup verification via QR scan
* Environmental condition monitoring
* Spoilage risk analysis
* Transit status tracking
* Custody handoff validation

### Recipient Verification Hub

* Final delivery authentication
* Delivery integrity verification
* Chain-of-custody audit timeline
* Distribution readiness confirmation

### Platform Capabilities

* QR-based transfer workflow
* Digital audit trail
* Offline-ready architecture
* Progressive Web App (PWA)
* Supabase backend integration
* Responsive cyber-operations dashboard

---

## Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Lucide React

### Backend

* Supabase

### Additional Components

* QR Code Generation
* Offline Queue Utilities
* Network Status Monitoring
* PWA Support

---

## Workflow

1. Donor registers surplus food inventory.
2. System generates a secure QR transfer token.
3. Driver scans and verifies pickup.
4. Transit monitoring evaluates spoilage risk.
5. Recipient performs final verification.
6. System closes the custody chain and records the audit trail.

---

## Project Structure

```text
src/
├── pages/
│   ├── DonorView.jsx
│   ├── DriverView.jsx
│   └── RecipientView.jsx
├── lib/
│   ├── supabase.js
│   ├── offlineQueue.js
│   └── spoilageEngine.js
├── hooks/
│   └── useNetworkStatus.js
├── utils/
└── components/
```

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

## Future Enhancements

* Real QR scanner integration
* Live GPS route tracking
* AI-based spoilage prediction models
* NGO onboarding system
* Real-time notifications
* Analytics dashboard

---

## Team

Developed as a hackathon prototype for sustainable food redistribution and waste reduction.

## License

MIT Licen