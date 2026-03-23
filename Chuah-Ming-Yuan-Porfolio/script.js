document.addEventListener('DOMContentLoaded', () => {
    const text = "ls technical_interests/ --all";
    const element = document.getElementById('typed-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    
    if (element) {
        element.innerHTML = ""; 
        typeWriter();
    }
});