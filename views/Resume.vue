<script setup>
import { ref } from 'vue'
import { useWindowsStore } from '@/stores/windows'
const windowsStore = useWindowsStore()

const cvSources = [
    
    'https://drive.google.com/file/d/1cTGcY8cgAg03tHyddZYTitC4VThygeOw/preview',
    'https://drive.google.com/file/d/1pFY22mkSIJ8N-WomArhM28Z3TSjEm0OY/preview'
]
const currentSrc = ref(cvSources[0])
function switchCV(i) { currentSrc.value = cvSources[i] }
</script>

<template>
<div style="display: flex; height: 100%; flex-direction: column">
    <nav class="download-bar">
        <a href="/files/LouizaMoran.pdf" class="download" style="z-index: 10" download target="_blank">
            <span style="display: flex" class="border">
                <img src="@/assets/Resume/download.png" class="icon-image" />
                <p style="margin-top: 2px">Download</p>
            </span>
        </a>

        <a :href="currentSrc" class="download" style="z-index: 10" target="_blank">
            <span style="display: flex" class="border">
                <img src="@/assets/Resume/open.png" class="icon-image" />
                <p style="margin-top: 2px">Open In New Tab</p>
            </span>
        </a>

        <div style="margin-left: 8px; display:flex; gap:6px; align-items:center">
            <button class="download" @click="switchCV(0)">CV 1</button>
            <button class="download" @click="switchCV(1)">CV 2</button>
            
        </div>
    </nav>
    
    <div class="frame" style="z-index: 99; position: relative;">
        <iframe class="frame-embed" :src="currentSrc"></iframe>
        <span v-if="windowsStore.activeWindow != 'ResumeWindow'" style="bottom: 0; left: 0; width: 100%; height: 95%; position: absolute" class="overlay"></span>
    </div>
    
</div>
</template>

  
<style scoped>
.download {
    vertical-align: middle;
    box-shadow: 1.5px 1.5px black;
    border-top: solid rgb(250, 250, 250) 1.5px;
    border-left: solid rgb(250, 250, 250) 1.5px;
    border-bottom: solid rgb(90, 90, 90) 1.5px;
    border-right: solid rgb(90, 90, 90) 1.5px;
    background: rgb(192, 192, 192);
    padding: 2px;
    margin-right: 5px;
}

.download:active {
    box-shadow: none;
    background: repeating-conic-gradient(rgb(189, 190, 189) 0% 25%,
            rgb(255, 255, 255) 0% 50%) 50% / 2px 2px;
    border-top: solid rgb(0, 0, 0) 1.5px;
    border-left: solid rgb(0, 0, 0) 1.5px;
    border-bottom: solid rgb(250, 250, 250) 1.5px;
    border-right: solid rgb(250, 250, 250) 1.5px;
}

.download-bar {
    border: 1px white solid;
    outline: 1px rgb(123, 125, 123) solid;
    font-size: 12px;
    padding: 4px 4px 4px 4px;
    width: 100%;
    display: flex;
    flex-direction: row;
}

.icon-image {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-top: 0;
    margin-bottom: 0;
}

.border {
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    font-family: "MS Sans Serif";
    src: url("~@/assets/fonts/MS-Sans-Serif.ttf");
}

.border:active {
    border: black dotted 1px;
}

.download:hover {
    cursor: pointer;
}

.frame {
    width: 100%;
    height: 97.5%;
}

.frame-embed {
    width: 100%;
    height: 100%;
    border: none;
}
</style>
