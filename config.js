document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.profile');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const bars = document.querySelector('.bars');

    // Desktop: profile click
    if (profile) {
        profile.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Mobile: bars click
    if (bars) {
        bars.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Click outside closes menu
    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });
});
