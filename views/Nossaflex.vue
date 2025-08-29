<template>
    <div>
      <img
        src="@/assets/WickApp/wick.png"
        alt="Wick App"
        class="hero"
      />
      <div class="inner-content">
        <h3 class="heading"><b>Social Media Management App</b></h3>
        <p class="paragraph">
          During my final year in college, I helped design and develop Wick, a social media management app aimed at content creators,
          small business owners and users trying to grow their accounts.
        </p>
      </div>
      <img src="@/assets/Wwdc/2021_1.jpg" class="images" />
      <h6 class="subtitle">Page 1 of Submission</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Ideation</b></h3>
        <p class="paragraph">
          The ideation phase kicked off when Apple announced open submissions for all students worldwide. Without delay, I chose to focus on an area of development that particularly intrigued me: web development. I expanded upon the concept of web development within an app and initiated the creation of prototypes for the project. Initially, I developed a simple app that enabled live editing of HTML/CSS pages using SwiftUI.
        </p>
      </div>
      <img src="@/assets/Wwdc/2021_2.jpg" class="images" />
      <h6 class="subtitle">Page 2 of Submission</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Content</b></h3>
        <p class="paragraph">
          What became apparent to me was that merely having a functional app was only one aspect of a successful submission. It was essential to complement it with compelling content while showcasing the technical proficiency of the developer. Consequently, I made the decision to develop a tutorial-style playground project that would teach users how to utilize HTML/CSS.
        </p>
        <p class="paragraph">
          Moreover, by acquiring basic HTML/CSS skills, users could delve deeper into learning about me. Through engaging in simple challenges embedded within the project, users could uncover interesting facts about me. This approach not only facilitated a valuable learning experience but also provided users with an opportunity to learn more about me personally.
        </p>
      </div>
      <img src="@/assets/Wwdc/2021_3.jpg" class="images" />
      <h6 class="subtitle">Page 3 of the Submission</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Submission</b></h3>
        <p class="paragraph">
          Upon completing the development of the project, I was required to submit two 500-word essays detailing the project and my experiences with programming and development outside of WWDC. Here's a pro-tip for anyone aspiring to participate in WWDC SSC: always submit both essays, even if it's stated as optional! Apple evaluates your entire submission alongside these essays, and they undoubtedly play a significant role in the judging process.
        </p>
      </div>
      <img src="@/assets/Wwdc/wwdc2021_win.jpg" class="images" />
      <h6 class="subtitle">Winner's Page for 2021</h6>
      <div class="inner-content">
        <h3 class="heading"><b>2021's Success</b></h3>
        <p class="paragraph">
          I successfully clinched WWDC SSC and was honored as one of the 350 students worldwide to receive the winning prize. Alongside this achievement, I was offered a media opportunity with a local outlet. The following month, I had the chance to appear on the local news, where I discussed my development journey.
        </p>
      </div>
      <img src="@/assets/Wwdc/swag2021.jpg" class="images-full" />
      <h6 class="subtitle" style="padding-bottom: 30px">WWDC Swag!</h6>
      <div class="video">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SG03JXX1t1I?si=T-fp4LJ2Apjp1XFV" 
       title="YouTube video player" 
       frameborder="0" allow="accelerometer; 
       autoplay; clipboard-write; encrypted-media; 
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      
    </div>
  </template>

<script setup>
// Add your component logic here
</script>
  
  
<style scoped>
.hero {
    width: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
}

.images {
    width: 100%;
    height: 350px;
    object-fit: cover;
}

.images-full {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
}

.heading {
    padding-bottom: 5px;
}

.inner-content {
    padding-top: 30px;
    padding-bottom: 30px;
}

h6,
h3 {
    margin: 0;
    padding: 0;
}
</style>
