import { PhotoAlbum } from "react-photo-album";

const Gallery = () => {
    const photos = [
        {src: '/src/assets/gallery/img1.jpg', width: 612,  height: 408},
        {src: '/src/assets/gallery/img19.jpg', width: 225,  height: 225},
        {src: '/src/assets/gallery/img20.jpg', width: 225,  height: 225},
        {src: '/src/assets/gallery/img21.jpg', width: 550,  height: 550},
        {src: '/src/assets/gallery/img5.jpg', width: 642,  height: 642},
        {src: '/src/assets/gallery/img2.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img10.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img12.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img18.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img13.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img15.jpg', width: 720,  height: 900},
        {src: '/src/assets/gallery/img4.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img17.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img9.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img6.png', width: 720,  height: 732},
        {src: '/src/assets/gallery/img14.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img8.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img3.jpg', width: 223,  height: 226},
        {src: '/src/assets/gallery/img7.jpeg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img11.jpg', width: 800,  height: 600},
        {src: '/src/assets/gallery/img16.jpg', width: 800,  height: 800},
    ];
    return (
        <div className="my-6">
            <PhotoAlbum layout="masonry" photos={photos}/>
        </div>
    );
};

export default Gallery;