import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const err = useRouteError()
    console.log('error',err)
    return(
        <div>
            {/* <h2>{err.error.message}</h2>
            <h3>{err.statusText}</h3> */}
            error
        </div>
    )
}
export default ErrorPage;