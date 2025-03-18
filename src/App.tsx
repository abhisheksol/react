import RedditFetcher from "./Chapters/apis/RedditFetcher"
import Child_props from "./Chapters/Children/Child_props"
import Ex1_error_box from "./Chapters/Children/Ex1_error_box"
import Ex2 from "./Chapters/Children/Ex2"
import GenreCloud from "./Chapters/Gitlist/Button"
import Hackernews from "./Chapters/Gitlist/Hacker_news"
import Pinerest from "./Chapters/Gitlist/Pinerest"
import House from "./Chapters/State_in_classes/House"
import House2 from "./Chapters/State_in_classes/House2"
import Usereducer from "./pratice/Usereducer"
import { AbhiProvider } from './pratice/Usecontext';
import Example from "./pratice/Example"



function App() {
  

  return (
    <AbhiProvider>
    <div className='bg-black h-screen text-white'>
        
        {/* <Child_props name={"abhishek"}>
           
           <h1>hello world </h1>
           <p>this Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae corrupti, architecto nostrum maiores quos autem ducimus cum dolorum eligendi rem dolorem voluptatem sapiente beatae dolores mollitia a facere magnam!</p>
        </Child_props> */}

        {/* Excersie 1 */}
        {/* <Ex1_error_box>
          <p> ⚠️ the world is ending soon </p>
        </Ex1_error_box>

        <Ex1_error_box>
          <p> ⚠️ Donot do that  </p>
        </Ex1_error_box> */}

        {/* Excersie 2 */}

         {/* <Ex2/> */}

         {/* <Hackernews/> */}

         {/* <Pinerest/> */}

         {/* <GenreCloud />; */}

         {/* <House2/> */}

         {/* <RedditFetcher/> */}


         {/* <Usereducer/> */}

         <Example/>
        
    </div>
    </AbhiProvider>
  )
}

export default App


