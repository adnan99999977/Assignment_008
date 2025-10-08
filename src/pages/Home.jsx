import { useLoaderData } from "react-router"
import Hero from "../components/Hero"



const Home = () => {
  
  const data = useLoaderData()
  
  return (

    <div>
     <Hero data={data}/>
    </div>
  )
}

export default Home