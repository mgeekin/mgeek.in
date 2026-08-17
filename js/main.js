document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const pb = new PocketBase(window.appConfig.pbUrl);

    window.pb = pb;

    checkAuth();
});

async function checkAuth() {
    const pb = window.pb;
    if (pb.authStore.isValid) {
        updateNavForAuthUser();
    }
}

function updateNavForAuthUser() {
    const loginLink = document.querySelector('a[href="login.html"]');
    if (loginLink) {
        loginLink.textContent = 'Dashboard';
        loginLink.href = 'dashboard.html';
    }
}

async function loadProjects() {
    const pb = window.pb;
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    try {
        const records = await pb.collection('projects').getList(1, 6, {
            sort: '-created',
            filter: 'status = "published"'
        });
        
        if (records.items.length === 0) {
            projectsGrid.innerHTML = '<p class="placeholder-text">Projects will be displayed here once added to the system.</p>';
            return;
        }
        
        projectsGrid.innerHTML = records.items.map(project => `
            <div class="project-card">
                <div class="project-image">
                    ${project.image ? `<img src="${pb.getFileUrl(project, project.image)}" alt="${project.title}">` : '<div class="project-placeholder"></div>'}
                </div>
                <div class="project-content">
                    <span class="project-category">${project.category}</span>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags ? project.tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('') : ''}
                    </div>
                    <a href="project-detail.html?id=${project.id}" class="card-link">View Project →</a>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsGrid.innerHTML = '<p class="placeholder-text">Projects will be displayed here once added to the system.</p>';
    }
}

async function loadExperts() {
    const pb = window.pb;
    const expertsGrid = document.getElementById('expertsGrid');
    
    if (!expertsGrid) return;
    
    try {
        const records = await pb.collection('experts').getList(1, 6, {
            sort: '-created',
            filter: 'status = "approved" && profile_public = true'
        });
        
        if (records.items.length === 0) {
            expertsGrid.innerHTML = '<p class="placeholder-text">Expert profiles will be displayed here once approved.</p>';
            return;
        }
        
        expertsGrid.innerHTML = records.items.map(expert => `
            <div class="expert-card">
                <div class="expert-avatar">
                    ${expert.avatar ? `<img src="${pb.getFileUrl(expert, expert.avatar)}" alt="${expert.name}">` : '<div class="avatar-placeholder">' + expert.name.charAt(0) + '</div>'}
                </div>
                <h3>${expert.name}</h3>
                <p class="expert-role">${expert.role}</p>
                <p class="expert-bio">${expert.bio ? expert.bio.substring(0, 120) + '...' : ''}</p>
                <div class="expert-skills">
                    ${expert.primary_skills ? expert.primary_skills.split(',').slice(0, 3).map(skill => `<span class="skill-tag">${skill.trim()}</span>`).join('') : ''}
                </div>
                <a href="expert-profile.html?id=${expert.id}" class="card-link">View Profile →</a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading experts:', error);
        expertsGrid.innerHTML = '<p class="placeholder-text">Expert profiles will be displayed here once approved.</p>';
    }
}

if (document.getElementById('projectsGrid')) {
    loadProjects();
}

if (document.getElementById('expertsGrid')) {
    loadExperts();
}
