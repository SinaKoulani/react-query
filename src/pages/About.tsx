import { useAbout } from "../hooks/useAbout";

const About  = () => {
// Same as the Home page but the displayed data is different
    const { data, isPending, error } = useAbout();

    if(isPending){
        return <div>loading...</div>
    }
    if (error){
        return <div>err</div>
    }

    return(
        <div>
            {data &&(
            <>
                <h1>{data.name}</h1>
                <p>{data.email}</p>
                <h2>{data.job}</h2>
                <p>{data.bio}</p>
            </>
            )}
        </div>
    )
}
export default About;