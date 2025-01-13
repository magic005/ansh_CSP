/* observe if element (class lower_content in this case) in viewport */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show_lower_content');
        }
    })
});




const lowerContent = document.querySelectorAll('.lower_content');

lowerContent.forEach((el) => observer.observe(el));
