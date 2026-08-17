# mGeek.in - Architecture Documentation

**Version:** 1.0  
**Last Updated:** August 16, 2026  
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, PocketBase

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Technology Stack](#technology-stack)
3. [Architecture Diagram](#architecture-diagram)
4. [Database Schema](#database-schema)
5. [API Endpoints](#api-endpoints)
6. [Frontend Architecture](#frontend-architecture)
7. [Authentication Flow](#authentication-flow)
8. [Key Features](#key-features)
9. [Security Considerations](#security-considerations)
10. [Deployment Architecture](#deployment-architecture)

---

## System Overview

mGeek.in is a technology consulting and engineering platform that connects technical experts with clients seeking technical solutions. The platform operates as a distributed technical network where:

- **Clients** can submit project enquiries and browse services
- **Experts** (freelancers/specialists) can create profiles and join the network
- **Admin** (mGeek team) manages leads, approves experts, and oversees operations

### Architecture Pattern

**Monolithic Frontend + Backend-as-a-Service (BaaS)**

- **Frontend:** Static HTML/CSS/JS served via web server
- **Backend:** PocketBase (Go-based BaaS) providing:
  - RESTful API
  - Authentication
  - Database (SQLite)
  - File storage
  - Real-time subscriptions

This architecture allows for rapid development while maintaining simplicity and performance.

---

## Technology Stack

### Frontend
- **HTML5:** Semantic markup
- **CSS3:** Custom styles with responsive design
- **JavaScript (ES6+):** Vanilla JS, no framework dependencies
- **Font:** Inter (Google Fonts)
- **Icons:** Emoji placeholders (to be replaced with icon system)

### Backend
- **PocketBase v0.x:** Self-hosted backend
  - Built on Go
  - Embedded SQLite database
  - RESTful API with auto-generated endpoints
  - Built-in authentication
  - File upload support
  - Admin UI at `/admin`

### Development Tools
- **Version Control:** Git
- **Code Editor:** Any modern editor
- **Browser DevTools:** Chrome/Firefox for debugging

### Hosting (Production - To Be Determined)
- **Frontend:** Static hosting (Netlify, Vercel, or custom server)
- **Backend:** VPS or cloud instance running PocketBase
- **Database:** SQLite (embedded with PocketBase)
- **File Storage:** Local filesystem or S3-compatible storage

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                        │
│  (Web Browsers: Chrome, Firefox, Safari, Edge, Mobile)     │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTPS
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    FRONTEND LAYER                           │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   HTML       │  │     CSS      │  │  JavaScript  │     │
│  │   Pages      │  │   Styles     │  │   Modules    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  Pages:                                                     │
│  - index.html      - contact.html    - login.html          │
│  - about.html      - experts.html    - dashboard.html      │
│  - projects.html   - join.html       - services/*          │
│                                                              │
│  JS Modules:                                                │
│  - main.js         - contact.js      - dashboard.js        │
│  - auth.js                                                  │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API (HTTP/HTTPS)
                         │ WebSocket (real-time subscriptions)
                         │
┌────────────────────────▼────────────────────────────────────┐
│                   BACKEND LAYER                             │
│                   (PocketBase)                              │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              API Server (Go)                         │  │
│  │  - RESTful endpoints                                 │  │
│  │  - Authentication middleware                         │  │
│  │  - File upload handling                              │  │
│  │  - Real-time subscriptions                           │  │
│  └──────────────────────────────────────────────────────┘  │
│                         │                                    │
│  ┌──────────────────────▼──────────────────────────────┐  │
│  │          Database (SQLite)                          │  │
│  │  Collections:                                        │  │
│  │  - users       - projects                           │  │
│  │  - experts     - leads                              │  │
│  │  - clients                                           │  │
│  └──────────────────────────────────────────────────────┘  │
│                         │                                    │
│  ┌──────────────────────▼──────────────────────────────┐  │
│  │          File Storage                               │  │
│  │  - Expert avatars                                    │  │
│  │  - Project images                                    │  │
│  │  - Uploaded documents                                │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │          Admin UI                                    │  │
│  │  - Database management                               │  │
│  │  - Collection editor                                 │  │
│  │  - User management                                   │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Collections Overview

PocketBase uses a collection-based data model (similar to tables in relational databases). The schema is defined in `pb_schema.json`.

#### 1. **users** (Auth Collection)

Primary authentication collection for all users.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Primary key (15-char random string) |
| email | email | ✓ | User email (unique) |
| password | password | ✓ | Hashed password |
| name | text | ✓ | Full name |
| user_type | select | ✓ | `freelancer` or `client` |
| profile_complete | bool | ✗ | Profile completion status |
| created | datetime | auto | Record creation timestamp |
| updated | datetime | auto | Last update timestamp |
| emailVisibility | bool | auto | Email visibility setting |
| verified | bool | auto | Email verification status |

**Indexes:**
- Unique index on `email`

**Relations:**
- One-to-One with `experts` (if user_type = 'freelancer')
- One-to-One with `clients` (if user_type = 'client')

---

#### 2. **experts** (Base Collection)

Profile information for technical experts/freelancers.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Primary key |
| user | relation | ✓ | Foreign key → users.id (cascade delete) |
| name | text | ✓ | Expert's full name |
| email | email | ✓ | Contact email |
| role | text | ✗ | Professional title (e.g., "Full-Stack Developer") |
| bio | text | ✗ | Short biography |
| location | text | ✗ | City/Country or timezone |
| primary_skills | text | ✗ | Comma-separated primary skills |
| secondary_skills | text | ✗ | Comma-separated secondary skills |
| experience | text | ✗ | Years of experience or summary |
| portfolio | url | ✗ | Portfolio website URL |
| github | url | ✗ | GitHub profile URL |
| linkedin | url | ✗ | LinkedIn profile URL |
| avatar | file | ✗ | Profile picture (max 5MB) |
| status | select | ✓ | `pending`, `approved`, `active`, `inactive`, `rejected` |
| profile_public | bool | ✗ | Whether profile is publicly visible |
| work_for_mgeek | bool | ✗ | Available for mGeek projects |
| available_to_recruiters | bool | ✗ | Open to external recruiting |
| availability | select | ✗ | `available`, `limited`, `unavailable` |
| preferred_engagement | select | ✗ | `fulltime`, `parttime`, `contract`, `freelance` |
| created | datetime | auto | Record creation timestamp |
| updated | datetime | auto | Last update timestamp |

**Indexes:**
- Index on `user`
- Index on `status`
- Composite index on `status`, `profile_public`

**Business Rules:**
- Only experts with `status = 'approved'` and `profile_public = true` are displayed publicly
- Expert profiles are automatically created when user registers with `user_type = 'freelancer'`

---

#### 3. **clients** (Base Collection)

Profile information for clients.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Primary key |
| user | relation | ✓ | Foreign key → users.id (cascade delete) |
| name | text | ✓ | Client name or contact person |
| email | email | ✓ | Contact email |
| company_name | text | ✗ | Company/organization name |
| website | url | ✗ | Company website |
| industry | text | ✗ | Industry/sector |
| description | text | ✗ | Company description |
| created | datetime | auto | Record creation timestamp |
| updated | datetime | auto | Last update timestamp |

**Indexes:**
- Index on `user`

---

#### 4. **projects** (Base Collection)

Portfolio projects displayed on the website.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Primary key |
| title | text | ✓ | Project name |
| description | text | ✓ | Short description |
| category | select | ✓ | `Software`, `Web`, `Research`, `Infrastructure`, `Automation`, `IoT`, `Open Source` |
| status | select | ✓ | `draft`, `published`, `archived` |
| tags | text | ✗ | Comma-separated technology/skill tags |
| image | file | ✗ | Project screenshot/image (max 5MB) |
| content | editor | ✗ | Rich text detailed project description |
| created | datetime | auto | Record creation timestamp |
| updated | datetime | auto | Last update timestamp |

**Indexes:**
- Index on `status`
- Index on `category`

**Display Logic:**
- Only projects with `status = 'published'` are shown publicly
- Homepage shows 6 most recent projects
- Projects page shows all published projects with filtering

---

#### 5. **leads** (Base Collection)

Project enquiries from potential clients.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | Primary key |
| name | text | ✓ | Contact person name |
| email | email | ✓ | Contact email |
| organization | text | ✗ | Company/organization name |
| service | select | ✗ | Service category requested |
| description | text | ✓ | Project requirement details |
| budget | text | ✗ | Budget range or estimate |
| timeline | text | ✗ | Desired timeline |
| status | select | ✓ | Lead status (see below) |
| user | relation | ✗ | Foreign key → users.id (if logged in) |
| created | datetime | auto | Submission timestamp |
| updated | datetime | auto | Last status update timestamp |

**Service Options:**
- Software Development
- Web Development
- WordPress
- Research & MATLAB
- Data & AI
- Infrastructure & Servers
- DevOps & Automation
- IoT & Embedded
- Technical Consulting
- Other

**Status Options:**
- `New` - Just submitted
- `Reviewing` - Being evaluated by team
- `Needs Information` - Requires clarification
- `Qualified` - Valid opportunity
- `Proposal` - Proposal sent to client
- `Won` - Project accepted
- `Lost` - Project not proceeding
- `Archived` - Old/irrelevant leads

**Indexes:**
- Index on `status`
- Index on `created` (for sorting)

---

### Entity Relationship Diagram

```
┌─────────────────┐
│     users       │
│  (Auth)         │
│                 │
│ • id (PK)       │
│ • email         │
│ • password      │
│ • name          │
│ • user_type     │
└────────┬────────┘
         │
         ├──────────────────────────┐
         │                          │
         │ 1:1                      │ 1:1
         │                          │
┌────────▼────────┐        ┌────────▼────────┐
│    experts      │        │    clients      │
│                 │        │                 │
│ • id (PK)       │        │ • id (PK)       │
│ • user (FK)     │        │ • user (FK)     │
│ • name          │        │ • name          │
│ • role          │        │ • company_name  │
│ • bio           │        │ • website       │
│ • skills        │        └─────────────────┘
│ • status        │
│ • avatar        │
└─────────────────┘

┌─────────────────┐        ┌─────────────────┐
│    projects     │        │      leads      │
│                 │        │                 │
│ • id (PK)       │        │ • id (PK)       │
│ • title         │        │ • name          │
│ • description   │        │ • email         │
│ • category      │        │ • service       │
│ • status        │        │ • description   │
│ • tags          │        │ • status        │
│ • image         │        │ • user (FK)     │
└─────────────────┘        └─────────────────┘
```

---

## API Endpoints

PocketBase auto-generates RESTful API endpoints for each collection. All endpoints are prefixed with `/api/`.

### Base URL

- **Development:** `http://127.0.0.1:8090/api`
- **Production:** `https://api.mgeek.in/api` (example)

### Authentication Endpoints

#### 1. Register User

```
POST /api/collections/users/records
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "passwordConfirm": "password123",
  "name": "John Doe",
  "user_type": "freelancer",
  "profile_complete": false
}
```

**Response (201 Created):**
```json
{
  "id": "abc123xyz456789",
  "email": "user@example.com",
  "name": "John Doe",
  "user_type": "freelancer",
  "created": "2026-08-16T20:00:00.000Z",
  "updated": "2026-08-16T20:00:00.000Z"
}
```

#### 2. Login (Auth with Password)

```
POST /api/collections/users/auth-with-password
```

**Request Body:**
```json
{
  "identity": "user@example.com",
  "password": "password123"
}
```

**Response (200 OK):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "record": {
    "id": "abc123xyz456789",
    "email": "user@example.com",
    "name": "John Doe",
    "user_type": "freelancer"
  }
}
```

#### 3. Logout

```javascript
pb.authStore.clear();
```

Client-side only. Clears local auth token.

#### 4. Refresh Auth Token

```
POST /api/collections/users/auth-refresh
```

**Headers:**
```
Authorization: Bearer <token>
```

---

### Collection CRUD Endpoints

PocketBase follows REST conventions for all collections.

#### Generic Pattern

```
GET    /api/collections/{collection}/records          - List records
GET    /api/collections/{collection}/records/{id}     - Get single record
POST   /api/collections/{collection}/records          - Create record
PATCH  /api/collections/{collection}/records/{id}     - Update record
DELETE /api/collections/{collection}/records/{id}     - Delete record
```

#### Examples

**List Experts (with filters):**
```
GET /api/collections/experts/records?filter=status='approved'&&profile_public=true&sort=-created
```

**Create Lead:**
```
POST /api/collections/leads/records

{
  "name": "Jane Smith",
  "email": "jane@company.com",
  "service": "Web Development",
  "description": "Need a company website",
  "status": "New"
}
```

**Update Expert Profile:**
```
PATCH /api/collections/experts/records/{id}

{
  "bio": "Updated bio text",
  "availability": "available"
}
```

---

### File Upload Endpoints

#### Upload Avatar

```
POST /api/collections/experts/records/{id}
Content-Type: multipart/form-data

avatar: <file>
```

#### Get File URL

```javascript
pb.getFileUrl(record, filename)
```

Example:
```javascript
const avatarUrl = pb.getFileUrl(expert, expert.avatar);
// Returns: http://127.0.0.1:8090/api/files/experts/abc123/avatar_xyz.jpg
```

---

### Query Parameters

#### Pagination

```
?page=1&perPage=20
```

#### Filtering

```
?filter=status='published'
?filter=status='approved'&&profile_public=true
```

Filter operators:
- `=` equals
- `!=` not equals
- `>`, `<`, `>=`, `<=` comparisons
- `~` like (case insensitive)
- `!~` not like

#### Sorting

```
?sort=-created          // descending
?sort=name              // ascending
?sort=-created,name     // multiple fields
```

#### Field Selection

```
?fields=id,name,email
```

---

## Frontend Architecture

### File Structure

```
mgeek.in/
├── index.html                  # Homepage
├── about.html                  # About page
├── contact.html                # Contact/lead submission form
├── experts.html                # Experts listing
├── projects.html               # Projects portfolio
├── join.html                   # Expert application form
├── login.html                  # Login/register page
├── dashboard.html              # User dashboard
├── services/
│   └── infrastructure-servers.html  # Service detail page
├── css/
│   └── styles.css              # Main stylesheet
├── js/
│   ├── main.js                 # Core functionality
│   ├── auth.js                 # Authentication logic
│   ├── contact.js              # Contact form handling
│   └── dashboard.js            # Dashboard functionality
├── assets/
│   └── brand/
│       ├── logo.svg            # Main logo
│       ├── logo-avatar.jpg     # GitHub avatar logo
│       └── favicon.svg         # Favicon
├── pb_schema.json              # PocketBase schema definition
├── PRD.md                      # Product requirements
├── TODO.md                     # Project roadmap
├── ARCHITECTURE.md             # This file
└── DEVELOPER.md                # Developer guide
```

---

### JavaScript Modules

#### 1. **main.js**

Core functionality used across the site.

**Functions:**

##### `checkAuth()`
Checks if user is authenticated and updates navigation.

```javascript
async function checkAuth() {
  const pb = window.pb;
  if (pb.authStore.isValid) {
    updateNavForAuthUser();
  }
}
```

##### `updateNavForAuthUser()`
Updates login link to dashboard when user is authenticated.

```javascript
function updateNavForAuthUser() {
  const loginLink = document.querySelector('a[href="login.html"]');
  if (loginLink) {
    loginLink.textContent = 'Dashboard';
    loginLink.href = 'dashboard.html';
  }
}
```

##### `loadProjects()`
Fetches and displays published projects on homepage.

```javascript
async function loadProjects() {
  const records = await pb.collection('projects').getList(1, 6, {
    sort: '-created',
    filter: 'status = "published"'
  });
  
  // Render projects to DOM
}
```

##### `loadExperts()`
Fetches and displays approved expert profiles on homepage.

```javascript
async function loadExperts() {
  const records = await pb.collection('experts').getList(1, 6, {
    sort: '-created',
    filter: 'status = "approved" && profile_public = true'
  });
  
  // Render experts to DOM
}
```

**Global Variables:**
- `window.pb` - PocketBase instance available globally

---

#### 2. **auth.js**

Handles user authentication (login and registration).

**Functions:**

##### `handleLogin(e)`
Processes login form submission.

```javascript
async function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  const authData = await pb.collection('users').authWithPassword(email, password);
  
  // Redirect to dashboard on success
  window.location.href = 'dashboard.html';
}
```

##### `handleRegister(e)`
Processes registration form submission.

```javascript
async function handleRegister(e) {
  e.preventDefault();
  
  // Validate password match and length
  // Create user record
  // Auto-login after registration
  // Create associated expert/client profile
  // Redirect to dashboard
}
```

##### `createFreelancerProfile(userId, name, email)`
Creates expert profile for new freelancer users.

```javascript
async function createFreelancerProfile(userId, name, email) {
  await pb.collection('experts').create({
    user: userId,
    name: name,
    email: email,
    status: 'pending',
    profile_public: false,
    work_for_mgeek: true
  });
}
```

##### `createClientProfile(userId, name, email)`
Creates client profile for new client users.

```javascript
async function createClientProfile(userId, name, email) {
  await pb.collection('clients').create({
    user: userId,
    name: name,
    email: email
  });
}
```

##### `switchTab(tabName)`
Switches between login and register tabs.

##### `showMessage(element, message, type)`
Displays success/error messages to user.

---

#### 3. **contact.js**

Handles contact form and lead submission.

**Functions:**

##### `handleContactSubmit(e)`
Processes project enquiry form.

```javascript
async function handleContactSubmit(e) {
  e.preventDefault();
  
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    organization: document.getElementById('organization').value,
    service: document.getElementById('service').value,
    description: document.getElementById('description').value,
    budget: document.getElementById('budget').value,
    timeline: document.getElementById('timeline').value,
    status: 'New'
  };
  
  // Add user relation if logged in
  if (pb.authStore.isValid) {
    data.user = pb.authStore.model.id;
  }
  
  await pb.collection('leads').create(data);
  
  // Show success message and reset form
}
```

**Features:**
- Pre-fills name/email if user is logged in
- Associates lead with user if authenticated
- Shows success/error messages
- Resets form on successful submission

---

#### 4. **dashboard.js**

User dashboard functionality (placeholder for future implementation).

Currently minimal, will be expanded to include:
- Expert profile editing
- Client lead viewing
- Admin lead management
- Expert approval workflow

---

### State Management

No formal state management library. State is handled through:

1. **PocketBase AuthStore:** Persists authentication state in localStorage
2. **DOM State:** Form values, UI toggles
3. **Session State:** Temporary data in JavaScript variables

```javascript
// Auth state (persisted)
pb.authStore.model      // Current user data
pb.authStore.token      // JWT token
pb.authStore.isValid    // Authentication status

// Clear auth state
pb.authStore.clear();
```

---

### Error Handling

#### API Errors

```javascript
try {
  await pb.collection('leads').create(data);
} catch (error) {
  console.error('Error:', error);
  
  // Parse error messages
  if (error.data?.data) {
    const errors = error.data.data;
    if (errors.email) {
      showMessage(messageDiv, 'Email is already in use.', 'error');
    }
  }
}
```

#### Form Validation

Client-side validation using HTML5 attributes:
- `required`
- `type="email"`
- `minlength`

JavaScript validation for custom rules:
- Password confirmation match
- Password minimum length
- File size limits

---

## Authentication Flow

### Registration Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User fills registration form                             │
│    - Name, Email, Password, User Type (freelancer/client)   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Client-side validation                                   │
│    - Password match                                          │
│    - Password length >= 8                                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. POST /api/collections/users/records                      │
│    - PocketBase creates user account                        │
│    - Returns user record                                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Auto-login                                               │
│    - Call authWithPassword with same credentials           │
│    - Store JWT token in authStore                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Create associated profile                                │
│    IF user_type = 'freelancer':                             │
│      → Create record in experts collection                  │
│    IF user_type = 'client':                                 │
│      → Create record in clients collection                  │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. Redirect to dashboard                                    │
└─────────────────────────────────────────────────────────────┘
```

### Login Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User enters email and password                           │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. POST /api/collections/users/auth-with-password           │
│    - PocketBase validates credentials                       │
│    - Returns JWT token + user record                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Store auth data                                          │
│    - authStore.save(token, userRecord)                      │
│    - Persisted to localStorage                              │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Redirect to dashboard                                    │
└─────────────────────────────────────────────────────────────┘
```

### Protected Routes

Currently no client-side route protection. Planned implementation:

```javascript
function requireAuth() {
  if (!pb.authStore.isValid) {
    window.location.href = 'login.html';
  }
}
```

---

## Key Features

### 1. User Registration & Authentication
- Dual user types (freelancer/client)
- Automatic profile creation based on user type
- JWT-based authentication
- Persistent sessions (localStorage)

### 2. Expert Profiles
- Profile creation on registration
- Status workflow: pending → approved → active
- Public/private profile toggle
- Avatar upload
- Skills and experience management
- Portfolio links (GitHub, LinkedIn, personal website)

### 3. Project Portfolio
- Admin-managed project showcase
- Category filtering
- Draft/published status
- Rich content with images
- Technology tagging

### 4. Lead Management
- Contact form for project enquiries
- Service category selection
- Optional budget and timeline fields
- Status workflow for lead tracking
- Association with user accounts (if logged in)

### 5. Dashboard (In Progress)
- Expert dashboard: profile editing, availability
- Client dashboard: view submitted leads
- Admin dashboard: lead management, expert approval

---

## Security Considerations

### Current Implementation

1. **Authentication:**
   - Password hashing (handled by PocketBase/bcrypt)
   - JWT tokens for session management
   - HTTP-only cookies option available

2. **Authorization:**
   - Collection-level rules (to be configured in PocketBase)
   - Users can only edit their own profiles
   - Admins can manage all records

3. **Input Validation:**
   - Client-side: HTML5 form validation
   - Server-side: PocketBase schema validation
   - Email format validation
   - File upload restrictions (size, type)

### Security Improvements Needed

- [ ] Configure collection API rules in PocketBase
- [ ] Add CSRF protection for forms
- [ ] Implement rate limiting on API endpoints
- [ ] Add spam protection (reCAPTCHA or honeypot)
- [ ] File upload malware scanning
- [ ] Input sanitization for rich text content
- [ ] Secure file storage with access controls
- [ ] HTTPS enforcement in production
- [ ] Secure HTTP headers (CSP, X-Frame-Options, etc.)
- [ ] Environment variable for API URL (remove hardcoded localhost)

### PocketBase Collection Rules

Example rules to be configured:

**Experts Collection:**
```javascript
// List rule (public can view approved profiles)
status = 'approved' && profile_public = true

// View rule
@request.auth.id = user || (status = 'approved' && profile_public = true)

// Create rule (users can create their own profile)
@request.auth.id = user

// Update rule (only own profile)
@request.auth.id = user

// Delete rule (admin only)
@request.auth.id = "ADMIN_USER_ID"
```

---

## Deployment Architecture

### Development Environment

```
┌──────────────────────────┐
│   Developer Machine      │
│                          │
│  ┌────────────────────┐  │
│  │  Static HTML/CSS/JS│  │
│  │  (no build step)   │  │
│  └────────────────────┘  │
│           │              │
│           │ File System  │
│           ▼              │
│  ┌────────────────────┐  │
│  │ PocketBase Server  │  │
│  │ http://localhost:  │  │
│  │        8090        │  │
│  │  SQLite DB         │  │
│  └────────────────────┘  │
└──────────────────────────┘
```

**Start Development:**
```bash
# Start PocketBase server
./pocketbase serve

# Access site at http://localhost:8090/_/
# API available at http://localhost:8090/api/
# Admin UI at http://localhost:8090/_/
```

---

### Production Architecture (Recommended)

```
┌────────────────────────────────────────────────────────────┐
│                    Internet / CDN                          │
└───────────────────────┬────────────────────────────────────┘
                        │ HTTPS
                        │
┌───────────────────────▼────────────────────────────────────┐
│              Load Balancer / Reverse Proxy                 │
│                    (Nginx / Caddy)                         │
│                                                             │
│  SSL Termination                                           │
│  Static file serving                                       │
│  API proxying                                              │
└──────────────────┬──────────────────────┬──────────────────┘
                   │                      │
         ┌─────────▼──────────┐  ┌────────▼──────────────┐
         │  Static Frontend   │  │  PocketBase Instance  │
         │  (HTML/CSS/JS)     │  │  (API Server)         │
         │                    │  │                       │
         │ Served via Nginx   │  │  Port 8090 (internal) │
         │ or Static Host     │  │                       │
         └────────────────────┘  │  ┌──────────────────┐ │
                                 │  │  SQLite Database │ │
                                 │  └──────────────────┘ │
                                 │  ┌──────────────────┐ │
                                 │  │  File Storage    │ │
                                 │  └──────────────────┘ │
                                 └───────────────────────┘
```

**Components:**

1. **Frontend Hosting:**
   - Option A: Static hosting (Netlify, Vercel, Cloudflare Pages)
   - Option B: Nginx serving static files
   - Option C: Same server as PocketBase

2. **Backend (PocketBase):**
   - VPS or cloud instance (DigitalOcean, Linode, AWS EC2)
   - Systemd service for auto-start
   - Nginx reverse proxy
   - SSL via Let's Encrypt

3. **Database:**
   - SQLite (embedded with PocketBase)
   - Regular backups to S3 or cloud storage
   - Optional: Litestream for real-time replication

4. **File Storage:**
   - Local filesystem (default)
   - Optional: S3 or S3-compatible storage (MinIO, Backblaze B2)

---

### Deployment Checklist

**Pre-deployment:**
- [ ] Change PocketBase URL from localhost to production domain
- [ ] Set up environment variables for sensitive config
- [ ] Configure PocketBase collection API rules
- [ ] Enable email verification
- [ ] Set up SMTP for email notifications
- [ ] Configure file upload limits
- [ ] Set up database backup strategy
- [ ] Configure SSL certificates
- [ ] Set secure HTTP headers
- [ ] Enable gzip compression
- [ ] Optimize images
- [ ] Test all forms and flows

**Post-deployment:**
- [ ] Monitor error logs
- [ ] Set up uptime monitoring
- [ ] Configure alerting
- [ ] Test email delivery
- [ ] Verify SSL configuration
- [ ] Run security scan
- [ ] Test mobile responsiveness
- [ ] Submit sitemap to search engines

---

## Performance Considerations

### Frontend Optimization

1. **Images:**
   - Compress all images before upload
   - Use WebP format where supported
   - Implement lazy loading for below-fold images
   - Use responsive images with srcset

2. **CSS:**
   - Minimize CSS file size
   - Remove unused styles
   - Consider critical CSS inlining

3. **JavaScript:**
   - Minimize JS bundle
   - Defer non-critical scripts
   - Use async loading where appropriate

4. **Fonts:**
   - Use font-display: swap
   - Subset fonts if possible
   - Preconnect to font CDN

### Backend Optimization

1. **Database:**
   - Add indexes on frequently queried fields
   - Use pagination for large result sets
   - Implement caching for static data

2. **API:**
   - Enable gzip compression
   - Set appropriate cache headers
   - Use field selection to reduce payload size

3. **Files:**
   - Serve files through CDN
   - Enable browser caching
   - Implement image optimization pipeline

---

## Monitoring & Observability

### Metrics to Track

1. **Application Metrics:**
   - API response times
   - Error rates by endpoint
   - Database query performance
   - File upload success rate

2. **Business Metrics:**
   - New user registrations
   - Lead submissions
   - Expert applications
   - Active users

3. **Infrastructure Metrics:**
   - Server CPU/memory usage
   - Disk space
   - Network bandwidth
   - Database size

### Logging Strategy

```
Logs Location:
├── PocketBase logs: pb_data/logs/
├── Nginx access logs: /var/log/nginx/access.log
├── Nginx error logs: /var/log/nginx/error.log
└── Application errors: Browser console / Sentry
```

---

## Future Architecture Considerations

### Scalability

If the platform grows beyond PocketBase's capabilities:

1. **Database Migration:**
   - Migrate from SQLite to PostgreSQL
   - Use Prisma or similar ORM
   - Implement connection pooling

2. **Backend Framework:**
   - Migrate to Node.js/Express, Go, or Python/FastAPI
   - Implement proper API versioning
   - Add GraphQL layer for complex queries

3. **Microservices:**
   - Separate services: Auth, Projects, Experts, Leads
   - Use message queue for async processing
   - Implement event-driven architecture

4. **Caching Layer:**
   - Redis for session storage
   - Cache frequently accessed data
   - Implement cache invalidation strategy

5. **Search:**
   - Elasticsearch or Algolia for advanced search
   - Full-text search across projects and experts

6. **Real-time Features:**
   - WebSocket for live updates
   - Real-time notifications
   - Chat system for client-expert communication

---

## Conclusion

This architecture provides a solid foundation for the mGeek platform with room for growth. The combination of simple frontend technology (HTML/CSS/JS) with a powerful backend (PocketBase) allows for rapid development while maintaining performance and security.

For detailed setup instructions, see [DEVELOPER.md](./DEVELOPER.md).

For project roadmap and tasks, see [TODO.md](./TODO.md).

---

**Document Version:** 1.0  
**Last Updated:** August 16, 2026  
**Maintained By:** mGeek Development Team
