const inputs = document.querySelectorAll("input");
const messageInput = document.getElementById("message");
const errorMessages = document.querySelectorAll(".error-message");
const successMessage = document.querySelector(".success");
let checks = 0;



document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	clearMessages();
	checkInputValidity();
	checkEmailValidity();
	checkMessageValidity();
	if (checks === 5) {
		successMessage.classList.add("successful");
		document.querySelector("form").reset();
		checks = 0;
	}
});


function checkInputValidity() {
	inputs.forEach((input) => {
		if (input.value.trim() === "") {
			const error = document.getElementById(`error-${input.id}`);
			error.classList.add("error");
		} else {
			checks += 1;
		}
	});
}


function checkEmailValidity() {
	const email = document.getElementById("email");
	if (!email.value.includes("@") || email.value.trim() === "") {
		document.getElementById("error-email").classList.add("error");
	} else {
		checks += 1;
	}
}


function checkMessageValidity() {
	if (messageInput.value.length < 9) {
		document.getElementById("error-message").classList.add("error");
	} else {
		checks += 1;
	}
}


function clearMessages() {
	checks = 0;
	errorMessages.forEach((error) => {
		error.classList.remove("error");
	});
	successMessage.classList.remove("successful");
}
