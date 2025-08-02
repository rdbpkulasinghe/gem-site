const gems = [
  {
    id: 1,
    name: "Burmese Ruby",
    type: "ruby",
    color: "Pigeon Blood Red",
    image: "images/IMG_2126.png",
  },
  {
    id: 2,
    name: "Ceylon Sapphire",
    type: "sapphire",
    color: "Royal Blue",
    image: "images/IMG_2128.png",
  },
  {
    id: 3,
    name: "Colombian Emerald",
    type: "emerald",
    color: "Deep Green",
    image: "images/IMG_2131.png",
  },
  {
    id: 4,
    name: "Tanzanite",
    type: "other",
    color: "Violet-Blue",
    image: "images/IMG_2142.png",
  },
  {
    id: 5,
    name: "Burmese Ruby",
    type: "ruby",
    color: "Pigeon Blood Red",
    image: "images/IMG_2145.png",
  },
  {
    id: 6,
    name: "Ceylon Sapphire",
    type: "sapphire",
    color: "Royal Blue",
    image: "images/IMG_2151.png",
  },
  {
    id: 7,
    name: "Colombian Emerald",
    type: "emerald",
    color: "Deep Green",
    image: "images/IMG_2160.png",
  },
  {
    id: 8,
    name: "Tanzanite",
    type: "other",
    color: "Violet-Blue",
    image: "images/IMG_2163.png",
  },
  {
    id: 9,
    name: "Tanzanite",
    type: "other",
    color: "Violet-Blue",
    image: "images/IMG_2167.png",
  },
];

function displayFeaturedGems() {
  const featuredContainer = document.getElementById("featured-gems");
  featuredContainer.innerHTML = "";

  gems.slice(0, 3).forEach((gem) => {
    featuredContainer.innerHTML += `
            <div class="gem-card">
                <div class="gem-image">
                    <img src="${gem.image}" alt="${gem.name}">
                </div>
                <div class="gem-info">
                    <h3 class="gem-name">${gem.name}</h3>
                    <div class="gem-specs">
                        <span>Color: ${gem.color}</span>
                    </div>
                </div>
            </div>
        `;
  });
  setupLazyLoading(); 
}

function displayAllGems(filter = "all") {
  const allGemsContainer = document.getElementById("all-gems");
  allGemsContainer.innerHTML = "";

  gems.forEach((gem) => {
    if (filter === "all" || gem.type === filter) {
      allGemsContainer.innerHTML += `
                <div class="gem-card">
                    <div class="gem-image">
                        <img src="${gem.image}" alt="${gem.name}">
                    </div>
                    <div class="gem-info">
                        <h3 class="gem-name">${gem.name}</h3>
                        <div class="gem-specs">
                            <span>Color: ${gem.color}</span>
                        </div>
                        <a href="https://wa.me/94778101999?text=Hi,%20I'm%20interested%20in%20your%20${encodeURIComponent(
                          gem.name
                        )}%20${gem.color})" 
                           class="btn whatsapp-btn" 
                           target="_blank">
                           <i class="fab fa-whatsapp"></i> Inquire on WhatsApp
                        </a>
                    </div>
                </div>
         `;
        }
  });
  setupLazyLoading(); 
}

function setupLazyLoading() {
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    displayAllGems(filter);
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
  e.target.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  displayFeaturedGems();
  displayAllGems();
});
