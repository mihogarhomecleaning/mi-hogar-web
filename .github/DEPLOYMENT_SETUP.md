# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## 🏗️ Build Configuration

- **Build Tool:** Create React App with CRACO
- **Build Command:** `yarn build`
- **Build Output:** `frontend/build/` directory
- **Entry Point:** `build/index.html`

## Setup Instructions

### 1. Configure GitHub Pages in your repository:

1. Go to your GitHub repository
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions** (NOT "Deploy from a branch")

### 2. Add the `homepage` field to package.json:

**IMPORTANT:** Open `/app/frontend/package.json` and add:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  ...
}
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

**Example:**
- Repo: `https://github.com/johndoe/mi-hogar-cleaning`
- Homepage: `"homepage": "https://johndoe.github.io/mi-hogar-cleaning"`

### 3. Add Environment Variable (Optional):

If your app needs to connect to a backend API:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add:
   - Name: `REACT_APP_BACKEND_URL`
   - Value: Your backend API URL (e.g., `https://your-api.com`)

### 4. Deployment Process

Once you push to the `main` branch:
1. ✅ GitHub Actions triggers automatically
2. ✅ Installs dependencies with Yarn
3. ✅ Runs `yarn build` in the frontend directory
4. ✅ Creates optimized production build in `frontend/build/`
5. ✅ Adds `.nojekyll` file to the build folder
6. ✅ Deploys the `build` directory to GitHub Pages
7. ✅ Your site will be live at the URL specified in `homepage`

## 📁 Directory Structure

```
/app
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── frontend/
│   ├── public/
│   │   ├── index.html          # Source HTML template
│   │   └── .nojekyll           # Prevents Jekyll processing
│   ├── src/
│   │   └── ...                 # React source code
│   ├── build/                  # Generated after running 'yarn build'
│   │   ├── index.html          # Production HTML (generated)
│   │   ├── static/             # Compiled JS, CSS, images
│   │   └── .nojekyll           # Added during GitHub Actions
│   └── package.json            # Must include 'homepage' field
```

## 🔧 How It Works

### The Build Process:

1. **Source:** `frontend/public/index.html` (template with `%PUBLIC_URL%` placeholders)
2. **Build:** CRACO/Webpack processes React app and creates optimized bundle
3. **Output:** `frontend/build/index.html` (production-ready with all assets linked)
4. **Deploy:** GitHub Actions uploads the entire `build/` folder to GitHub Pages

### Why `build` and not `dist`?

- **Create React App** uses `build/` as the output directory
- **Vite** uses `dist/` as the output directory
- This project uses Create React App, so the workflow deploys from `build/`

## 🚀 Testing Locally

To test the production build locally:

```bash
cd /app/frontend
yarn build
yarn global add serve
serve -s build
```

Visit `http://localhost:3000` to see the production build.

## 🐛 Troubleshooting

### Issue: Blank page or 404 errors

**Solution:** Make sure you've added the `homepage` field in `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
```

### Issue: CSS/JS not loading

**Solution:** The `PUBLIC_URL` environment variable in the workflow ensures assets load correctly. Make sure the `homepage` field matches your GitHub Pages URL.

### Issue: Build fails in GitHub Actions

**Solutions:**
1. Check the Actions tab for error logs
2. Make sure `yarn.lock` is committed to the repository
3. Verify all dependencies are in `package.json`
4. Try building locally first with `yarn build`

### Issue: Images not showing

**Solution:** 
- Images in `public/` folder should be referenced as `%PUBLIC_URL%/image.png`
- Images imported in React code will be bundled automatically

## 📝 Files Added/Modified

- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `frontend/public/.nojekyll` - Prevents Jekyll processing
- ✅ This README file

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in `/app/frontend/public/` with your domain:
   ```
   www.yourdomain.com
   ```

2. Update `package.json` homepage:
   ```json
   "homepage": "https://www.yourdomain.com"
   ```

3. Configure DNS with your domain provider:
   - Add A records pointing to GitHub Pages IPs
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

4. In GitHub: Settings → Pages → Custom domain → Enter your domain

## 📞 Support

If you encounter issues:
- Check the [GitHub Actions tab](../../actions) for build logs
- Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Contact Emergent support via Discord or email
