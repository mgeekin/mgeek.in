const pb = new PocketBase('http://127.0.0.1:8090');

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (pb.authStore.isValid) {
        const user = pb.authStore.model;
        document.getElementById('name').value = user.name || '';
        document.getElementById('email').value = user.email || '';
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('contactMessage');
    const submitButton = e.target.querySelector('button[type="submit"]');
    
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';
    
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
    
    if (pb.authStore.isValid) {
        data.user = pb.authStore.model.id;
    }
    
    try {
        await pb.collection('leads').create(data);
        
        showMessage(messageDiv, 'Thank you! Your project enquiry has been received. The mGeek team will review the requirement and get back to you.', 'success');
        
        e.target.reset();
        
        submitButton.textContent = 'Submit Project Request';
        submitButton.disabled = false;
        
    } catch (error) {
        console.error('Error submitting contact form:', error);
        showMessage(messageDiv, 'Failed to submit your request. Please try again or contact us directly.', 'error');
        
        submitButton.textContent = 'Submit Project Request';
        submitButton.disabled = false;
    }
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    
    if (type === 'success') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
