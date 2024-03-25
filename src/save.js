import { RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const { slides } = attributes;

    return (
        <div className="my-carousel-ofertas">
            {/* Agrega las flechas aquí */}
            <div className="arrow arrow-left"></div>
            <div className="arrow arrow-right"></div>

            <div className="carousel-container-ofertas">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide-ofertas ${index === 0 ? "active" : ""}`}
                        style={{ backgroundColor: slide.color }}
                    >
                        <div className="container-gti-ofertas">
                            <div className="gtex-ofertas">
                                <div className="cont-h1-ofertas">
                                    <RichText.Content
                                        className="box-h1-ofertas h1-slide-down-ofertas"
                                        tagName="h1"
                                        value={slide.title}
                                        style={{ color: slide.h1Color }}
                                    />
                                </div>
                                
                                
                            </div>
                            <div className="gimage-ofertas">
                                <a href={slide.imageURL} target="_blank" rel="noopener noreferrer">
                                    <img className="img-zoom-in-ofertas" src={slide.image} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
			<div className="slider-nav-ofertas">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`nav-dot-ofertas ${index === 0 ? "active" : ""}`}
                        />
                    ))}
                </div>
        </div>
    );
};

export default Save;
