#!/bin/bash

echo "🧠 Применяем v1-fix (структурный layout для главной)..."

# === Создаём layout/_homepage-layout.sass ===
mkdir -p src/styles/sass/layout

cat > src/styles/sass/layout/_homepage-layout.sass <<'EOF'
// Layout for homepage blocks
.tab-content__cont
  display: flex
  flex-direction: column

.featured-greeting
  width: 100%
  margin-bottom: 20px

.main-sections-row
  display: flex
  gap: 20px
  align-items: flex-start

  > .featured-article,
  > .from-new-materials
    flex: 1
EOF

echo "✅ layout/_homepage-layout.sass создан"

# === Импортируем в main.sass ===
if ! grep -q "@use './layout/homepage-layout'" src/styles/sass/main.sass; then
  echo "@use './layout/homepage-layout'" >> src/styles/sass/main.sass
  echo "✅ Импорт добавлен в main.sass"
else
  echo "ℹ️ Импорт уже был в main.sass"
fi

# === Обновим ContentMenu.jsx: обернём в .main-sections-row ===
file="src/components/layout/ContentMenu.jsx"
if grep -q "<ArticleGreeting />" "$file" && ! grep -q "main-sections-row" "$file"; then
  sed -i '/<ArticleGreeting \/>/a \ \ \ \ \ \ \ \ <div className="main-sections-row">' "$file"
  sed -i '/<RecentArticles \/>/a \ \ \ \ \ \ \ \ </div>' "$file"
  echo "✅ Обёртка .main-sections-row добавлена в ContentMenu.jsx"
else
  echo "ℹ️ Вероятно, .main-sections-row уже есть"
fi

echo "🎯 Структурный патч v1-fix применён!"
