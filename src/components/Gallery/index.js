import React, { Component, useState, useCallback } from 'react'
import './index.css'
import Gallerys from 'react-photo-gallery'
import Carousel, {Modal, ModalGateway} from 'react-images'
import img1 from '../img/wp1.jpg'
import img2 from '../img/wp2.jpg'
import img3 from '../img/wp3.jpg'
import img4 from '../img/eventwp.jpg'
import img5 from '../img/trisula.png'

const photos = [
    {
        src: img1,
        width: 1,
        height: 0.7,
    },
    {
        src: img5,
        width: 1,
        height: 1,
    },
    {
        src: img3,
        width: 1,
        height: 0.7,
    },
    {
        src: img4,
        width: 3,
        height: 1,
    },
    {
        src: img2,
        width: 1,
        height: 0.7,
    },
    {
        src: img1,
        width: 1,
        height: 0.7,
    },
    {
        src: img5,
        width: 1,
        height: 1,
    },
    {
        src: img3,
        width: 1,
        height: 0.7,
    },
    {
        src: img4,
        width: 3,
        height: 1,
    },
    {
        src: img2,
        width: 1,
        height: 0.7,
    },
    {
        src: img1,
        width: 1,
        height: 0.7,
    },
    {
        src: img5,
        width: 1,
        height: 1,
    },
    {
        src: img3,
        width: 1,
        height: 0.7,
    },
    {
        src: img4,
        width: 3,
        height: 1,
    },
    {
        src: img2,
        width: 1,
        height: 0.7,
    },
]

function GalleryApp() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
        <Gallerys photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
            <Modal
                onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway>
        </div>
    );
}

export default class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="galleryHeaderBox">
                    <h1 className="eventHeaderText1" >
                        Gallery
                    </h1>
                </div>
                <div className="galleryContentBox" >
                    <div className="galleryBoxItems" >
                        <GalleryApp/>
                    </div>
                </div>
            </div>
        )
    }
}
