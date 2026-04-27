const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in globalThis) {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.14 }
    );

    revealItems.forEach((item) => io.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('in'));
}

const profileImage = document.querySelector('.profile-image');
const profileFallback = document.querySelector('.profile-fallback');

if (profileImage && profileFallback) {
    profileImage.addEventListener('error', () => {
        profileImage.style.display = 'none';
        profileFallback.style.display = 'flex';
    });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const subject = encodeURIComponent(`Portfolio message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

        globalThis.location.href = `mailto:deshanrashmika002@gmail.com?subject=${subject}&body=${body}`;
    });
}
