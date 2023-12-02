import { Card } from "antd";
import React from "react";

type PropType = {
	name: string;
	title: string;
	statement: string;
};
function FeedbackCard({ name, title, statement }: PropType) {
	return (
		<Card
			style={{
				minWidth: "25rem",
				maxWidth: "25rem",
				minHeight: "10rem",
				maxHeight: "10rem",
				margin: "3rem 0.5rem",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
				<div style={{ fontSize: "1rem", fontWeight: "bold", margin: "0 3px" }}>
					{name}
				</div>
				<div
					style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#96979A" }}
				>
					{title}
				</div>
			</div>
			<div style={{ textOverflow: "ellipsis" }}>"{statement}"</div>
		</Card>
	);
}

export default FeedbackCard;
