document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    const toggleButtons = document.querySelectorAll('.toggle-news');
    toggleButtons.forEach(button => {
        const content = button.parentElement.nextElementSibling;
        content.classList.add('active');
        button.textContent = '-';
        
        button.addEventListener('click', function () {
            const content = this.parentElement.nextElementSibling;
            content.classList.toggle('active');
            this.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });

    const form = document.getElementById('volunteer-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            email: document.getElementById('email').value,
            name: document.getElementById('name').value,
            contact: document.getElementById('contact').value,
            message: document.getElementById('message').value
        };

        fetch('https://fake-contact-endpoint.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                alert('Formulário enviado com sucesso!');
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Erro ao enviar!');
                form.reset();
            });
    });
});
