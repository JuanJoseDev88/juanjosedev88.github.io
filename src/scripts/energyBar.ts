// Energy bar animation based on scroll
export function updateEnergyBar() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    const energyFill = document.getElementById('energyFill');
    if (energyFill) {
        energyFill.style.height = scrollPercentage + '%';
    }
}
