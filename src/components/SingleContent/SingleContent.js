import { img_300, unavailable  } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import './SingleContent.css';

const SingleContent =({
    id,
    poster,
    title,
    media_type,

    })=>{
    return(
        <ContentModal media_type={media_type} id={id}>
       
            <img 
            className="poster"
            src={poster ? `${img_300}${poster}` : unavailable } 
            alt={title}   
            /> 
            <b className="title">{title}</b>
            <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
       
        </ContentModal>
    );




};

export default SingleContent;