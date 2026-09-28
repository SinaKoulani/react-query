import { useHome } from "../hooks/useHome";


const Home = () => {
// use the custome component that I create 
// that have 3 item we can use
    const { data, isPending, error } = useHome();
    
// check if we got the content from data base or not
// if we got that then show else show err
    if (isPending) {
        return <div> loading...</div>
    }
    
    if (error){
        return <div>err</div>
    }

    return(
        <div>
{/*showing the conten of data */ }
            {data &&(

                <>
                <h1>{data.name}</h1>
                <h2>{data.job}</h2>
                <p>{data.bio}</p>
                <p>{data.skills}</p>
                <p>{data.social}</p>
                </>

            )}
        </div>
    )
    
};

export default Home;