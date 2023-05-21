import { PhotoAlbum } from "react-photo-album";

const Gallery = () => {
    const photos = [
        {src: 'gallery/img1.jpg', width: 612,  height: 408},
        {src: 'gallery/img19.jpg', width: 225,  height: 225},
        {src: 'gallery/img20.jpg', width: 225,  height: 225},
        {src: 'gallery/img21.jpg', width: 550,  height: 550},
        {src: 'gallery/img5.jpg', width: 642,  height: 642},
        {src: 'gallery/img2.jpg', width: 800,  height: 600},
        {src: 'gallery/img10.jpg', width: 800,  height: 600},
        {src: 'gallery/img12.jpg', width: 800,  height: 600},
        {src: 'gallery/img18.jpg', width: 800,  height: 600},
        {src: 'gallery/img13.jpg', width: 800,  height: 600},
        {src: 'gallery/img15.jpg', width: 720,  height: 900},
        {src: 'gallery/img4.jpg', width: 800,  height: 600},
        {src: 'gallery/img17.jpg', width: 800,  height: 600},
        {src: 'gallery/img9.jpg', width: 800,  height: 600},
        {src: 'gallery/img6.png', width: 720,  height: 732},
        {src: 'gallery/img14.jpg', width: 800,  height: 600},
        {src: 'gallery/img8.jpg', width: 800,  height: 600},
        {src: 'gallery/img3.jpg', width: 223,  height: 226},
        {src: 'gallery/img7.jpeg', width: 800,  height: 600},
        {src: 'gallery/img11.jpg', width: 800,  height: 600},
        {src: 'gallery/img16.jpg', width: 800,  height: 800},
    ];
    return (
        <div className="my-6">
            <PhotoAlbum layout="masonry" photos={photos}/>
        </div>
    );
};

export default Gallery;