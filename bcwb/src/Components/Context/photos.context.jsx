import axios from "axios";
import { createContext,useState,useEffect } from "react";

import { 
    addCollectionAndDocuments,
    getPhotosAndDocs 
} from "../../base";

import { PHOTOS } from "../../endpoints";

const { GET_ALL_PHOTOS } = PHOTOS

export const PhotoContext = createContext({
    photos:[],
});

export const PhotoProvider = ({ children }) => {
    const [photos,setPhotos] = useState([]);
    // const download_upload = async () => {
        // await axios.get(GET_ALL_PHOTOS).then(res => 
            
        //     addCollectionAndDocuments('photos',res.data)
        // )
    // }
    // const [dlPhotos,setDlPhotos] = useState([])
    useEffect(() => {
        const getPhotos = async () => {
            const photoMap = await getPhotosAndDocs();
        }
        getPhotos()
        // download_upload()

        // axios.get(GET_ALL_PHOTOS).then(res => setPhotos(res.data))
        // addCollectionAndDocuments('photos',photos)
    },[])
    const value = { photos };
    return (
        <PhotoContext.Provider value={value}>
            {children}
        </PhotoContext.Provider>
    );
};