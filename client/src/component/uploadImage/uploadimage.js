import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
// import { Button } from '@mui/material';
import axios from "axios"
import { useDispatch } from 'react-redux';
import {get_Img_url} from '../../store/actions'
import { useState } from "react"

function UploadImageComponent() {
    const dispatch=useDispatch()
    const [imageSelected, setImageSelected] = useState("")

    const upload_img = () => {
        const formdata = new FormData()
        formdata.append("file", imageSelected)
        formdata.append("upload_preset", "ml_default")
        console.log('path', formdata)
        axios.post('http://localhost:4000/api/post/uploadimage', formdata)
            .then((res) => {
                if(res.data.success===true){
                    alert('succesfully uploaded')
                    console.log("res.result", res.data.result);
                    dispatch(get_Img_url(res.data.result))
                }
            })
            .catch((err) => {
                console.log('err===>', err)
            })

    }
    return (
        <div className='uploadImage-mainDiv'>
            <input type='file'
                onChange={(e) => { setImageSelected(e?.target?.files[0]) }}
            />
            <Button type="primary" onClick={() => { upload_img() }}>Upload</Button>
        </div >
    )
}

export default UploadImageComponent;





