import Navbar from "@/components/Navbar"
import ProjectPortfolio from "@/components/ProjectPortfolio"

export default function Industrial(){
  const projects = [
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/838 WEA.jpg',
      width: '700',
      height: '200'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/AMNH - Diorama.jpeg',
      width: '700',
      height: '200'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/ECSU - Fine Arts Instructional Center 3.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/JOHNSON RES.jpg',
      width: '550',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Khair.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Khair3.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Princeton University.jpg',
      width: '700',
      height: '500'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Wellesley College 1.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/projects/Yale Adams Center 2.jpg',
      width: '700',
      height: '400'
    },
    {
      name: 'MSC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/assets/miami-terminal.avif',
      width: '700',
      height: '400'
    }
  ]
  return(
    <div>
      <Navbar lightLogo={true}/>
      <ProjectPortfolio projects={projects} category={'Industrial'}/>
    </div>
  )
}