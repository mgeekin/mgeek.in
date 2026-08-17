# mGeek.in - Developer Guide

**Version:** 1.0  
**Last Updated:** August 16, 2026  
**For:** Frontend & Backend Developers

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Quick Start](#quick-start)
4. [Project Setup](#project-setup)
5. [Development Workflow](#development-workflow)
6. [Working with PocketBase](#working-with-pocketbase)
7. [Frontend Development](#frontend-development)
8. [Common Tasks](#common-tasks)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)
11. [Deployment](#deployment)
12. [Contributing Guidelines](#contributing-guidelines)

---

## Introduction

Welcome to the mGeek.in development team! This guide will help you set up your development environment and understand the codebase.

### What You'll Build

mGeek.in is a technology consulting platform connecting technical experts with clients. The tech stack is intentionally simple:

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Backend:** PocketBase (Go-based BaaS)
- **Database:** SQLite (embedded with PocketBase)

This architecture allows rapid development without complex build tools or framework overhead.

---

## Prerequisites

### Required Software

1. **PocketBase** (v0.16+ recommended)
   - Download from [pocketbase.io](https://pocketbase.io)
   - Single binary, no installation required

2. **Web Browser**
   - Chrome, Firefox, Safari, or Edge
   - Developer tools enabled

3. **Code Editor**
   - VS Code, Sublime, Atom, or any modern editor
   - Recommended VS Code extensions:
     - Live Server
     - HTML CSS Support
     - JavaScript (ES6) code snippets
     - Prettier

4. **Git**
   - For version control
   - Install from [git-scm.com](https://git-scm.com)

### Optional Tools

- **cURL or Postman:** For API testing
- **Image optimization tools:** ImageOptim, Squoosh
- **Browser extensions:**
  - JSON Formatter
  - Web Developer Tools

---

## Quick Start

Get up and running in 5 minutes:

```bash
# 1. Clone the repository
git clone https://github.com/your-org/mgeek.in.git
cd mgeek.in

# 2. Download PocketBase (if not already installed)
# Visit https://pocketbase.io/docs/ for your platform

# 3. Make PocketBase executable (Linux/Mac)
chmod +x pocketbase

# 4. Start PocketBase server
./pocketbase serve

# 5. Open browser to http://127.0.0.1:8090/_/
# The site loads automatically!
```

**That's it!** No npm install, no build step, no configuration files.

---

## Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-org/mgeek.in.git
cd mgeek.in
```

### 2. Install PocketBase

#### Linux (64-bit)
```bash
wget https://github.com/pocketbase/pocketbase/releases/download/v0.16.0/pocketbase_0.16.0_linux_amd64.zip
unzip pocketbase_0.16.0_linux_amd64.zip
chmod +x pocketbase
```

#### macOS (Apple Silicon)
```bash
curl -LO https://github.com/pocketbase/pocketbase/releases/download/v0.16.0/pocketbase_0.16.0_darwin_arm64.zip
unzip pocketbase_0.16.0_darwin_arm64.zip
chmod +x pocketbase
```

#### Windows
1. Download from [PocketBase Releases](https://github.com/pocketbase/pocketbase/releases)
2. Extract `pocketbase.exe`
3. Place in project directory

### 3. Initialize Database

```bash
# Start PocketBase (creates pb_data/ directory on first run)
./pocketbase serve
```

### 4. Import Database Schema

Option A: **Using Admin UI (Recommended)**

1. Open http://127.0.0.1:8090/_/
2. Create admin account when prompted
3. Go to **Settings** → **Import collections**
4. Upload `pb_schema.json`
5. Click **Review** → **Confirm**

Option B: **Using CLI**

```bash
# Import schema from JSON
./pocketbase migrate collections import pb_schema.json
```

### 5. Verify Installation

Visit these URLs to confirm everything works:

- **Frontend:** http://127.0.0.1:8090/_/
- **Admin UI:** http://127.0.0.1:8090/_/#/
- **API Docs:** http://127.0.0.1:8090/_/#/logs (after creating admin)

---

## Development Workflow

### Daily Workflow

```bash
# 1. Pull latest changes
git pull origin main

# 2. Start PocketBase server
./pocketbase serve

# 3. Open project in browser
# http://127.0.0.1:8090/_/

# 4. Make changes to HTML/CSS/JS files
# Refresh browser to see changes (no build step!)

# 5. Test changes in browser

# 6. Commit when ready
git add .
git commit -m "Description of changes"
git push origin your-branch
```

### Live Reloading

PocketBase serves files directly from the filesystem. Any changes to HTML/CSS/JS files are reflected immediately on browser refresh.

**Pro Tip:** Use VS Code Live Server extension for auto-reload during CSS work:

```bash
# Install Live Server extension in VS Code
# Right-click index.html → "Open with Live Server"
# Changes auto-reload without manual refresh
```

---

## Working with PocketBase

### Admin UI

Access at http://127.0.0.1:8090/_/

**Key Sections:**

1. **Collections:** View/edit database schema
2. **Records:** Browse and edit data
3. **Logs:** API request logs
4. **Settings:** Email, file storage, backups
5. **API Rules:** Configure access permissions

### Creating Test Data

#### Via Admin UI (Easy)

1. Navigate to **Collections** → Select collection
2. Click **New record**
3. Fill in fields
4. Click **Create**

#### Via API (Programmatic)

```javascript
// In browser console (after navigating to site)
const pb = window.pb;

// Create test project
await pb.collection('projects').create({
  title: 'Test Project',
  description: 'Sample project for testing',
  category: 'Software',
  status: 'published',
  tags: 'React, Node.js, PostgreSQL'
});

// Create test expert
await pb.collection('experts').create({
  user: 'USER_ID_HERE',
  name: 'John Developer',
  email: 'john@example.com',
  role: 'Full-Stack Developer',
  bio: 'Experienced developer specializing in web applications',
  primary_skills: 'JavaScript, Python, React',
  status: 'approved',
  profile_public: true
});
```

### Database Backup

```bash
# Backup database (manual)
cp -r pb_data pb_data_backup_$(date +%Y%m%d)

# Export collections to JSON
./pocketbase admin export --collections users,experts,projects
```

### API Testing

Using cURL:

```bash
# Test registration
curl -X POST http://127.0.0.1:8090/api/collections/users/records \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "passwordConfirm": "password123",
    "name": "Test User",
    "user_type": "client"
  }'

# Test login
curl -X POST http://127.0.0.1:8090/api/collections/users/auth-with-password \
  -H "Content-Type: application/json" \
  -d '{
    "identity": "test@example.com",
    "password": "password123"
  }'

# List projects
curl http://127.0.0.1:8090/api/collections/projects/records
```

---

## Frontend Development

### File Organization

```
Frontend Structure:
├── *.html              # Pages (index, about, contact, etc.)
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── main.js         # Core functionality
│   ├── auth.js         # Authentication
│   ├── contact.js      # Contact form
│   └── dashboard.js    # Dashboard features
└── assets/
    └── brand/          # Logo and branding assets
```

### Adding a New Page

**Step 1: Create HTML file**

```html
<!-- new-page.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description for SEO">
    <title>Page Title - mGeek</title>
    <link rel="icon" type="image/svg+xml" href="assets/brand/favicon.svg">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Include navigation (copy from index.html) -->
    <header class="header">
        <!-- Navigation code -->
    </header>

    <main>
        <!-- Your page content -->
    </main>

    <!-- Include footer (copy from index.html) -->
    <footer class="footer">
        <!-- Footer code -->
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/pocketbase@0.16.0/dist/pocketbase.umd.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

**Step 2: Add navigation link**

Update navigation in all pages:

```html
<ul class="nav-menu">
    <!-- ... existing links ... -->
    <li><a href="new-page.html">New Page</a></li>
</ul>
```

**Step 3: Add styles if needed**

```css
/* css/styles.css */
.new-page-section {
    padding: 4rem 0;
}
```

### Working with Forms

Example form with PocketBase integration:

```html
<!-- HTML -->
<form id="myForm">
    <input type="text" id="name" required>
    <input type="email" id="email" required>
    <button type="submit">Submit</button>
</form>
<div id="formMessage"></div>
```

```javascript
// JavaScript
document.getElementById('myForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    
    try {
        await pb.collection('collection_name').create(data);
        showMessage('Success!', 'success');
    } catch (error) {
        showMessage('Error: ' + error.message, 'error');
    }
});

function showMessage(message, type) {
    const div = document.getElementById('formMessage');
    div.textContent = message;
    div.className = `form-message ${type}`;
}
```

### Styling Guidelines

Follow existing conventions:

```css
/* Use CSS custom properties for colors */
:root {
    --primary-color: #2563eb;
    --text-color: #1f2937;
    --background: #ffffff;
    --border: #e5e7eb;
}

/* Use consistent spacing (multiples of 0.25rem or 0.5rem) */
.card {
    padding: 1.5rem;      /* 24px */
    margin-bottom: 2rem;   /* 32px */
    border-radius: 0.5rem; /* 8px */
}

/* Mobile-first responsive design */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

## Common Tasks

### Task 1: Add a New Service Page

```bash
# 1. Copy existing service page as template
cp services/infrastructure-servers.html services/new-service.html

# 2. Update content in new-service.html
# - Change title and meta tags
# - Update hero section
# - Modify service details

# 3. Add link in main navigation
# Edit index.html and other pages to include new service link

# 4. Test the page
# Navigate to http://127.0.0.1:8090/_/services/new-service.html
```

### Task 2: Add a New Database Collection

**Via Admin UI:**

1. Go to http://127.0.0.1:8090/_/#/collections
2. Click **New collection**
3. Choose type (Base, Auth, or View)
4. Add fields with appropriate types
5. Configure API rules
6. Save

**Via Schema File:**

Edit `pb_schema.json`:

```json
{
  "name": "new_collection",
  "type": "base",
  "schema": [
    {
      "name": "title",
      "type": "text",
      "required": true
    },
    {
      "name": "description",
      "type": "text"
    }
  ]
}
```

Then import:

```bash
./pocketbase migrate collections import pb_schema.json
```

### Task 3: Update Expert Profile Fields

**Add new field via Admin UI:**

1. Collections → experts → Edit collection
2. Add new field (e.g., "certifications" as text)
3. Save

**Update frontend form:**

```html
<!-- join.html or dashboard.html -->
<div class="form-group">
    <label for="certifications">Certifications</label>
    <input type="text" id="certifications" name="certifications">
</div>
```

```javascript
// Update create/update logic
const data = {
    // ... existing fields
    certifications: document.getElementById('certifications').value
};
```

### Task 4: Debug API Issues

**Enable detailed logging:**

```bash
# Start PocketBase with debug flag
./pocketbase serve --debug
```

**Check API logs in Admin UI:**

1. Navigate to http://127.0.0.1:8090/_/#/logs
2. Filter by status code or collection
3. Inspect request/response data

**Browser console debugging:**

```javascript
// Check if PocketBase is initialized
console.log(window.pb);

// Check auth state
console.log(pb.authStore.isValid);
console.log(pb.authStore.model);

// Test API call
pb.collection('projects').getList(1, 10)
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

---

## Testing

### Manual Testing Checklist

**Authentication Flow:**
- [ ] Register as freelancer
- [ ] Register as client
- [ ] Login with valid credentials
- [ ] Login with invalid credentials
- [ ] Logout
- [ ] Session persists on page refresh

**Forms:**
- [ ] Contact form submission
- [ ] Expert application form
- [ ] Form validation (required fields)
- [ ] Error message display
- [ ] Success message display

**Data Display:**
- [ ] Projects load on homepage
- [ ] Experts load on homepage
- [ ] Filtering works correctly
- [ ] Images display correctly
- [ ] Pagination (if implemented)

**Responsive Design:**
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] Navigation works on mobile
- [ ] Forms are usable on mobile

### Browser Testing

Test in multiple browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

### Performance Testing

```bash
# Use Lighthouse in Chrome DevTools
# 1. Open Chrome DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Select categories: Performance, Accessibility, Best Practices, SEO
# 4. Generate report
# 5. Address issues found

# Target scores:
# Performance: > 90
# Accessibility: > 90
# Best Practices: > 90
# SEO: > 90
```

---

## Troubleshooting

### Issue: PocketBase Won't Start

**Problem:** `./pocketbase serve` fails

**Solutions:**

```bash
# Check if port 8090 is already in use
lsof -i :8090  # Mac/Linux
netstat -ano | findstr :8090  # Windows

# Kill existing process or use different port
./pocketbase serve --http 0.0.0.0:8091

# Check file permissions
chmod +x pocketbase
```

### Issue: Changes Not Reflecting

**Problem:** HTML/CSS changes not appearing

**Solutions:**

1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Disable browser cache in DevTools (Network tab → Disable cache)
4. Check you're editing the correct file
5. Verify file is saved

### Issue: Authentication Not Working

**Problem:** Login fails or session lost

**Solutions:**

```javascript
// Check auth store in browser console
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);

// Clear auth and try again
pb.authStore.clear();
localStorage.clear();

// Check PocketBase is running
fetch('http://127.0.0.1:8090/api/health')
    .then(r => console.log('PocketBase is running'))
    .catch(e => console.error('PocketBase not accessible'));
```

### Issue: CORS Errors

**Problem:** API requests blocked by CORS

**Solution:** PocketBase handles CORS automatically. If issues persist:

```bash
# Check PocketBase origin settings in Admin UI
# Settings → Application → Allowed origins
# Should include: http://127.0.0.1:8090
```

### Issue: File Uploads Fail

**Problem:** Avatar/image upload returns error

**Solutions:**

1. Check file size (must be < 5MB)
2. Check file type (only images allowed)
3. Verify field name matches schema
4. Check collection API rules allow file uploads

```javascript
// Correct file upload syntax
const formData = new FormData();
formData.append('avatar', fileInput.files[0]);
formData.append('name', 'John Doe');

await pb.collection('experts').update(recordId, formData);
```

---

## Deployment

### Preparing for Production

**1. Update API URL:**

```javascript
// Change in all JS files
const pb = new PocketBase('https://api.mgeek.in');  // Production URL
```

**2. Optimize Assets:**

```bash
# Compress images
# Use ImageOptim, Squoosh, or similar tools

# Minify CSS (optional)
# Use online tools or build scripts if needed

# Minify JavaScript (optional for production)
```

**3. Configure PocketBase:**

```bash
# Set production settings in Admin UI:
# - Enable HTTPS
# - Configure email (SMTP)
# - Set allowed origins
# - Configure backup schedule
# - Set up admin account
```

### Deployment Options

#### Option A: Static Frontend + PocketBase VPS

**Frontend:** Deploy to Netlify/Vercel/Cloudflare Pages
**Backend:** Deploy PocketBase to VPS (DigitalOcean, Linode, AWS)

```bash
# On VPS:
# 1. Upload PocketBase binary
# 2. Create systemd service
# 3. Configure Nginx reverse proxy
# 4. Set up SSL with Let's Encrypt
# 5. Import database schema
# 6. Start service

sudo systemctl start pocketbase
sudo systemctl enable pocketbase
```

#### Option B: Single VPS for Everything

Host both frontend and PocketBase on same server:

```nginx
# Nginx configuration
server {
    listen 80;
    server_name mgeek.in;

    # Frontend
    location / {
        root /var/www/mgeek;
        try_files $uri $uri/ =404;
    }

    # PocketBase API
    location /api/ {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Post-Deployment Verification

- [ ] Test all forms
- [ ] Verify authentication works
- [ ] Check file uploads
- [ ] Test on multiple devices
- [ ] Verify SSL certificate
- [ ] Check email delivery
- [ ] Monitor error logs
- [ ] Test API endpoints
- [ ] Verify backups are running

---

## Contributing Guidelines

### Git Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-feature-name

# 2. Make changes and commit
git add .
git commit -m "Add new feature: description"

# 3. Push to remote
git push origin feature/new-feature-name

# 4. Create pull request on GitHub
# 5. Wait for code review
# 6. Merge after approval
```

### Commit Message Format

```
<type>: <short description>

<longer description if needed>

Examples:
- feat: add expert search functionality
- fix: resolve login redirect issue
- docs: update API documentation
- style: improve mobile navigation layout
- refactor: reorganize CSS file structure
```

### Code Style

**HTML:**
- Use semantic HTML5 elements
- Indent with 4 spaces
- Use lowercase for tags and attributes
- Include alt text for images
- Use ARIA labels where appropriate

**CSS:**
- Use classes, avoid IDs for styling
- Follow BEM naming convention where applicable
- Mobile-first responsive design
- Group related properties
- Comment complex styles

**JavaScript:**
- Use ES6+ syntax
- Avoid var, use const/let
- Use async/await for promises
- Handle errors with try/catch
- Add comments for complex logic
- Use descriptive variable names

### Pull Request Checklist

Before submitting PR:

- [ ] Code follows style guidelines
- [ ] All functions have clear purpose
- [ ] No console.log() statements left in code
- [ ] Tested in multiple browsers
- [ ] Tested on mobile devices
- [ ] No API keys or secrets committed
- [ ] Documentation updated if needed
- [ ] Commit messages are clear

---

## Useful Resources

### Documentation

- **PocketBase Docs:** https://pocketbase.io/docs/
- **PocketBase API Reference:** https://pocketbase.io/docs/api-records/
- **MDN Web Docs:** https://developer.mozilla.org/
- **Can I Use:** https://caniuse.com/

### Tools

- **PocketBase Admin UI:** http://127.0.0.1:8090/_/
- **Browser DevTools:** F12 in most browsers
- **Lighthouse:** Built into Chrome DevTools
- **JSONLint:** https://jsonlint.com/ (validate JSON)

### Community

- **PocketBase GitHub:** https://github.com/pocketbase/pocketbase
- **PocketBase Discussions:** https://github.com/pocketbase/pocketbase/discussions
- **Project Issues:** [Your GitHub repo]/issues

---

## Getting Help

### Before Asking for Help

1. Check this documentation
2. Search existing issues on GitHub
3. Check PocketBase documentation
4. Review browser console for errors
5. Check PocketBase logs

### How to Report Issues

When reporting bugs, include:

1. **Description:** What were you trying to do?
2. **Steps to Reproduce:** Exact steps to trigger the issue
3. **Expected Behavior:** What should happen?
4. **Actual Behavior:** What actually happened?
5. **Environment:** OS, browser, PocketBase version
6. **Screenshots:** If applicable
7. **Console Errors:** Copy from browser DevTools
8. **Server Logs:** Copy from PocketBase logs

---

## Next Steps

Now that you're set up:

1. ✅ Explore the codebase
2. ✅ Review [ARCHITECTURE.md](./ARCHITECTURE.md) for system design
3. ✅ Check [TODO.md](./TODO.md) for available tasks
4. ✅ Pick a task and start coding!
5. ✅ Ask questions in team chat/issues

**Happy coding!** 🚀

---

**Document Version:** 1.0  
**Last Updated:** August 16, 2026  
**Maintained By:** mGeek Development Team
