#!/bin/bash

# GitHub Pages Deployment Verification Script
# Run this script to verify your setup before deploying

echo "🔍 GitHub Pages Deployment Verification"
echo "========================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Check 1: package.json exists
echo "1️⃣  Checking package.json exists..."
if [ -f "/app/frontend/package.json" ]; then
    echo -e "${GREEN}✅ package.json found${NC}"
else
    echo -e "${RED}❌ package.json not found${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 2: homepage field in package.json
echo "2️⃣  Checking homepage field..."
if grep -q '"homepage"' /app/frontend/package.json; then
    HOMEPAGE=$(grep '"homepage"' /app/frontend/package.json)
    echo -e "${GREEN}✅ Homepage field found:${NC}"
    echo "   $HOMEPAGE"
    
    if echo "$HOMEPAGE" | grep -q "YOUR_USERNAME\|YOUR_REPO"; then
        echo -e "${YELLOW}⚠️  Warning: You need to replace YOUR_USERNAME and YOUR_REPO with actual values${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${RED}❌ Homepage field not found in package.json${NC}"
    echo -e "${YELLOW}   Add this to package.json:${NC}"
    echo '   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",'
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 3: .nojekyll file
echo "3️⃣  Checking .nojekyll file..."
if [ -f "/app/frontend/public/.nojekyll" ]; then
    echo -e "${GREEN}✅ .nojekyll file exists${NC}"
else
    echo -e "${YELLOW}⚠️  .nojekyll file not found, creating it...${NC}"
    touch /app/frontend/public/.nojekyll
    echo -e "${GREEN}✅ Created .nojekyll file${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check 4: workflow file
echo "4️⃣  Checking GitHub Actions workflow..."
if [ -f "/app/.github/workflows/deploy.yml" ]; then
    echo -e "${GREEN}✅ Workflow file exists${NC}"
else
    echo -e "${RED}❌ Workflow file not found at .github/workflows/deploy.yml${NC}"
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 5: Node modules
echo "5️⃣  Checking dependencies..."
if [ -d "/app/frontend/node_modules" ]; then
    echo -e "${GREEN}✅ node_modules directory exists${NC}"
else
    echo -e "${YELLOW}⚠️  node_modules not found${NC}"
    echo "   Run: cd /app/frontend && yarn install"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Check 6: Try building
echo "6️⃣  Testing build process..."
cd /app/frontend
if yarn build > /tmp/build_test.log 2>&1; then
    echo -e "${GREEN}✅ Build completed successfully${NC}"
    
    # Check build output
    if [ -d "/app/frontend/build" ]; then
        echo -e "${GREEN}✅ Build directory created${NC}"
        
        if [ -f "/app/frontend/build/index.html" ]; then
            echo -e "${GREEN}✅ index.html generated${NC}"
        else
            echo -e "${RED}❌ index.html not found in build${NC}"
            ERRORS=$((ERRORS + 1))
        fi
    else
        echo -e "${RED}❌ Build directory not created${NC}"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}❌ Build failed${NC}"
    echo "   Check errors:"
    tail -20 /tmp/build_test.log
    ERRORS=$((ERRORS + 1))
fi
echo ""

# Check 7: Git repository
echo "7️⃣  Checking Git repository..."
if [ -d "/app/.git" ]; then
    echo -e "${GREEN}✅ Git repository initialized${NC}"
    
    REMOTE=$(git -C /app config --get remote.origin.url 2>/dev/null)
    if [ -n "$REMOTE" ]; then
        echo -e "${GREEN}✅ Remote origin configured:${NC}"
        echo "   $REMOTE"
    else
        echo -e "${YELLOW}⚠️  No remote origin configured${NC}"
        echo "   This is normal if you haven't pushed to GitHub yet"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${YELLOW}⚠️  No git repository found${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

# Summary
echo "========================================"
echo "📊 Verification Summary"
echo "========================================"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✨ All checks passed! Your setup is ready for deployment.${NC}"
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  $WARNINGS warning(s) found. Review the warnings above.${NC}"
else
    echo -e "${RED}❌ $ERRORS error(s) and $WARNINGS warning(s) found.${NC}"
    echo -e "${RED}   Fix the errors before attempting deployment.${NC}"
fi
echo ""

echo "Next steps:"
echo "1. Fix any errors or warnings listed above"
echo "2. Add 'homepage' field to package.json if missing"
echo "3. Push to GitHub using 'Save to GitHub' button"
echo "4. Configure GitHub Pages: Settings → Pages → Source: GitHub Actions"
echo ""
