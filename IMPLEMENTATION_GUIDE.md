# Message Study — Complete Implementation Guide

This guide walks through implementing all components and pages for the Message Study application.

---

## 🎯 Overview

The project is structured in phases:

1. **Setup Phase** ✅ DONE
   - Project structure created
   - Design system implemented (Tailwind + custom CSS)
   - Types and stores defined
   - Supabase client configured

2. **Components Phase** → NEXT (Priority: HIGH)
   - Reusable components for the design system
   - Button, Input, Card, Citation, Search, Navigation

3. **Pages Phase** (Priority: HIGH)
   - Main pages: Dashboard, Search, Themes, Citations, Assistant, etc.
   - Page layouts using components

4. **Features Phase** (Priority: MEDIUM)
   - Authentication
   - CRUD operations
   - Search functionality
   - Favorites, collections, notes

5. **Polish Phase** (Priority: LOW)
   - Responsive testing
   - Accessibility
   - Error handling
   - Loading states

---

## 📋 Phase 2: Core Components (PRIORITY: HIGH)

### Step 1: Create Reusable Components

**File: `src/components/Input.tsx`**
```typescript
- TextInput
- SearchInput
- TextArea
- Select/Dropdown
- Checkbox, Radio
```

**File: `src/components/Card.tsx`**
- Generic card wrapper
- CardHeader, CardBody, CardFooter sub-components

**File: `src/components/CitationItem.tsx`**
- Display citation with idea, original, translation, reference
- Show actions (favorites, compare, note, etc)
- Highlight mode for featured citations

**File: `src/components/SearchBox.tsx`**
- Search input with suggestions
- Filter options
- Recent searches

**File: `src/components/Sidebar.tsx`**
- Navigation menu
- User profile section
- Sync status
- Logout button

**File: `src/components/Header.tsx`**
- Page title
- View mode toggle (Read/Study)
- Action buttons
- Mobile nav toggle

**File: `src/components/Toast.tsx`**
- Notification display
- Auto-dismiss after 4s
- Position: top-right

**File: `src/components/Modal.tsx`**
- Dialog/modal component
- Close button, actions
- Backdrop overlay

**File: `src/components/Badge.tsx`**
- Status badges (primary, success, warning, error)
- Size variants

**File: `src/components/Spinner.tsx`**
- Loading indicator
- Pulse animation

### Step 2: Create Layout Components

**File: `src/components/layouts/AppLayout.tsx`**
- Sidebar + Main content layout
- Responsive: drawer on mobile
- Handles layout state

**File: `src/components/layouts/PageContainer.tsx`**
- Standard page wrapper
- Padding, max-width
- Responsive

---

## 📄 Phase 3: Pages (PRIORITY: HIGH)

### Step 1: Dashboard Page

**File: `src/pages/Dashboard.tsx`**

Structure:
```
1. Search Hero (large search box)
   - "Rechercher dans le Message..."
   - Suggestions: Try "rôle des anges", etc

2. Dashboard Cards Grid
   - Mes études en cours (3 active studies)
   - Thèmes récents (5 recent themes)
   - Citations favoris (12 items link)

3. "Continuer mon étude" Section
   - Recent citation preview
   - Continue button

4. "Découvrir" Section
   - Related citations
   - Recent themes
```

Key features:
- Fetch recent data on load
- Link cards to navigate to detail pages
- Responsive grid (3 cols desktop → 1 col mobile)

### Step 2: Search Page

**File: `src/pages/SearchPage.tsx`**

Structure:
```
1. Search Input + Filters
   - Full-width search box
   - Filter by: Date, Theme, Collection, Language, Status

2. Results Count
   - "47 résultats pour 'rôle des anges'"

3. Result Items
   - Category label (Citations, Themes, Collections)
   - Title
   - Excerpt (200 chars)
   - Meta (reference, theme, relevance %)
   - Click → Navigate to detail
```

Key features:
- Search on input change (debounce 300ms)
- Preserve results when navigating back
- Show "No results" state
- Show loading state while searching

### Step 3: Themes Page

**File: `src/pages/ThemesPage.tsx`**

Structure:
```
1. Page Title
   - "Thématiques"

2. Theme Cards Grid
   - Icon/color
   - Title
   - Description
   - Citation count
   - Last modified date
   - Click → Open theme detail
```

Key features:
- Fetch all themes on load
- Show as cards (3 cols desktop → 1 col mobile)
- Hover effect: lift shadow, accent border

### Step 4: Theme Detail Page

**File: `src/pages/ThemeDetailPage.tsx`**

Structure:
```
1. Theme Header
   - Title, description
   - Citation count, last updated
   - Filters (sort by relevance, date, etc)

2. Citation List (NOT card grid)
   - Continuous scroll view
   - Each citation: idea + original + translation + reference
   - Actions: context, favorites, compare, note
   - Show highlighted citation if coming from search
```

Key features:
- Fetch citations for theme on load
- Show loading state while fetching
- Implement infinite scroll or pagination
- Highlight if viewing from search result

### Step 5: Citation Detail Page

**File: `src/pages/CitationDetailPage.tsx`**

Structure:
```
1. Citation Header
   - Large title/reference
   - Metadata (date, language, theme)

2. Content Sections
   - Idea Directive (prominent, accent bg)
   - Original Text (italic, serif, light bg)
   - Translation (italic, serif, light bg)
   - Source (mono font, reference info)

3. Context Section
   - Previous paragraph preview
   - Next paragraph preview
   - "View full document" link

4. Related Citations
   - Sidebar or bottom section
   - Show 5-8 related citations
   - Clickable → Navigate

5. Actions Bar
   - Favorite toggle
   - Add to collection (dropdown)
   - Compare
   - Add note
   - Share
   - Print/export
```

Key features:
- Fetch citation on load (by ID from URL param)
- Highlight related citations on hover
- Show loading state
- Handle 404 if citation not found

### Step 6: Assistant/Chat Page

**File: `src/pages/AssistantPage.tsx`**

Structure:
```
1. Header
   - "Assistant du Message"

2. Chat Messages
   - Message list (scroll to bottom on new message)
   - User messages (right-aligned, accent bg)
   - Assistant messages (left-aligned, light bg)
   - Show source citations as clickable links

3. Input Area
   - Large textarea
   - Send button
   - Loading state while response pending
```

Key features:
- Fetch conversation history on load
- Send message on Enter or button click
- Show loading indicator while waiting
- Implement mock assistant responses (or real AI)
- Clickable sources → Navigate to citation

### Step 7: Collections Page

**File: `src/pages/CollectionsPage.tsx`**

Structure:
```
1. Page Title + Create Button
   - "Mes collections"
   - "+ Créer une collection" button

2. Collection Cards Grid
   - Collection name
   - Brief description
   - Citation count, note count, comparison count
   - Last modified date
   - Click → Open collection detail
   - Hover actions: edit, delete, share
```

Key features:
- Fetch user collections on load
- Show "No collections" state
- Create modal for new collection
- Delete confirmation dialog

### Step 8: Studies Page

**File: `src/pages/StudiesPage.tsx`**

Similar structure to Collections:
- Show user studies
- Show progress percentage
- Create new study button
- Navigate to study detail/editor

### Step 9: Settings Page

**File: `src/pages/SettingsPage.tsx`**

Sections:
1. Profile
   - Name, email, avatar
   - Save changes

2. Appearance
   - Theme toggle (Light/Dark/System)

3. Preferences
   - Language
   - Auto-sync
   - Notifications

4. Data
   - Export data
   - Delete account (with confirmation)

5. About
   - App version
   - Links to docs, help, feedback

---

## 🔧 Phase 4: Features (PRIORITY: MEDIUM)

### Authentication

**File: `src/services/authService.ts`**

Implement:
```typescript
- signUp(email, password, name)
- signIn(email, password)
- signOut()
- getCurrentUser()
- resetPassword(email)
- updateProfile(name, avatar)
```

Create pages:
- `src/pages/LoginPage.tsx`
- `src/pages/SignupPage.tsx`

### Search Feature

**File: `src/services/searchService.ts`**

Implement:
```typescript
- searchCitations(query)  // Full-text search
- searchThemes(query)
- searchCollections(query)
- searchStudies(query)
- semanticSearch(query)   // If AI backend available
```

Features:
- Debounce search input (300ms)
- Show loading while searching
- Highlight search terms in results
- Save search to history

### Favorites

Implement:
```typescript
- addFavorite(citationId)
- removeFavorite(citationId)
- isFavorite(citationId)
- getFavorites()
```

UI:
- Star icon toggle on citations
- Show/hide filled state
- "Favoris" page to view all

### Collections

Implement:
```typescript
- createCollection(name, description)
- updateCollection(id, data)
- deleteCollection(id)
- addCitationToCollection(collectionId, citationId)
- removeCitationFromCollection(collectionId, citationId)
- getCollectionCitations(collectionId)
```

UI:
- Create/edit collection modals
- Citation list per collection
- Add/remove citations from detail view

### Notes

Implement:
```typescript
- createNote(content, citationId/themeId/collectionId)
- updateNote(id, content)
- deleteNote(id)
- getNotes(userId)
```

UI:
- Add note button on citations
- Modal/drawer for note creation
- Show notes on citations
- "Notes" page listing all notes

---

## 🎨 Design Implementation Tips

### Consistent Spacing
Use Tailwind classes consistently:
- `p-4` (padding), `m-4` (margin), `gap-4` (gap in flex/grid)
- Adjust for responsive: `p-2 md:p-4` (mobile → desktop)

### Colors
Use Tailwind color classes:
- `text-primary-800`, `bg-accent`, `border-neutral-border`
- Hover: `hover:bg-primary-700`, `hover:text-accent-dark`

### Typography
Use Tailwind font classes:
- `font-sans` (Inter), `font-serif` (Lora), `font-mono` (Fira Code)
- Sizes: `text-lg`, `text-2xl`, etc.
- Weights: `font-semibold`, `font-bold`, etc.

### Responsive
Mobile-first approach:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 col mobile → 2 tablet → 3 desktop */}
</div>
```

### States
Always handle:
- Loading state (spinner)
- Empty state (no data)
- Error state (error message)
- Success state (confirmation)

---

## 🚀 Quick Implementation Checklist

### Day 1: Components
- [ ] Create all basic components (Button, Input, Card, etc.)
- [ ] Test component props and states
- [ ] Ensure Tailwind classes are correct

### Day 2: Pages Core
- [ ] Implement Dashboard page
- [ ] Implement Search page
- [ ] Implement Themes page
- [ ] Implement Citation Detail page

### Day 3: Pages & Features
- [ ] Implement remaining pages (Collections, Studies, Settings)
- [ ] Implement search functionality
- [ ] Implement favorites feature

### Day 4: Authentication & Polish
- [ ] Implement auth pages (login, signup)
- [ ] Implement auth flow
- [ ] Test responsive design
- [ ] Fix any styling issues

### Day 5: Testing & Deploy
- [ ] Test all pages on mobile/tablet/desktop
- [ ] Test auth flow
- [ ] Test search
- [ ] Deploy to Vercel

---

## 📚 Resources

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Colors: https://tailwindcss.com/docs/customization/colors
- Responsive: https://tailwindcss.com/docs/responsive-design

### React Patterns
- Hooks: https://react.dev/reference/react
- Custom Hooks: https://react.dev/learn/reusing-logic-with-custom-hooks
- Context: https://react.dev/reference/react/useContext

### Supabase
- Docs: https://supabase.com/docs
- JavaScript SDK: https://supabase.com/docs/reference/javascript

### TypeScript
- Handbook: https://www.typescriptlang.org/docs/
- React + TS: https://react-typescript-cheatsheet.netlify.app/

---

## 💡 Pro Tips

1. **Reuse Components** — Don't recreate Button, Input, etc. for each page
2. **Use Types** — Define types once in `src/types/index.ts`, use everywhere
3. **Error Handling** — Always handle errors from Supabase calls
4. **Loading States** — Show spinner/skeleton while loading
5. **Responsive First** — Test mobile first, then tablet, then desktop
6. **Accessibility** — Use semantic HTML, add ARIA labels, ensure focus states
7. **Performance** — Lazy load images, optimize queries, use React.memo if needed
8. **Testing** — Test auth flow, search, navigation, CRUD operations

---

## ❓ Frequently Asked Questions

**Q: How do I add a new page?**
A: Create file in `src/pages/NewPage.tsx`, add route in `App.tsx`, add nav item in `Sidebar.tsx`

**Q: How do I fetch data?**
A: Use services in `src/lib/supabase.ts`, manage state with Zustand, handle loading/error states

**Q: How do I style components?**
A: Use Tailwind classes, reference design system colors in `tailwind.config.js`

**Q: How do I handle forms?**
A: Use React hooks (`useState`), validate on submit, show error messages

**Q: How do I deploy?**
A: Push to GitHub, connect Vercel, add env variables, deploy

---

**Good luck! Build something great! 🚀**
