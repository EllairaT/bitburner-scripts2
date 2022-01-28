import { NS } from "@ns"
import { React } from "lib/globals"

export default function WindowComponent(props): JSX.Element {
	return (
		<div className="window_container">
			<div className="window_top">
				<div className="window_title_group">
					<div className="icon">
						<svg
							width="25px"
							height="25px"
							viewBox="0 0 500 500"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#2c0123"
								d="M31.7 83.93C9.492 194.9 191.1 121 195.3 136.6c2.4 8.9-156.4 35.9-163.56 95.4-16.49 137 321.16.7 323.76 8.9 5.5 17.8-218.6 46.4-149.8 157.7 39.7 64.2 114.8 32 164.1 33.4 26.3 42.4 66.5 60.5 96 48 27.7-11.7 14.8-45.6 1.5-76.5l-14.2 15.7 7.7-28.7c-40.3-63.2-182.5-6.2-188.3-19.9-10.2-24.1 216.2-41.5 180.2-158.7-29-94.2-332.7 21.2-332.9 6.1-.2-20.9 188.1-50.4 167.4-94.9-34.3-73.82-210.22 40.8-224.95-33.59C57 63.05 140.3 42.6 132.3 35.24 106.4 11.35 37.92 52.9 31.7 83.93zM387.8 390.8l35.9 33.6-43.5-12.4z"
							/>
						</svg>
					</div>
					<div className="window_title_text">__viper</div>
				</div>
				<div className="window_icon_group">
					<button className="icon btn">
						<svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg">
							<g data-name="Layer 2">
								<g data-name="close">
									<rect
										width="24"
										height="24"
										transform="rotate(180 12 12)"
										opacity="0"
									/>
									<path
										fill="#fff"
										d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
									/>
								</g>
							</g>
						</svg>
					</button>
				</div>
			</div>
			<div className="window_content" id="win-cont">
				<div className="main_cont" id="main-cont"></div>
				<div className="window_menu">
					<button>{}</button>
				</div>
			</div>
		</div>
	)
}
