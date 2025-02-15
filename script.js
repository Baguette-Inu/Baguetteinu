
document.addEventListener("DOMContentLoaded", function () {

  // --- MEMES PAR VILLE ---
  const cityMemes = {
    paris: [
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/LANDING.webp", description: "Shibaguette Inu lands in Paris, greeted by the breathtaking view of the Eiffel Tower. A new journey begins!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/aeroportdeparis.webp", description: "Arriving at the airport, ready to explore the wonders of Paris." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/subway.webp", description: "Navigating the bustling Paris Metro, feeling the pulse of the city." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/shopping.webp", description: "Exploring the high-end boutiques and vibrant shopping streets of Paris." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/AQUARIUM.webp", description: "Diving into the mysteries of the sea at the Paris Aquarium." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/shibaguettecoffeeparis.webp", description: "Enjoying a warm café au lait in a charming Parisian café." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/LADEFENSE.webp", description: "Standing in the heart of La Défense, admiring the modern skyline." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/asterix.webp", description: "Having fun at Parc Astérix, embracing the Gaulish adventure." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/disney.webp", description: "Experiencing the magic of Disneyland Paris, a childhood dream come true!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/baguetteinthemouth.webp", description: "Tasting the most authentic and crispy baguette in Paris." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/bench.webp", description: "Relaxing on a bench in a peaceful Parisian park, taking in the beauty." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/catacombe1.webp", description: "Exploring the dark and historic Catacombs of Paris." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/champeelysee.webp", description: "Walking down the famous Champs-Élysées, surrounded by luxury and lights." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/croisiererealistic.webp", description: "Sailing on the Seine River, enjoying a mesmerizing view of Paris." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/dinercouchersol.webp", description: "Enjoying a dinner at sunset, with the city lights creating a magical moment." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/fashionweek.webp", description: "Experiencing the glamour of Paris Fashion Week, where style meets culture." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/library.webp", description: "Spending time in one of Paris’ historic libraries, surrounded by knowledge." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/livreurbaguette.webp", description: "Delivering the freshest baguettes straight from the best Parisian bakeries!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/louvres.webp", description: "Admiring the art at the Louvre, standing before the Mona Lisa." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/macaron.webp", description: "Savoring colorful and delicious French macarons from Ladurée." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/manegeeiffeltower.webp", description: "Riding a traditional carousel near the Eiffel Tower, feeling the nostalgia." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/moulinrouge.webp", description: "Visiting the legendary Moulin Rouge, the birthplace of the French can-can." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/musician.webp", description: "Enjoying street musicians playing soulful melodies in Montmartre." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/nightlife.webp", description: "Exploring the vibrant Parisian nightlife, full of energy and excitement." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/peintrefriend.webp", description: "Meeting local artists painting breathtaking views of the city." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/piquenique.webp", description: "Having a classic Parisian picnic with baguettes, cheese, and wine." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/pont.webp", description: "Crossing a historic Parisian bridge, with love locks in sight." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/relax.webp", description: "Taking a well-deserved rest after a long day of Parisian adventures." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/shibacuistot.webp", description: "Trying out French cuisine as a chef in a top Parisian restaurant!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/shibapeintre.webp", description: "Painting the beauty of Paris like a true French artist." },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/standingbaguette.webp", description: "Standing proud with a fresh baguette, symbolizing the Parisian experience!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/boshibaguette.webp", description: "Shibaguette Inu takes on the city in a stylish bohemian outfit!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/boshibaguettecasinogain.webp", description: "Shibaguette Inu hits the jackpot at a Parisian casino! " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/shibaguettemooning.webp", description: "A baguette-powered spacecraft? Only in the world of Shibaguette Inu! " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/baguettetothemoon.webp", description: "Taking baguettes to the moon, one step closer to the ultimate crypto dream!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/standingonthemoonwithbaguetteonthehand.webp", description: "One small step for Inu, one giant leap for baguettes! " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/plantingbaguetteonthemoon.webp", description: "The first ever baguette planted on the moon – a historic moment! " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/Backtoearth.webp", description: "Back to paris... a success tastes better when shared ! "  },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/1meeting1.webp", description: "What A first encounter in the heart of Paris.Shibaguette Inu probably meets his Shibelle Inu, she's maybe the one ! " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/2dinerauchandelle.webp", description: "A candlelit dinner with breathtaking views of the Eiffel Tower. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/3WALKINGTOGETHER.webp", description: "A romantic stroll through the charming streets of Paris. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/4walkromanticmontmartre.webp", description: "Walking hand in hand through the artistic Montmartre district. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/5BENCHLOVE.webp", description: "Sharing a quiet moment together on a bench, overlooking the Seine. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/6REGARDINTIME.webp", description: "Lost in each other’s eyes, in the most romantic city in the world. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/8RENCARD.webp", description: "A classic Parisian date, full of charm and elegance. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/9diner.webp", description: "Indulging in a gourmet Parisian dinner at a rooftop restaurant. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/10soir%C3%A9e.webp", description: "A magical Parisian evening, illuminated by city lights. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/11demande.webp", description: "A romantic proposal with the Eiffel Tower as the perfect backdrop!" },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/12eglise.webp", description: "Shibaguette & Shibelle Inu are now Maried,A beautiful wedding ceremony in a historic Parisian church. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/13gondole.webp", description: "Sailing through the Parisian canals like a Venetian dream. " },
        { url: "https://raw.githubusercontent.com/Baguette-Inu/Baguette-inu/refs/heads/main/14honeymoondepart.webp", description: "Setting off for a dreamy honeymoon after the perfect Parisian wedding. " }, 
    ],
    lyon: [],
    marseille: [],
    nice: [],
    toulouse: [],
    bordeaux: []
  };

  let currentCity = "";
  let currentIndex = 0;

  // --- FONCTION POUR AFFICHER LA GALERIE ---
  function showGallery(city) {
    const memes = cityMemes[city];
    currentCity = city;

    const galleryModal = document.getElementById("gallery-modal");
    const galleryImage = document.getElementById("gallery-image");
    const galleryDescription = document.getElementById("gallery-description");
    const galleryMessage = document.getElementById("gallery-message");

    if (!memes || memes.length === 0) {
      galleryImage.style.display = 'none';
      galleryDescription.style.display = 'none';
      galleryMessage.style.display = 'block';
      galleryMessage.textContent = '🚧 Stay Tuned: This journey starts soon!';
      galleryModal.style.display = 'flex';
      return;
    }

    currentIndex = 0;
    galleryMessage.style.display = 'none';
    galleryImage.style.display = 'block';
    galleryDescription.style.display = 'block';
    updateGalleryImage();
    galleryModal.style.display = 'flex';
  }

  // --- MISE À JOUR DES IMAGES DANS LA GALERIE ---
  function updateGalleryImage() {
    const memes = cityMemes[currentCity];
    if (memes.length > 0) {
      const galleryImage = document.getElementById("gallery-image");
      galleryImage.src = memes[currentIndex].url;
      galleryImage.onload = () => {
        document.getElementById("gallery-description").textContent = memes[currentIndex].description;
      };
    }
  }

  // --- NAVIGATION DANS LA GALERIE ---
  document.getElementById("prev-btn").addEventListener("click", function () {
    const memes = cityMemes[currentCity];
    if (memes.length > 0) {
      currentIndex = (currentIndex - 1 + memes.length) % memes.length;
      updateGalleryImage();
    }
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    const memes = cityMemes[currentCity];
    if (memes.length > 0) {
      currentIndex = (currentIndex + 1) % memes.length;
      updateGalleryImage();
    }
  });

  // --- FERMER LA GALERIE ---
  document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("gallery-modal").style.display = "none";
  });

  // --- AJOUT DES ÉVÉNEMENTS AUX BAGUETTES ---
  document.querySelectorAll(".flag").forEach((flag) => {
    flag.addEventListener("click", function () {
      const city = this.getAttribute("onclick").match(/'([^']+)'/)[1]; 
      showGallery(city);
    });
  });

  // --- SCROLL TO TOP ---
  const scrollToTopButton = document.getElementById('scrollToTop');
  window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- MENU BURGER (Correction complète) ---
  const burgerToggle = document.getElementById('burger-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (burgerToggle && mobileNav) {
    burgerToggle.addEventListener("click", () => {
      if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
      } else {
        mobileNav.style.display = "block";
      }
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener("click", (event) => {
      if (!burgerToggle.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.style.display = "none";
      }
    });
  }

  // --- FORMULAIRE NEWSLETTER (Ajout du message Welcome) ---
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterInput = document.getElementById("newsletter-email");
  const newsletterMessage = document.createElement("p");

  newsletterMessage.style.color = "green";
  newsletterMessage.style.fontWeight = "bold";
  newsletterMessage.style.marginTop = "10px";

  newsletterForm.appendChild(newsletterMessage);

  newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission normale

    if (newsletterInput.value.trim() !== "") {
      newsletterMessage.textContent = "✅ Welcome To The Journey !";
      newsletterInput.value = ""; // Réinitialise le champ après soumission
    }
  });

});

document.querySelectorAll(".flag").forEach((flag) => {
  flag.addEventListener("click", function (event) {
    createParticles(event.pageX, event.pageY);
  });
});

function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    document.body.appendChild(particle);
    
    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;

    setTimeout(() => {
      particle.remove();
    }, 500);
  }
 
}

document.addEventListener("DOMContentLoaded", function () {
  const burgerToggle = document.getElementById("burger-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (burgerToggle && mobileNav) {
    burgerToggle.addEventListener("click", () => {
      // Vérifier si le menu est déjà ouvert
      if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
      } else {
        mobileNav.style.display = "block";
      }

      // Ajoute une classe pour animation fluide
      mobileNav.classList.toggle("active");
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener("click", (event) => {
      if (!burgerToggle.contains(event.target) && !mobileNav.contains(event.target)) {
        mobileNav.classList.remove("active");
        mobileNav.style.display = "none";
      }
    });
  }
});


