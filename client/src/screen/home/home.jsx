import { useSelector } from "react-redux"


export default function Home(){
    const dataRedux=useSelector((state)=>state)
    console.log('dataRedux',dataRedux)
    return(
        <div>
            <h2>Home</h2>
        </div>
    )
}