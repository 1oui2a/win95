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
      <img src="@/assets/WickApp/Onboarding.png" class="images" />
      <h6 class="subtitle">Page 1 of Submission</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Figma Designs</b></h3>
        <p class="paragraph">
          
        </p>
      </div>
      <img src="" class="images" />
      <h6 class="subtitle">Logo Selection</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Prototyping</b></h3>
        <p class="paragraph">
          
        </p>
        <p class="paragraph">
         personally.
        </p>
      </div>
      <img src="" class="images" />
      <h6 class="subtitle">Logo</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Logo Designs</b></h3>
        <p class="paragraph">
          Upo
        </p>
      </div>
     


      
      <img src="@/assets/WickApp/Mockup.png" class="images-full" />
      <h6 class="subtitle" style="padding-bottom: 30px">WWDC Swag!</h6>


      <h3 class="heading"><b>Wick Promotional Video</b></h3>
      <div class="video">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/SG03JXX1t1I?si=T-fp4LJ2Apjp1XFV" 
       title="YouTube video player" 
       frameborder="0" allow="accelerometer; 
       autoplay; clipboard-write; encrypted-media; 
       gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p class="paragraph">
          Using DaVinci Resolve, I made this promotional video for the app. Learning Resolve was easier than I thought, which helped immensly as
          it was a last minute alternative to Adobe After Effects/Premier Pro due to our college getting rid of our Adobe licenses on personal computers.
        </p>
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
