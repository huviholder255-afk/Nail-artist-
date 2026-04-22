document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Save to localStorage (for demo purposes)
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString()
    });
    localStorage.setItem('messages', JSON.stringify(messages));
    
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});