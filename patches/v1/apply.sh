#!/bin/bash

echo "🚀 Применяем патч v1..."

# === Fix greeting width ===
cat >> src/styles/sass/main.sass <<'EOF'

.tab-content__cont
  display: flex
  flex-direction: column

.article-greeting
  width: 100%
  margin-bottom: 20px
EOF
echo "✅ Greeting шириной 100%"

# === Update FeaturedArticle.js ===
cat > src/components/articles/FeaturedArticle.js <<'EOF'
import React from 'react'
import teodorImg from '../../images/teodor.jpg'

function FeaturedArticle() {
  return (
    <section className='featured-article'>
      <h5 className='featured-article__subtitle'>Избранная статья</h5>
      <article className='featured-article__content'>
        <h3 className='featured-article__title'>Теодор Еске-Хоинский</h3>
        <p>
          Теодор Юзеф Фридерик Еске-Хоинский (пол. Teodor Józef Fryderyk Jeske-Choiński;
          27 февраля 1854, Плешев, королевство Пруссия — 14 апреля 1920, Варшава, Польская республика) —
          польский критик, романист и публицист, представитель младоконсерватизма.
        </p>
        <img src={teodorImg} alt='teodor-img' />
        <p>
          Противник литературной группировки «Молодая Польша» — Еске-Хоинский начал свою литературную работу
          в либеральном направлении, выступал против ксёндзов («Kossak i Kuczma», 1876, «Karmazyn», 1877);
          сотрудничал в позитивистском журнале «Nowiny». Впоследствии Еске-Хоинский перешёл в группу
          «младоконсерваторов» и стал деятельным участником их печатных органов — «Niwa» и «Slowo».
        </p>
        <p>
          Из публицистических работ Еске-Хоинского наиболее известны «Pozytywizm warszawski i jego glowni przedstawiciele»,
          «Typy i idealy pozytiwistycznej beletrystiki polskiej», «Poznaj żyда» (1912), «Dekadentyzm» (1905),
          а также работы о немецкой литературе и беллетристика о Древнем Риме: «Gasnące Slonce»,
          «Последние римляне» и др.
        </p>
      </article>
    </section>
  )
}

export default FeaturedArticle
EOF
echo "✅ FeaturedArticle обновлён"

# === Layout: 2 columns ===
cat >> src/styles/sass/main.sass <<'EOF'

.main-sections-row
  display: flex
  gap: 20px
  align-items: flex-start

  > .featured-article,
  > .from-new-materials
    flex: 1
EOF
echo "✅ Layout: двухколоночная структура добавлена"

echo "🎉 Патч v1 применён успешно!"
