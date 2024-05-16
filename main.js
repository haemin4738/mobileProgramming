document.addEventListener("DOMContentLoaded", function () {
    // 목차 항목을 클릭했을 때 해당 섹션으로 이동하는 기능
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 텍스트 클릭 시 스타일 고정
    var paragraphs = document.querySelectorAll("#characteristic p");

    paragraphs.forEach(function (paragraph) {
        paragraph.addEventListener("click", function () {
            // 클릭된 p 엘리먼트에 'clicked' 클래스 추가
            this.classList.add("clicked");

            // 다른 p 엘리먼트에서 'clicked' 클래스 제거
            paragraphs.forEach(function (otherParagraph) {
                if (otherParagraph !== paragraph) {
                    otherParagraph.classList.remove("clicked");
                }
            });
        });
    });

    paragraphs = document.querySelectorAll("#programs p");
    paragraphs.forEach(function (paragraph) {
        paragraph.addEventListener("click", function () {
            // 클릭된 p 엘리먼트에 'clicked' 클래스 추가
            this.classList.add("clicked");

            // 다른 p 엘리먼트에서 'clicked' 클래스 제거
            paragraphs.forEach(function (otherParagraph) {
                if (otherParagraph !== paragraph) {
                    otherParagraph.classList.remove("clicked");
                }
            });
        });
    });

    paragraphs = document.querySelectorAll("#facilities p");
    paragraphs.forEach(function (paragraph) {
        paragraph.addEventListener("click", function () {
            // 클릭된 p 엘리먼트에 'clicked' 클래스 추가
            this.classList.add("clicked");

            // 다른 p 엘리먼트에서 'clicked' 클래스 제거
            paragraphs.forEach(function (otherParagraph) {
                if (otherParagraph !== paragraph) {
                    otherParagraph.classList.remove("clicked");
                }
            });
        });
    });

    // 윈도우 크기가 변경될 때 이미지 크기 조절
    window.addEventListener("resize", function () {
        adjustImageSize();
        adcharImageSize();
    });

    // 페이지 로드시 이미지 크기 조절
    document.addEventListener("DOMContentLoaded", function () {
        adjustImageSize();
        adcharImageSize();
    });

    function adjustImageSize() {
        var schoolLogo = document.getElementById("schoolLogo");
        var sectionWidth = document.getElementById("content").offsetWidth;
        var maxWidth = sectionWidth * 0.9; // 이미지의 최대 너비 (예: 섹션의 90%)

        schoolLogo.style.maxWidth = maxWidth + "px";
    }

    function adcharImageSize() {
        var characteristicLogo = document.getElementById("characteristicLogo");
        var sectionWidth = document.getElementById("content").offsetWidth;
        var maxWidth = sectionWidth * 0.9; // 이미지의 최대 너비 (예: 섹션의 90%)

        characteristicLogo.style.maxWidth = maxWidth + "px";
    }

    // 교육 특성 텍스트를 클릭할 때 다른 이미지로 변경
    function charchangeImage(newImage) {
        var characteristicLogo = document.getElementById("characteristicLogo");
        characteristicLogo.src = newImage;
    }

    var characteristicParagraphs = document.querySelectorAll("#characteristic p");
    characteristicParagraphs.forEach(function (paragraph, index) {
        paragraph.addEventListener("click", function () {
            // 현재 클릭된 요소에만 clicked 클래스 추가
            characteristicParagraphs.forEach(function (p) {
                p.classList.remove("clicked");
            });
            this.classList.add("clicked");

            // 수정된 부분: 이미지 변경 함수 호출을 이벤트 핸들러 안으로 이동
            var newImage = "img/characteristic/img" + (index + 1) + ".jpg";
            charchangeImage(newImage);
        });
    });

    // 프로그램 텍스트를 클릭할 때 다른 이미지로 변경
    function prochangeImage(newImage) {
        var programsLogo = document.getElementById("programsLogo");
        programsLogo.src = newImage;
    }

    var programsParagraphs = document.querySelectorAll("#programs p");
    programsParagraphs.forEach(function (paragraph, index) {
        paragraph.addEventListener("click", function () {
            // 현재 클릭된 요소에만 clicked 클래스 추가
            programsParagraphs.forEach(function (p) {
                p.classList.remove("clicked");
            });
            this.classList.add("clicked");

            // 수정된 부분: 이미지 변경 함수 호출을 이벤트 핸들러 안으로 이동
            var newImage = "img/programs/img" + (index + 1) + ".jpg";
            prochangeImage(newImage);
        });
    });

    // 시설 및 교육환경 텍스트를 클릭할 때 다른 이미지로 변경
    function facchangeImage(newImage) {
        var facgramsLogo = document.getElementById("facilitiesLogo");
        facgramsLogo.src = newImage;
    }

    var facgramsParagraphs = document.querySelectorAll("#facilities p");
    facgramsParagraphs.forEach(function (paragraph, index) {
        paragraph.addEventListener("click", function () {
            // 현재 클릭된 요소에만 clicked 클래스 추가
            facgramsParagraphs.forEach(function (p) {
                p.classList.remove("clicked");
            });
            this.classList.add("clicked");

            // 수정된 부분: 이미지 변경 함수 호출을 이벤트 핸들러 안으로 이동
            var newImage = "img/facilities/img" + (index + 1) + ".jpg";
            facchangeImage(newImage);
        });
    });

    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector("nav ul");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});