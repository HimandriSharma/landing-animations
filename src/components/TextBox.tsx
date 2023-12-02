import React, { ReactNode } from "react";
type PropType = {
	icon: ReactNode;
	heading: string;
	subheading: string;
	align: "left" | "right";
	color: string;
};
function TextBox({ icon, heading, subheading, align, color }: PropType) {
	return (
		<div
			style={{
				textAlign: align,
				color: color,
				height: "100%",
				width: "100%",
				padding: "1rem",
			}}
		>
			{icon}
			<div style={{ fontSize: "2rem", fontWeight: "500", margin: "0.5rem 0" }}>
				{heading}
			</div>
			<div
				style={{
					fontSize: "1.2rem",
					fontWeight: "500",
					color: "grey",
					margin: "0.5rem 0",
				}}
			>
				{subheading}
			</div>
		</div>
	);
}

export default TextBox;
