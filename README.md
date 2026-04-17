# AI Dashboard — Frontend Engineer Assignment

## 🔗 Live Demo

(Add your Vercel link here)

---

## 📦 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** CSS Modules + Design Tokens (CSS Variables)
* **State Management:** React State + URL-driven state
* **Data Fetching:** Native fetch with Route Handlers
* **Architecture:** Server Components + Client Components split

---

## 🚀 Setup Instructions

```bash
npm install
npm run dev
```

App runs at: http://localhost:3000

---

## 🧠 Approach

### 1. Design System First

* Built a token-based system using CSS variables
* All spacing, colors, typography, and shadows are token-driven
* Supports light/dark themes using `[data-theme]` attribute

---

### 2. Component Architecture

* Reusable UI components: Button, Input, Card
* Slot-based design for flexibility (Card)
* No hardcoded values — everything references tokens

---

### 3. Layout System

* Created a `DashboardLayout` to separate layout from pages
* Responsive sidebar (collapsible + mobile slide-in)
* Sticky navbar with search and theme toggle

---

### 4. Data Layer

* Built mock APIs using Next.js Route Handlers:

  * `/api/stats`
  * `/api/users`
* Supports pagination, sorting, and search
* Simulated latency for realism

---

### 5. Data Table (Core Feature)

* Server-side pagination
* Server-side sorting
* Debounced search (300ms)
* URL-driven state (`?page=2&sort=name&order=asc`)
* Sticky header + horizontal scroll
* Skeleton loading for better UX

---

### 6. Advanced CSS (Part D)

#### ✅ Container Queries

* Stats cards adapt based on container width (not viewport)

#### ✅ CSS-only Toast System

* Uses `:target` pseudo-class
* No JavaScript required for visibility or lifecycle

---

## 📁 Folder Structure

```
app/
  api/              # Mock API routes
  users/            # Users page
  layout.tsx
  page.tsx

components/
  layout/           # Navbar, Sidebar, Dashboard layout
  ui/               # Button, Input, Card, Toast

features/
  dashboard/        # Stats cards
  table/            # Data table logic

lib/
  mockData.ts       # Mock dataset
  delay.ts          # Simulated API latency

styles/
  tokens.css        # Design tokens
  themes.css        # Light/Dark themes
```

---

## ⚡ Performance Considerations

* Server Components used by default (reduced JS bundle)
* Client Components only where necessary (table, navbar)
* Debounced search to reduce API calls
* Server-side operations (sorting/filtering) for scalability
* CSS transitions instead of JS animations

---

## 🧪 What I'd Improve with More Time

* Add proper unit + integration tests (Jest + RTL)
* Replace mock API with real backend
* Improve accessibility (ARIA roles, keyboard nav)
* Add virtualization for large tables
* Extract inline styles into reusable layout components

---

## 🎯 Part D Challenges Implemented

* Container Queries
* CSS-only Toast System

---

## 🙌 Final Thoughts

This project focuses on scalability, performance, and clean architecture rather than just visual implementation.

---
