const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzf7UV6U1xzJl0dwaBnpduHhnlfgK04MxKzHasFhJ0SVH2irKzLoqfFV99v6VQbNoP8Fg/exec";

const places = [
  {
    id: 1,
    name: "Blue Hour Espresso",
    category: "Coffee",
    neighborhood: "RiNo",
    vibe_score: 94,
    trend_score: 89,
    description: "Moody morning coffee spot with late-day laptop energy and a clean industrial feel.",
    best_for: "Solo coffee runs and casual work sessions",
    why_it_hits: "Strong espresso, easy walkability, and a room that feels buzzy without getting loud.",
    tags: ["espresso", "remote work", "industrial", "morning"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/blue-hour-espresso",
    map_url: "https://maps.google.com/?q=RiNo+Denver"
  },
  {
    id: 2,
    name: "Mile High Foam",
    category: "Brewery",
    neighborhood: "LoHi",
    vibe_score: 91,
    trend_score: 92,
    description: "A social brewery hang with rooftop views, playful pours, and weekend momentum.",
    best_for: "Group hangs and first-stop brewery crawls",
    why_it_hits: "The crowd feels upbeat, the patio turns fast, and it works for both locals and visitors.",
    tags: ["rooftop", "beer flights", "group-friendly", "sunset"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/mile-high-foam",
    map_url: "https://maps.google.com/?q=LoHi+Denver"
  },
  {
    id: 3,
    name: "Stacked Signal",
    category: "Burgers",
    neighborhood: "Capitol Hill",
    vibe_score: 90,
    trend_score: 84,
    description: "Low-light burger counter with a punchy menu and just enough chaos to feel fun.",
    best_for: "Late bites and casual pre-concert food",
    why_it_hits: "Fast service, stacked burgers, and the kind of energy that feels easy on a busy night.",
    tags: ["late night", "burgers", "casual", "music crowd"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Capitol+Hill+Denver"
  },
  {
    id: 4,
    name: "Velvet Ember Steak",
    category: "Steakhouses",
    neighborhood: "Cherry Creek",
    vibe_score: 93,
    trend_score: 79,
    description: "A polished steakhouse mock pick with rich lighting, booth seating, and a night-out mood.",
    best_for: "Big dinners and upscale date nights",
    why_it_hits: "Feels elevated without going stiff, and the room carries that special-occasion confidence.",
    tags: ["upscale", "cocktails", "dinner", "celebration"],
    local_pick: false,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/velvet-ember-steak",
    map_url: "https://maps.google.com/?q=Cherry+Creek+Denver"
  },
  {
    id: 5,
    name: "Juniper Afterglow",
    category: "Date Night",
    neighborhood: "Wash Park",
    vibe_score: 95,
    trend_score: 87,
    description: "Warm lighting, great pacing, and the kind of room that makes conversation feel easy.",
    best_for: "Intentional date nights and celebratory dinners",
    why_it_hits: "Balanced menu, intimate sound level, and a polished mood without trying too hard.",
    tags: ["romantic", "wine", "conversation", "cozy"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Washington+Park+Denver"
  },
  {
    id: 6,
    name: "Skyline Sips Patio",
    category: "Patios",
    neighborhood: "Union Station",
    vibe_score: 92,
    trend_score: 90,
    description: "People-watching patio with a social pulse and quick access to downtown movement.",
    best_for: "Day drinks, catching friends, and showing visitors a lively corner of town",
    why_it_hits: "Sunny placement, strong foot traffic, and a vibe that turns from relaxed to festive fast.",
    tags: ["patio", "day drinking", "downtown", "people watching"],
    local_pick: false,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/skyline-sips-patio",
    map_url: "https://maps.google.com/?q=Union+Station+Denver"
  },
  {
    id: 7,
    name: "Pedal Ritual",
    category: "Bike Shops",
    neighborhood: "Baker",
    vibe_score: 88,
    trend_score: 75,
    description: "Neighborhood bike shop with serious tune-up trust and a friendly, no-pressure floor.",
    best_for: "Commuter upgrades and last-minute weekend ride prep",
    why_it_hits: "Feels local, knowledgeable, and grounded in the Denver bike scene.",
    tags: ["cycling", "repairs", "gear", "commuter"],
    local_pick: true,
    visitor_friendly: false,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Baker+Denver"
  },
  {
    id: 8,
    name: "Front Range Fairways",
    category: "Golf",
    neighborhood: "South Denver",
    vibe_score: 86,
    trend_score: 71,
    description: "Mock golf pick with a laid-back clubhouse feel and enough polish for an easy outing.",
    best_for: "Afternoon rounds and visitor-friendly golf plans",
    why_it_hits: "Accessible energy, forgiving pace, and a simple social payoff after the round.",
    tags: ["golf", "afternoon", "clubhouse", "outdoors"],
    local_pick: false,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=South+Denver+golf"
  },
  {
    id: 9,
    name: "Lantern & Co.",
    category: "Trending",
    neighborhood: "RiNo",
    vibe_score: 93,
    trend_score: 95,
    description: "A buzzy all-day spot mockup that keeps showing up in group chats and weekend plans.",
    best_for: "Trying something that feels current without losing local edge",
    why_it_hits: "Strong social proof, flexible timing, and a look that photographs well without needing photos here.",
    tags: ["trending", "all day", "social", "group chat"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/lantern-and-co",
    map_url: "https://maps.google.com/?q=RiNo+Denver+Lantern"
  },
  {
    id: 10,
    name: "Cedar Stereo Cafe",
    category: "Coffee",
    neighborhood: "Highland",
    vibe_score: 89,
    trend_score: 82,
    description: "Record-forward coffee bar with soft lighting and a slower weekend pace.",
    best_for: "Meetups, journaling, and easy mornings",
    why_it_hits: "The room feels curated and calm, making it an easy default pick.",
    tags: ["vinyl", "weekend", "cozy", "meetups"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Highland+Denver"
  },
  {
    id: 11,
    name: "Peak Pour House",
    category: "Brewery",
    neighborhood: "Five Points",
    vibe_score: 87,
    trend_score: 80,
    description: "Community-first brewery with easy seating, local food popups, and low-pretense fun.",
    best_for: "After-work beers and neighborhood hangs",
    why_it_hits: "Friendly flow, steady local support, and a dependable social floor.",
    tags: ["after work", "community", "beer", "casual"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Five+Points+Denver"
  },
  {
    id: 12,
    name: "Torch Burger Club",
    category: "Burgers",
    neighborhood: "LoDo",
    vibe_score: 88,
    trend_score: 85,
    description: "Fast-moving burger spot with strong downtown access and a social pregame feel.",
    best_for: "Visitors, game-day bites, and group-friendly meals",
    why_it_hits: "Simple menu, lively crowd, and a location that makes city plans easy.",
    tags: ["pregame", "downtown", "quick bite", "group-friendly"],
    local_pick: false,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/torch-burger-club",
    map_url: "https://maps.google.com/?q=LoDo+Denver"
  },
  {
    id: 13,
    name: "Oak & Alloy",
    category: "Steakhouses",
    neighborhood: "Downtown",
    vibe_score: 90,
    trend_score: 83,
    description: "Modern steak dinner mock pick with a business-meets-nightlife edge.",
    best_for: "Client dinners and elevated visitor nights",
    why_it_hits: "Big-room confidence, polished service, and a menu built for ordering rounds.",
    tags: ["business dinner", "cocktails", "night out", "polished"],
    local_pick: false,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Downtown+Denver+steakhouse"
  },
  {
    id: 14,
    name: "Moonlit Table",
    category: "Date Night",
    neighborhood: "Platt Park",
    vibe_score: 92,
    trend_score: 78,
    description: "Neighborhood dinner spot with a softer pace, warm design, and easy charm.",
    best_for: "Local date nights and slower dinners",
    why_it_hits: "Comfortable mood, thoughtful plating, and no pressure to rush out.",
    tags: ["intimate", "slow dinner", "neighborhood", "warm"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Platt+Park+Denver"
  },
  {
    id: 15,
    name: "Sunset Quarter Patio",
    category: "Patios",
    neighborhood: "Berkeley",
    vibe_score: 91,
    trend_score: 86,
    description: "Golden-hour patio mock pick with neighborhood energy and a mellow social rhythm.",
    best_for: "Happy hour and catching up outside",
    why_it_hits: "Strong sunset mood, easy seating, and enough local regulars to feel grounded.",
    tags: ["happy hour", "sunset", "neighborhood", "outdoor"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Berkeley+Denver"
  },
  {
    id: 16,
    name: "Switchback Cycle Co.",
    category: "Bike Shops",
    neighborhood: "City Park",
    vibe_score: 84,
    trend_score: 74,
    description: "Friendly bike stop with rental-friendly energy and approachable gear advice.",
    best_for: "Visitors, trail-curious riders, and grab-and-go cycling basics",
    why_it_hits: "Less intimidating than a race-focused shop and easy to understand for newcomers.",
    tags: ["rentals", "beginner-friendly", "cycling", "gear"],
    local_pick: false,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=City+Park+Denver+bike+shop"
  },
  {
    id: 17,
    name: "Altitude Nine",
    category: "Golf",
    neighborhood: "Aurora Edge",
    vibe_score: 85,
    trend_score: 77,
    description: "Mock golf destination with a more social tone than a traditional country-club vibe.",
    best_for: "Casual rounds, work outings, and relaxed golf plans",
    why_it_hits: "Approachable energy and a good fit for mixed-skill groups.",
    tags: ["social golf", "casual", "groups", "day plan"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "",
    map_url: "https://maps.google.com/?q=Aurora+Denver+golf"
  },
  {
    id: 18,
    name: "Current Theory",
    category: "Trending",
    neighborhood: "Santa Fe Arts District",
    vibe_score: 94,
    trend_score: 96,
    description: "A creative-night-out mock spot that feels new, flexible, and talkworthy.",
    best_for: "Trying something fresh with friends or out-of-town guests",
    why_it_hits: "It has novelty, social pull, and a neighborhood context that feels distinctly Denver.",
    tags: ["arts district", "fresh", "night out", "buzz"],
    local_pick: true,
    visitor_friendly: true,
    image_url: "",
    website_url: "https://example.com/current-theory",
    map_url: "https://maps.google.com/?q=Santa+Fe+Arts+District+Denver"
  }
];

const interests = [
  "Coffee",
  "Breweries",
  "Food",
  "Golf",
  "Biking",
  "Date Night",
  "Patios",
  "Trending"
];

const state = {
  currentView: "home",
  selectedCategory: "All",
  audience: "all",
  searchTerm: "",
  sortBy: "vibe"
};

let deferredPrompt = null;

const elements = {
  views: document.querySelectorAll(".view"),
  navItems: document.querySelectorAll(".nav-item"),
  routeButtons: document.querySelectorAll("[data-route]"),
  scrollButtons: document.querySelectorAll("[data-scroll-target]"),
  installButton: document.getElementById("installButton"),
  placeCount: document.getElementById("placeCount"),
  homeCategoryChips: document.getElementById("homeCategoryChips"),
  exploreCategoryChips: document.getElementById("exploreCategoryChips"),
  trendingList: document.getElementById("trendingList"),
  featuredList: document.getElementById("featuredList"),
  nearYouPills: document.getElementById("nearYouPills"),
  searchInput: document.getElementById("searchInput"),
  audienceFilter: document.getElementById("audienceFilter"),
  sortFilter: document.getElementById("sortFilter"),
  clearCategoryButton: document.getElementById("clearCategoryButton"),
  resultsTitle: document.getElementById("resultsTitle"),
  resultsCount: document.getElementById("resultsCount"),
  exploreList: document.getElementById("exploreList"),
  emptyState: document.getElementById("emptyState"),
  interestOptions: document.getElementById("interestOptions"),
  alertsForm: document.getElementById("alertsForm"),
  emailInput: document.getElementById("emailInput"),
  audienceTypeInput: document.getElementById("audienceTypeInput"),
  formFeedback: document.getElementById("formFeedback")
};

const categories = ["All", ...new Set(places.map((place) => place.category))];

function init() {
  elements.placeCount.textContent = String(places.length);
  buildCategoryChips();
  buildInterestOptions();
  bindEvents();
  renderHome();
  renderExplore();
  routeTo(window.location.hash.replace("#", "") || "home", false);
  registerServiceWorker();
}

function bindEvents() {
  elements.navItems.forEach((button) => {
    button.addEventListener("click", () => routeTo(button.dataset.route));
  });

  elements.routeButtons.forEach((button) => {
    button.addEventListener("click", () => routeTo(button.dataset.route));
  });

  elements.scrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  elements.searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    renderExplore();
  });

  elements.audienceFilter.addEventListener("change", (event) => {
    state.audience = event.target.value;
    renderHome();
    renderExplore();
  });

  elements.sortFilter.addEventListener("change", (event) => {
    state.sortBy = event.target.value;
    renderExplore();
  });

  elements.clearCategoryButton.addEventListener("click", () => {
    state.selectedCategory = "All";
    syncCategoryChips();
    renderExplore();
  });

  elements.alertsForm.addEventListener("submit", handleAlertsSubmit);

  window.addEventListener("hashchange", () => {
    routeTo(window.location.hash.replace("#", "") || "home", false);
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    elements.installButton.hidden = false;
  });

  elements.installButton.addEventListener("click", async () => {
    if (!deferredPrompt) {
      return;
    }

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    elements.installButton.hidden = true;
  });
}

function buildCategoryChips() {
  elements.homeCategoryChips.innerHTML = categories
    .filter((category) => category !== "All")
    .map(
      (category) =>
        `<button class="chip" type="button" data-home-category="${category}">${category}</button>`
    )
    .join("");

  elements.exploreCategoryChips.innerHTML = categories
    .map(
      (category) =>
        `<button class="chip ${category === "All" ? "is-active" : ""}" type="button" data-category="${category}">${category}</button>`
    )
    .join("");

  document.querySelectorAll("[data-home-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.homeCategory;
      syncCategoryChips();
      routeTo("explore");
      renderExplore();
    });
  });

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedCategory = button.dataset.category;
      syncCategoryChips();
      renderExplore();
    });
  });
}

function syncCategoryChips() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === state.selectedCategory);
  });
}

function buildInterestOptions() {
  elements.interestOptions.innerHTML = interests
    .map(
      (interest) => `
        <label class="checkbox-chip">
          <input type="checkbox" name="interests" value="${interest}" />
          <span>${interest}</span>
        </label>
      `
    )
    .join("");
}

function routeTo(viewName, updateHash = true) {
  const nextView = ["home", "explore", "alerts"].includes(viewName) ? viewName : "home";
  state.currentView = nextView;

  elements.views.forEach((view) => {
    const isActive = view.dataset.view === nextView;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });

  elements.navItems.forEach((button) => {
    const isActive = button.dataset.route === nextView;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  if (updateHash) {
    window.location.hash = nextView;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHome() {
  // Home recommendations respond to the current audience selection so the app feels personal even before geolocation exists.
  const trendingPlaces = sortPlaces([...applyAudienceFilter(places)], "trending").slice(0, 4);
  const featuredPlaces = sortPlaces([...applyAudienceFilter(places)], "vibe").slice(0, 4);
  const nearYouPlaces = featuredPlaces.slice(0, 4);

  elements.trendingList.innerHTML = trendingPlaces.map((place) => createPlaceCard(place)).join("");
  elements.featuredList.innerHTML = featuredPlaces.map((place) => createPlaceCard(place)).join("");
  elements.nearYouPills.innerHTML = nearYouPlaces
    .map((place) => `<span class="meta-pill">${place.name} · ${place.neighborhood}</span>`)
    .join("");
}

function renderExplore() {
  const filtered = getFilteredPlaces();

  elements.resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "spot" : "spots"}`;
  elements.resultsTitle.textContent =
    state.selectedCategory === "All" ? "All places" : `${state.selectedCategory} picks`;
  elements.emptyState.hidden = filtered.length > 0;
  elements.exploreList.innerHTML = filtered.map((place) => createPlaceCard(place)).join("");
}

function getFilteredPlaces() {
  const byAudience = applyAudienceFilter(places);

  const byCategory =
    state.selectedCategory === "All"
      ? byAudience
      : byAudience.filter((place) => place.category === state.selectedCategory);

  const bySearch = byCategory.filter((place) => matchesSearch(place, state.searchTerm));

  return sortPlaces(bySearch, state.sortBy);
}

function applyAudienceFilter(list) {
  if (state.audience === "local") {
    return list.filter((place) => place.local_pick);
  }

  if (state.audience === "visiting") {
    return list.filter((place) => place.visitor_friendly);
  }

  return list;
}

function matchesSearch(place, searchTerm) {
  if (!searchTerm) {
    return true;
  }

  const haystack = [
    place.name,
    place.category,
    place.neighborhood,
    place.best_for,
    place.why_it_hits,
    ...place.tags
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(searchTerm);
}

function sortPlaces(list, sortBy) {
  if (sortBy === "trending") {
    return list.sort((a, b) => b.trend_score - a.trend_score || b.vibe_score - a.vibe_score);
  }

  if (sortBy === "newest") {
    return list.sort((a, b) => b.id - a.id);
  }

  return list.sort((a, b) => b.vibe_score - a.vibe_score || b.trend_score - a.trend_score);
}

function createPlaceCard(place) {
  const localEnergy = place.local_pick ? "Strong local energy" : "More visitor-friendly energy";
  const tripLine = place.visitor_friendly ? "Worth the trip" : "Neighborhood gem";
  const tags = place.tags.slice(0, 3).map((tag) => `<span class="tag-badge">${tag}</span>`).join("");
  const mediaMarkup = `
    <div
      class="place-media"
      ${place.image_url ? `style="background-image: linear-gradient(180deg, rgba(3, 7, 12, 0.08), rgba(3, 7, 12, 0.7)), url('${place.image_url}');"` : ""}
    >
      <span class="place-media-label">${place.image_url ? "Photo ready" : "No photo needed"}</span>
    </div>
  `;

  return `
    <article class="place-card" aria-label="${place.name}">
      ${mediaMarkup}
      <div class="place-topline">
        <div>
          <p class="section-kicker">${place.category}</p>
          <h3 class="place-name">${place.name}</h3>
        </div>
        <span class="vibe-badge">Vibe Score ${place.vibe_score}</span>
      </div>
      <div class="badge-row">
        <span class="meta-pill">${place.neighborhood}</span>
        <span class="meta-pill">Trending ${place.trend_score}</span>
        ${place.local_pick ? '<span class="meta-pill">Local Pick</span>' : ""}
      </div>
      <p class="place-description">${place.description}</p>
      <div class="detail-grid">
        <div class="detail-block">
          <strong>Best For</strong>
          <p class="detail-copy">${place.best_for}</p>
        </div>
        <div class="detail-block">
          <strong>Why It Hits</strong>
          <p class="detail-copy">${place.why_it_hits}</p>
        </div>
        <div class="detail-block">
          <strong>Local Energy</strong>
          <p class="detail-copy">${localEnergy}</p>
        </div>
        <div class="detail-block">
          <strong>Worth the Trip</strong>
          <p class="detail-copy">${tripLine}</p>
        </div>
      </div>
      <div class="badge-row">${tags}</div>
      <div class="link-row">
        ${place.website_url ? `<a href="${place.website_url}" target="_blank" rel="noreferrer">Website</a>` : ""}
        ${place.map_url ? `<a href="${place.map_url}" target="_blank" rel="noreferrer">Map</a>` : ""}
      </div>
    </article>
  `;
}

async function handleAlertsSubmit(event) {
  event.preventDefault();

  const email = elements.emailInput.value.trim();
  const selectedInterests = Array.from(
    elements.alertsForm.querySelectorAll('input[name="interests"]:checked')
  ).map((input) => input.value);

  resetFeedback();

  if (!isValidEmail(email)) {
    setFeedback("Enter a valid email address to get alerts.", "error");
    elements.emailInput.focus();
    return;
  }

  if (selectedInterests.length === 0) {
    setFeedback("Choose at least one interest so we know what vibes to send.", "error");
    return;
  }

  const payload = {
    email,
    audience_type: elements.audienceTypeInput.value,
    interests: selectedInterests,
    source: "alerts page",
    page_url: window.location.href,
    user_agent: navigator.userAgent
  };

  if (!GOOGLE_APPS_SCRIPT_URL) {
    console.info("DNVR Vibes signup payload waiting for Apps Script URL", payload);
    setFeedback("Apps Script URL is not connected yet. Add it in app.js to save signups.", "error");
    return;
  }

  setFormSubmitting(true);
  setFeedback("Saving your alert preferences...", "neutral");

  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    elements.alertsForm.reset();
    setFeedback("You're on the list. Current Vibes are coming your way.", "success");
  } catch (error) {
    console.error("DNVR Vibes signup failed", error);
    setFeedback("Something went sideways. Try again in a minute.", "error");
  } finally {
    setFormSubmitting(false);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFeedback(message, type) {
  elements.formFeedback.textContent = message;
  if (type === "success") {
    elements.formFeedback.classList.add("is-success");
  }

  if (type === "error") {
    elements.formFeedback.classList.add("is-error");
  }
}

function resetFeedback() {
  elements.formFeedback.textContent = "";
  elements.formFeedback.classList.remove("is-success", "is-error");
}

function setFormSubmitting(isSubmitting) {
  const submitButton = elements.alertsForm.querySelector('button[type="submit"]');

  if (submitButton) {
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? "Joining..." : "Join the list";
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Service worker registration skipped:", error);
    });
  }
}

init();
