#!/bin/bash
# 🚀 DEPLOYMENT SCRIPT - Devriese Software Next.js
# Run dit script morgenochtend om snel te deployen!

echo "🚀 Devriese Software - Next.js 15 Deployment"
echo "=============================================="
echo ""

# Check of we in de juiste folder zitten
if [ ! -f "package.json" ]; then
    echo "❌ Fout: Run dit script vanuit de devriesesoftware-nextjs folder!"
    exit 1
fi

echo "📦 Stap 1: Dependencies checken..."
npm install

echo ""
echo "🔨 Stap 2: Production build maken..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build succesvol!"
    echo ""
    echo "🚀 Stap 3: Deployment opties:"
    echo ""
    echo "OPTIE A - Vercel (Snelst & Aanbevolen)"
    echo "  1. npm i -g vercel"
    echo "  2. vercel"
    echo "  3. Volg de prompts"
    echo ""
    echo "OPTIE B - Netlify"
    echo "  1. netlify deploy --prod"
    echo ""
    echo "OPTIE C - Custom Server"
    echo "  1. npm start (draait op port 3000)"
    echo ""
    echo "📊 Lighthouse Test:"
    echo "  Open Chrome → DevTools → Lighthouse → Run Audit"
    echo "  Verwachte scores: 95-100 op alle categorieën! 🏆"
    echo ""
    echo "✨ Je website is klaar! Succes met de launch!"
else
    echo ""
    echo "❌ Build gefaald. Check de errors hierboven."
    exit 1
fi
