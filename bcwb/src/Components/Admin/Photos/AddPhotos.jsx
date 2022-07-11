import { useEffect, useState } from 'react'
import './Photos.css'
import Resizer from 'react-image-file-resizer'
import axios from 'axios'
import { app } from '../../../base'
import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage'
const storage = getStorage(app)
 
const Photos = (prop) => {
    const path = `bcwb/images` // Location of images on cloud
    const [ preview,setPreview ] = useState(null)
    const [ file,setFile ] = useState([])
    const [ photos,setPhotos ] = useState([])

    const [ state,setState ] = useState({
        title:'',
        album:'',
        file:[],
        photos:[],
        preview:null,

        
    })

    useEffect(() => {
        getPhotoApi()
    },[])

    const getPhotoApi = () => {
        axios.get('/api/photos/all').then(res => {
            setPhotos(res.data)
        })
    }

    const resize = async (e) => {
        var fileInput = false;

        if (e.target.files[0]) {
            fileInput = true
        }

        if (fileInput) {
            try {
                Resizer.imageFileResizer(
                    e.target.files[0],
                    400,
                    267,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        console.log(uri,'uri')
                        const objUrl = URL.createObjectURL(uri)
                        setPreview({previewImageFile:objUrl})
                        setFile(uri)
                    },
                    "file",
                    298,
                    191
                );
            } catch (err) {
                console.log(err)
            }
        }
    }

    const addPhoto = async (url) => {

        // get ref
        const storageRef = await ref(storage, `${path}/${url.name}`)

        // add to firebase
        await uploadBytesResumable(storageRef,url)

        // get download url
        const dlUrl = await getDownloadURL(storageRef)

        // add to DB
        await addToDb(dlUrl)

    }

    const addToDb = async (url) => {
        const title = 'title' // for testing
        const album = 'album' // for testing
        await axios.post('/api/photos/new',{url,title,album}).then(res => {
            console.log('added to db')
        })
    }

    // const mappedPhotos = photos.map(el => {
    //     return(
    //         <img key={el.photo_id} url={el.url} src={el.url} />
    //     )
    // })

    return(
        <form className='photos' >
            <h1>Add photo</h1>
            <input type='file' onChange={e => resize(e)} />
            <button onClick={() => addPhoto(file)} >send</button>
            {/* {mappedPhotos} */}
        </form>
    )
}

export default Photos