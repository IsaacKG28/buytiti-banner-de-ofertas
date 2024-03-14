const { RichText } = wp.blockEditor;

export default function save({ attributes }) {
	return (
		<div className="my-carousel-ofertas">
			<div className="carousel-container-ofertas">
				{attributes.slides.map((slide, index) => (
					<div
						key={index}
						className="slide-ofertas"
						style={{ backgroundColor: slide.color }}
					>
						<div className="container-gti-ofertas">
							<div className="gtex-ofertas">
								<div className="cont-h1-ofertas">
									<RichText.Content className="box-h1-ofertas h1-slide-down-ofertas" tagName="h1" value={slide.title} style={{ color: slide.h1Color }} />
								</div>
								<div className="cont-h5-ofertas">
									<RichText.Content className="box-h5-ofertas" tagName="h5" value={slide.h5} style={{ color: slide.h5Color }} />
								</div>
								<div className="cont-p-ofertas">
									<RichText.Content className="box-p-ofertas p-slide-right-ofertas" tagName="p" value={slide.p} style={{ color: slide.pColor }} />
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
				<div className="slider-nav-ofertas">
					{attributes.slides.map((slide, index) => (
						<button key={index} className="nav-dot-ofertas" />
					))}
				</div>
			</div>
		</div>
	);
}
