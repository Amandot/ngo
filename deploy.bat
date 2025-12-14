@echo off
echo 🚀 Preparing GiveBack Hub for Vercel Deployment...
echo.

echo ✅ Step 1: Adding all files to git...
git add .

echo ✅ Step 2: Committing changes...
git commit -m "Fix deployment issues: Add dynamic exports, Suspense wrapper, and environment handling"

echo ✅ Step 3: Pushing to GitHub...
git push origin main

echo.
echo 🎉 Code pushed to GitHub successfully!
echo.
echo 📋 Next Steps:
echo 1. Go to https://vercel.com/dashboard
echo 2. Click "New Project"
echo 3. Import your GitHub repository
echo 4. Add environment variables (see .env.example)
echo 5. Deploy!
echo.
echo 📖 For detailed instructions, see DEPLOYMENT.md
echo.
pause