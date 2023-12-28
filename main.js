function checkInputValue(input) {
    if (input.value > 7) {
      input.value = 7;
      alert("TROP GRAND");
    } else if (input.value < -7) {
      input.value = -7;
      alert("trop petit");
    }
  }

  const carImage = document.querySelector('.move');
  const elbogossImages = document.querySelectorAll('.move-rotate, .move-rotate1');
  let posX = 0;
  let speedX = 0; // Vitesse initiale

  function moveElements() {
    posX += speedX;
    carImage.style.left = `${posX}px`;

    elbogossImages.forEach((elbogoss) => {
      elbogoss.style.transform = `translateX(${posX}px) rotate(${posX}deg)`;
    });

    const containerWidth = carImage.parentElement.offsetWidth;
    const carWidth = carImage.offsetWidth;

    if (posX > containerWidth) {
      posX = -carWidth; // Réinitialise la position à gauche lorsque la voiture sort du conteneur
    } else if (posX < -carWidth) {
      posX = containerWidth; // Si la voiture sort par la gauche, réapparaît à droite
    }

    requestAnimationFrame(moveElements);
  }

  moveElements();

  // Fonctions pour gérer les mouvements en fonction des boutons
  function moveForward() {
    speedX = 2;
  }

  function moveBackward() {
    speedX = -2;
  }

  function neutral() {
    speedX = 0;
  }
  document.addEventListener('keydown', function(event) {
if (event.key === 'ArrowLeft') {
  moveBackward();
} else if (event.key === 'ArrowRight') {
  moveForward();
} else if (event.key === 'ArrowDown') {
  neutral();
}
});

const speedInput = document.getElementById('speedInput');

speedInput.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
  const inputValue = parseFloat(speedInput.value);
  if (!isNaN(inputValue)) {
    speedX = inputValue;
    // Ici, vous pouvez ajouter d'autres manipulations en fonction du nombre entré
  }
}
});
const messageElement = document.getElementById('message');

function showMessage(message) {
  messageElement.textContent = message;
}

function hideMessage() {
  const messageElement = document.getElementById('message');
  messageElement.textContent = '';
}
var myAudio = document.getElementById('myAudio');
myAudio.addEventListener('pause', function() {
  stopToggle();
});

audioInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var blobURL = URL.createObjectURL(file);
  myAudio.src = blobURL;
  myAudio.load();
});
function loadAudioFromURL() {
  const audioURLInput = document.getElementById('audioURL');
  const audioPlayer = document.getElementById('myAudio');
  const audioURL = audioURLInput.value; // Récupère l'URL saisie par l'utilisateur

  // Met à jour la source audio si l'URL est valide
  if (audioURL) {
    audioPlayer.src = audioURL;
    audioPlayer.load(); // Charge le fichier audio
  }
}
function resetButton() {
  location.reload();
}
function changeImage() {
  const selectElement = document.getElementById("hand-select");
  const imageElement = document.querySelector(".move");
  const moveRotateElements = document.querySelectorAll(".move-rotate, .move-rotate1");

  if (selectElement.value === "conducteur") {
      imageElement.src = "conducteur.png";
      imageElement.style.display = "block";
      // Supprime les classes spécifiques si nécessaire
      moveRotateElements.forEach(element => {
          element.classList.remove("camion-specific", "camion-specific1");
      });
  } else if (selectElement.value === "isolant") {
      imageElement.src = "voiture.png";
      imageElement.style.display = "block";
      // Peut-être qu'il manque une action à réaliser ici ?
  } else if (selectElement.value === "camion") {
      moveRotateElements.forEach(element => {
          if (element.classList.contains("move-rotate")) {
              element.classList.add("camion-specific");
              element.classList.remove("camion-specific1");
          } else if (element.classList.contains("move-rotate1")) {
              element.classList.add("camion-specific1");
              element.classList.remove("camion-specific");
          }
      });
      if (imageElement) {
          imageElement.src = "camion.png";
          imageElement.style.display = "block";
      }
  } else {
      // Réinitialise les classes si aucune condition ne correspond
      moveRotateElements.forEach(element => {
          element.classList.remove("camion-specific", "camion-specific1");
      });
  }
}
const audio = document.getElementById('myAudio');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        toggleButton.textContent = 'Éteindre la radio';
    } else {
        audio.pause();
        toggleButton.textContent = 'Allumer la radio';
    }
});