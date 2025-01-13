---
layout: post
title: About
permalink: /about/
comments: true
---

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>

<body>
<!---->
    <div class="background-container">
        <div class="background-image"></div>
        <div class="background-overlay"></div>
<!---->
        <div id="top_content">
            <p>Ansh Kumar</p>
        </div>
    </div>
<!---->
    <div class="lower_container">
        <div class="about_visuals">
            <div class="titles">
                <div class="lower_content">
                    <p style="color: #1260cc">Deep Learning<span style="color: white">.</span></p>
                </div>
                <div class="lower_content">
                    <p style="color: #5579c6">Network Engineering<span style="color: white">.</span></p>
                </div>
                <div class="lower_content">
                    <p style="color: #3a9bdc">Cybersecurity<span style="color: white">.</span></p>
                </div>
                <div class="lower_content">
                    <p style="color: #29c5f6">Front-end Development<span style="color: white">.</span></p>
                </div>
            </div>
            <div class="images">
                <div>
                    <img src="../csp_collage.png">
                </div>
            </div>
        </div>
        <div class="moo">
            <p>Hi, I'm Ansh. I'm a 10th grader at Del Norte High School. Above are the things that represent me; I'm big into volunteer work, as I hold classes for underprovileged IIT (and other engineering school) students and graduates in an effort to strengthen their interpersonal and communication skills for interviews and overall workplace conduct. I enjoy listening to music, hanging out with my friends, and playing with my dog, Magic. I plan on majoring in computer science (not sure which discipline), and thus far that's been a huge part of my acedemic career.</p>
        </div>
    </div>
    <!---->
    
</body>

<style>
    body {
        padding: 0;
        margin: 0;
        height: auto;
        overflow-y: auto;
    }

    .about_visuals {
        display:flex;
        justify-content: space-between;
    }

    .images {
        margin-top: 10%
    }

    img {
        width: 270px;
        height: 480px;
    }

    .background-container {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        background-color: black;
    }

    .background-image {
        background-image: url("../background_2.jpeg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
    }

    #top_content {
        color: white;
        font-family:'Noto Sans', sans-serif;
        font-size: 85px;
        position: relative;
        transform:translateY(250%);
        padding-left: 5%;
    }

    .lower_content {
        color:white;
        font-family: 'Noto Sans', sans-serif;
        font-size: 40px;
        margin-top: 25%;
        height: 0.5em; 
        position: relative;
        opacity: 1;
        filter:blur(5px);
        transform: translateY(-400%);
        transition: all 1s;
    }

    .show_lower_content {
        filter:blur(0px);
        opacity: 1;
        transform: translateY(0%);
    }

    .moo {
        padding-top: 10%;
        font-family: 'Noto Sans', sans-serif;
        color: #1e7b9e;
        font-weight:200;
        font-size: 20px;
        opacity: 0;
    }

    .trigger-typewriter {
        opacity: 1;
    }
</style>

<script>
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show_lower_content');
        }
    })
});


const lowerContent = document.querySelectorAll('.lower_content');

lowerContent.forEach((el) => observer.observe(el));









function typeWriter(element) {
    const text = element.textContent; // Get the text inside the element
    element.textContent = ''; // Clear the content first
    let i = 0;

    // Function to type each character one by one
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 20); // Speed of typing
        }
    }

    type(); // Start typing
}

// New observer for ".moo" class elements
const mooObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('trigger-typewriter'); // Add a class if needed
            typeWriter(entry.target); // Apply typewriter effect
            mooObserver.unobserve(entry.target); // Unobserve after applying
        }
    });
});

// Observe ".moo" elements
const mooContent = document.querySelectorAll('.moo');
mooContent.forEach((el) => mooObserver.observe(el));
</script>
