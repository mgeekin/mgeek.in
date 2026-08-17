const pb = new PocketBase(window.appConfig.pbUrl);

document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const switchLinks = document.querySelectorAll('[data-switch]');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    switchLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = link.getAttribute('data-switch');
            switchTab(targetTab);
        });
    });

    function switchTab(tabName) {
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-tab') === tabName) {
                btn.classList.add('active');
            }
        });

        authForms.forEach(form => {
            form.classList.remove('active');
            if (form.id === tabName) {
                form.classList.add('active');
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const messageDiv = document.getElementById('loginMessage');
    
    try {
        const authData = await pb.collection('users').authWithPassword(email, password);
        
        showMessage(messageDiv, 'Login successful! Redirecting...', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
        
    } catch (error) {
        console.error('Login error:', error);
        showMessage(messageDiv, error.message || 'Login failed. Please check your credentials.', 'error');
    }
}

async function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    const userType = document.querySelector('input[name="userType"]:checked').value;
    const messageDiv = document.getElementById('registerMessage');
    
    if (password !== passwordConfirm) {
        showMessage(messageDiv, 'Passwords do not match.', 'error');
        return;
    }
    
    if (password.length < 8) {
        showMessage(messageDiv, 'Password must be at least 8 characters.', 'error');
        return;
    }
    
    try {
        const data = {
            email: email,
            emailVisibility: false,
            password: password,
            passwordConfirm: passwordConfirm,
            name: name,
            user_type: userType,
            profile_complete: false
        };
        
        const record = await pb.collection('users').create(data);
        
        showMessage(messageDiv, 'Account created successfully! Logging you in...', 'success');
        
        await pb.collection('users').authWithPassword(email, password);
        
        if (userType === 'freelancer') {
            await createFreelancerProfile(record.id, name, email);
        } else {
            await createClientProfile(record.id, name, email);
        }
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
        
    } catch (error) {
        console.error('Registration error:', error);
        let errorMessage = 'Registration failed. Please try again.';
        
        if (error.data?.data) {
            const errors = error.data.data;
            if (errors.email) {
                errorMessage = 'Email is already in use.';
            } else if (errors.password) {
                errorMessage = 'Password does not meet requirements.';
            }
        }
        
        showMessage(messageDiv, errorMessage, 'error');
    }
}

async function createFreelancerProfile(userId, name, email) {
    try {
        await pb.collection('experts').create({
            user: userId,
            name: name,
            email: email,
            status: 'pending',
            profile_public: false,
            work_for_mgeek: true,
            available_to_recruiters: false
        });
    } catch (error) {
        console.error('Error creating freelancer profile:', error);
    }
}

async function createClientProfile(userId, name, email) {
    try {
        await pb.collection('clients').create({
            user: userId,
            name: name,
            email: email
        });
    } catch (error) {
        console.error('Error creating client profile:', error);
    }
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
}
