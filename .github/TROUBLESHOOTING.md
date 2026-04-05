# GitHub Actions Troubleshooting Guide

## Issue: "Update package.json and Auto-generated changes" Error

This error typically occurs due to one of the following reasons:

### 1. Missing `homepage` field in package.json

**Solution:** Add the homepage field to `/app/frontend/package.json`:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  ...
}
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 2. GitHub Pages not properly configured

**Solution:** 

1. Go to your repository on GitHub
2. Navigate to: **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - DO NOT select "Deploy from a branch"
4. Save the changes

### 3. Missing repository permissions

**Solution:**

The workflow already has the correct permissions:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

But you need to ensure GitHub Pages is enabled in your repository settings (see step 2 above).

### 4. Environment not configured

**Solution:**

1. Go to **Settings** → **Environments**
2. You should see a `github-pages` environment (auto-created)
3. If it doesn't exist, GitHub Actions will create it on first deployment

### 5. Workflow file location

**Verify:** The workflow file must be at:
```
.github/workflows/deploy.yml
```

## How to Check Build Logs

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Click on the failed workflow run
4. Click on the "build" or "deploy" job
5. Review the error messages in the logs

## Common Error Messages and Solutions

### Error: "Resource not accessible by integration"

**Solution:** Make sure GitHub Pages is enabled in Settings → Pages with Source set to "GitHub Actions"

### Error: "refusing to allow an integration to create or update .github/workflows"

**Solution:** This means a workflow is trying to modify itself. Our workflow does NOT do this. Check if you have other workflows running.

### Error: "No url found for endpoint github-pages"

**Solution:** 
1. Enable GitHub Pages in Settings → Pages
2. Select "GitHub Actions" as the source
3. Re-run the workflow

### Error: "Build failed" during yarn build

**Possible causes:**
- Missing dependencies in package.json
- Build errors in your React code
- Missing environment variables

**Solution:**
1. Test the build locally: `cd /app/frontend && yarn build`
2. Fix any errors that appear
3. Commit and push the fixes

## Verifying the Setup

### Check 1: package.json has homepage

```bash
grep "homepage" /app/frontend/package.json
```

Should output something like:
```
"homepage": "https://yourusername.github.io/your-repo"
```

### Check 2: .nojekyll file exists

```bash
ls /app/frontend/public/.nojekyll
```

Should exist (even if empty).

### Check 3: Build works locally

```bash
cd /app/frontend
yarn install
yarn build
```

Should complete without errors and create `/app/frontend/build/` directory.

### Check 4: Workflow file is valid

```bash
cat /app/.github/workflows/deploy.yml
```

Should show the complete workflow configuration.

## Manual Deployment Test

If automated deployment fails, you can test manually:

```bash
# 1. Build locally
cd /app/frontend
yarn build

# 2. The build/ directory should contain:
# - index.html
# - static/ folder with JS, CSS
# - asset-manifest.json
# - All your images and assets

# 3. You can test the build:
npx serve -s build

# 4. Visit http://localhost:3000
```

## Next Steps if Still Failing

1. **Check Actions tab** on GitHub for detailed error logs
2. **Verify GitHub Pages is enabled** in Settings
3. **Ensure `homepage` field** is correct in package.json
4. **Try manual workflow trigger**: Actions tab → Deploy to GitHub Pages → Run workflow
5. **Check repository visibility**: Public repositories work better with GitHub Pages free tier

## Contact Support

If the issue persists after trying all solutions:

- Include the **exact error message** from GitHub Actions logs
- Include your **repository URL**
- Include a **screenshot** of Settings → Pages configuration
- Mention you've verified:
  - ✅ homepage field in package.json
  - ✅ GitHub Pages enabled with "GitHub Actions" source
  - ✅ Local build works with `yarn build`

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
