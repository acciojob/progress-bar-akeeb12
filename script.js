//your JS code here. If required.
const circles = document.querySelectortAll(".circle");

const lines = document.querySelectorAll(".line");

const nextButton = document.querySelector("next");
const prevButton = document.querySelector("prev");

let currentActive = 1;

nextButton.addEventListener('click', () =>
	{
		currentActive++;	
	});

prevButton.addEventListener('click', () =>
	{
		currentActive--;	

	});
function updateUi() {
	circles.forEach((circle, idx) =>
		{
			idx < currentActive ? 
			circle.classList.add("active") :
				cicrcle.classList.remove("active");
		});
	lines.forEach((line, idx) =>
		{
			idx < currentActive -1 ?
				circle.classList.add("active") :
				line.classList.remove("active");
		});

	prevButton.disabled = currentActive === 1;
	nextButton.disabled = currentActive === circles.length;
}




