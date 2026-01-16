// -----------------------  Typed.js for home section
const typed = new Typed('.multiple-text', {
  strings: ['Full-Stack Web Developer', 'AI Graphics | Visual Designer', 'Automation | Excel Expert', 'Technical Specialist'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});




/* ================= SKILLS ANIMATION ================= */
document.addEventListener("DOMContentLoaded", () => {

  const skillsSection = document.querySelector(".skills");
  if (!skillsSection) return;

  let animationRan = false;

  function runCircleAnimation() {
    if (animationRan) return;
    animationRan = true;

    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
      if (circle.classList.contains("animated")) return;
      circle.classList.add("animated");

      const dots = +circle.dataset.dots || 80;
      const percent = +circle.dataset.percent || 0;
      const marked = Math.floor(dots * percent / 100);
      const rotate = 360 / dots;

      let points = "";
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }

      circle.innerHTML = points;

      const pointElements = circle.querySelectorAll(".points");
      pointElements.forEach((point, index) => {
        if (index < marked) point.classList.add("marked");
      });
    });

    skillsSection.classList.add("active");
  }

  /* ---------- IntersectionObserver (Desktop + Mobile Safe) ---------- */
  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCircleAnimation();
            observer.disconnect();
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.15 : 0.35,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    observer.observe(skillsSection);

  } else {
    /* ---------- Fallback for very old browsers ---------- */
    runCircleAnimation();
  }
});






// -----------------------  scroll reveal
ScrollReveal({
  reset: false,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .portfolio-box.service, .contact form, .testimonials-box, .about-grid,.project-filters', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.tab-grid.work .tab-item, .project-grid', { origin: 'bottom', interval: 100 });
ScrollReveal().reveal('.home-content h1, .about-img, .skill-left', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skill-right', { origin: 'right' });

// // -----------------------  toggler icon navbar
// let menuIcon = document.querySelector("#menu-icon");
// let myNav = document.querySelector(".myNav");

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle("fa-times");
//     myNav.classList.toggle("open");
//     menuIcon.classList.toggle("rotate");
// }

// window.onscroll = () => {
//     menuIcon.classList.remove("fa-times");
//     myNav.classList.remove("open");
// }

//========================================================== contact form 
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("LcRmm8pM-PCXVlQTk");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_31bk5au",
      "template_28r4o3p",
      this
    ).then(
      function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
  });
});





/* ================= PROJECT Section ================= */

/* ================= PROJECT MODAL SETUP ================= */

const projectModal = document.getElementById("projectModal");
const projectModalContent = projectModal.querySelector(".project-modal-content");
const projectModalClose = projectModal.querySelector(".project-modal-close");

/* ================= MEDIA TYPE DETECTOR ================= */

function getMediaType(src) {
  const ext = src.split(".").pop().toLowerCase();
  return ["mp4", "webm", "ogg"].includes(ext) ? "video" : "image";
}

/* ================= PROJECT MEDIA DATA ================= */

const projectMedia = {
  "ac": {
    media: [
      "./websites/ac.png",
      "./websites/ac1.jpeg",
      "./websites/ac2.jpeg",
      "./websites/ac3.jpeg",
      "./websites/ac4.jpeg",
      "./websites/ac5.jpeg"
    ]
  },

  "fu": {
    media: [
      "./websites/fu.jpeg",
      "./websites/fu1.jpeg",
      "./websites/fu2.jpeg",
      "./websites/fu3.jpeg",
      "./websites/fu4.jpeg",
      "./websites/fu5.jpeg"
    ]
  },

  "prfa": {
    media: [
      "./websites/prfav1.mp4",
      "./websites/prfa3.jpeg",
      "./websites/prfa2.jpeg",
      "./websites/prfa1.jpeg",
      "./websites/prfa4.jpeg"
    ]
  },

  "wcag": {
    media: [
      "./websites/wcag1.jpeg",
      "./websites/wcag2.jpeg"
    ]
  },

  "nof": {
    media: [
      "./websites2/nofv1.mp4",
      "./websites/nof1.jpeg",
      "./websites/nof2.jpeg",
      "./websites/nof3.jpeg",
      "./websites/nof4.jpeg",
      "./websites/nof5.jpeg",
      "./websites/nof6.jpeg",
      "./websites/nof7.jpeg"
    ]
  },

  "isp": {
    media: [
      "./websites2/ispv1.mp4",
      "./websites/isp1.jpeg",
      "./websites/isp2.jpeg",
      "./websites/isp3.jpeg",
      "./websites/isp4.jpeg",
      "./websites/isp5.jpeg",
      "./websites/isp6.jpeg",
      "./websites/isp7.jpeg"
    ]
  },

  "shr": {
    media: [
      "./websites2/shrv1.mp4",
      "./websites/shr1.jpeg",
      "./websites/shr2.jpeg",
      "./websites/shr3.jpeg",
      "./websites/shr4.jpeg",
      "./websites/shr5.jpeg",
      "./websites/shr6.jpeg",
      "./websites/shr7.jpeg",
      "./websites/shr8.jpeg"
    ]
  },

  "hr": {
    media: [
      "./websites2/hrv1.mp4",
      "./websites/hr2.jpeg",
      "./websites/hr1.jpeg",
      "./websites/hr3.jpeg",
      "./websites/hr4.jpeg",
      "./websites/hr5.jpeg",
      "./websites/hr6.jpeg",
      "./websites/hr7.jpeg",
      "./websites/hr8.jpeg",
      "./websites/hr9.jpeg",
      "./websites/hr10.jpeg"
    ]
  },

  "dia": {
    media: [
      "./websites2/diav1.mp4",
      "./websites/dia1.jpeg",
      "./websites/dia2.jpeg",
      "./websites/dia3.jpeg",
      "./websites/dia4.jpeg",
      "./websites/dia5.jpeg",
      "./websites/dia6.jpeg"
    ]
  },

  // <!--================================================ graphicsss......  -->

  "ezlg": {
    media: [
      "./graphics/lg3.jpg",
      "./graphics/lg4.jpg",
      "./graphics/lg5.webp"
    ]
  },

  "telg": {
    media: [
      "./graphics/lg1.jpeg",
      "./graphics/lg8.png"
    ]
  },

  "bnlg": {
    media: [
      "./graphics/lg6.png",
      "./graphics/lg7.jpeg"
    ]
  },

  "cp": {
    media: [
      "./graphics/cp2.png",
      "./graphics/cp1.png"
    ]
  },

  "bc": {
    media: [
      "./graphics/bc2.png",
      "./graphics/bc1.jpeg"
    ]
  },

  "mk": {
    media: [
      "./graphics/mk2.png",
      "./graphics/mk1.png"
    ]
  },

  "en": {
    media: [
      "./graphics/en1.jpg",
      "./graphics/en2.jpg"
    ]
  },

  "bn": {
    media: [
      "./graphics/bn1.jpg"
    ]
  },

  "ps": {
    media: [
      "./graphics/ps1.jpeg",
      "./graphics/ps2.png"
    ]
  },

  // <!--================================================ aiiiii......  -->

  "aipt": {
    media: [
      "./ai/pt.png",
      "./ai/pt12.png",
      "./ai/pt13.png",
      "./ai/pt8.png",
      "./ai/pt9.png",
      "./ai/pt14.png",
      "./ai/pt15.png",
      "./ai/pt16.png",
      "./ai/pt17.png",
      "./ai/pt18.png",
      "./ai/pt5.png",
      "./ai/pt3.png",
      "./ai/pt19.png",
      "./ai/pt1.png",
      "./ai/pt2.png",
      "./ai/pt4.png",
      "./ai/pt6.png",
      "./ai/pt7.png",
      "./ai/pt9.png",
      "./ai/pt10.png",
      "./ai/pt11.png",
      "./ai/pt20.png"
    ]
  },

  "aisa": {
    media: [
      "./ai3/sa.png",
      "./ai/qd2.png",
      "./ai/qd7.png",
      "./ai/qd9.png",
      "./ai/qd13.png",
      "./ai/qd11.png",
      "./ai/qd14.png",
      "./ai/qd8.png",
      "./ai/qd10.png",
      "./ai/qd5.png",
      "./ai/qd6.png",
      "./ai/qd1.png",
      "./ai/qd3.png",
      "./ai/qd4.png",
      "./ai/qd12.png"
    ]
  },

  "aiimg": {
    media: [
      "./ai3/reimg.png",
      "./ai3/reimg5.jpg",
      "./ai3/reimg6.png",
      "./ai3/reimg1.png",
      "./ai3/reimg2.png",
      "./ai3/reimg3.png",
      "./ai3/reimg4.png"
    ]
  },

  "aibn": {
    media: [
      "./ai3/bn.png",
      "./ai3/bn2.webp",
      "./ai3/bn3.jpg",
      "./ai3/bn1.webp"
    ]
  },

  "aiv": {
    media: [
      "./ai2/v8.mp4",
      "./ai2/v1.mp4",
      "./ai2/v2.mp4",
      "./ai2/v3.mp4",
      "./ai2/v4.mp4",
      "./ai2/v5.mp4",
      "./ai2/v6.mp4",
      "./ai2/v7.mp4"
    ]
  },

  // <!--================================================ packagingggg......  -->

  "eye": {
    media: [
      "./packaging/eye.jpeg"
    ]
  },

  "lez": {
    media: [
      "./packaging/lez1.jpeg",
      "./packaging/lez2.jpeg"
    ]
  },

  "mes": {
    media: [
      "./packaging/mas1.jpeg",
      "./packaging/mas2.jpeg",
      "./packaging/mas3.jpeg",
      "./packaging/mas4.jpeg"
    ]
  },

  "milk": {
    media: [
      "./packaging/milk.jpeg"
    ]
  },

  "sta": {
    media: [
      "./packaging/sta1.jpeg",
      "./packaging/sta2.jpeg"
    ]
  },

  "stg": {
    media: [
      "./packaging/stg3.jpeg",
      "./packaging/stg2.jpeg",
      "./packaging/stg4.jpeg",
      "./packaging/stg5.jpeg",
      "./packaging/stg1.jpeg"
    ]
  },

  "zoo": {
    media: [
      "./packaging/zoo1.jpeg",
      "./packaging/zoo2.jpeg",
      "./packaging/zoo3.jpeg",
      "./packaging/zoo4.jpeg"
    ]
  },

  "zoxl": {
    media: [
      "./packaging/zoxl1.jpeg",
      "./packaging/zoxl2.jpeg",
      "./packaging/zoxl3.jpeg",
      "./packaging/zoxl4.jpeg"
    ]
  },

  // <!--================================================ excellll......  -->

  "pes": {
    media: [
      "./excel and dashboards/v1.mp4",
      "./excel and dashboards/v2.mp4",
      "./excel and dashboards/v3.mp4",
      "./excel and dashboards/p1.jpeg",
      "./excel and dashboards/p2.jpeg",
      "./excel and dashboards/p3.jpeg",
      "./excel and dashboards/p4.jpeg",
      "./excel and dashboards/p5.jpeg",
      "./excel and dashboards/p6.jpeg",
      "./excel and dashboards/p7.jpeg",
      "./excel and dashboards/p8.jpeg",
      "./excel and dashboards/p9.jpeg"
    ]
  },

  "aut": {
    media: [
      "./excel and dashboards/av1.mp4",
      "./excel and dashboards/a6.jpg",
      "./excel and dashboards/a3.jpeg",
      "./excel and dashboards/a4.jpeg",
      "./excel and dashboards/a5.jpeg",
      "./excel and dashboards/a1.jpeg",
      "./excel and dashboards/a2.jpeg"
    ]
  },

  "lok": {
    media: [
      "./excel and dashboards/l1.jpeg",
      "./excel and dashboards/l2.jpeg"
    ]
  },

  "sp": {
    media: [
      "./excel and dashboards/d1.jpeg",
      "./excel and dashboards/d2.jpeg",
      "./excel and dashboards/d3.jpeg",
      "./excel and dashboards/d4.jpeg"
    ]
  },

};

/* ================= PREVIEW BUTTON CLICK ================= */

document.querySelectorAll(".project-preview-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    /* External website preview */
    if (btn.dataset.type === "link") {
      window.open(btn.dataset.src, "_blank", "noopener,noreferrer");
      return;
    }

    const projectKey = btn.dataset.project;
    const project = projectMedia[projectKey];
    if (!project) return;

    projectModalContent.innerHTML = `
      <div class="preview-wrapper">
        <div class="preview-main"></div>
        <div class="preview-thumbs"></div>
      </div>
    `;

    const main = projectModalContent.querySelector(".preview-main");
    const thumbs = projectModalContent.querySelector(".preview-thumbs");

    project.media.forEach((src, index) => {
      const thumbWrap = document.createElement("div");
      thumbWrap.className = "preview-thumb" + (index === 0 ? " active" : "");

      const mediaType = getMediaType(src);
      let thumbMedia;

      if (mediaType === "image") {
        thumbMedia = document.createElement("img");
        thumbMedia.src = src;
        thumbMedia.loading = "lazy";
      } else {
        thumbMedia = document.createElement("video");
        thumbMedia.src = src;
        thumbMedia.muted = true;
        thumbMedia.playsInline = true;
        thumbMedia.preload = "metadata";
        thumbWrap.classList.add("video");
      }

      thumbWrap.appendChild(thumbMedia);

      thumbWrap.onclick = () => {
        document
          .querySelectorAll(".preview-thumb")
          .forEach(t => t.classList.remove("active"));

        thumbWrap.classList.add("active");
        loadMainMedia(mediaType, src, main);
      };

      thumbs.appendChild(thumbWrap);

      /* Load first media by default */
      if (index === 0) {
        loadMainMedia(mediaType, src, main);
      }
    });

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

/* ================= LOAD MAIN MEDIA ================= */

function loadMainMedia(type, src, container) {
  container.innerHTML = "";

  /* Stop any previous video */
  const oldVideo = container.querySelector("video");
  if (oldVideo) {
    oldVideo.pause();
    oldVideo.currentTime = 0;
  }

  let media;

  if (type === "image") {
    media = document.createElement("img");
    media.src = src;
    media.loading = "lazy";

    media.onload = () => {
      const isVertical = media.naturalHeight > media.naturalWidth;

      if (isVertical) {
        media.style.height = "100%";
        media.style.width = "auto";
        container.style.overflow = "hidden";
        container.style.alignItems = "center";
      } else {
        media.style.width = "100%";
        media.style.height = "auto";
        container.style.overflow = "auto";
      }
    };
  } else {
    media = document.createElement("video");
    media.src = src;
    media.controls = true;
    media.autoplay = true;
    media.playsInline = true;

    media.onloadedmetadata = () => {
      const isVertical = media.videoHeight > media.videoWidth;

      if (isVertical) {
        media.style.height = "100%";
        media.style.width = "auto";
        container.style.overflow = "hidden";
        container.style.alignItems = "center";
      } else {
        media.style.width = "100%";
        media.style.height = "auto";
        container.style.overflow = "auto";
      }
    };
  }

  media.style.maxWidth = "100%";
  media.style.display = "block";
  container.appendChild(media);
}

/* ================= CLOSE MODAL ================= */

projectModalClose.onclick = closeModal;
projectModal.onclick = e => e.target === projectModal && closeModal();

function closeModal() {
  projectModal.classList.remove("active");
  projectModalContent.innerHTML = "";
  document.body.style.overflow = "";
}

/* ================= FILTERING ================= */

const filterButtons = document.querySelectorAll(".project-filters li");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});


//========================================================== for testimonials 
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoHeight: true,   // 🔥 FIXES EMPTY SPACE
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
});






