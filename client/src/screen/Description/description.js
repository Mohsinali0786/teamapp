import { Button } from "antd"
import { useLocation } from "react-router-dom";

function Description(props) {
    const { state } = useLocation();

    const { teamimg, teamname, teamemail, useremail, teammembers,description,createdDate,createdTime } = state

    // const Navigate=useNavigate()
    console.log(state, 'props')
    return (
        <div className="descriptionPage-MainDiv">
            <h3>Team Detail</h3>
            <div className="descriptionPage-Div">
                {/* <div> */}
                <img className="descriptionPage-img" src={teamimg} />
                {/* </div> */}
                <div className="DescriptionPage-teaminfo-div">
                    <p><span>Team-Name:</span><span className="DescriptionPage-teaminfo">{teamname}</span></p>
                    <p><span>Team-Email:</span><span className="DescriptionPage-teaminfo">{teamemail}</span></p>
                    <p><span>Total-Members:</span><span className="DescriptionPage-teaminfo">{teammembers?.length}</span></p>
                    <p>
                        <span>Created-By:</span>
                        <span className="DescriptionPage-teaminfo">{useremail}</span>
                    </p>
                    <p><span>Date:</span><span className="DescriptionPage-teaminfo">{createdDate}</span></p>
                    <p><span>Time:</span><span className="DescriptionPage-teaminfo">{createdTime}</span></p>

                </div>
            </div>
            <div className='descriptionPage-Description'>
                <h4><b><i>Description</i></b></h4>
                <p>{description}</p>
            </div>
        </div>
    )

}
export default Description