function showActiveLink(menu) {
    const pageUrl = document.location.href;
    const links = document.getElementById('menu').querySelectorAll('a');
    for (const link of links) {
        if (link.href === pageUrl) {
            link.classList.add('active')
        }
    }
}

showActiveLink('menu');