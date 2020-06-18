class Slider {
	constructor(gauche, droite, images) {
		this.gauche = document.getElementById("boutongauche");
		this.droite = document.getElementById("boutondroite");
		this.images = document.querySelectorAll(".photos_slider");

	    this.imageList = [];
		this.currentSlide = 0; 
	};

	previousSlide(){
		this.currentSlide--
	};

	nextSlide(){
		this.currentSlide = this.currentSlide+1
	};

	touchSlide(e) { 
		if (e.key === "ArrowLeft") {
		this.previousSlide();
		} else if (e.key === "ArrowRight") {
		this.nextSlide();
		}
	};

	clickEvent() { 
		this.droite.addEventListener("click", this.nextSlide.bind(this));  
		this.gauche.addEventListener("click", this.previousSlide.bind(this));
	};
};