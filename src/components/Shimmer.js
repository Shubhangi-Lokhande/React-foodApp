import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {

    return(
        <div className="shimmer-container">
            {Array(10).fill("").map((ele,index)=>(
                
                 <SkeletonTheme key={index} highlightColor="#e8ffd1">
                    <div className="shimmer-card">
                    <Skeleton height={200}/>
                    <h1><Skeleton count={2} height={50}/></h1>
                    <h3><Skeleton count={3}/></h3>
                    </div>
                 </SkeletonTheme>
               
            ) )}
        </div>
      
    )
}

export default Shimmer;