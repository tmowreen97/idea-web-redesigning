import Carousel from "./Carousel";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {React, useState, useEffect, useCallback} from "react";
import ReactPlayer from "react-player/lazy";
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import {BsChevronCompactDown, BsChevronCompactUp} from 'react-icons/bs';

import TextBody from "./TextBody";



function Culture_Page_Two(){

  const [isClient, setIsClient] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [category, setCategory] = useState("All Developments")
  const allPosts = [
    //MSC Project Page
    {
      id: 13,
      title: "MSC Project Highlight Page",
      date: 'May 31, 2024',
      text: [
        "We've developed a highlight page all about the progress on our MSC Miami Cruise Terminal Project. There are some new interactive features, like the before and after image slider. It shows the progress we've made from August 2023 to March 2024. We've come a long way and we're so much closer to the finish line! Make sure to follow along with us on our journey.",
      ],
      link: {
        title: 'MSC Project Highlight Page',
        url: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
      },
      video_small : {
        title: "msc_groundbreak",
        url: "/assets/culture/MSC-Highlight/MSC Highlight.mp4",
        link: 'https://www.ideaaec.com/MSC-Miami-Cruise-Terminal-Highlight',
        height: '500px',
        width: '300px',
      },
      video_large: {
        title: "msc_groundbreak",
        url: "/assets/culture/MSC-Highlight/MSC Highlight.mp4",
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
        height: '500px',
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
    if (e.target.innerText == "Cultural Developments" || e.target.innerText == "Project Developments"){
      allPosts.map((post)=>{
        if(post.category == e.target.innerText){
          filtered.push(post)
        }
      })
    } else { 
      allPosts.map((post)=>{
        filtered.push(post)
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
        <h1 className="md:text-[1100%] text-center text-8xl font-thin text-primary_text md:text-left tracking-wider">Culture</h1>
      </motion.div>
      {/* Featured Video */}
      <div>
        <div className="pb-[35px]">
          <h1 className="md:text-[500%] text-4xl text-center items-center tracking-wide font-light text-primary_text/70">IDEA Turns 3!</h1>
        </div>
        { isClient ? 
          <div className="justify-center items-center flex md:w-[100%] md:h=[100%] overflow-hidden">
            {
              !isBreakPoint ? 
                <ReactPlayer 
                // new 3yr video
                // https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA
                // 2 yr video
                // https://www.youtube.com/watch?v=xUWu2wi4o-A&ab_channel=IDEA
                  url={'https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA'}
                  playing
                  loop
                  muted
                  controls
                  width='900px'
                  height='500px'
                /> : 
                <ReactPlayer 
                  url={'https://www.youtube.com/watch?v=SjdX1mYmiP0&ab_channel=IDEA'}
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
                    <div className="justify-center">
                    <motion.div 
                      initial={{opacity:0.15}}
                      whileInView={{opacity:1, scale:[0.95, 1], transition:{duration:1.5}}}
                      className="bg-secondary/40 rounded-xl p-[5%] tracking-wider font-light xl:max-h-[900px]  h-full">
                      <div className="xl:ml-5">
                        <p className="italic text-[10px]">{post.category=="Cultural Developments" ? "Cultural Development" : "Project Development"}</p>
                      </div>
                    <div className={post.extended_text ? "xl:flex justify-between  " : "xl:flex justify-between  items-center"}>
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
                         : ""                    
                      }
                      </div>
                      {/* Text body */}
                      <div className="m-3 max-w-[700px] z-[9]">
                        <TextBody post={post} />
                        {post.link ? 
                          <Link href={post.link.url} legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer" aria-label="MSC-Project-Page" className="hover:text-light_accent_2 hover:underline 2xl:text-xl text-lg text-light_accent_1 font-medium">
                              {post.link.title}
                            </a>
                          </Link> 
                          : ''}
                      </div>
                    </div>
                    </motion.div>
                    </div>
                    :
                    //ODD POSTS
                    <div className="">
                    <motion.div 
                    initial={{opacity:0.15}}
                    whileInView={{opacity:1, scale:[1.05, 1], transition:{duration:1.5}}} className="bg-secondary/40 rounded-xl p-[5%] tracking-wider font-light xl:max-h-[900px] h-full">
                    <div className="ml-3">
                      <p className="italic text-[10px]">{post.category=="Cultural Developments" ? "Cultural Development" : "Project Development"}</p>
                    </div>
                      <div className={post.extended_text ? "xl:flex justify-between" : "xl:flex justify-between items-center"}>
                      {/* Text body */}
                      <div className="m-3 max-w-[700px] z-[9]">
                        <TextBody post={post} />
                        {post.link ? 
                        <Link href={post.link.url} legacyBehavior>
                          <a target="_blank" rel="noopener noreferrer" aria-label="MSC-Project-Page" className="hover:text-light_accent_2 hover:underline 2xl:text-xl text-lg text-light_accent_1 font-medium">
                            {post.link.title}
                          </a>
                        </Link>
                        : ''}
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

export default Culture_Page_Two;