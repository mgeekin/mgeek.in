const pb = new PocketBase('http://127.0.0.1:8090');

let currentUser = null;
let userProfile = null;

document.addEventListener('DOMContentLoaded', async function() {
    if (!pb.authStore.isValid) {
        window.location.href = 'login.html';
        return;
    }

    currentUser = pb.authStore.model;
    await loadUserProfile();
    
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    setupDashboardNavigation();
    
    if (currentUser.user_type === 'freelancer') {
        await loadFreelancerDashboard();
    } else {
        await loadClientDashboard();
    }
});

async function loadUserProfile() {
    try {
        const user = await pb.collection('users').getOne(currentUser.id);
        currentUser = user;
        
        document.getElementById('dashboardWelcome').textContent = `Welcome back, ${user.name}`;
        
        if (user.user_type === 'freelancer') {
            document.getElementById('dashboardSubtitle').textContent = 'Manage your expert profile and projects';
        } else {
            document.getElementById('dashboardSubtitle').textContent = 'Manage your projects and requests';
        }
    } catch (error) {
        console.error('Error loading user profile:', error);
    }
}

async function loadFreelancerDashboard() {
    document.getElementById('freelancerDashboard').style.display = 'block';
    
    const navItems = [
        { id: 'profileSection', label: 'Profile' },
        { id: 'projectsSection', label: 'Projects' },
        { id: 'availabilitySection', label: 'Availability' }
    ];
    
    renderDashboardNav(navItems);
    
    try {
        const records = await pb.collection('experts').getList(1, 1, {
            filter: `user = "${currentUser.id}"`
        });
        
        if (records.items.length > 0) {
            userProfile = records.items[0];
            populateFreelancerForm();
        }
    } catch (error) {
        console.error('Error loading expert profile:', error);
    }
    
    document.getElementById('freelancerProfileForm').addEventListener('submit', handleFreelancerProfileUpdate);
    document.getElementById('availabilityForm').addEventListener('submit', handleAvailabilityUpdate);
}

async function loadClientDashboard() {
    document.getElementById('clientDashboard').style.display = 'block';
    
    const navItems = [
        { id: 'clientProfileSection', label: 'Profile' },
        { id: 'clientProjectsSection', label: 'Project Requests' }
    ];
    
    renderDashboardNav(navItems);
    
    try {
        const records = await pb.collection('clients').getList(1, 1, {
            filter: `user = "${currentUser.id}"`
        });
        
        if (records.items.length > 0) {
            userProfile = records.items[0];
            populateClientForm();
        }
    } catch (error) {
        console.error('Error loading client profile:', error);
    }
    
    document.getElementById('clientProfileForm').addEventListener('submit', handleClientProfileUpdate);
}

function renderDashboardNav(items) {
    const nav = document.getElementById('dashboardNav');
    nav.innerHTML = items.map((item, index) => 
        `<button class="dashboard-nav-btn ${index === 0 ? 'active' : ''}" data-section="${item.id}">${item.label}</button>`
    ).join('');
    
    document.querySelectorAll('.dashboard-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.dashboard-nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.dashboard-section').forEach(s => s.classList.remove('active'));
            
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.section).classList.add('active');
        });
    });
}

function populateFreelancerForm() {
    if (!userProfile) return;
    
    document.getElementById('expertRole').value = userProfile.role || '';
    document.getElementById('expertBio').value = userProfile.bio || '';
    document.getElementById('expertLocation').value = userProfile.location || '';
    document.getElementById('primarySkills').value = userProfile.primary_skills || '';
    document.getElementById('secondarySkills').value = userProfile.secondary_skills || '';
    document.getElementById('expertExperience').value = userProfile.experience || '';
    document.getElementById('expertPortfolio').value = userProfile.portfolio || '';
    document.getElementById('expertGithub').value = userProfile.github || '';
    document.getElementById('expertLinkedin').value = userProfile.linkedin || '';
    document.getElementById('workForMgeek').checked = userProfile.work_for_mgeek || false;
    document.getElementById('availableToRecruiters').checked = userProfile.available_to_recruiters || false;
    document.getElementById('availability').value = userProfile.availability || 'available';
    document.getElementById('preferredEngagement').value = userProfile.preferred_engagement || 'freelance';
}

function populateClientForm() {
    if (!userProfile) return;
    
    document.getElementById('companyName').value = userProfile.company_name || '';
    document.getElementById('companyWebsite').value = userProfile.website || '';
    document.getElementById('companyIndustry').value = userProfile.industry || '';
    document.getElementById('companyDescription').value = userProfile.description || '';
}

async function handleFreelancerProfileUpdate(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('profileMessage');
    
    const data = {
        role: document.getElementById('expertRole').value,
        bio: document.getElementById('expertBio').value,
        location: document.getElementById('expertLocation').value,
        primary_skills: document.getElementById('primarySkills').value,
        secondary_skills: document.getElementById('secondarySkills').value,
        experience: document.getElementById('expertExperience').value,
        portfolio: document.getElementById('expertPortfolio').value,
        github: document.getElementById('expertGithub').value,
        linkedin: document.getElementById('expertLinkedin').value,
        work_for_mgeek: document.getElementById('workForMgeek').checked,
        available_to_recruiters: document.getElementById('availableToRecruiters').checked
    };
    
    try {
        if (userProfile) {
            await pb.collection('experts').update(userProfile.id, data);
        } else {
            data.user = currentUser.id;
            data.name = currentUser.name;
            data.email = currentUser.email;
            data.status = 'pending';
            userProfile = await pb.collection('experts').create(data);
        }
        
        showMessage(messageDiv, 'Profile updated successfully!', 'success');
        
        await pb.collection('users').update(currentUser.id, { profile_complete: true });
        
    } catch (error) {
        console.error('Error updating profile:', error);
        showMessage(messageDiv, 'Failed to update profile. Please try again.', 'error');
    }
}

async function handleAvailabilityUpdate(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('availabilityMessage');
    
    const data = {
        availability: document.getElementById('availability').value,
        preferred_engagement: document.getElementById('preferredEngagement').value
    };
    
    try {
        if (userProfile) {
            await pb.collection('experts').update(userProfile.id, data);
            showMessage(messageDiv, 'Availability updated successfully!', 'success');
        }
    } catch (error) {
        console.error('Error updating availability:', error);
        showMessage(messageDiv, 'Failed to update availability.', 'error');
    }
}

async function handleClientProfileUpdate(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('clientProfileMessage');
    
    const data = {
        company_name: document.getElementById('companyName').value,
        website: document.getElementById('companyWebsite').value,
        industry: document.getElementById('companyIndustry').value,
        description: document.getElementById('companyDescription').value
    };
    
    try {
        if (userProfile) {
            await pb.collection('clients').update(userProfile.id, data);
        } else {
            data.user = currentUser.id;
            data.name = currentUser.name;
            data.email = currentUser.email;
            userProfile = await pb.collection('clients').create(data);
        }
        
        showMessage(messageDiv, 'Profile updated successfully!', 'success');
        
        await pb.collection('users').update(currentUser.id, { profile_complete: true });
        
    } catch (error) {
        console.error('Error updating profile:', error);
        showMessage(messageDiv, 'Failed to update profile. Please try again.', 'error');
    }
}

function setupDashboardNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function handleLogout() {
    pb.authStore.clear();
    window.location.href = 'login.html';
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}
