import { Card } from "antd";
import React, { ReactNode } from "react";
type PropType = {
	background: string;
	rightIcon: ReactNode;
	leftIcon: ReactNode;
	form: ReactNode;
};
function CardStructure({ background, rightIcon, leftIcon, form }: PropType) {
	return (
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "1rem",
			}}
		>
			<Card
				bordered={false}
				style={{
					borderRadius: "5%",
					background: background,
					width: "14rem",
					height: "14rem",
				}}
			>
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					{leftIcon}
					{rightIcon}
				</div>
				{form}
			</Card>
		</div>
	);
}

export default CardStructure;
