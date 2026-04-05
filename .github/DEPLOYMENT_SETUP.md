# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup Instructions

### 1. Configure GitHub Pages in your repository:

1. Go to your GitHub repository
2. Click on **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**

### 2. Add Environment Variable (if using backend):

If your app needs to connect to a backend API:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add:
   - Name: `REACT_APP_BACKEND_URL`
   - Value: Your backend API URL (e.g., `https://your-api.com`)

### 3. Update package.json (Important!)

Add the `homepage` field to `/app/frontend/package.json`:

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

For example:
- If your repo is: `https://github.com/johndoe/mi-hogar-cleaning`
- Then homepage should be: `"homepage": "https://johndoe.github.io/mi-hogar-cleaning"`

### 4. Deployment

Once you push to the `main` branch:
1. GitHub Actions will automatically build your app
2. Deploy it to GitHub Pages
3. Your site will be available at the URL specified in `homepage`

## Files Added

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `frontend/public/.nojekyll` - Tells GitHub Pages not to use Jekyll
- This README file

## Workflow Details

The workflow:
- ✅ Triggers on push to `main` branch
- ✅ Installs dependencies using Yarn
- ✅ Builds the React app
- ✅ Deploys to GitHub Pages
- ✅ Uses environment variables from GitHub Secrets

## Troubleshooting

If the deployment fails:
1. Check the Actions tab in your GitHub repository
2. Make sure you've set the correct permissions (write access for Pages)
3. Verify the `homepage` field in package.json is correct
4. Check that all environment variables are set correctly

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in `/app/frontend/public/` with your domain
2. Configure DNS settings with your domain provider
3. Update the `homepage` field in package.json with your custom domain
