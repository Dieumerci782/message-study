# Message Study — Premium Academic UI for Branham's Message

A modern, full-stack application for studying and analyzing the Message of William Marrion Branham. Built with React + Vite + TypeScript + Supabase.

**Status:** Project structure created. Ready for component and page implementation.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (free tier available)

### Installation

```bash
# 1. Clone the repository
git clone <repo-url>
cd message-study

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# 4. Start development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
message-study/
├── src/
│   ├── components/
│   │   ├── Button.tsx              # Reusable button component
│   │   ├── Input.tsx               # Form input component
│   │   ├── Card.tsx                # Card component
│   │   ├── Sidebar.tsx             # Navigation sidebar
│   │   ├── Header.tsx              # Page header
│   │   ├── Toast.tsx               # Notification toast
│   │   ├── CitationItem.tsx        # Citation display
│   │   ├── SearchBox.tsx           # Search input
│   │   └── Navigation.tsx          # Nav items
│   ├── pages/
│   │   ├── Dashboard.tsx           # Home/dashboard
│   │   ├── SearchPage.tsx          # Global search
│   │   ├── ThemesPage.tsx          # Themes list
│   │   ├── ThemeDetailPage.tsx     # Theme citations
│   │   ├── CitationDetailPage.tsx  # Citation detail
│   │   ├── AssistantPage.tsx       # AI assistant
│   │   ├── CollectionsPage.tsx     # User collections
│   │   ├── StudiesPage.tsx         # User studies
│   │   ├── FavoritesPage.tsx       # Favorites
│   │   ├── HistoryPage.tsx         # View history
│   │   └── SettingsPage.tsx        # Settings
│   ├── store/
│   │   ├── authStore.ts            # Auth state (Zustand)
│   │   ├── uiStore.ts              # UI state
│   │   └── dataStore.ts            # Data state
│   ├── lib/
│   │   ├── supabase.ts             # Supabase client & services
│   │   ├── api.ts                  # API helpers
│   │   └── utils.ts                # Utility functions
│   ├── types/
│   │   └── index.ts                # TypeScript types
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Global styles + Tailwind
├── index.html                      # HTML entry point
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies
└── .env.example                    # Environment variables template
```

---

## 🎨 Design System

**Colors:**
- Primary: `#1a3a4a` (Blue Slate)
- Accent: `#c9a961` (Gold)
- Neutrals: Warm grays (#f8f7f5 → #2b2b2b)
- Semantic: Green, Orange, Red, Blue

**Typography:**
- Display/Headings: Inter (Bold, Semi Bold)
- Body: Lora (serif, for reading)
- Labels: Inter (Medium)
- Code: Fira Code (monospace)

**Spacing Scale:** 4px base unit (4, 8, 12, 16, 24, 32, 48px)

**Responsive:**
- Mobile: < 768px (single column, drawer nav)
- Tablet: 768–1024px (sidebar visible, 2 cols)
- Desktop: > 1024px (full layout, 3+ cols)

See `/design-system-spec.md` for complete specifications.

---

## 🗄️ Database Schema (Supabase)

### Tables

**auth.users** (Supabase managed)
```sql
- id (UUID, PK)
- email (text)
- name (text, from user_metadata)
```

**profiles**
```sql
- id (UUID, FK → auth.users)
- name (text)
- avatar_url (text)
- role (enum: user, editor, admin)
- created_at (timestamp)
```

**themes**
```sql
- id (UUID, PK)
- name (text, unique)
- description (text)
- icon (text)
- created_by (UUID, FK → profiles)
- created_at (timestamp)
- updated_at (timestamp)
```

**citations**
```sql
- id (UUID, PK)
- idea_directive (text) — The main concept
- original_text (text)   — Original language
- translation_text (text)— French translation
- reference (text)       — Citation reference
- reference_title (text)
- reference_date (date)
- paragraph_number (int)
- language (text: 'en', 'fr', etc)
- theme_id (UUID, FK → themes)
- status (enum: draft, review, verified, published)
- created_by (UUID, FK → profiles)
- created_at (timestamp)
- updated_at (timestamp)
```

**collections**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles)
- name (text)
- description (text)
- is_public (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

**collection_citations** (join table)
```sql
- id (UUID, PK)
- collection_id (UUID, FK → collections)
- citation_id (UUID, FK → citations)
- added_at (timestamp)
```

**studies**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles)
- title (text)
- description (text)
- content (text, markdown)
- status (enum: draft, in_progress, completed)
- progress_percentage (int, 0-100)
- created_at (timestamp)
- updated_at (timestamp)
```

**study_citations** (join table)
```sql
- id (UUID, PK)
- study_id (UUID, FK → studies)
- citation_id (UUID, FK → citations)
- notes (text)
- order (int)
```

**notes**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles)
- content (text)
- citation_id (UUID, FK → citations, nullable)
- theme_id (UUID, FK → themes, nullable)
- collection_id (UUID, FK → collections, nullable)
- is_public (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

**favorites**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles)
- citation_id (UUID, FK → citations)
- created_at (timestamp)
```

**history**
```sql
- id (UUID, PK)
- user_id (UUID, FK → profiles)
- citation_id (UUID, FK → citations, nullable)
- theme_id (UUID, FK → themes, nullable)
- action (enum: view, search, create, update)
- viewed_at (timestamp)
```

---

## 📝 Implementation Checklist

### Phase 1: Components ✅ (In Progress)
- [x] Button component
- [ ] Input field component
- [ ] Card component
- [ ] Citation item component
- [ ] Search box component
- [ ] Toast/notification component
- [ ] Sidebar component
- [ ] Header component
- [ ] Navigation items
- [ ] Modal/dialog component
- [ ] Badge component
- [ ] Dropdown component
- [ ] Spinner/loader component
- [ ] Tabs component

### Phase 2: Pages
- [ ] Dashboard page
- [ ] Search results page
- [ ] Themes list page
- [ ] Theme detail page (with citations list)
- [ ] Citation detail page
- [ ] Assistant/chat page
- [ ] Collections page
- [ ] Studies page
- [ ] Favorites page
- [ ] Notes page
- [ ] History page
- [ ] Settings page
- [ ] Login/signup pages

### Phase 3: Features
- [ ] Authentication (signup, signin, signout)
- [ ] Citation search (full-text, semantic)
- [ ] Citation filtering by theme
- [ ] Create/edit collections
- [ ] Add citations to collections
- [ ] Create/edit studies
- [ ] Add notes to citations
- [ ] Mark favorites
- [ ] View history
- [ ] AI assistant integration (optional)
- [ ] Export/share functionality
- [ ] Sync state management

### Phase 4: Polish & Deploy
- [ ] Responsive design testing
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance optimization
- [ ] Error handling & validation
- [ ] Loading states
- [ ] Empty states
- [ ] Dark mode (optional)
- [ ] Unit tests
- [ ] E2E tests
- [ ] Deployment to Vercel

---

## 🔑 Key Features

### Core
- **Premium UI** — Design system faithful to specs (blue slate + gold + warm grays)
- **Citation Management** — Search, filter, view citations with full context
- **Thematic Organization** — Group citations by themes
- **Personal Collections** — Create custom grouped citations
- **Studies** — Build research studies with notes and citations
- **Favorites & History** — Quick access to bookmarks and recent views
- **Search** — Full-text and semantic search (requires AI backend)
- **Assistant** — Ask questions about the Message (requires AI backend)

### Future
- Dark mode
- Offline support (PWA)
- Mobile app (React Native)
- Real-time collaboration
- Export to PDF/Markdown
- Advanced analytics

---

## 🧩 State Management (Zustand)

### Auth Store
```typescript
- user: User | null
- isAuthenticated: boolean
- setUser(user)
- logout()
```

### UI Store
```typescript
- currentPage: PageType
- sidebarOpen: boolean
- viewMode: 'read' | 'study'
- syncState: SyncState
- toast: Toast | null
- methods: setCurrentPage, toggleSidebar, setViewMode, showToast...
```

### Data Store (Optional)
```typescript
- citations: Citation[]
- themes: Theme[]
- collections: Collection[]
- loadCitations()
- loadThemes()
...
```

---

## 🔐 Supabase Setup

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Create new project
   - Get API URL and anon key

2. **Setup Authentication**
   - Enable Email/Password auth in Dashboard
   - Add redirect URLs (dev: http://localhost:3000, prod: your-domain)

3. **Create Tables**
   - Run SQL migrations (see Database Schema above)
   - Set up RLS policies for security

4. **Setup Env Variables**
   ```
   VITE_SUPABASE_URL=your_url
   VITE_SUPABASE_ANON_KEY=your_key
   ```

---

## 🚦 Development Workflow

### Coding Standards
- Use TypeScript (strict mode)
- Follow naming conventions (camelCase for vars/functions, PascalCase for components)
- Keep components small and focused
- Use custom hooks for reusable logic
- Write types in `src/types/index.ts`

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/component-name

# Make changes and commit
git add .
git commit -m "Add component-name component"

# Push and create PR
git push origin feature/component-name
```

### Testing
```bash
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run coverage     # Coverage report
```

---

## 📦 Dependencies

### Core
- **react** 18.2.0
- **react-dom** 18.2.0
- **react-router-dom** 6.20.0 (for routing)
- **zustand** 4.4.0 (state management)

### Supabase
- **@supabase/supabase-js** 2.38.0

### Utilities
- **axios** 1.6.0 (HTTP client)
- **date-fns** 2.30.0 (date utilities)

### Dev
- **vite** 5.0.0
- **typescript** 5.3.0
- **tailwindcss** 3.3.0
- **postcss** + **autoprefixer**

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect to Vercel
# - Go to vercel.com
# - Import project from GitHub
# - Add env variables
# - Deploy

# Or deploy manually:
npm run build
vercel deploy
```

### Environment Variables (Vercel)
```
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

---

## 🐛 Troubleshooting

**Port 3000 already in use**
```bash
lsof -i :3000  # Find process
kill -9 <PID>  # Kill it
npm run dev    # Restart
```

**Tailwind not applying**
- Check `content` in `tailwind.config.js`
- Ensure `@tailwind` directives in `src/index.css`
- Rebuild with `npm run dev`

**Supabase connection errors**
- Verify env variables are correct
- Check network tab in DevTools
- Test connection in Supabase dashboard

---

## 📞 Support & Contact

For questions or issues:
- GitHub Issues: [link]
- Email: [support email]
- Discord: [link]

---

## 📄 License

MIT License — See LICENSE file

---

**Built with ❤️ for serious study of the Message**
