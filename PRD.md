# mGeek Website — Product Requirements Document

**Document:** `PRD.md`  
**Product:** mGeek Technology Consulting & Engineering website  
**Primary domain:** `mgeek.in`  
**Status:** Initial production PRD  
**Audience:** Web design team, frontend/backend developers, content team, SEO team, and future AI coding agents

---

## 1. Product Overview

mGeek is a technology consulting and engineering company that provides technical solutions to individuals, researchers, businesses, startups, organizations, and other clients worldwide.

mGeek combines:

- Custom software development
- Web development
- WordPress development
- Research software and MATLAB assistance
- Data and AI-related development
- Linux/server infrastructure
- DevOps and automation
- IoT and embedded systems
- Technical consulting

mGeek will also operate as a **distributed technical team**. Independent developers, researchers, designers, system administrators, and other specialists can join the mGeek network. Approved specialists may be listed on the website as **mGeek Experts** and can participate in client projects.

The website must therefore serve two audiences:

1. **Clients** who need a technical solution.
2. **Technical professionals** who want to join the mGeek network.

The website should present mGeek as a professional technology company, not as a personal freelancer portfolio or a freelancer marketplace.

### Core positioning

> **mGeek — Technology Consulting & Engineering**

Supporting message:

> Software, web, research, infrastructure, automation and technology solutions delivered by a team of experienced technical professionals.

The company should be capable of growing from a founder-led consultancy into a larger distributed technical network without requiring a brand redesign.

---

# 2. Goals

## 2.1 Primary goals

- Establish mGeek as a credible technology consulting and engineering company.
- Generate qualified project enquiries.
- Clearly communicate the breadth of technical services.
- Showcase previous projects and technical capability.
- Establish the founder's technical credibility without making the site entirely about the founder.
- Introduce the mGeek Expert network.
- Provide a clear process for clients to start projects.
- Provide a clear application process for technical professionals to join.
- Support international clients.
- Build a strong SEO foundation.
- Create a content architecture that can grow over time.
- Make the website suitable for both small projects and larger multi-specialist engagements.

## 2.2 Secondary goals

- Build authority through technical articles and case studies.
- Create landing pages for specific services.
- Allow approved experts to have public profiles.
- Create reusable project and case-study templates.
- Eventually support internal lead/project management workflows without requiring a redesign.

---

# 3. Non-Goals

The initial website is **not** intended to be:

- A Fiverr/Upwork-style open marketplace.
- A public bidding platform.
- A social network for freelancers.
- A generic digital marketing agency website.
- A job board.
- A platform where clients directly negotiate separately with every expert.
- A replacement for a full project-management system.

Clients should primarily deal with **mGeek as the service provider**.

mGeek internally selects and coordinates appropriate specialists.

---

# 4. Target Audiences

## 4.1 Individuals

Typical requirements:

- Personal website
- Portfolio
- Automation
- Custom software
- Hosting/server setup
- Technical troubleshooting
- Small web applications

## 4.2 Small and medium businesses

Typical requirements:

- Business website
- WordPress
- Internal applications
- Automation
- Server infrastructure
- Custom dashboards
- API integrations
- Deployment and maintenance

## 4.3 Startups

Typical requirements:

- MVP development
- Prototype development
- Technical architecture
- API development
- Web applications
- Infrastructure
- DevOps
- Technical consulting

## 4.4 Researchers and faculty

Typical requirements:

- MATLAB
- Python
- Algorithm implementation
- Simulation
- Data analysis
- Signal/image processing
- Visualization
- Research software
- Computational prototypes
- Debugging and optimization of existing research software

mGeek provides **technical/research-software assistance**, not academic authorship or dishonest academic work.

## 4.5 Organizations

Typical requirements:

- Custom systems
- Infrastructure
- Automation
- Internal tools
- Deployment
- Technical consulting
- Long-term maintenance

## 4.6 Technical professionals

Potential mGeek Experts include:

- Software developers
- Web developers
- MATLAB/research specialists
- Data scientists
- AI engineers
- DevOps engineers
- System administrators
- WordPress developers
- UI/UX designers
- IoT engineers
- Embedded developers
- Technical writers/documentation specialists
- Other specialists as the network grows

---

# 5. Brand Strategy

## 5.1 Brand

Use:

> **mGeek**

Do not routinely use `mGeek.in` as the visual company name. `mgeek.in` is the domain.

## 5.2 Brand positioning

mGeek should feel like:

- Technical
- Precise
- Practical
- Modern
- Intelligent
- Engineering-oriented
- Reliable
- Independent
- Professional

Avoid the visual language of:

- Generic IT agencies
- Cheap freelancer websites
- Digital marketing agencies
- Overly corporate enterprise consulting
- Template-based WordPress agencies
- Overly flashy startup landing pages

## 5.3 Existing logo

An existing mGeek logo will be supplied in the project folder.

**Important:**

- Do not replace the supplied logo automatically.
- Do not redesign the logo unless explicitly requested.
- First evaluate how the existing logo works on light/dark backgrounds, desktop/mobile headers, favicon, and footer.
- The design system should be built around the supplied logo.
- If improvements are recommended, present them as optional brand recommendations rather than silently modifying the logo.

Expected logo assets may include:

```text
/assets/brand/
    logo.svg
    logo-dark.svg
    logo-light.svg
    favicon.svg
```

Actual filenames may differ.

---

# 6. Website Information Architecture

Initial production sitemap:

```text
/
├── services/
│   ├── software-development/
│   ├── web-development/
│   ├── wordpress/
│   ├── research-matlab/
│   ├── data-ai/
│   ├── infrastructure-servers/
│   ├── devops-automation/
│   ├── iot-embedded/
│   └── technical-consulting/
│
├── solutions/
│   ├── individuals/
│   ├── businesses/
│   ├── startups/
│   ├── researchers/
│   └── organizations/
│
├── projects/
│
├── case-studies/
│
├── experts/
│
├── join/
│
├── about/
│
├── research/
│
├── insights/
│
└── contact/
```

The initial release may launch with fewer pages if content is not yet ready, but URL architecture should be designed to accommodate the complete structure.

---

# 7. Global Navigation

Recommended desktop navigation:

```text
mGeek

Services
Solutions
Projects
Experts
About
Insights

[Start a Project]
```

Secondary links can appear in the footer:

```text
Services
Solutions
Projects
Case Studies
Experts
Join mGeek
Research
Insights
About
Contact
Privacy
Terms
```

Do not overload the main navigation with every service.

### Mobile navigation

Use a clean menu/drawer.

Primary CTA should remain prominent:

> Start a Project

---

# 8. Homepage Requirements

The homepage is the primary conversion page.

Recommended sequence:

1. Header
2. Hero
3. Service overview
4. Solutions/customer types
5. Why mGeek
6. Selected projects
7. Research & engineering capability
8. How mGeek works
9. Experts/network
10. Founder
11. Final CTA
12. Footer

---

# 9. Homepage — Hero

## Required content

Headline:

> **Technology Consulting & Engineering**

Supporting text:

> From software and websites to research, infrastructure and automation, mGeek helps individuals and organizations turn technical requirements into working solutions.

Primary CTA:

> **Start a Project**

Secondary CTA:

> **Explore Our Services**

Optional tertiary link:

> Join the mGeek Network

## Hero design

Requirements:

- Strong typography.
- High readability.
- No stock photograph of programmers.
- No excessive animation.
- No giant wall of technology logos.
- No carousel.
- No unnecessary video background.

Possible visual direction:

A subtle technical system diagram showing:

```text
Requirement
     ↓
Solution
     ↓
Engineering
     ↓
Deployment
     ↓
Working System
```

If an illustration is used, it should have a clean white/light background and communicate engineering rather than generic corporate imagery.

---

# 10. Homepage — Services

Section heading:

> **What can we help you build?**

Display the primary capabilities:

### Software Development

Custom applications, APIs, automation tools and software systems.

### Web Development

Business websites, web applications, dashboards and integrations.

### WordPress

Custom themes, plugins, customization, migration, optimization and maintenance.

### Research & MATLAB

MATLAB, Python, simulation, algorithms, data processing and research software.

### Data & AI

Data processing, AI integrations, machine-learning-related applications and intelligent workflows.

### Infrastructure & Servers

Linux servers, Docker, deployment, reverse proxies, self-hosting and infrastructure configuration.

### DevOps & Automation

CI/CD, deployment automation, infrastructure automation and operational tooling.

### IoT & Embedded

IoT prototypes, sensor systems, data acquisition, embedded software and connected applications.

### Technical Consulting

Architecture, technology selection, debugging, troubleshooting and technical planning.

Every card should link to a dedicated service page.

---

# 11. Homepage — Solutions

Heading:

> **Solutions for different technical needs**

Cards:

### Individuals

Websites, software, automation and technical assistance.

### Businesses

Websites, internal tools, automation, infrastructure and custom applications.

### Startups

MVPs, prototypes, APIs, architecture and deployment.

### Researchers

MATLAB, Python, simulations, algorithms, data processing and research software.

### Organizations

Custom systems, infrastructure, automation and technical consulting.

Final link:

> Have a different requirement? Tell us what you're trying to accomplish.

---

# 12. Homepage — Why mGeek

Heading:

> **Technical expertise focused on practical outcomes.**

Suggested points:

### Research + Engineering

Academic research experience combined with practical software engineering.

### Custom Solutions

Solutions are designed around the client's actual requirement rather than forcing a predefined product.

### Software + Infrastructure

mGeek can build the application and help deploy the infrastructure required to run it.

### Specialist Network

Projects can be supported by specialists from the mGeek Expert network.

### Direct Technical Communication

Clients communicate with a technical team rather than being separated from implementation by layers of sales personnel.

Do not invent quantitative claims such as "500+ clients", "10 years experience", "99.9% uptime", etc. unless verified.

---

# 13. Homepage — Selected Projects

Heading:

> **Selected Work**

Show 6–9 high-quality projects.

Each project card:

```text
Project image/screenshot
Project name
One-line description
Category
Technology/capability tags
View Project
```

Recommended categories:

- Software
- Web
- Research
- Infrastructure
- Automation
- IoT
- Open Source

Each project should be clearly labelled where appropriate:

- Client Project
- Independent Project
- Research
- Open Source
- Internal Project

Do not fabricate client names, results, metrics or testimonials.

---

# 14. Homepage — Research & Engineering

Heading:

> **Research, computation and engineering**

Suggested copy:

> mGeek also works on technically demanding projects involving algorithms, simulation, computational tools, data processing and research software.

Capabilities:

- MATLAB
- Python
- Algorithms
- Simulation
- Signal processing
- Image processing
- Data analysis
- Visualization
- Research prototypes

CTA:

> Explore Research & Engineering

---

# 15. Homepage — How mGeek Works

Heading:

> **From requirement to working solution**

Visual process:

```text
01 Discuss
   ↓
02 Assess
   ↓
03 Plan
   ↓
04 Assemble the right expertise
   ↓
05 Build
   ↓
06 Test
   ↓
07 Deploy / Deliver
   ↓
08 Support if required
```

The important concept is:

> The client works with mGeek; mGeek coordinates the technical specialists required for the project.

---

# 16. Homepage — Experts

Heading:

> **A network of technical specialists**

Suggested copy:

> mGeek works with independent technical professionals across software, research, design, infrastructure, data and other specialized disciplines.

Show 3–6 example expert cards once approved profiles exist.

CTA:

> **Meet the Experts**

Secondary CTA:

> **Join the mGeek Network**

Do not expose private freelancer information.

---

# 17. Homepage — Founder

Heading:

> **Built on technical experience**

Introduce:

**Dr. Prateek Raj Gautam**

The founder section should be concise.

Suggested positioning:

> mGeek was founded by Dr. Prateek Raj Gautam, a technology professional with experience spanning software engineering, research, web development, infrastructure and technical consulting.

Include:

- Professional photograph if available
- Short biography
- Selected credentials
- Link to About
- Optional Resume link

Do not reproduce a complete academic CV on the homepage.

---

# 18. Homepage — Final CTA

Heading:

> **Have a technical requirement?**

Supporting text:

> Tell us what you are trying to build, fix or improve. We will help determine the right technical approach.

CTA:

> **Start a Project**

Secondary:

> Contact mGeek

---

# 19. Services

Create a service landing page at:

```text
/services/
```

Display all major service categories.

Each service gets its own SEO-friendly page.

---

# 20. Software Development Page

URL:

```text
/services/software-development/
```

Sections:

- Hero
- Problems we solve
- What we build
- Typical project types
- Technologies
- Development process
- Related projects
- FAQ
- CTA

Possible offerings:

- Custom software
- Desktop applications
- Web applications
- APIs
- Automation tools
- Internal business tools
- Data-processing applications
- Integrations
- Prototypes/MVPs

Do not present every technology as a guarantee. Technologies should be listed according to actual project capability.

---

# 21. Web Development Page

Include:

- Business websites
- Web applications
- Dashboards
- API integrations
- Responsive development
- Performance optimization
- Deployment

Include project examples.

---

# 22. WordPress Page

Include:

- Custom WordPress themes
- Custom plugins
- Theme customization
- Existing-site modification
- Migration
- Performance optimization
- Security hardening
- Maintenance
- Deployment

Important positioning:

> mGeek builds and customizes WordPress sites when WordPress is the appropriate solution.

Do not imply that every project should use WordPress.

---

# 23. Research & MATLAB Page

URL:

```text
/services/research-matlab/
```

Heading:

> **Research Software & Technical Assistance**

Capabilities:

- MATLAB development
- MATLAB debugging
- Python research software
- Simulation
- Algorithm implementation
- Signal processing
- Image processing
- Data analysis
- Visualization
- Computational experiments
- Existing-code optimization
- Research prototypes

Target users:

- Researchers
- Faculty
- Laboratories
- R&D teams
- Organizations

Ethical boundary:

> mGeek provides technical and software assistance for research work. We do not provide fabricated research, impersonation, or academic authorship services.

---

# 24. Infrastructure & Servers Page

URL:

```text
/services/infrastructure-servers/
```

Two primary service packages:

## Setup & Handover

One-time infrastructure implementation.

Possible scope:

- Linux server setup
- Docker/Podman
- Reverse proxy
- SSL/TLS
- Domain configuration
- Application deployment
- Storage configuration
- Backup setup
- Monitoring setup
- Documentation
- Handover

## Setup & Management

Everything in Setup & Handover plus ongoing:

- Updates
- Monitoring
- Troubleshooting
- Maintenance
- Backup monitoring
- Configuration changes
- Operational support

Do not promise 24/7 support unless such a service is actually established.

---

# 25. DevOps & Automation Page

Capabilities:

- Git workflows
- CI/CD
- Docker
- Podman
- Deployment automation
- Infrastructure configuration
- Monitoring
- Application deployment
- Server automation
- Release workflows

Explain outcomes rather than merely listing tools.

---

# 26. IoT & Embedded Page

Capabilities:

- IoT prototypes
- Sensor systems
- Data acquisition
- Embedded software
- Edge processing
- Device-to-server communication
- Dashboards
- Connected systems

Include relevant projects when available.

---

# 27. Technical Consulting Page

This should be a high-value service.

Typical requests:

- "Which technology should we use?"
- "How should we structure this application?"
- "Why is our server failing?"
- "How should we deploy this?"
- "Can this research algorithm be implemented?"
- "Should we use a database or another storage model?"
- "How can we automate this workflow?"

Process:

```text
Problem
→ Technical assessment
→ Options
→ Recommendation
→ Implementation plan
```

---

# 28. Solutions Pages

Create audience-specific landing pages.

Each should contain:

- Audience-specific problems
- Relevant services
- Example projects
- Typical engagement
- CTA

Pages:

```text
/solutions/individuals/
/solutions/businesses/
/solutions/startups/
/solutions/researchers/
/solutions/organizations/
```

---

# 29. Projects

URL:

```text
/projects/
```

Features:

- Grid/list layout
- Search if project count becomes large
- Category filters
- Project detail pages

Filters:

- All
- Software
- Web
- Research
- Infrastructure
- Automation
- IoT
- Open Source

Project detail template:

```text
Project title
Category
Status/type
Summary

Problem
Approach
Implementation
Technology
mGeek contribution
Outcome

Screenshots
Links
Related projects
CTA
```

Do not publish confidential client information.

---

# 30. Case Studies

Case studies should be deeper than project cards.

Template:

```text
Title

Overview

Client/problem
Requirements
Constraints

Approach

Architecture
Implementation
Technology

Execution

Testing
Deployment

Outcome

Lessons / observations

Related services

Start a similar project
```

Only publish measurable results when they can be verified.

---

# 31. Experts

URL:

```text
/experts/
```

Purpose:

Show approved mGeek specialists.

Each public profile:

```text
Photo
Name
Role
Short bio

Primary skills
Secondary skills
Experience summary
Selected projects

GitHub / portfolio / LinkedIn
```

Do not display:

- Personal email
- Phone number
- Private address
- Internal compensation
- Internal availability information

unless explicitly designed as a public business field.

---

# 32. Expert Profile

Recommended URL:

```text
/experts/<slug>/
```

Example:

```text
/experts/example-developer/
```

Profile should contain:

- Name
- Professional title
- Profile photo
- Short introduction
- Expertise
- Tools/technologies
- Selected projects
- Relevant experience
- External portfolio links

Do not claim certifications, years of experience or employment history without verification.

---

# 33. Join mGeek

URL:

```text
/join/
```

Headline:

> **Join the mGeek Network**

Message:

> Work with a growing technical network on projects that match your skills and interests.

Explain:

1. Apply
2. Review
3. Verification
4. Approval
5. Profile creation
6. Project matching
7. Collaboration

Application form:

- Full name
- Email
- Location/time zone
- Primary expertise
- Secondary expertise
- Experience
- Portfolio
- GitHub
- LinkedIn
- Website
- Resume
- Availability
- Preferred project types
- Preferred engagement type
- Short introduction
- Additional information

The backend must validate uploads and prevent unsafe file types.

---

# 34. About

URL:

```text
/about/
```

Sections:

- What is mGeek?
- Mission
- Approach
- Founder
- Technical capabilities
- mGeek Expert network
- How projects are delivered
- CTA

Suggested mission:

> To make high-quality technical expertise accessible to people and organizations that need practical, well-engineered solutions.

This wording may be refined during branding.

---

# 35. Research

URL:

```text
/research/
```

This page should establish technical authority.

Possible sections:

- Research interests
- Research software
- Selected publications
- Computational work
- Technical projects
- Research-related capabilities

Topics may include:

- Wireless Sensor Networks
- IoT
- Localization
- Signal processing
- Image processing
- Computational methods

Use verified publication information only.

---

# 36. Insights

URL:

```text
/insights/
```

This is the technical content hub.

Categories:

- Software Engineering
- Web Development
- Infrastructure
- DevOps
- Research
- MATLAB
- IoT
- Tutorials
- Technical Notes

Article template:

```text
Title
Description
Author
Date
Updated date
Category
Reading time

Article content

Related services
Related projects
CTA
```

Technical articles should prioritize useful information over SEO keyword stuffing.

---

# 37. Contact / Start a Project

Primary CTA should lead to:

```text
/contact/
```

or:

```text
/start-a-project/
```

Preferred public label:

> **Start a Project**

Form fields:

### Required

- Name
- Email
- Requirement
- Project description

### Optional

- Organization
- Website
- Service category
- Budget range
- Timeline
- Existing technology
- Attachment

Service options:

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

Budget should be optional.

Do not force a budget before allowing a client to submit an enquiry.

Success message:

> Thank you. Your project enquiry has been received. The mGeek team will review the requirement and get back to you.

---

# 38. Lead Management

The website should be designed so that submitted project enquiries can eventually be stored as structured records.

Suggested fields:

```text
lead_id
name
email
organization
service
description
budget
timeline
attachment
source
status
created_at
updated_at
assigned_to
```

Possible status:

```text
New
Reviewing
Needs Information
Qualified
Proposal
Won
Lost
Archived
```

The initial implementation may simply send email notifications, but the architecture should not prevent later integration with a CRM or internal admin panel.

---

# 39. Expert Data Model

Suggested conceptual model:

```text
Expert
 ├── Profile
 ├── Skills
 ├── Categories
 ├── Projects
 ├── External Links
 └── Verification Status
```

Internal fields should include:

```text
expert_id
name
email
profile
skills
categories
experience
portfolio
github
linkedin
resume
availability
status
created_at
updated_at
```

Public and private data must be separated.

Possible status:

```text
Applied
Under Review
Interview/Discussion
Approved
Active
Inactive
Rejected
```

---

# 40. Design System

## 40.1 Visual style

Use a modern technical design.

Preferred characteristics:

- White or near-white primary background
- Dark text
- One restrained brand accent
- Subtle borders
- Generous whitespace
- Clear typography hierarchy
- Rounded corners used moderately
- Minimal shadows
- Minimal animation

Avoid:

- Excessive gradients
- Glassmorphism everywhere
- Excessive neon
- Huge 3D objects
- Stock photography
- Decorative code blocks without purpose
- Excessive motion

## 40.2 Typography

Suggested candidates:

Primary:

- Inter
- Geist
- Manrope

Monospace:

- JetBrains Mono
- IBM Plex Mono

Final selection should respect the supplied logo and brand.

## 40.3 Icons

Use one consistent icon system.

Do not mix multiple icon styles.

Icons should communicate meaning and not replace important text.

---

# 41. Responsive Design

The site must be designed mobile-first.

Required breakpoints should be determined by content, not only device names.

Test at minimum:

- Small mobile
- Large mobile
- Tablet
- Laptop
- Large desktop

Requirements:

- No horizontal scrolling.
- Touch targets must be accessible.
- Navigation must work without hover.
- Forms must be easy to use on mobile.
- Project cards must remain readable.
- Tables should become responsive.
- Code blocks should horizontally scroll rather than break the page.
- Images must have appropriate responsive sizing.
- CTA buttons must remain usable.

---

# 42. Accessibility

Target:

**WCAG 2.2 AA** where practical.

Requirements:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Sufficient color contrast.
- Proper heading hierarchy.
- Labels for forms.
- Accessible error messages.
- Alt text for meaningful images.
- Decorative images marked appropriately.
- No essential information conveyed by color alone.
- Reduced-motion support.

---

# 43. Performance

Target a fast production site.

Requirements:

- Optimize images.
- Use responsive images.
- Prefer SVG for logos/icons where appropriate.
- Lazy-load below-the-fold images.
- Avoid unnecessary JavaScript.
- Avoid huge UI libraries when not needed.
- Minimize third-party scripts.
- Optimize fonts.
- Use caching.
- Use appropriate compression.
- Avoid autoplay video.

Performance should be measured using Lighthouse/PageSpeed and real-world metrics where available.

---

# 44. SEO

Every major service should have a dedicated crawlable page.

Required:

- Unique title
- Meta description
- Canonical URL
- One clear H1
- Proper H2/H3 hierarchy
- Open Graph metadata
- Twitter/X metadata if used
- Structured internal linking
- XML sitemap
- robots.txt
- Clean URLs
- Breadcrumbs where useful
- Image alt text
- Structured data where appropriate

Potential structured data:

- Organization
- WebSite
- Service
- Person
- Article
- BreadcrumbList

Do not use fake reviews or misleading structured data.

---

# 45. SEO Content Strategy

Do not optimize the homepage for every possible keyword.

Primary brand query:

> mGeek

Secondary concepts:

- technology consulting
- software development
- web development
- MATLAB development
- research software
- Linux server setup
- Docker deployment
- WordPress development
- DevOps consulting
- IoT development

Specific service pages should target specific search intent.

Insights/articles can target long-tail technical queries.

---

# 46. Internationalization

Initial language:

**English**

The site should not be hard-coded in a way that prevents future localization.

Avoid region-specific language unless required.

Use:

- International date formatting where appropriate
- Time-zone-aware scheduling if scheduling is added
- International phone/address handling
- Currency-neutral project enquiry forms

---

# 47. Security

The website will contain forms and possibly file uploads.

Required:

- Server-side validation
- Client-side validation
- CSRF protection where applicable
- Rate limiting
- Spam protection
- File-type validation
- File-size limits
- Safe filename handling
- Malware scanning if file uploads are enabled
- Secure storage
- No public exposure of uploaded documents
- Secure authentication for admin/expert management
- No secrets in frontend source
- HTTPS in production
- Secure cookies
- Appropriate security headers

Do not expose internal expert or client information.

---

# 48. Privacy

The website should eventually include:

```text
/privacy/
```

and:

```text
/terms/
```

Privacy policy must explain:

- Contact form data
- Expert application data
- Cookies
- Analytics
- Uploaded files
- Data retention
- Third-party services
- User rights

Legal text must be reviewed for the actual jurisdictions and business structure before production.

---

# 49. Analytics

Analytics should be privacy-conscious.

Track meaningful events such as:

```text
project_cta_clicked
contact_form_started
contact_form_submitted
service_viewed
project_viewed
expert_profile_viewed
join_application_started
join_application_submitted
```

Do not collect unnecessary personal information through analytics.

---

# 50. Content Rules

All public content must follow these rules:

- Be specific.
- Avoid generic marketing language.
- Avoid unsupported claims.
- Do not fabricate statistics.
- Do not fabricate testimonials.
- Do not fabricate client names.
- Do not publish confidential project information.
- Explain technical capabilities in terms of client outcomes.
- Prefer real screenshots/projects over stock imagery.
- Keep technical claims verifiable.

---

# 51. CTA Strategy

Primary CTA throughout the site:

> **Start a Project**

Secondary CTA:

> **Explore Services**

Expert CTA:

> **Join the mGeek Network**

Use consistent CTA wording.

Avoid excessive variations such as:

- Let's Connect
- Get Started Today
- Book Now
- Talk to Us
- Discover More
- Get Your Free Quote

unless a specific page has a strong reason.

---

# 52. Footer

Footer should include:

```text
mGeek
Technology Consulting & Engineering

Services
Solutions
Projects
Experts
About
Insights
Contact

Join mGeek

Privacy
Terms

© <current year> mGeek
```

Include social links only when official profiles exist.

---

# 53. Technical Architecture

The implementation technology is not fixed by this PRD.

The development team should select a stack based on:

- Performance
- Maintainability
- SEO
- Security
- Content management requirements
- Deployment simplicity
- Future extensibility

The site should not require a heavyweight backend if static/server-rendered architecture is sufficient for the initial version.

Potential approaches:

### Option A

Static/SSR framework with a headless CMS.

### Option B

Modern full-stack framework with database-backed content.

### Option C

CMS-backed frontend if content editing requirements justify it.

Do not choose a technology merely because it is fashionable.

---

# 54. Content Management

Content types should be modeled separately.

Suggested content entities:

```text
Service
Solution
Project
CaseStudy
Expert
Article
ResearchItem
FounderProfile
```

Projects and experts should not be hard-coded into page components.

The design should allow adding content without changing frontend code.

---

# 55. Recommended Initial Data Structure

Conceptually:

```text
services
solutions
projects
case_studies
experts
expert_skills
expert_projects
articles
research_items
leads
expert_applications
site_settings
```

Relationships:

```text
Service
  ├── Projects
  ├── Case Studies
  └── Articles

Expert
  ├── Skills
  └── Projects

Project
  ├── Services
  ├── Experts
  └── Case Studies

Lead
  └── Service

Expert Application
  └── Expert
```

The actual database structure may differ according to the selected stack.

---

# 56. Admin Requirements

The initial public website does not necessarily need a sophisticated admin panel.

However, the architecture should eventually support:

- Manage services
- Manage projects
- Manage case studies
- Manage experts
- Approve expert applications
- Manage articles
- Manage research items
- View project enquiries
- Change lead status

---

# 57. Email Requirements

At minimum:

### Client enquiry notification

Send internal notification when a project enquiry is submitted.

### Client confirmation

Send acknowledgement to the client.

### Expert application notification

Notify mGeek when an expert applies.

### Expert acknowledgement

Confirm receipt of the application.

Do not expose internal email addresses in frontend code.

---

# 58. Forms and Validation

All forms must have:

- Required-field validation
- Useful error messages
- Server-side validation
- Loading state
- Success state
- Failure state
- Spam protection
- Accessible labels

Never clear the entire form after an unexpected server error.

---

# 59. Image Strategy

Use real assets wherever possible:

- Existing logo
- Real project screenshots
- Real infrastructure diagrams where publishable
- Founder photograph
- Approved expert photographs

Avoid generic stock photos of:

- Programmers
- Servers
- Business meetings
- Artificial "technology" backgrounds

Technical diagrams should be clean and information-oriented.

---

# 60. Animation

Animation should communicate hierarchy or interaction.

Allowed:

- Subtle hover states
- Small entrance transitions
- Navigation transitions
- Progress/process animation
- Lightweight technical diagrams

Avoid:

- Constant movement
- Large parallax effects
- Distracting particle backgrounds
- Long loading animations
- Animation that delays access to content

Respect `prefers-reduced-motion`.

---

# 61. Error Pages

Create:

```text
404
500 / generic server error
```

404 should provide:

> Page not found.

and links to:

- Home
- Services
- Projects
- Contact

---

# 62. Empty States

For sections that have no content yet:

Do not display empty grids.

Use an appropriate fallback.

For example:

> More mGeek projects are being documented. Explore our services or start a project with us.

---

# 63. Trust Strategy

Trust should come from:

- Real founder credentials
- Real projects
- Technical explanations
- Case studies
- Expert profiles
- Clear process
- Transparent scope
- Professional contact mechanism

Do not rely heavily on:

- Fake counters
- Generic testimonials
- Stock photos
- "Award-winning" claims without evidence
- Artificial badges

---

# 64. Content Priority

Priority 1 — launch:

- Home
- Services
- Projects
- About
- Contact
- Join mGeek

Priority 2:

- Individual service pages
- Solutions
- Experts
- Research
- Case studies

Priority 3:

- Insights
- Advanced expert profiles
- CRM/admin
- Automated workflows

---

# 65. Launch Acceptance Criteria

The site is ready for production when:

- [ ] mGeek logo is correctly integrated.
- [ ] Homepage clearly explains what mGeek does within the first viewport.
- [ ] Primary CTA is obvious.
- [ ] Services are understandable to non-technical visitors.
- [ ] Projects are real and verifiable.
- [ ] Contact/project form works.
- [ ] Expert application form works or is intentionally disabled until backend support exists.
- [ ] Mobile layout is complete.
- [ ] Desktop layout is complete.
- [ ] Keyboard navigation works.
- [ ] Basic accessibility checks pass.
- [ ] SEO metadata exists.
- [ ] Sitemap exists.
- [ ] robots.txt exists.
- [ ] 404 page exists.
- [ ] HTTPS is enabled.
- [ ] Forms have spam protection.
- [ ] Uploaded files are securely handled.
- [ ] No secrets exist in client-side code.
- [ ] Analytics, if used, is configured correctly.
- [ ] Privacy/terms pages are available before collecting production user data.
- [ ] Performance has been tested.
- [ ] All links have been checked.
- [ ] No placeholder text remains in production.
- [ ] No fabricated claims remain.
- [ ] Production domain is configured as `mgeek.in`.

---

# 66. Agent Instructions

These instructions apply to any AI coding/design agent working on the mGeek website.

## 66.1 First inspect the repository

Before modifying anything:

1. Inspect the complete project structure.
2. Identify the existing framework.
3. Identify the package manager.
4. Identify existing routes/pages.
5. Inspect all assets.
6. Inspect the supplied mGeek logo.
7. Inspect existing styles/design tokens.
8. Identify build and deployment configuration.
9. Identify existing environment variables without exposing their values.
10. Read relevant README/documentation.

Do not immediately replace the existing application.

## 66.2 Logo rule

The user will place the mGeek logo in the project folder.

The agent must:

1. Find the supplied logo asset.
2. Determine its format and variants.
3. Use the actual logo.
4. Preserve its proportions.
5. Do not recreate it using text.
6. Do not replace it with a generated logo.
7. Do not alter the logo unless explicitly requested.

If multiple logo variants exist, select the appropriate variant based on background.

## 66.3 Existing code rule

If an existing application is present:

- Reuse useful components.
- Preserve working functionality.
- Avoid unnecessary rewrites.
- Avoid changing dependencies without reason.
- Do not delete existing project content without checking its purpose.
- Do not overwrite configuration blindly.

## 66.4 Design rule

Implement the design as a professional technology engineering company.

Do not make it look like:

- A freelancer marketplace
- A generic Bootstrap template
- A SaaS landing-page clone
- A digital marketing agency
- A cryptocurrency/AI startup landing page

The design should communicate technical competence and reliability.

## 66.5 Content rule

Use the information in this PRD as the source of truth.

Do not invent:

- Clients
- Testimonials
- Statistics
- Revenue
- Awards
- Certifications
- Employees
- Projects
- Case-study outcomes
- Performance metrics

If information is missing, use a neutral placeholder or structure the component so real content can be inserted later.

Do not publish obvious placeholder text such as "Lorem ipsum" in the final UI.

## 66.6 Responsive rule

Every component must be designed for:

- Mobile
- Tablet
- Desktop
- Large desktop

Do not implement desktop first and simply shrink it for mobile.

## 66.7 Accessibility rule

Use semantic HTML.

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Use correct heading hierarchy.

All interactive controls must be keyboard accessible.

## 66.8 Component rule

Create reusable components for:

- Header
- Footer
- CTA
- Service card
- Project card
- Expert card
- Article card
- Section heading
- Breadcrumb
- Form fields
- FAQ
- Tag/badge
- Testimonial only if real testimonials are available

Do not duplicate large blocks of markup unnecessarily.

## 66.9 Content/data rule

Do not hard-code repeated project/service/expert cards directly into page markup when the framework supports structured data.

Use data structures/content collections/CMS records as appropriate.

## 66.10 SEO rule

Every route must have appropriate:

- Title
- Description
- Canonical
- Open Graph metadata

Do not use the same title and description for every page.

## 66.11 Performance rule

Do not add a dependency just to implement a small animation.

Prefer CSS and existing framework capabilities.

Optimize images.

Avoid loading assets that are not used.

## 66.12 Security rule

Never put:

- API keys
- Passwords
- SMTP credentials
- Database credentials
- Private tokens

in frontend code or committed source.

Use environment variables and server-side handling.

## 66.13 Forms

For production forms:

- Validate on client.
- Validate again on server.
- Protect against spam.
- Sanitize/validate uploaded files.
- Never trust client-side validation.
- Show clear error states.
- Show a clear success state.

## 66.14 Do not overbuild

The first version should be polished rather than enormous.

Implement the most important user journey:

```text
Landing
→ Understand mGeek
→ Explore service
→ See evidence
→ Start project
```

Then:

```text
Technical professional
→ Understand mGeek
→ See network model
→ Join
```

Do not build a complex marketplace, payment system, freelancer dashboard or project-management platform unless explicitly requested.

---

# 67. Recommended First Development Milestone

Build the following first:

```text
1. Global layout
2. Header/navigation
3. Homepage
4. Services index
5. Service detail template
6. Projects index
7. Project detail template
8. About
9. Contact/Start Project
10. Join mGeek
11. Footer
12. Responsive design
13. SEO metadata
14. 404
```

Then add:

```text
15. Solutions
16. Experts
17. Expert profiles
18. Research
19. Case studies
20. Insights
```

---

# 68. Definition of Success

A visitor who spends approximately 10–20 seconds on the homepage should be able to answer:

1. **What is mGeek?**
2. **What kinds of technical problems can mGeek solve?**
3. **Can mGeek handle my type of project?**
4. **Why should I trust mGeek?**
5. **How do I contact them?**

A technical professional should similarly be able to answer:

1. **What is the mGeek network?**
2. **What type of work can I do?**
3. **How do I apply?**
4. **What information do I need to provide?**

The website should ultimately communicate one central idea:

> **You bring the technical requirement. mGeek brings the expertise and engineering needed to turn it into a working solution.**




-- 
# for backent database
- for testing we are using pocketbase 
- suggest ways to connect 

- and if postgress and psql is required but for later update

define api routes then design frontend using html,css/scss,js explain each functional block with comments