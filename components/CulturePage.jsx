import Carousel from "./Carousel";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {React, useState, useEffect, useCallback} from "react";
import ReactPlayer from "react-player/lazy";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';
// import highlight from "/assets/culture/MSC-highlight/MSC Highlight.mp4";

import TextBody from "./TextBody";



function Culture_Page({showDropDown, setShowDropDown}){

  const [isClient, setIsClient] = useState(false)
  // const [showDropDown, setShowDropDown] = useState(false)
  const [category, setCategory] = useState("All Developments")
  const allPosts = [
    // IDEA CULTURE POST
    {
      id: 27,
      title: "IDEA's Culture!",
      date: 'July 8, 2025',
      text: [
        "From our IDEA office in Monroe, Connecticut to behind-the-scenes glimpses of our 3D modeling in action, this video highlights the people, culture, and energy that drive our MEP-FP engineering work. With offices in Connecticut, Miami and New York, IDEA is proud to foster a team-focused environment where innovation and technical excellence come together."  
      ],
      video_small : {
        title: "msc_updated_before_and_after",
        url: "/assets/final_new_landing.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '185px',
        width: '300px',
      },
      video_large: {
        title: "msc_updated_before_and_after",
        url: "/assets/final_new_landing.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '425px',
        width: '675px',
      },
      category: "Cultural Developments",
    },
    // UPDATED MSC BEFORE AND AFTER
    {
      id: 26,
      title: "MSC Miami Cruise Terminal Ribbon Cutting!",
      date: 'April 9, 2025',
      text: [
        "The excitement this week is one for the books! IDEA aec has reached yet another milestone with our world class sized project (MSC Miami Cruise Terminal) that has reached completion & ribbon cutting has taken place. World's largest cruise terminal is open to the public and the many passengers who will be embarking and disembarking through this magnificent cruise Terminal at PortMiami."
        // "We've developed a highlight page all about the progress on our MSC Miami Cruise Terminal Project. There are some new interactive features, like the before and after image slider. It shows the progress we've made from August 2023 to March 2024. We've come a long way and we're so much closer to the finish line! Make sure to follow along with us on our journey.",
      ],
      extended_text: [
        "We are very proud to be a major partner & contributor through the journey that led to this unique build, which beautifully sits at the PortMiami.",
        "Check our project highlight page (before and after interactive slider feature and ribbon cutting images) developed by our in-house software development team.",
        "Will be sharing more amazing content soon, stay tuned!"
      ],
      link: [{
        title: 'MSC Project Highlight Page',
        url: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
      }],
      video_small : {
        title: "msc_updated_before_and_after",
        url: "/assets/msc-beforeandafter-video.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '185px',
        width: '300px',
      },
      video_large: {
        title: "msc_updated_before_and_after",
        url: "/assets/msc-beforeandafter-video.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '425px',
        width: '675px',
      },
      category: "Project Developments",
    },
    //IDEA OFFICE
    {
      id: 25,
      title: "IDEA's New Miami Office",
      date: 'December 24, 2024',
      text: [
        "Happy Holidays!! What an amazing 2024 it has been for the IDEA team. As the year ends, we are proud and excited to share that we have moved into a new office right in the heart of Downtown Miami! As we continue to grow and innovate in the MEP-FP industry, we remain committed to empowering nationwide and internationally! Even more so in our new Miami office."
            ],
      extended_text:[
        "This chapter marks a significant milestone as we push the boundaries of engineering excellence and collaboration. Here;s to continuously evolving and reaching for the stars!",
        "Comve visit us! Located:",
        "25 SE 2nd Ave, Suite 450, Miami, FL 33131"
      ],

      slideshow: [
        {
          title: 'Idea_Office_1',
          image: '/assets/culture/idea-office/idea-office-1.jpeg',
        },
        {
          title: 'Idea_Office_2',
          image: '/assets/culture/idea-office/idea-office-2.jpeg',
        },
        {
          title: 'Idea_Office_3',
          image: '/assets/culture/idea-office/idea-office-3.jpeg',
        },
        {
          title: 'Idea_Office_4',
          image: '/assets/culture/idea-office/idea-office-4.jpeg',
        },
      ],
      link:[
        {
          title: 'Miami Office Address',
          url: 'https://maps.app.goo.gl/5vz69Uz2WWyiXvoq8'
        }
      ],
      special: "2xl:w-[700px] 2xl:h-[575px] xl:w-[650px] xl:h-[525px] lg:w-[500px] lg:h-[425px] w-[325px] h-[250px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Culture Developments",
    },
    //Miami Meet Up
    {
      id: 24,
      title: "Work Hard, Play Hard",
      date: 'November 14, 2024',
      text: [
        "After a productive day on-site surveying our project, our team, along with some of our amazing collaborating partners, had the chance to unwind at El Patio in Miami. It was great to connect outside of work, share laughs and celebrate our hard work together. Here's to strong partnerships and making big things happen!"
            ],
      // extended_text:[
      //   "The Little Theater acts as an important element to LIU's School of Performing Arts program. IDEA aec is proud to provide the effective services to ensure comfort and proper will facilitate Arts and Talents to flourish!"
      // ],
      slideshow: [
        {
          title: 'Work_Hard_1',
          image: '/assets/culture/work-hard/work-hard-1.jpeg',
        },
        {
          title: 'Work_Hard_2',
          image: '/assets/culture/work-hard/work-hard-2.jpeg',
        },
        {
          title: 'Work_Hard_3',
          image: '/assets/culture/work-hard/work-hard-3.jpeg',
        },
        {
          title: 'Work_Hard_4',
          image: '/assets/culture/work-hard/work-hard-4.jpeg',
        },
      ],
      special: "2xl:w-[700px] 2xl:h-[575px] xl:w-[650px] xl:h-[525px] lg:w-[500px] lg:h-[425px] w-[325px] h-[250px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Culture Developments",
    },
    //MSC Progress update
    {
      id: 23,
      title: "MSC Cruise Terminal Progress Update",
      date: 'September 30, 2024',
      text: [
        "Our team is on-site documenting the progress of multiple key operations: the construction of a modern building facade, the connection of shore power, and the final stages of dredging. From groundbreaking to final touches, we're proud to bring this project to life. Stay tuned for more updates!"
            ],
      // extended_text:[
      //   "The Little Theater acts as an important element to LIU's School of Performing Arts program. IDEA aec is proud to provide the effective services to ensure comfort and proper will facilitate Arts and Talents to flourish!"
      // ],
      slideshow: [
        {
          title: 'MSC_Progress_1',
          image: '/assets/culture/MSC-progress/MSC-progress-1.jpeg',
        },
        {
          title: 'MSC_Progress_2',
          image: '/assets/culture/MSC-progress/MSC-progress-2.jpeg',
        },
        {
          title: 'MSC_Progress_3',
          image: '/assets/culture/MSC-progress/MSC-progress-3.jpeg',
        },
      ],
      // link: [
      //   {
      //     title: 'Support Families in Bangladesh',
      //     url: 'https://gofund.me/94760dee'
      //   }
      // ],
      special: "2xl:w-[700px] 2xl:h-[575px] xl:w-[650px] xl:h-[525px] lg:w-[500px] lg:h-[425px] w-[325px] h-[250px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Project Developments",
    },
    // LIU POST
    {
      id: 22,
      title: "LIU Little Theatre Building Progress Update",
      date: 'September 13, 2024',
      text: [
        "IDEA aec was privileged to provide Mechanical and Electrical Engineering Services on the existing historic Little Theatre building - Performance Arts Center, at Long Island University at the Brookville campus. Swipe through to see progress on this project which is scheduled to be completed in September!"
            ],
      extended_text:[
        "The Little Theater acts as an important element to LIU's School of Performing Arts program. IDEA aec is proud to provide the effective services to ensure comfort and proper will facilitate Arts and Talents to flourish!"
      ],
      slideshow: [
        {
          title: 'LIU_1',
          image: '/assets/culture/LIU/LIU-1.jpeg',
        },
        {
          title: 'LIU_2',
          image: '/assets/culture/LIU/LIU-2.jpeg',
        },
        {
          title: 'LIU_3',
          image: '/assets/culture/LIU/LIU-3.jpeg',
        },
        {
          title: 'LIU_4',
          image: '/assets/culture/LIU/LIU-4.jpeg',
        },
      ],
      // link: [
      //   {
      //     title: 'Support Families in Bangladesh',
      //     url: 'https://gofund.me/94760dee'
      //   }
      // ],
      special: "2xl:w-[700px] 2xl:h-[575px] xl:w-[650px] xl:h-[525px] lg:w-[500px] lg:h-[425px] w-[325px] h-[250px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Project Developments",
    },
    // BANGLADESH DONATION
    {
      id: 21,
      title: "A Call For Action: Help IDEA AEC Assist Families in Bangladesh",
      date: 'September 05, 2024',
      text: [
        "A CALL FOR ACTION! Our friends and families in Bangladesh are in desperate need of help after devastating floods have displaced over 5.7 million people. Your donation, no matter how small, will have a real impact and help us provide essential aid to those affected-plus, every dollar will be matched to double the suppport!"
            ],
      extended_text:[
        "Please consider clicking the link in our Bio to donate or share it with others who might want to help. Thank you! From IDEA AEC."
      ],
      slideshow: [
        {
          title: 'donation_1',
          image: '/assets/culture/donation/donation-1.jpg',
        },
        {
          title: 'donation_2',
          image: '/assets/culture/donation/donation-2.jpg',
        },
        {
          title: 'donation_3',
          image: '/assets/culture/donation/donation-3.jpeg',
        },
      ],
      link: [
        {
          title: 'Support Families in Bangladesh',
          url: 'https://gofund.me/94760dee'
        }
      ],
      special: "2xl:w-[700px] 2xl:h-[575px] xl:w-[650px] xl:h-[525px] lg:w-[500px] lg:h-[425px] w-[325px] h-[250px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Community Developments",
    },
    // CONCEPTUALS HIGHLIGHT
    {
      id: 20,
      title: "Team Highlight: IDEA US Conceptual Interns",
      date: 'August 19, 2024',
      text: [
        "Wrapping up the US Conceptual Summer Internship of 2024 at IDEA aec! With some amazing summer internships later, these dedicated interns have shown incredible growth and perseverance. Their journey has been a true reflection of their hard work and passion, setting the stage for them to become exceptional engineers in the future."
      ],
      extended_text:[
        "Here are some images that display their bright personalities, which bring a wonderful touch to both themselves and the team!! We’re excited to see the amazing things they’ll achieve next. Greatest 'IDEAs' in the making!"
      ],
      slideshow: [
        {
          title: 'conceptuals_1',
          image: '/assets/culture/conceptuals/conceptual-1.jpg',
        },
        {
          title: 'conceptuals_2',
          image: '/assets/culture/conceptuals/conceptual-2.jpeg',
        },
        {
          title: 'Team_Celebration_3',
          image: '/assets/culture/conceptuals/conceptual-3.jpg',
        },
        {
          title: 'Team_Celebration_4',
          image: '/assets/culture/conceptuals/conceptual-4.jpeg',
        },
        {
          title: 'Team_Celebration_5',
          image: '/assets/culture/conceptuals/conceptual-5.jpg',
        },
        {
          title: 'Team_Celebration_6',
          image: '/assets/culture/conceptuals/conceptual-6.jpeg',
        },

      ],
      special: "2xl:w-[725px] 2xl:h-[650px] xl:w-[650px] xl:h-[650px]  lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Cultural Developments",
    },
    // TEAM CELEBRATION
    {
      id: 19,
      title: "3 Year Team Celebration",
      date: 'August 16, 2024',
      text: [
        "IDEA is celebrating three (3) years of successfully contribution to the AEC industry, this past week topped it off with celebratory office vibes! From hard work to endless fun, our team has truly made every moment special. A huges hout out to our founder Kazi for making the team feel appreciated with these incredible gifts. Here's to many more years of teamwork and success."
      ],
      slideshow: [
        {
          title: 'Team_Celebration_1',
          image: '/assets/culture/team-gifts/team-gifts-1.jpeg',
        },
        {
          title: 'Team_Celebration_2',
          image: '/assets/culture/team-gifts/team-gifts-2.jpeg',
        },
        {
          title: 'Team_Celebration_3',
          image: '/assets/culture/team-gifts/team-gifts-3.jpeg',
        },
        {
          title: 'Team_Celebration_4',
          image: '/assets/culture/team-gifts/team-gifts-4.jpeg',
        },
        {
          title: 'Team_Celebration_5',
          image: '/assets/culture/team-gifts/team-gifts-5.jpeg',
        },

      ],
      special: "2xl:w-[800px] 2xl:h-[680px] xl:w-[700px] xl:h-[600px]  lg:w-[500px] lg:h-[400px] w-[340px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

      category: "Cultural Developments",
    },
    //KHAIR PROGRESS
    {
      id: 18,
      title: "Khair Community Center Progress",
      date: 'August 12, 2024',
      text: [
        "Here we have the remarkable progress of the Khair Community Center in Phoenixville, PA. The vision, current progress & development of this community organization is inspirational. Once, all phases are completed, this project will include a Masjid, Youth Islamic Educational programs, recreational and social programs fro the local community.",

      ],
      extended_text:[
        "IDEA AEC was priviliged to provide Engineering services and be part of this transformative journey, and empower the Khair organization to complete Phase 2A successfully.",
        "The Khair organization continues to raise funds for the construction of the next phase (Phase-3) of this campus. We invite you to join us in supporting this inspiring movement & community organization."
      ],
      link: [
        {
          title: 'Support the Khair Community Center',
          url: 'https://www.khaircenter.org/donate',
        },
      ],
      video_small : {
        title: "khair_progress",
        url: "/assets/culture/khair/khair-video.mp4",
        link: 'https://www.instagram.com/reel/C-lhhfSufu9/?igsh=MTh4amx3eHh4Ynp0Zw==',
        height: '500px',
        width: '300px',
      },
      video_large: {
        title: "khair_progress",
        url: "/assets/culture/khair/khair-video.mp4",
        link: 'https://www.instagram.com/reel/C-lhhfSufu9/?igsh=MTh4amx3eHh4Ynp0Zw==',
        height: '750px',
        width: '600px',
      },
      category: "Project Developments",
    },
    // NANCY HIGHLIGHT
    {
      id: 17,
      title: "Team Spotlight: Nancy Karim",
      date: 'July 29, 2024',
      text: [
        "Meet our Creative Director, Nancy! With an eye for detail and a passion for creativity, our Creative Director is the lead visionary behind our brand's stunning visuals and innovative content. From conceptualizing color palettes to leading our team with inspiration and enthusiasm, they ensure that every project shines."
      ],
      extended_text: [
        "Not only does she bring vibrant ideas to life, but she also makes sure out Friday meetings end with 'Compliment Friday', where we celebrate the amazing work of each team member!",
        "Get to know the creative force that drives our success!"
      ],
      slideshow: [
        {
          title: 'Nancy_Highlight_1',
          image: '/assets/culture/nancy/nancy-1.jpeg',
        },
        {
          title: 'Nancy_Highlight_2',
          image: '/assets/culture/nancy/nancy-2.jpeg',
        },
        {
          title: 'Nancy_Highlight_3',
          image: '/assets/culture/nancy/nancy-3.jpeg',
        },
      ],
      category: "Cultural Developments",
    },
    //EEFI Phase 1
    {
      id: 16,
      title: "East End Food Institute - Phase 1",
      date: 'July 22, 2024',
      text: [
        "In collaboration with GDP, IDEA AEC provided MEP-FP Engineering services to achieve this project milestone. We are very proud of this project in supporting the local farmers and associated community. Check out this video celebrating completion of the first phase of our project and our hardwork.",
      ],
      extended_text: [
        '"East End Food envisions the new site as a dynamic Hub that enhances the local food system. The development includes state-of-the-art facilities for food processing, distribution, and retail, as well as educational spaces for workshops and events. This site will serve as a central point for farmers, producers, and consumers to connect and strengthen the local food system."',
        '- Miranda, East End Food'
      ],
      link: [
        {
          title: 'East End Food - Food Hub',
          url: 'https://gdp.work/',
        },
        {
          title: 'GDP',
          url: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        },

      ],
      video_small : {
        title: "eefi_video",
        url: "https://www.youtube.com/watch?v=Zc6OkoSx_UE&ab_channel=IDEA",
        link: 'https://www.youtube.com/watch?v=Zc6OkoSx_UE&ab_channel=IDEA',
        height: '200px',
        width: '300px',
      },
      video_large: {
        title: "eefi_video",
        url: "https://www.youtube.com/watch?v=Zc6OkoSx_UE&ab_channel=IDEA",
        link: 'https://www.youtube.com/watch?v=Zc6OkoSx_UE&ab_channel=IDEA',
        height: '420px',
        width: '725px',
      },
      category: "Project Developments",
    },
    // FOOTBALL TAPE
    {
      id: 15,
      title: "Teamwork Makes the Dream Work!",
      date: 'July 5, 2024',
      text: [
        "Here we see Kazi playfully showing our Interns a VHS tape of his football skills from back in the day.. Just like a football team, our engineering company thrives on teamwork, precision and strategy. Each project is a game where every engineer, designer and manager plays a crucial role in achieving victory. Whether it's developing cutting-edge technology or delivering complex infrastructure, we score our goals by working together."
      ],
      single_image: {
        title: 'msc_construction_milestone',
        image: '/assets/culture/VHS/VHS.png',
        width: 1000,
        height:500,
      },
      category: "Cultural Developments",
    },
    //NABS HIGHLIGHT
    {
      id: 14,
      title: 'Team Spotlight: Nabila Hoque',
      date: 'June 15, 2024 ',
      text: [
        "Meet Nabila, part of the powerhouse team behind IDEA's marketing magic! From outreach and networking to creating stunning videos, she truly lets her creative juices flow. Whether it's site visits, photo and video shoots, or digital design, Nabila wears many hats and rocks each one with style."
        ],
      slideshow: [
        {
          title: 'Nabs_Highlight_1',
          image: '/assets/culture/nabs/Nabs-1.png'
        },
        {
          title: 'Nabs_Highlight_2',
          image: '/assets/culture/nabs/Nabs-2.png'
        },
        {
          title: 'Nabs_Highlight_3',
          image: '/assets/culture/nabs/Nabs-3.png'
        },
        {
          title: 'Nabs_Highlight_4',
          image: '/assets/culture/nabs/Nabs-4.png'
        },
        {
          title: 'Nabs_Highlight_5',
          image: '/assets/culture/nabs/Nabs-5.png'
        },
        {
          title: 'Nabs_Highlight_6',
          image: '/assets/culture/nabs/Nabs-6.png'
        },
      ],
      special: "2xl:w-[800px] 2xl:h-[680px] xl:w-[700px] xl:h-[600px]  lg:w-[500px] lg:h-[400px] w-[340px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",
      category: "Cultural Developments",
    },
    //MSC Project Page
    {
      id: 13,
      title: "MSC Project Highlight Page",
      date: 'May 31, 2024',
      text: [
        "We've developed a highlight page all about the progress on our MSC Miami Cruise Terminal Project. There are some new interactive features, like the before and after image slider. It shows the progress we've made from August 2023 to March 2024. We've come a long way and we're so much closer to the finish line! Make sure to follow along with us on our journey.",
      ],
      link: [{
        title: 'MSC Project Highlight Page',
        url: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
      }],
      video_small : {
        title: "msc_groundbreak",
        url: "/assets/MSC-Highlight.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '250px',
        width: '300px',
      },
      video_large: {
        title: "msc_groundbreak",
        url: "/assets/MSC-Highlight.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '350px',
        width: '615px',
      },
      category: "Project Developments",
    },
    //MSC CONSTRUCTION MILESTONE
    {
      id: 12,
      title: "MSC Construction Milestone",
      date: 'April 30, 2024',
      text: [
        "Another milestone achieved at IDEA! Check out the view from the 6th level of our Garage as we witness the installation of our new cooling towers on the 4th level. These towers are crucial to our building’s mechanical system, marking a significant step towards completing our MEP systems. Let’s keep the progress rolling!",
      ],
      single_image: {
        title: 'msc_construction_milestone',
        image: '/assets/culture/MSC-milestone/MSC-Construction-Milestone.jpg',
        width: 1000,
        height:500,
      },
      category: "Project Developments",
    },
    //3 YEAR ANNIVERSARY
    {
      id: 11,
      title: 'IDEA Turns 3',
      date: 'April 19, 2024 ',
      text: [
        "Three years of successfully contributing to the AEC industry and we are proud of it. Good IDEAs are contagious and as our team continues to grow, we look forward to welcoming new challenges and opportunities. Thank You Kazi, Vinoo, Jameer, Sm, Karl, Hassan, Jacob, Matt, Nancy, Nabila and Tasreen for your efforts, commitments, and hard work.",
        ],
      slideshow: [
        {
          title: '3_year_anniversary_1',
          image: '/assets/culture/3-year/MSC-site.jpg'
        },
        {
          title: '3_year_anniversary_2',
          image: '/assets/culture/3-year/MSC-site-updated.jpg'
        },
        {
          title: '3_year_anniversary_3',
          image: '/assets/culture/3-year/team-webex.jpeg'
        },
      ],
      special: "2xl:w-[895px] 2xl:h-[680px] xl:w-[700px] xl:h-[600px]  lg:w-[500px] lg:h-[400px] w-[340px] h-[300px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",
      category: "Cultural Developments",
    },
    //JAMEER UPDATE
    {
      id: 10,
      title: 'Team Spotlight: Jameer Ali',
      date: 'October 10, 2023 ',
      text: [
        "Meet Jameer Ali, IDEA’s Plumbing & FireProtection Engineer. The team at IDEA is appreciative of Jameer’s skills and dedication to the MEP-FP & AEC industry. We ask Jameer some questions about his experience so far. Jameer shares: \“My experience with IDEA has been transformative since I began working with the firm. The collaborative environment has nurtured my professional growth, and I'm enthusiastic about continuing to expand my expertise beyond plumbing and fire protection engineering.\"",
        ],
      extended_text: [
        "IDEA has empowered me to excel in adopting a holistic approach to construction, allowing me to consider and contribute to a broader range of factors and processes that impact our projects.\”",
        "Thank you for service Jameer, may you continue to feel empowered at IDEA!"
        ],
      slideshow: [
        {
          title: 'jameer-1',
          image: '/assets/culture/jameer/jameer-1.jpg'
        },
        {
          title: 'jameer-2',
          image: '/assets/culture/jameer/jameer-2.jpg'
        },
      ],
      category: "Cultural Developments",
    },
    //J&S UPDATE
    {
      id: 9,
      title: 'J&S Warehouse Unveiling',
      date: 'October 10, 2023 ',
      text: [
        "A moment of Triumph,Our MEP-FP experts at IDEA are thrilled to unveil our latest project in Monroe, Connecticut, where we brought Jim’s Tree Service’s warehouse visions to life. With 25+ years of success in the tree sourcing industry, James P DSelMedico is a licensed Arborist in the state of CT and has been serving Fairfield County since 1970.",
        ],
      extended_text: [
        "Jims Tree Services entrusted IDEA with their vision, and the result is nothing short of exhilarating. Our Connecticut Team, together with IDEA’s principles, recently had an official walk-through, and the dedication poured into this project truly showcases engineering excellence!",
      ],
      slideshow: [
        {
          title: 'j&s-1',
          image: '/assets/culture/j&s/j&s-1.jpg'
        },
        {
          title: 'j&s-2',
          image: '/assets/culture/j&s/j&s-2.jpg'
        },
        {
          title: 'j&s-3',
          image: '/assets/culture/j&s/j&s-3.jpg'
        },
        {
          title: 'j&s-4',
          image: '/assets/culture/j&s/j&s-4.jpg'
        },
      ],
      special: "2xl:w-[800px] 2xl:h-[700px] xl:w-[700px] xl:h-[600px] lg:w-[600px] lg:h-[500px] w-[320px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",


      category: "Project Developments",
    },
    // 2 Year BBQ
    {
      id: 8,
      title: '2 Year BBQ',
      date: 'May 12, 2023',
      text: [
        "Celebrating 2 Remarkable Years: A Fusion BBQ Extravaganza! IDEA’s 2-year anniversary marked a splendid occasion as we united the dedicated forces of MSC, Fincantieri, and IDEA for a memorable Company BBQ. Orchestrated meticulously by the Marketing team, the event boasted an inviting ambiance, complemented by the culinary creations of our in-house engineering talents turned BBQ maestros. This harmonious collaboration embodies our unwavering commitment to excellence and the spirit of collaboration. Cheers to sharing in this journey of success!",
        ],
      extended_text: [
        "Beyond the great food, the event deepened connections among colleagues, laughter and shared stories have left a sense of camaraderie and a renewed drive for the future. Reminding everyone of the people behind their roles throughout this journey of the soon to be, MSC Cruise Terminal.",
        "This celebration wasn't just about the past but also signaled a stronger future together. The Fusion BBQ Extravaganza demonstrated our ability to collaborate and adapt, setting the tone for continued growth and success.",
        "The Marketing team's thorough preparation was clear in the event's details, from combining company identities in decorations to organizing engaging activities. The delicious food, grilled by our engineering talents, mirrored the blend of skills they contribute.",
      ],
      slideshow: [
        {
          title: 'bbq-1',
          image: '/assets/culture/bbq/bbq-1-crop.png'
        },
        {
          title: 'bbq-2',
          image: '/assets/culture/bbq/bbq-2-crop.png'
        },
        {
          title: 'bbq-3',
          image: '/assets/culture/bbq/bbq-3.jpeg'
        },
        {
          title: 'bbq-4',
          image: '/assets/culture/bbq/bbq-4.jpeg'
        },
        {
          title: 'bbq-5',
          image: '/assets/culture/bbq/bbq-5-crop.png'
        }
      ],
      category: "Cultural Developments",
    },
    // 2 YEAR ANNIVERSARY
    {
      id: 7,
      title: "IDEA Turns 2",
      date: 'March 11, 2023',
      text: [
        "IDEA is celebrating 2 years of growth, innovation and success. We continue to strive to enhance the MEP-FP industry with exceeding standards and inter-disciplinary solutions. Watch this video our Marketing Manager created to show our journey!",
      ],
      video_small : {
        title: "msc_groundbreak",
        url: "https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA",
        link: 'https://www.linkedin.com/posts/idea-aec_engineeringexcellence-activity-7108521663280881665-DO3J?utm_source=share&utm_medium=member_desktop',
        height: '200px',
        width: '300px',
      },
      video_large: {
        title: "msc_groundbreak",
        url: "https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA",
        link: 'https://www.linkedin.com/posts/idea-aec_engineeringexcellence-activity-7108521663280881665-DO3J?utm_source=share&utm_medium=member_desktop',
        height: '350px',
        width: '615px',
      },
      category: "Cultural Developments",
    },
    // Project EEFI Update *
    {
      id: 6,
      title: 'Project EEFI Update',
      date: 'August 21, 2023',
      text: [
        "Would you look at the progress here at East End Food Institute! This collection of site visits show the envelope closure and the installation of underground plumbing work. The envelope closure marks the first step toward waterproofing and structural integrity, while the installation of underground plumbing is a critical infrastructure development for building commercial kitchen program!",
      ],
      slideshow: [
        {
          title: 'eefi-1',
          image: '/assets/culture/eefi/1.png'
        },
        {
          title: 'eefi-2',
          image: '/assets/culture/eefi/2.JPG'
        },
        {
          title: 'eefi-3',
          image: '/assets/culture/eefi/3.jpeg'
        },
        {
          title: 'eefi-4',
          image: '/assets/culture/eefi/4.jpeg'
        },
        {
          title: 'eefi-5',
          image: '/assets/culture/eefi/5.jpeg'
        }
      ],
      category: "Project Developments",
      special: "xl:w-[700px] xl:h-[650px] w-[320px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",

    },
    //Project MSC Update *
    {
      id: 5,
      title: 'Project MSC Update',
      date: 'August 18, 2023',
      text: [
        "Witnessing remarkable progress at the MSC Cruise Terminal in Miami, Florida! As the structural steel installation nears completion, the project sails smoothly ahead. Building systems are racing towards the finish line, and a major milestone has been achieved with the completion of the curtain wall installation, while the dredging progress continues to impress. The future of cruising is on the horizon at MSC Terminal! A major shout out to all the hard working disciplines involved in what we call greatness!",
      ],
      slideshow: [
        {
          title: 'msc-1',
          image: '/assets/culture/msc/1.jpg'
        },
        {
          title: 'msc-2',
          image: '/assets/culture/msc/2.jpg'
        },
        {
          title: 'msc-3',
          image: '/assets/culture/msc/3.jpg'
        },
        {
          title: 'msc-4',
          image: '/assets/culture/msc/4.jpg'
        },
        {
          title: 'msc-5',
          image: '/assets/culture/msc/5.jpg'
        },
        {
          title: 'msc-6',
          image: '/assets/culture/msc/6.jpg'
        },
        {
          title: 'msc-7',
          image: '/assets/culture/msc/7.jpg'
        },
        {
          title: 'msc-8',
          image: '/assets/culture/msc/8.jpg'
        },
        {
          title: 'msc-9',
          image: '/assets/culture/msc/9.jpg'
        },
        {
          title: 'msc-10',
          image: '/assets/culture/msc/10.jpg'
        },
      ],
      category: "Project Developments",
    },
    //IDEA Interns Summer 
    {
      id: 4,
      title: "The Summer of IDEA's 2023 Interns",
      date: 'August 15, 2023',
      text: [
        "Celebrating a fantastic summer with our talented interns! Raiyan, Abrar, and Preo have been rocking their 3rd year interning journey at IDEA. Their passion and dedication have truly made a mark on our interdisciplinary engineering projects. Here's to a summer of growth and innovation!",
      ],
      extended_text: [
        "Reflecting on the past few months, it's evident that our exceptional interns have etched their names into IDEA's legacy during their impactful 3rd year internship journey. The dynamic contributions of Raiyan, Abrar, and Preo have undeniably elevated the outcomes of our cross-disciplinary engineering endeavors at IDEA.",
      ],
      slideshow: [
        {
          title: 'interns-1',
          image: '/assets/culture/interns/1-updated.JPG'
        },
        {
          title: 'interns-2',
          image: '/assets/culture/interns/2-crop.png'
        },
        {
          title: 'interns-3',
          image: '/assets/culture/interns/3-crop.png'
        }
      ],
      category: "Cultural Developments",
      special: "2xl:w-[700px] 2xl:h-[650px] xl:w-[600px] xl:h-[550px] lg:w-[425px] lg:h-[400px] w-[320px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0",
    },
    //IDEA Turns 1
    {
      id: 3,
      title: "IDEA Turns 1!",
      date: 'April 5, 2022',
      text: [
        "Thank you to all of our Team Members, and supporters for being a part of our continued success! We look forward to designing and manigesting more World Class IDEAs!",
      ],
      single_image: {
        title: 'idea_1',
        image: '/assets/idea_turns_1.png',
        width: 1000,
        height:500,
      },
      category: "Cultural Developments",
    },
    //VINOO Promoted
    {
      id: 2,
      title: "Vinoo is Promoted to Principal!",
      date: 'April 5, 2022',
      text: [
        "Thank you to all of our Team Members, and supporters for being a part of our continued success! We look forward to designing and manigesting more World Class IDEAs!",
      ],
      single_image: {
        title: 'idea_1',
        image: '/assets/vinoo_promoted.png',
        width: 500,
        height:300,
      },
      category: "Cultural Developments",
    },
    //MSC Groundbreaking
    {
      id: 1,
      title: "MSC Groundbreaking",
      date: 'March 10, 2022',
      text: [
        "For the past year, IDEA has been providing MEP-FP Engineering services & expertise on MSC’s World’s Largest Cruise Ship Terminal project. We celebrated this achievement with a Groundbreaking Ceremony at the Port of Miami on March 10, 2022!",
      ],
      video_small : {
        title: "msc_groundbreak",
        url: "/assets/msc_groundbreaking.mp4",
        link: 'https://www.facebook.com/reel/661496844905448',
        height: '500px',
        width: '300px',
      },
      video_large: {
        title: "msc_groundbreak",
        url: "/assets/msc_groundbreaking.mp4",
        link: 'https://www.facebook.com/reel/661496844905448',
        height: '750px',
        width: '600px',
      },
      category: "Cultural Developments",
    },
  ]
  const [posts, setPosts] = useState(allPosts)
  // to change video dimensions based on screen size
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      setIsClient(true)
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };
  const isBreakPoint = useMediaQuery(900)

  //Each post will have 
  //Title
  //Date
  //Carousel Images
  //Text
  //Id number, to determine alternating layouts

  // All Developments selected , keep state the original list
  // Cultural Developments selected, change state to include only cultural category
  // Project Developments selected, change state to include only project category

  function categorySelect(e){
    const filtered = []
    if (e.target.innerText == "All Developments"){
      allPosts.map((post)=>{
        filtered.push(post)
      })
    } else { 
      allPosts.map((post)=>{
        if(post.category == e.target.innerText){
          filtered.push(post)
        }
      })
    } 
    setShowDropDown(false)
    setCategory(e.target.innerText)
    setPosts(filtered)
  }

  return(
    <div className="w-screen h-full bg-primary">
      {/* Page Title */}
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1, transition: {delay:1, duration:1}}}
      className="md:px-20 pt-20 pb-[80px]">
        <h1 className="xl:text-[1100%] lg:text-9xl text-center text-5xl font-thin text-primary_text md:text-left tracking-wider">Developments</h1>
      </motion.div>
      {/* Featured Video */}
      <div>
        <div className="pb-[35px]">
          <h1 className="md:text-[500%] text-4xl text-center items-center tracking-wide font-light text-primary_text/70">IDEA Turns 4!</h1>
        </div>
        { isClient ? 
          <div className="justify-center items-center flex md:w-[100%] md:h=[100%] overflow-hidden rounded-2xl">
            {
              !isBreakPoint ? 
                <ReactPlayer 
                // new 3yr video
                // https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA
                // 2 yr video
                // https://www.youtube.com/watch?v=xUWu2wi4o-A&ab_channel=IDEA
                  url={'https://www.youtube.com/watch?v=YjZ27T5unxg&ab_channel=IDEA'}
                  playing
                  loop
                  muted
                  controls
                  width='900px'
                  height='500px'
                /> : 
                <ReactPlayer 
                  url={'https://www.youtube.com/watch?v=YjZ27T5unxg&ab_channel=IDEA'}
                  playing
                  loop
                  muted
                  controls
                  width='375px'
                  height='250px'

                />
            }
          </div> : ""}
      </div>
      {/* Social Media Links */}
      <div className="m-4">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:1.5} }}
        className="flex justify-evenly lg:p-14  rounded-xl text-primary_text/90">
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-5xl mx-2">
            <Link href="https://www.instagram.com/idea.aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <AiFillInstagram/>
                </a>
            </Link>
          </div>
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-5xl mx-2">
            <Link href="https://www.facebook.com/profile.php?id=100076951517206" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <AiFillFacebook/>
                </a>
            </Link>
          </div>
          <div className="bg-tertiary/80 hover:bg-accent_2/80  rounded-full p-7 text-5xl mx-2">
            <Link href="https://www.linkedin.com/company/idea-aec/" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <AiFillLinkedin/>
                </a>
            </Link>
          </div>
        </motion.div>
        
      </div> 
      {/* Posts Filter */}
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1, transition:{duration:2, delay:2} }}className="items-center justify-left pl-[5%] flex">
        <div className="relative items-center" id='drop_down_parent'>
            {/* <label className="text-2xl text-secondary_text mr-2 ">Select a Category:</label> */}
            <button id='drop_down_button' aria-label='drop_down_button' onClick={()=> {setShowDropDown(!showDropDown)}}  data-dropdown-toggle="dropdown" className="relative text-xl justify-between w-[300px] bg-button_bg/30 hover:bg-secondary/70 focus:ring-4 focus:outline-none focus:ring-secondary_text font-medium rounded-lg  py-2  ml-2 inline-flex items-center text-secondary_text" type="button">
              <p className='mx-2'>{category}</p>
              <motion.p 
              animate={{y:[-1,2,2,-1]}}
              transition={{
                duration: "1",
                repeat: Infinity,
              }}
              className='mx-2 '>
                { showDropDown ? <BsChevronCompactUp/> : <BsChevronCompactDown/>}
              </motion.p>
            </button>
            <div id="dropdown" className={ showDropDown ? "z-10 absolute right-0 md:w-[200px] bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 text-center": "hidden"}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white hover:cursor-pointer" onClick={(e)=> categorySelect(e)}>
                  All Developments
                </li>
                <li className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white hover:cursor-pointer" onClick={(e)=> categorySelect(e)}>
                  Cultural Developments
                </li>
                <li className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white hover:cursor-pointer " onClick={(e)=> categorySelect(e)}>
                  Project Developments
                </li>
                <li className="block px-4 py-2 hover:bg-accent_2/80  hover:text-white hover:cursor-pointer " onClick={(e)=> categorySelect(e)}>
                  Community Developments
                </li>
              </ul>
            </div>
          </div>
      </motion.div>
      {/* Posts body */}
      <div>
        <div className="items-center justify-center bg-primary ">
          {
            posts.map((post, i)=> {
              let counter = i + 1
              return(
                <div key={post.id} className="p-[5%]">
                  {/* Ternary operator for conditional mapping, creating alternating layouts */}
                  {
                    counter%2==0 ? 
                    
                    // EVEN POSTS
                    <div className="h-full justify-center flex xl:block">
                    <motion.div 
                      initial={{opacity:0.15}}
                      whileInView={{opacity:1, scale:[0.95, 1], transition:{duration:1.5}}}
                      className="bg-secondary/40 rounded-xl p-[5%] tracking-wider font-light h-full">
                      <div className="xl:ml-5">
                        <p className="italic text-[10px]">{post.category}</p>
                      </div>
                    <div className={post.extended_text ? "xl:flex justify-between items-center " : "xl:flex justify-between items-center"}>
                      <div className="m-5 z-0">
                      { post.slideshow ? 
                        <div className="items-center justify-center flex">
                          <Carousel
                            array={post.slideshow}
                            custom={post.special ? post.special : "md:w-[630px] md:h-[700px] w-[320px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0"}
                          /> 
                        </div>
                        : ""
                      }
                      { post.single_image ? 
                        <Image src={post.single_image.image} width={post.single_image.width} height={post.single_image.height} alt={post.single_image.title} className="rounded-xl overflow-hidden"/>
                        : ""
                      }
                      {post.video_large && isClient ? 
                      <div className='flex align-middle justify-center'>
                         <Link href={post.video_large.link} legacyBehavior>
                         <a target="_blank" rel="noopener noreferrer" aria-label="MSC Groundbreaking Video">
                           {!isBreakPoint ? 
                           <ReactPlayer 
                           url={post.video_large.url}
                           loop
                           playing
                           controls
                           muted
                           height={post.video_large.height}
                           width={post.video_large.width}
                           className="rounded-xl overflow-hidden justify-center"
                           />
                           : 
                           <ReactPlayer 
                           url={post.video_small.url}
                           loop
                           playing
                           controls
                           muted
                           height={post.video_small.height}
                           width={post.video_small.width}
                           className="rounded-xl overflow-hidden justify-center"
                           />
                         }
                           
         
                         </a>
                         
                         </Link>
                         </div>
                         : ""                    
                      }
                      </div>
                      {/* Text body */}
                      <div className="m-3 max-w-[700px] z-[9]">
                        <TextBody post={post} />
                        <div className='mt-4'>
                          {post.link ? 
                            post.link.map((resource)=> {
                              console.log(resource)
                              return(
                                <div className='py-1'>
                                  <Link href={resource.url} legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer" aria-label="MSC-Project-Page" className="hover:text-light_accent_2 underline 2xl:text-xl text-lg text-light_accent_1 font-medium">
                                      {resource.title}
                                    </a>
                                  </Link> 
                                </div>
                              )
                            })
                            : ''}
                        </div>
                      </div>
                    </div>
                    </motion.div>
                    </div>
                    :
                    //ODD POSTS
                    <div className="h-full justify-center flex xl:block">
                    <motion.div 
                    initial={{opacity:0.15}}
                    whileInView={{opacity:1, scale:[1.05, 1], transition:{duration:1.5}}} 
                    className="bg-secondary/40 rounded-xl p-[5%] tracking-wider font-light h-full">
                    <div className="ml-3">
                      <p className="italic text-[10px]">{post.category}</p>
                      {/* <p className="italic text-[10px]">{post.category=="Cultural Developments" ? "Cultural Development" : "Project Development"}</p> */}
                    </div>
                      <div className={post.extended_text ? "xl:flex justify-between items-center" : "xl:flex justify-between items-center"}>
                      {/* Text body */}
                        <div className="m-3 max-w-[700px] z-[9] h-full">
                          <TextBody post={post} />
                          <div className='mt-4'>
                            {post.link ? 
                              post.link.map((resource)=> {
                                console.log(resource)
                                return(
                                  <div className='py-1'>
                                    <Link href={resource.url} legacyBehavior>
                                      <a target="_blank" rel="noopener noreferrer" aria-label="MSC-Project-Page" className="hover:text-light_accent_2 underline 2xl:text-xl text-lg text-light_accent_1 font-medium">
                                        {resource.title}
                                      </a>
                                    </Link> 
                                  </div>
                                )
                              })
                            : ''}
                          </div>
                      </div>
                      <div className="m-5">
                      { post.slideshow ? 
                        <div className="items-center justify-center flex">
                          <Carousel
                            array={post.slideshow}
                            custom={post.special ? post.special : "md:w-[630px] md:h-[700px] w-[320px] h-[400px] rounded-2xl bg-center bg-cover hover:scale-105  duration-500 transform p-0 z-0"}
                          />
                        </div>
                         : ""
                      }
                      { post.single_image ? 
                        <Image src={post.single_image.image} width={post.single_image.width} height={post.single_image.height} alt={post.single_image.title} className="rounded-xl overflow-hidden"/>
                        : ""
                      }
                      {post.video_large && isClient ? 
                      <div className='flex align-middle'>
                         <Link href={post.video_large.link} legacyBehavior>
                         <a target="_blank" rel="noopener noreferrer" aria-label="MSC Groundbreaking Video">
                           {!isBreakPoint ? 
                           <ReactPlayer 
                           url={post.video_large.url}
                           loop
                           playing
                           controls
                           muted
                           height={post.video_large.height}
                           width={post.video_large.width}
                           className="rounded-xl overflow-hidden"
                           />
                           : 
                           <ReactPlayer 
                           url={post.video_small.url}
                           loop
                           playing
                           controls
                           muted
                           height={post.video_small.height}
                           width={post.video_small.width}
                           className="rounded-xl overflow-hidden"
                           />
                         }
                           
         
                         </a>
                         
                         </Link>
                         </div>
                         : ""                    
                      }
                      </div>
                      
                    </div>
                    </motion.div>
                    </div>
                    
                    
                  }
                  
                </div>)
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Culture_Page;