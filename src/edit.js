import React, { useState, useEffect } from "react";
import { InspectorControls, RichText } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const CarouselOfertas = ({ attributes, setAttributes }) => {
	const [currentSlideOfertas, setCurrentSlideOfertas] = useState(0);

	const updateSlideContentOfertas = (index, key, newValue) => {
		const newSlidesOfertas = attributes.slides.map((slide, i) =>
			i === index ? { ...slide, [key]: newValue } : slide,
		);
		setAttributes({ ...attributes, slides: newSlidesOfertas });
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlideOfertas((prevSlide) =>
				prevSlide === attributes.slides.length - 1 ? 0 : prevSlide + 1,
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [attributes.slides.length]);

	return (
		<div className="my-carousel-ofertas">
			<InspectorControls>
				<PanelBody title="Configuración de Slides Ofertas">
					{attributes.slides.map((slide, index) => (
						<React.Fragment key={index}>
							<MediaUpload
								onSelect={(media) =>
									updateSlideContentOfertas(index, "image", media.url)
								}
								allowedTypes={["image"]}
								value={slide.image}
								render={({ open }) => (
									<button onClick={open}>Seleccionar imagen</button>
								)}
							/>
						</React.Fragment>
					))}
						<Button
							isPrimary
							onClick={() => {
								if (attributes.slides.length < 2) {
									const newSlidesOfertas = [...attributes.slides, {
										image: "",
									}];
									setAttributes({ ...attributes, slides: newSlidesOfertas });
								} else {
									alert('Solo puedes agregar 2 imágenes en este carousel.');
								}
							}}
						>
							Añadir Slide Ofertas
						</Button>

				</PanelBody>
			</InspectorControls>
			<div className="carousel-container-ofertas">
				{attributes.slides.map((slide, index) => (
					<div
						key={index}
						className={`slide-ofertas ${index === currentSlideOfertas ? "active" : ""}`}
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
								<div className="cont-h5-ofertas">
									<RichText.Content
										className="box-h5-ofertas"
										tagName="h5"
										value={slide.h5}
										style={{ color: slide.h5Color }}
									/>
								</div>
								<div className="cont-p-ofertas">
									<RichText.Content
										className="box-p-ofertas p-slide-right-ofertas"
										tagName="p"
										value={slide.p}
										style={{ color: slide.pColor }}
									/>
								</div>
							</div>
							<div className="gimage-ofertas">
								<img className="img-zoom-in-ofertas mi-clase-personalizada" src={slide.image} alt="" />
							</div>
						</div>
					</div>
				))}
				<div className="slider-nav-ofertas">
					{attributes.slides.map((_, index) => (
						<button
							key={index}
							className={`nav-dot-ofertas ${index === currentSlideOfertas ? "active" : ""}`}
							onClick={() => setCurrentSlideOfertas(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CarouselOfertas;