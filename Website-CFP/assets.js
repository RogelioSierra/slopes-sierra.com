document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav ul li a');

    function updateHeaderColors() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop;
            let sectionHeight = section.clientHeight;
            let link = navItems.find(item => item.getAttribute('href') === `#${section.id}`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('header-animation');
                link.classList.add('active');

                // Change header background color based on the section
                const bgColor = getComputedStyle(section).backgroundColor;
                document.querySelector('header').style.backgroundColor = bgColor;

            } else {
                section.classList.remove('header-animation');
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateHeaderColors);
});