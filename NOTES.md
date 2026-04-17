# Part E — Written Reflection

## 1. Server vs Client Components

I defaulted to Server Components for anything that can be rendered deterministically from data (e.g., stats cards), which helps reduce client-side JavaScript and improves initial load performance. Client Components were used only where interactivity is required, such as the data table (pagination, sorting, search, URL syncing).  

The trickiest boundary was the DataTable — it needed to initialize state from URL (server-provided `searchParams`) while still handling client-side interactions. I resolved this by passing `searchParams` from the Server Component and syncing updates back to the URL using `router.push`.

---

## 2. Trade-offs

Due to time constraints, I prioritized architecture and correctness over completeness in some areas. For example, table sorting indicators are optimistic but not visually polished, and analytics/chart data is stubbed rather than fully implemented.  

With an additional 4 hours, I would:
- Add proper skeleton loaders for table rows
- Improve accessibility (ARIA roles, keyboard navigation)
- Expand test coverage using React Testing Library
- Refine mobile UX (especially sidebar transitions and table usability)

---

## 3. Hardest Part

The most challenging part was designing a clean and scalable data flow for the DataTable with URL-driven state. Handling pagination, sorting, and search together while keeping the URL as the single source of truth required careful coordination between server and client components.  

I approached this by first defining the API contract, then structuring the state around URL parameters, and finally layering debounce and fetch logic incrementally to avoid unnecessary complexity.