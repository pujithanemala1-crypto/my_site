/*=========================================================
 Find Pather Edu Guide
 Main JavaScript File
=========================================================*/

"use strict";

/*=========================================================
 LOADER
=========================================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});


/*=========================================================
 STICKY NAVBAR
=========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(15,23,42,.95)";

        navbar.style.padding = "14px 8%";

        navbar.style.transition = ".4s";

    }

    else {

        navbar.style.background = "rgba(255,255,255,.15)";

        navbar.style.padding = "18px 8%";

    }

});


/*=========================================================
 MOBILE MENU
=========================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/*=========================================================
 CLOSE MENU AFTER CLICK
=========================================================*/

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/*=========================================================
 BACK TO TOP BUTTON
=========================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.pageYOffset > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================================
 HERO BUTTON EFFECT
=========================================================*/

const heroBtn = document.querySelector(".hero-btn");

heroBtn.addEventListener("mouseenter", function () {

    heroBtn.style.transform = "translateY(-6px) scale(1.05)";

});

heroBtn.addEventListener("mouseleave", function () {

    heroBtn.style.transform = "translateY(0px) scale(1)";

});


/*=========================================================
 FLOATING CARDS ANIMATION
=========================================================*/

const cards = document.querySelectorAll(".floating-card");

cards.forEach(function (card, index) {

    card.style.animationDelay = index * 0.4 + "s";

});
/*=========================================================
 SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements = document.querySelectorAll(

    ".feature-card, .road-card, .stat-card, .crossroads-content, .student-image"

);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0px)";

            }

        });

    },

    {

        threshold: .2

    }

);

revealElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = "all .8s ease";

    observer.observe(item);

});


/*=========================================================
 STATISTICS COUNTER
=========================================================*/

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".statistics");

    if (!stats) return;

    const sectionTop = stats.offsetTop - 300;

    if (window.scrollY >= sectionTop && !started) {

        started = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = Math.max(1, Math.floor(target / 80));

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = count + "+";

                    requestAnimationFrame(update);

                }

                else {

                    if (target === 100) {

                        counter.innerText = "100%";

                    } else {

                        counter.innerText = target + "+";

                    }

                }

            };

            update();

        });

    }

});


/*=========================================================
 NAVBAR ACTIVE LINK
=========================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.style.color = "#FFD54F";

        link.style.fontWeight = "700";

    }

});


/*=========================================================
 HERO PARALLAX EFFECT
=========================================================*/

window.addEventListener("scroll", () => {

    const bg = document.querySelector(".hero-bg");

    if (bg) {

        let value = window.scrollY * 0.3;

        bg.style.transform = `translateY(${value}px)`;

    }

});


/*=========================================================
 FLOATING PARTICLES RANDOM SIZE
=========================================================*/

document.querySelectorAll(".particles span").forEach(circle => {

    const size = Math.random() * 12 + 5;

    circle.style.width = size + "px";

    circle.style.height = size + "px";

    circle.style.opacity = Math.random();

});


/*=========================================================
 ROAD CARD CLICK EFFECT
=========================================================*/

document.querySelectorAll(".road-card").forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.95)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 150);

    });

});


/*=========================================================
 CTA BUTTON RIPPLE EFFECT
=========================================================*/

document.querySelectorAll(".hero-btn").forEach(btn => {

    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*=========================================================
 CONSOLE MESSAGE
=========================================================*/

console.log(

    "Find Pather Edu Guide Loaded Successfully"

);