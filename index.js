function changeColor(sectionId) {
    const section = document.getElementById(sectionId);
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6'];
    const randomColor = colors[Math.floor (Math.random() * colors.length)];
    section.style.backgroundColor = randomColor;
}