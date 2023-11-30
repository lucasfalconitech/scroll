document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '▲';
    scrollToTopButton.id = 'scrollTopButton';
    document.body.appendChild(scrollToTopButton);

    const style = document.createElement('style');
    style.textContent = `
  #scrollTopButton {
    position: fixed;
    top: 0;
    right: 22px;
    display: none;
    background: rgba(0, 47, 94, 0.6);
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
    transition: opacity 0.3s, transform 0.4s;
    z-index: 9999;
  }
  #scrollTopButton:hover {
    background: rgba(0, 22, 44, 0.8); 
  }
`;
    document.head.appendChild(style);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = 'flex';
            scrollToTopButton.style.opacity = 1;
            scrollToTopButton.style.transform = 'scale(1)';
        } else {
            scrollToTopButton.style.opacity = 0;
            scrollToTopButton.style.transform = 'scale(0)';
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        scrollToTop();
    });


    function scrollToTop() {
        const scrollStep = -window.scrollY / (500 / 15);
        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
});