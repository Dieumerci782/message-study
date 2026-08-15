# Quick Start — Message Study

## 🚀 Get Running in 3 Minutes

### 1. Install & Setup (1 min)
```bash
cd "C:\Users\hp\Documents\Claude projets\Message Study"
npm install
cp .env.example .env.local
```

### 2. Add Supabase Keys (30 sec)
Edit `.env.local`:
```
VITE_SUPABASE_URL=your_url_from_supabase
VITE_SUPABASE_ANON_KEY=your_key_from_supabase
```

### 3. Start Development (30 sec)
```bash
npm run dev
```

Browser opens to **http://localhost:3000** automatically.

---

## ✨ What You Get

✅ **Full UI ready to use**
- Navigation (sidebar)
- Dashboard with cards
- Search interface
- Citation detail view
- Theme listing
- All components styled per design system

✅ **Components you can use now**
```tsx
<Button variant="primary">Click Me</Button>
<Card>Your content</Card>
<Input label="Email" type="email" />
<SearchBox onSearch={handleSearch} />
<Modal isOpen={true} onClose={close}>Content</Modal>
```

✅ **State management**
- Authentication store (Zustand)
- UI store (Zustand)
- Page navigation working
- View mode toggle (read/study)

---

## 📱 Test It Now

1. Open browser to http://localhost:3000
2. Click sidebar items to navigate between pages
3. Try the search box on dashboard
4. Toggle "Lecture/Étude" mode in header
5. Click cards to navigate

Everything is wired and working!

---

## 📊 What's Implemented

### Pages (100% UI complete)
- ✅ Dashboard (search + cards)
- ✅ Search results
- ✅ Themes list
- ✅ Citation detail
- ⏳ 7 stub pages (ready to implement)

### Components (100% complete)
- ✅ Button, Input, TextArea, Select, Checkbox
- ✅ Card (with sub-components)
- ✅ Sidebar, Header
- ✅ Modal, Toast, Spinner
- ✅ Badge, Tabs, SearchBox
- ✅ CitationCard (specialized)

### Features
- ✅ Responsive design (mobile → desktop)
- ✅ Navigation routing
- ✅ State management
- ✅ Design system integrated
- ✅ TypeScript strict mode
- ⏳ Supabase integration (ready to wire)
- ⏳ Authentication (ready to implement)
- ⏳ Data persistence (ready to implement)

---

## 🔧 Next: Wire Up Supabase

### 1. Setup Supabase (5 min)
```bash
# Create project at https://supabase.com
# Get URL and anon key
# Add to .env.local
```

### 2. Create Tables (using provided SQL)
In Supabase dashboard:
- Run SQL migrations (see README.md Database Schema)
- Enable auth (email/password)
- Setup RLS policies

### 3. Wire Components to Supabase
Example:
```tsx
const handleSearch = async (query: string) => {
  const { data, error } = await citationService.searchCitations(query)
  if (data) setResults(data)
}
```

Services ready to use:
- `authService.signUp/signIn/signOut/getCurrentUser`
- `citationService.getAllCitations/getCitationById/searchCitations`
- `themeService.getAllThemes/getThemeById`
- `collectionService.getUserCollections/createCollection`

---

## 💡 Pro Tips

### File Structure
```
src/
  components/     → All UI components (13 ready to use)
  pages/          → Page components (4 complete, 7 stubs)
  store/          → Zustand stores (auth + UI)
  lib/            → Services (Supabase, utils)
  types/          → TypeScript types
```

### Import Pattern
```tsx
// Components
import { Button, Card, Input } from '@/components'

// Pages
import { Dashboard } from '@/pages'

// Store
import { useUIStore } from '@/store/uiStore'
import { useAuthStore } from '@/store/authStore'

// Services
import { citationService, authService } from '@/lib/supabase'

// Types
import type { Citation, Theme, User } from '@/types'
```

### Common Tasks

**Navigate to a page:**
```tsx
import { useUIStore } from '@/store/uiStore'

const { setCurrentPage } = useUIStore()

<button onClick={() => setCurrentPage('search')}>
  Go to search
</button>
```

**Show notification:**
```tsx
import { useUIStore } from '@/store/uiStore'

const { showToast } = useUIStore()

<button onClick={() => showToast('Saved!', 'success')}>
  Save
</button>
```

**Use a component:**
```tsx
import { Button, Card, Input, Modal } from '@/components'

export const MyComponent = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card>
        <Input label="Name" placeholder="Enter name" />
        <Button onClick={() => setShowModal(true)}>
          Open Dialog
        </Button>
      </Card>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Welcome"
      >
        <p>Your modal content here</p>
      </Modal>
    </>
  )
}
```

---

## 📚 Documentation

- **README.md** — Full overview + setup
- **IMPLEMENTATION_GUIDE.md** — Step-by-step implementation plan
- **COMPONENTS_COMPLETE.md** — What's implemented
- **PROJECT_STATUS.md** — Progress tracking
- **src/types/index.ts** — All TypeScript types

---

## ✅ Build Checklist

Before deploying:
- [ ] Supabase connected
- [ ] Auth working (signup/login)
- [ ] Data fetching working (search, themes, citations)
- [ ] All pages complete (not just stubs)
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Error handling added
- [ ] Loading states showing
- [ ] Toast notifications working
- [ ] Empty states showing when no data
- [ ] Build passes (`npm run build`)

---

## 🎯 Current Status

**✅ Foundation: COMPLETE**
- All setup done
- All components ready
- All pages structured
- Design system integrated

**🚧 Next: Implementation**
- Wire Supabase to components
- Complete stub pages
- Add features (auth, search, favorites, etc.)
- Test thoroughly
- Deploy

**⏳ Time to launch: ~1-2 weeks** (depending on features)

---

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
lsof -i :3000
kill -9 <PID>
npm run dev
```

**TypeScript errors?**
```bash
npm run type-check
```

**Tailwind not applying?**
- Restart dev server
- Check `tailwind.config.js` content paths
- Verify `@tailwind` in `src/index.css`

**Components not found?**
- Check imports use `@/components`
- Verify component exported in `components/index.ts`

---

## 🚀 Ready!

Everything is set up and ready to go.

**Your next steps:**
1. ✅ Start dev server: `npm run dev`
2. 🔍 Explore the UI at http://localhost:3000
3. 📖 Read IMPLEMENTATION_GUIDE.md for next phase
4. 🔌 Wire Supabase when ready
5. 🎉 Launch!

---

**Questions? Check the docs in the project or README.md**

**Happy building! 🚀**
