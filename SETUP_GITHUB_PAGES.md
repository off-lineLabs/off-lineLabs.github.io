# GitHub Pages Setup Instructions

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/off-lineLabs/off-lineLabs.github.io
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Step 2: Repository Settings for GitHub Actions

Make sure these settings are enabled in your repository:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save changes

## Step 3: Deploy

Once you push these changes, the GitHub Action will automatically:
1. Build your Next.js site
2. Deploy it to GitHub Pages
3. Your site will be available at: https://off-lineLabs.github.io

## Important Notes

- **No VM needed after deployment**: GitHub Pages hosts your site for free
- **Automatic updates**: Every time you push to main branch, the site updates automatically
- **Free hosting**: GitHub Pages is completely free for public repositories

## Troubleshooting

If you still get permission errors:
1. Make sure the repository is public
2. Check that GitHub Actions has write permissions
3. Verify the Pages source is set to "GitHub Actions"
