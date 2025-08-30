import { defineStore } from "pinia";
import ferrisWheel from '@/assets/photography/ferriswheel.jpg';
import beachwalk from '@/assets/photography/beachwalk.jpg';
import boat from '@/assets/photography/boat.jpg';
import rocks from '@/assets/photography/rocks.jpg';
// graphic design imports
import card1 from '@/assets/graphicdesign/card1.png';
import card2 from '@/assets/graphicdesign/card2.png';
import card3 from '@/assets/graphicdesign/card3.png';
import card4 from '@/assets/graphicdesign/card4.png';
import poster1 from '@/assets/graphicdesign/poster1.png';
// logo imports
import colourscheme from '@/assets/logos/colourscheme.png';
import wick from '@/assets/logos/wick.png';
import wicklogo16 from '@/assets/logos/wicklogo16.png';
import wickfinal from '@/assets/logos/wickfinal.png';
// digital art imports
import yarncat from '@/assets/digitalart/yarncat1.png';
import sunsetboat from '@/assets/digitalart/sunsetboat.jpg';
import selfportrait1 from '@/assets/digitalart/selfportrait1.png';
//App mockups
import homepage from '@/assets/wickapp/homepage.png';
import login from '@/assets/wickapp/login.png';
import task from '@/assets/wickapp/task.png';
import onboarding from '@/assets/wickapp/onboarding.png';
// 3d models
import foxfront from '@/assets/3dmodels/fox_front.png';
import sushi from '@/assets/3dmodels/sushi.png';


export const useWindowsStore = defineStore("windows", {
  state: () => ({
    // Height of Fullscreen Window
    // fullscreenWindowHeight: window.innerHeight + "px",

    activeWindow: "",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ImagePreviewWindow",
        windowState: "close",
        displayName: "Media Viewer",
        windowComponent: "ImagePreviewWindow",
        windowContent: "",
        windowContentPadding: {
          top: "1px",
          right: "10px",
          bottom: "10px",
          left: "10px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "file.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
        // imagePreview: file.src
      },
      {
        windowId: "WickAppWindow",
        windowState: "close",
        displayName: "Wick App",
        windowComponent: "window",
        windowContent: "wickapp",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "noss.webp",
        altText: "Wick App",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
    //   {
    //     windowId: "TestBlogWindow",
    //     windowState: "close",
    //     displayName: "Blog",
    //     windowComponent: "window",
    //     windowContent: "testblog",
    //     windowContentPadding: {
    //       top: '0px',
    //       right: '0px',
    //       bottom: '0px',
    //       left: '0px',
    //     },
    //     position: "absolute",
    //     positionX: "6vw",
    //     positionY: "12vh",
    //     iconImage: "noss.webp",
    //     altText: "Blog",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    {
        windowId: "WebDevWindow",
        windowState: "close",
        displayName: "Web Design & Dev",
        windowComponent: "window",
        windowContent: "webdev",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "apple.png",
        altText: "Apple WWDC 2021",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "AppleWWDC2022",
        windowState: "close",
        displayName: "WWDC 2022",
        windowComponent: "window",
        windowContent: "wwdc2022",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "apple2.png",
        altText: "Apple WWDC 2022",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "AppleWWDC2023",
        windowState: "close",
        displayName: "WWDC 2023",
        windowComponent: "window",
        windowContent: "wwdc2023",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "apple3.png",
        altText: "Apple WWDC 2023",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "MailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "mail",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "PhotosWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Photos", // Display Name (title under icon)
        windowComponent: 'FilesWindow', // Window Component (can be changed to use modified windows)
        windowContent: '', // Window Content (used under slots)
        windowContentPadding: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "10vh", // Window Position Y (when first opened)
        positionXLarge: "23vw",
        positionYLarge: "7%",
        iconImage: "photos.png", // Window Icon Image
        altText: "Photos", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInNavbar: true,
        folderContent: [
            {
              id: 0,
              title: "Graphic Design",
              content: [
                {
                  id: 0,
                  title: "Business card 1",
                  type: "photo",
                  src: card1,
                  altText: "card1",
                  size: 2477506,
                },
                {
                  id: 1,
                  title: "Business card 2",
                  type: "photo",
                  src: card2,
                  altText: "card2.png",
                  size: 1265051,
                },
                {
                  id: 2,
                  title: "Business card 3",
                  type: "photo",
                  src: card3,
                  altText: "card3.png",
                  size: 1366527,
                },
                 {
                  id: 2,
                  title: "Business card 4",
                  type: "photo",
                  src: card4,
                  altText: "card4.png",
                  size: 1366527,
                },
                  {
                  id: 2,
                  title: "Psychedelic Pop Poster",
                  type: "photo",
                  src: poster1,
                  altText: "poster1.png",
                  size: 1366527,
                },
              ],
              size: 5109084,
              type: "folder",
              altText: "Leica Q",
            },
            {
              id: 1,
              title: "Photo graphy",
              content: [
                {
                  id: 0,
                  title: "Ferris Wheel",
                  type: "photo",
                  src: ferrisWheel,
                  altText: "Ferris Wheel",
                  size: 2705525,
                },
                {
                  id: 1,
                  title: "Beach Sunset",
                  type: "photo",
                  src: beachwalk,
                  altText: "Beach Sunset",
                  size: 3285824,
                },
                {
                  id: 2,
                  title: "Boat on Water",
                  type: "photo",
                  src: boat,
                  altText: "Boat on Water",
                  size: 2524860,
                },
                {
                  id: 3,
                  title: "Rocks",
                  type: "photo",
                  src: rocks,
                  altText: "Rocks",
                  size: 2126399,
                },
               
              ],
              size: 18318406,
              type: "folder",
              altText: "Yashica FX-7",
            },
            {
              id: 2,
              title: "Logos",
              content: [
                {
                  id: 0,
                  title: "Colourscheme",
                  type: "photo",
                  src: colourscheme,
                  altText: "Colourscheme",
                  size: 4018715,
                },
                {
                  id: 1,
                  title: "Wick Draft",
                  type: "photo",
                  src: wick,
                  altText: "wick.png",
                  size: 6310380,
                },
                {
                  id: 2,
                  title: "Wick logos 16",
                  type: "photo",
                  src: wicklogo16,
                  altText: "wicklogo16.JPG",
                  size: 5023300,
                },
                {
                  id: 3,
                  title: "Wick Final Logo",
                  type: "photo",
                  src: wickfinal,
                  altText: "wickfinal.JPG",
                  size: 4324262,
                },
               
              ],
              size: 78680605,
              type: "folder",
              altText: "Mamiya RB67",
            },
            {
              id: 3,
              title: "Web Design",
              content: [
              
                
              
              ],
              size: 1721208,
              type: "folder",
              altText: "Leica M4-P",
            },
            {
              id: 4,
              title: "Digital Art",
              content: [
                {
                  id: 0,
                  title: "Yarn Cat",
                  type: "photo",
                  src: yarncat,
                  altText: "yarncat1.png",
                  size: 1853391,
                },
                {
                  id: 1,
                  title: "Sunset Boat",
                  type: "photo",
                  src: sunsetboat,
                  altText: "sunsetboat.jpg",
                  size: 1853391,
                },
                {
                  id: 2,
                  title: "Self Portrait 1",
                  type: "photo",
                  src: selfportrait1,
                  altText: "selfportrait1.png",
                  size: 1853391,
                },

                
              ],
              size: 2980788,
              type: "folder",
              altText: "Canon FTb",
            },
            {
              id: 5,
              title: "App Mockups",
              content: [
                {
                  id: 0,
                  title: "Wick Homepage",
                  type: "photo",
                  src: homepage,
                  altText: "homepage wick",
                  size: 1565244,
                },
                {
                  id: 1,
                  title: "Wick Login",
                  type: "photo",
                  src: login,
                  altText: "login wick",
                  size: 1035244,
                },
                {
                  id: 2,
                  title: "Wick Task",
                  type: "photo",
                  src: task,
                  altText: "task wick",
                  size: 1035244,
                },
                {
                  id: 3,
                  title: "Wick Onboarding",
                  type: "photo",  
                  src: onboarding,
                  altText: "onboarding wick",
                  size: 1035244,
                },
               
              ],
              size: 19704734,
              type: "folder",
              altText: "Minolta Dynax",
            },
            {
              id: 6,
              title: "3D Models",
              content: [
                {
                  id: 0,
                  title: "Fox Front",
                  type: "photo",
                  src: foxfront,
                  altText: "fox front",
                  size: 16608265,
                },
                {
                  id: 1,
                  title: "Sushi",
                  type: "photo",
                  src: sushi,
                  altText: "sushi",
                  size: 16608265,
                },
                
              ],
              size: 16608265,
              type: "folder",
              altText: "Rolleiflex K4A",
            },
           
            
          ],
        folderSize: 300000
    },
    ],
  }),

  getters: {
    getFullscreenWindowHeight() {
      let height = "0px";
      if (typeof window !== "undefined") {
        height = window.innerHeight + "px";
      }
      return height;
    },
  },

  actions: {
        getWindowById(windowId) {
            return this.windows.find((window) => window.windowId === windowId)
        },

        getWindowFullscreen(windowId) {
            return this.windows.find((window) => window.windowId === windowId).fullscreen
        },

        getActiveWindow() {
            return this.activeWindow
        },

        setActiveWindow(windowId) {
            this.activeWindow = windowId
        },

        setFullscreen(payload) {
            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }
            const window = getArrItem();
            window.fullscreen = payload.fullscreen;
        },

        zIndexIncrement(windowId) {
            this.zIndex++
            if (document.getElementById(windowId)) {
                document.getElementById(windowId).style.zIndex = this.zIndex
            }
        },

        // Push Active Window
        pushActiveWindow(window) {
            this.activeWindows.push(window)
        },

        // Pop Active Window
        popActiveWindow(window) {
            const windowIndex = this.activeWindows.indexOf(window)
            if (windowIndex !== -1) {
                this.activeWindows.splice(windowIndex, 1)
            }
        },

        pushNewWindow(window) {
            this.windows.push(window)
        },

        setPhotoFolderContent(payload) {
            this.photoFolderContent = payload
        },

        setWindowState(payload) {
            // payload = {'windowState': 'open', 'windowId': 'WindowOne'}

            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }

            const window = getArrItem();

            let preventAppendingOpenWindow = false;
            if (window.windowState == "open" || window.windowState == "minimize") {
                preventAppendingOpenWindow = true;
            }

            if (payload.windowState == "open") {
                window.windowState = payload.windowState;
                setTimeout(() => {
                    this.zIndexIncrement(payload.windowId);
                }, 0);
                setTimeout(() => {
                    this.setActiveWindow(payload.windowId);
                }, 0);
                if (preventAppendingOpenWindow == false) {
                    this.pushActiveWindow(window);
                }
            } else if (payload.windowState == "close") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0);
                setTimeout(() => {
                    this.popActiveWindow(window);
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
            } else if (payload.windowState == "minimize") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
                
            } else {
                console.log("Error: windowState not found or invalid");
            }
        },
    }
});
