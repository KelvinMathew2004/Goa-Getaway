let button = document.getElementById("dark-mode");

let isDarkMode = false;
let isReduceMotion = false;
let rsvpCount = 3;
let sharedName = "John Doe";

const darkMode = () => {
    if (isDarkMode) {
        button.textContent = "Toggle Dark Mode"
        document.querySelector("body").style.color = "rgb(0, 0, 0)";
        document.querySelectorAll("nav ul li a").forEach(link => {
            link.style.color = "rgb(255, 255, 255)";

            link.addEventListener("mouseover", () => {
                link.style.color = rgb(188, 255, 188);
            });

            link.addEventListener("mouseout", () => {
                link.style.color = "rgb(255, 255, 255)";
            });
        });

        document.querySelectorAll("div ul li a").forEach(link => {
            link.style.color = "rgb(12, 0, 141)";

            link.addEventListener("mouseover", () => {
                link.style.color = "rgb(0, 78, 100)";
            });

            link.addEventListener("mouseout", () => {
                link.style.color = "rgb(12, 0, 141)";
            });
        });
            
        document.querySelector("html").style.backgroundColor = "rgb(223, 252, 223)";
        document.querySelector("header").style.backgroundColor = "rgb(85, 141, 0)";
        document.querySelectorAll(".intro").forEach(function(element) {
            element.style.backgroundColor = "rgb(188, 255, 188)";
        });
        document.querySelectorAll(".beaches").forEach(function(element) {
            element.style.backgroundColor = "rgb(188, 255, 188)";
        });
        document.querySelector(".rsvp-form").style.backgroundColor = "rgb(188, 255, 188)";
        document.querySelector("footer").style.backgroundColor = "rgb(66, 78, 47)";

        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = "rgb(85, 141, 0)";
        
            button.addEventListener('mouseover', function () {
                this.style.backgroundColor = "rgb(65, 110, 0)";
            });
        
            button.addEventListener('mouseout', function () {
                this.style.backgroundColor = "rgb(85, 141, 0)";
            });
        });

        document.querySelectorAll("li button").forEach(button => {
            button.style.backgroundColor = "green";
        
            button.addEventListener('mouseover', function () {
                this.style.backgroundColor = "rgb(98, 167, 0)";
            });
        
            button.addEventListener('mouseout', function () {
                this.style.backgroundColor = "green";
            });
        }); 
        
        document.getElementById("modal-content").style.backgroundColor = "rgb(188, 255, 188)";
        document.getElementById("modal-content").style.color = "rgb(0, 0, 0)";
    } else {
        button.textContent = "Toggle Light Mode"
        document.querySelector("body").style.color = "rgb(255, 255, 255)";
        document.querySelectorAll("nav ul li a").forEach(link => {
            link.style.color = "rgb(255, 255, 255)";

            link.addEventListener("mouseover", () => {
                link.style.color = "rgb(199, 255, 198)";
            });

            link.addEventListener("mouseout", () => {
                link.style.color = "rgb(255, 255, 255)";
            });
        });

        document.querySelectorAll("div ul li a").forEach(link => {
            link.style.color = "rgb(183, 185, 255)";

            link.addEventListener("mouseover", () => {
                link.style.color = "rgb(199, 255, 198)";
            });

            link.addEventListener("mouseout", () => {
                link.style.color = "rgb(183, 185, 255)";
            });
        });
            
        document.querySelector("html").style.backgroundColor = "rgb(68, 110, 68)";
        document.querySelector("header").style.backgroundColor = "rgb(51, 84, 51)";
        document.querySelector("#dark-mode").style.backgroundColor = "rgb(110, 186, 110)";
        document.querySelector("#reduce-motion").style.backgroundColor = "rgb(110, 186, 110)";
        document.querySelectorAll(".intro").forEach(function(element) {
            element.style.backgroundColor = "rgb(16, 67, 16)";
        });
        document.querySelectorAll(".beaches").forEach(function(element) {
            element.style.backgroundColor = "rgb(16, 67, 16)";
        });
        document.querySelector(".rsvp-form").style.backgroundColor = "rgb(16, 67, 16)";
        document.querySelector("footer").style.backgroundColor = "rgb(29, 40, 29)";

        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = "rgb(56, 115, 56)";
        
            button.addEventListener('mouseover', function () {
                this.style.backgroundColor = "rgb(72, 134, 72)";
            });
        
            button.addEventListener('mouseout', function () {
                this.style.backgroundColor = "rgb(56, 115, 56)";
            });
        });

        document.getElementById("modal-content").style.backgroundColor = "rgb(16, 67, 16)";
        document.getElementById("modal-content").style.color = "rgb(255, 255, 255)";
    }

    isDarkMode = !isDarkMode;
}

button.addEventListener("click", darkMode);

const form = document.getElementById('rsvp');

const printRSVP = (event) => {
    let elements = document.getElementById("rsvp").elements;
    let isValid = true;

    for (let i = 0; i < elements.length-1; i++) {
        if (elements[i].value === "") {
            alert(`Please fill out the ${elements[i].name} field`);
            elements[i].classList.remove("default");
            elements[i].classList.add("invalid");
            isValid = false;
        }
        else {
            elements[i].classList.remove("invalid");
            elements[i].classList.add("default");
        }
    }

    if(isValid) {
        let name = document.getElementById('name').value;
        let country = document.getElementById('country').value;
        let rawMonth = document.getElementById("month").value;  
        let date = new Date(rawMonth + "-15");
        let month = date.toLocaleString('default', { month: 'long' });
        sharedName = name;

        const output = document.querySelector('.output');

        const p = document.createElement("p");
        p.textContent = "🎉 " + name + " from " + country + " is ready for the trip in " + month + "!";
        p.style.marginTop = "19.19px";
        p.style.marginBottom = "19.19px";

        output.appendChild(p);

        rsvpCount++;

        let rsvpCountMessage = document.querySelector(".rsvp-message p");
        rsvpCountMessage.textContent = "🥳 " + rsvpCount + " people are ready for this trip!";
    
        console.log("🎉 " + name + " is ready for the trip!");

        modalPopup();

        setTimeout(() => {
            modalClose();
        }, 20000);
    }

    event.preventDefault();
}

form.addEventListener('submit', printRSVP);

const modalPopup = () => {
    let modal = document.getElementById("modal");

    modal.style.display = "flex";

    let message = document.getElementById("success-message");

    message.textContent = `Thank you ${sharedName} for your RSVP! We’re thrilled to have you join us on this amazing adventure. We’ll keep you updated with all the exciting plans, announcements, and travel details as we get closer to the big trip!`;
}

let closeButton = document.getElementById("close-modal");

const modalClose = () => {
    let modal = document.getElementById("modal");

    modal.style.display = "none";
}

closeButton.addEventListener("click", modalClose);

let motionButton = document.getElementById("reduce-motion");

const reduceMotion = () => {
    if(isReduceMotion){
        document.querySelector("#modal-right img").style.animation = "slideLoop 5s linear infinite";
        document.querySelector("#modal-right img").style.left = "-100%";
        document.querySelector("#modal-right img").src = "images/woman.gif";
        document.getElementById("reduce-motion").style.color = "white";
        document.getElementById("reduce-motion").textContent = "Reduce Motion";
    } else {
        document.querySelector("#modal-right img").style.animation = "none";
        document.querySelector("#modal-right img").style.left = "0";
        document.querySelector("#modal-right img").src = "images/couple.png";
        document.getElementById("reduce-motion").style.color = "rgb(181, 181, 181)";
        document.getElementById("reduce-motion").textContent = "Increase Motion";
    }

    console.log("Reduce motion is " + (isReduceMotion ? "enabled" : "disabled"));

    isReduceMotion = !isReduceMotion;
}

motionButton.addEventListener("click", reduceMotion);

const fadeInElements = document.querySelectorAll('.fade-in-element');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Optional: only fade in once
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(el => {
    observer.observe(el);
});