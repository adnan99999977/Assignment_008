
import Hero from "../components/Hero"
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";




const Home = () => {
   const { data,loading
    
    } = useFetch("/data.json");
      if (loading) return <Loading/>;

  
  return (

    <div>
      
       {data && <Hero data={data} />}
    </div>
  )
}

export default Home