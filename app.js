const progress = document.querySelector(
  ".scroll-progress span"
);

const cursorGlow = document.querySelector(
  ".cursor-glow"
);

const navLinks = [
  ...document.querySelectorAll(".nav-links a")
];

const sections = [
  ...document.querySelectorAll(
    "main section[id]"
  )
];


// ------------------------------
// Scroll Progress
// ------------------------------

const updateProgress = () => {

  const scrollable =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const value =
    scrollable > 0
      ? (window.scrollY / scrollable) * 100
      : 0;

  progress.style.width = `${value}%`;
};

window.addEventListener(
  "scroll",
  updateProgress,
  {
    passive: true
  }
);

updateProgress();


// ------------------------------
// Reveal Animations
// ------------------------------

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "is-visible"
          );

        }

      });

    },

    {
      threshold: 0.12,
      rootMargin:
        "0px 0px -40px"
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    observer.observe(element);

  });


// ------------------------------
// Active Navigation
// ------------------------------

const sectionObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {

          const target =
            link.getAttribute("href");

          link.classList.toggle(
            "active",
            target === `#${entry.target.id}`
          );

        });

      });

    },

    {
      threshold: 0.35,
      rootMargin:
        "-20% 0px -60% 0px"
    }

  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});


// ------------------------------
// Cursor Glow
// ------------------------------

if (
  window.matchMedia(
    "(min-width: 901px)"
  ).matches
) {

  window.addEventListener(
    "pointermove",
    (event) => {

      cursorGlow.style.left =
        `${event.clientX}px`;

      cursorGlow.style.top =
        `${event.clientY}px`;

    },
    {
      passive: true
    }
  );

  window.addEventListener(
    "pointerenter",
    () => {
      cursorGlow.style.opacity = "1";
    }
  );

  window.addEventListener(
    "pointerleave",
    () => {
      cursorGlow.style.opacity = "0";
    }
  );

}


// ------------------------------
// Spotlight Cards
// ------------------------------

document
  .querySelectorAll(".spotlight")
  .forEach((card) => {

    card.addEventListener(
      "pointermove",
      (event) => {

        const rect =
          card.getBoundingClientRect();

        card.style.setProperty(
          "--mx",
          `${event.clientX - rect.left}px`
        );

        card.style.setProperty(
          "--my",
          `${event.clientY - rect.top}px`
        );

      }
    );

    card.addEventListener(
      "pointerleave",
      () => {
        card.style.removeProperty("--mx");
        card.style.removeProperty("--my");
      }
    );

  });


// ------------------------------
// Magnetic Buttons
// ------------------------------

document
  .querySelectorAll(".magnetic")
  .forEach((button) => {

    button.addEventListener(
      "pointermove",
      (event) => {

        const rect =
          button.getBoundingClientRect();

        const x =
          (
            event.clientX -
            rect.left -
            rect.width / 2
          ) * 0.08;

        const y =
          (
            event.clientY -
            rect.top -
            rect.height / 2
          ) * 0.08;

        button.style.transform =
          `translate(${x}px, ${y - 2}px)`;

      }
    );


    button.addEventListener(
      "pointerleave",
      () => {

        button.style.transform = "";

      }
    );

  });