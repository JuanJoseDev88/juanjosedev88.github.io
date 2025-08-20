export function initializeCarousel() {
	const track = document.getElementById("carousel-track");
	const prevBtn = document.getElementById("prev-btn");
	const nextBtn = document.getElementById("next-btn");
	const indicators = document.querySelectorAll(".indicator");
	const cards = document.querySelectorAll(".project-card");

	// Exit early if essential elements are missing
	if (!track || !prevBtn || !nextBtn || cards.length === 0) {
		return;
	}

	let currentIndex = 0;
	const totalCards = cards.length;

	function updateCarousel() {
		const translateX = -currentIndex * 100;
		track!.style.transform = `translateX(${translateX}%)`;

		// Update indicators
		indicators.forEach((indicator, index) => {
			indicator.classList.toggle("active", index === currentIndex);
		});
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % totalCards;
		updateCarousel();
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + totalCards) % totalCards;
		updateCarousel();
	}

	function goToSlide(index: number) {
		currentIndex = index;
		updateCarousel();
	}

	// Event listeners
	prevBtn.addEventListener("click", prevSlide);
	nextBtn.addEventListener("click", nextSlide);

	indicators.forEach((indicator, index) => {
		indicator.addEventListener("click", () => goToSlide(index));
	});

	// Auto-play (optional)
	let autoPlayInterval = setInterval(nextSlide, 5000);

	// Pause auto-play on hover
	const container = document.querySelector(".carousel-container");
	if (container) {
		container.addEventListener("mouseenter", () => {
			clearInterval(autoPlayInterval);
		});

		container.addEventListener("mouseleave", () => {
			autoPlayInterval = setInterval(nextSlide, 5000);
		});
	}

	// Keyboard navigation
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowLeft") prevSlide();
		if (e.key === "ArrowRight") nextSlide();
	});
}