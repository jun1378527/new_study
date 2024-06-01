document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");
  const navbar = document.querySelector(".navbar");
  const links = document.querySelectorAll(".nav-link");
  const logo = document.querySelector(".logo");
  const icons = document.querySelectorAll(".icon");
  const indicators = document.querySelectorAll(".indicator");

  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector(".nav-link");

    link.addEventListener("click", function (e) {
      e.preventDefault();
      const isShown = dropdown.classList.contains("show");

      // 모든 드롭다운 닫기
      dropdowns.forEach(d => d.classList.remove("show"));

      // 클릭한 드롭다운 토글
      if (!isShown) {
        dropdown.classList.add("show");
        navbar.classList.add("open"); // 드롭다운이 열릴 때 open 클래스 추가
      } else {
        navbar.classList.remove("open"); // 드롭다운이 닫힐 때 open 클래스 제거
      }
    });
  });

  // 외부 클릭 시 드롭다운 닫기 및 open 클래스 제거
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(d => d.classList.remove("show"));
      navbar.classList.remove("open");
      if (window.scrollY <= 50) {
        navbar.classList.remove("scrolled");
      }
    }
  });

  // 캐러셀 기능
  let currentIndex = 1;
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  const carouselInner = document.querySelector(".carousel-inner");

  // 무한 루프 효과를 위한 첫 번째와 마지막 아이템 복제
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[totalItems - 1].cloneNode(true);
  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  carouselInner.appendChild(firstClone);
  carouselInner.insertBefore(lastClone, items[0]);

  const updatedItems = document.querySelectorAll(".carousel-item");
  const updatedTotalItems = updatedItems.length;
  carouselInner.style.transition = "none";
  carouselInner.style.transform = `translateX(-${100}%)`;

  document
    .querySelector(".carousel-control-next")
    .addEventListener("click", function () {
      moveToNextSlide();
    });

  document
    .querySelector(".carousel-control-prev")
    .addEventListener("click", function () {
      moveToPrevSlide();
    });

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      if (index === currentIndex - 1) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  function moveToNextSlide() {
    if (currentIndex >= updatedTotalItems - 1) return;
    currentIndex++;
    carouselInner.style.transition = "transform 0.5s ease-in-out";
    carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;

    carouselInner.addEventListener(
      "transitionend",
      function () {
        if (currentIndex === updatedTotalItems - 1) {
          carouselInner.style.transition = "none";
          currentIndex = 1;
          carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;
        }
        updateIndicators();
      },
      { once: true }
    );
  }

  function moveToPrevSlide() {
    if (currentIndex <= 0) return;
    currentIndex--;
    carouselInner.style.transition = "transform 0.5s ease-in-out";
    carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;

    carouselInner.addEventListener(
      "transitionend",
      function () {
        if (currentIndex === 0) {
          carouselInner.style.transition = "none";
          currentIndex = updatedTotalItems - 2;
          carouselInner.style.transform = `translateX(-${100 * currentIndex}%)`;
        }
        updateIndicators();
      },
      { once: true }
    );
  }

  // 초기 인디케이터 설정
  updateIndicators();

  // 스크롤 이벤트를 통한 네브바 색상 변경 처리
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      links.forEach(link => (link.style.color = "#333"));
      logo.style.color = "#333";
      icons.forEach(icon => (icon.style.filter = "invert(0)"));
    } else if (!navbar.classList.contains("open")) {
      navbar.classList.remove("scrolled");
      links.forEach(link => (link.style.color = "#fff"));
      logo.style.color = "#fff";
      icons.forEach(icon => (icon.style.filter = "invert(1)"));
    }
  });

  // 네브바 상태에 따른 외형 업데이트
  function updateNavbarAppearance() {
    if (navbar.classList.contains("open")) {
      navbar.classList.add("hover");
      links.forEach(link => (link.style.color = "#333"));
      logo.style.color = "#333";
      icons.forEach(icon => (icon.style.filter = "invert(0)"));
    } else if (navbar.classList.contains("scrolled")) {
      links.forEach(link => (link.style.color = "#333"));
      logo.style.color = "#333";
      icons.forEach(icon => (icon.style.filter = "invert(0)"));
    } else {
      links.forEach(link => (link.style.color = "#fff"));
      logo.style.color = "#fff";
      icons.forEach(icon => (icon.style.filter = "invert(1)"));
    }
  }

  navbar.addEventListener("mouseenter", function () {
    navbar.classList.add("hover");
    updateNavbarAppearance();
  });

  navbar.addEventListener("mouseleave", function () {
    navbar.classList.remove("hover");
    updateNavbarAppearance();
  });

  // 초기 업데이트를 통해 올바른 외형 설정
  updateNavbarAppearance();
});
