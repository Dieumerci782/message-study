-- ============ MESSAGE STUDY - SCHEMA SQL ============
-- Execute this in Supabase SQL Editor to create all tables

-- ============ 1. PROFILES (Users) ============
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- ============ 2. THEMES ============
CREATE TABLE IF NOT EXISTS themes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  color_hex TEXT DEFAULT '#1F2937',
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view themes" ON themes FOR SELECT USING (true);
CREATE POLICY "Only creator can update theme" ON themes
  FOR UPDATE USING (auth.uid() = created_by);

-- ============ 3. CITATIONS ============
CREATE TABLE IF NOT EXISTS citations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  idea TEXT NOT NULL,
  original_text TEXT NOT NULL,
  translation TEXT,
  reference TEXT,
  theme_id UUID REFERENCES themes(id),
  date_ref TEXT,
  book TEXT,
  chapter INT,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE citations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view citations" ON citations FOR SELECT USING (true);
CREATE POLICY "Creator can manage citations" ON citations
  FOR ALL USING (auth.uid() = created_by OR created_by IS NULL);

-- ============ 4. COLLECTIONS ============
CREATE TABLE IF NOT EXISTS collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their collections" ON collections
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their collections" ON collections
  FOR ALL USING (auth.uid() = user_id);

-- ============ 5. COLLECTION_CITATIONS (Many-to-Many) ============
CREATE TABLE IF NOT EXISTS collection_citations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  citation_id UUID NOT NULL REFERENCES citations(id) ON DELETE CASCADE,
  added_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(collection_id, citation_id)
);

ALTER TABLE collection_citations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their collection citations" ON collection_citations
  FOR ALL USING (
    collection_id IN (
      SELECT id FROM collections WHERE user_id = auth.uid()
    )
  );

-- ============ 6. STUDIES ============
CREATE TABLE IF NOT EXISTS studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  progress INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their studies" ON studies
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their studies" ON studies
  FOR ALL USING (auth.uid() = user_id);

-- ============ 7. STUDY_CITATIONS ============
CREATE TABLE IF NOT EXISTS study_citations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  study_id UUID NOT NULL REFERENCES studies(id) ON DELETE CASCADE,
  citation_id UUID NOT NULL REFERENCES citations(id) ON DELETE CASCADE,
  notes TEXT,
  order_index INT DEFAULT 0,
  added_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(study_id, citation_id)
);

ALTER TABLE study_citations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage their study citations" ON study_citations
  FOR ALL USING (
    study_id IN (
      SELECT id FROM studies WHERE user_id = auth.uid()
    )
  );

-- ============ 8. FAVORITES ============
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  citation_id UUID NOT NULL REFERENCES citations(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, citation_id)
);

ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their favorites" ON favorites
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their favorites" ON favorites
  FOR ALL USING (auth.uid() = user_id);

-- ============ 9. NOTES ============
CREATE TABLE IF NOT EXISTS notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  citation_id UUID REFERENCES citations(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their notes" ON notes
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can manage their notes" ON notes
  FOR ALL USING (auth.uid() = user_id);

-- ============ 10. HISTORY ============
CREATE TABLE IF NOT EXISTS history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL, -- 'view', 'create', 'favorite', 'search', etc.
  item_type TEXT, -- 'citation', 'theme', 'collection', etc.
  item_id UUID,
  item_name TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their history" ON history
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create history" ON history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============ INDEXES ============
CREATE INDEX IF NOT EXISTS citations_theme_id ON citations(theme_id);
CREATE INDEX IF NOT EXISTS citations_created_by ON citations(created_by);
CREATE INDEX IF NOT EXISTS citations_idea ON citations USING GIN(to_tsvector('french', idea));
CREATE INDEX IF NOT EXISTS collections_user_id ON collections(user_id);
CREATE INDEX IF NOT EXISTS favorites_user_id ON favorites(user_id);
CREATE INDEX IF NOT EXISTS notes_user_id ON notes(user_id);
CREATE INDEX IF NOT EXISTS history_user_id ON history(user_id);
CREATE INDEX IF NOT EXISTS history_created_at ON history(created_at DESC);

-- ============ SEED DATA ============
-- Default themes
INSERT INTO themes (name, description, icon, color_hex) VALUES
  ('Révélations Divines', 'Les révélations de Dieu aux hommes', '✨', '#7c3aed'),
  ('Spiritualité', 'Développement et croissance spirituelle', '🙏', '#3b82f6'),
  ('Sciences', 'Principes scientifiques mentionnés', '🔬', '#10b981'),
  ('Guérison', 'La guérison divine et ses manifestations', '💚', '#ec4899'),
  ('Nations', 'Références aux peuples et nations', '🌍', '#f59e0b'),
  ('Ministères', 'Différents ministères et rôles spirituels', '🎯', '#8b5cf6')
ON CONFLICT DO NOTHING;

-- Sample citations (insert after themes are created)
INSERT INTO citations (idea, original_text, translation, reference, date_ref)
VALUES
  (
    'La lumière triomphe des ténèbres',
    'And the light shineth in darkness; and the darkness comprehended it not.',
    'Et la lumière brille dans les ténèbres; et les ténèbres ne l''ont point reçue.',
    'Jean 1:5',
    '1964-04-17'
  ),
  (
    'Dieu parle par ses prophètes',
    'Surely the Lord GOD will do nothing, but he revealeth his secret unto his servants the prophets.',
    'Car le Seigneur, l''Éternel, ne fait rien Sans avoir révélé son secret à ses serviteurs les prophètes.',
    'Amos 3:7',
    '1961-03-19'
  ),
  (
    'La foi guérit toutes choses',
    'Is any sick among you? let him call for the elders of the church',
    'Y a-t-il parmi vous quelqu''un de malade? Qu''il appelle les anciens de l''église',
    'Jacques 5:14',
    '1955-06-26'
  )
ON CONFLICT DO NOTHING;

-- ============ DONE ============
-- All tables created successfully!
-- Next: Enable authentication in Supabase dashboard
-- - Go to Authentication > Providers > Email
-- - Enable Email/Password authentication
