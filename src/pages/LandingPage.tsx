import { Col, Row } from "antd";
import React from "react";

function LandingPage() {
	return (
		<Row>
			<Col
				xs={24}
				lg={16}
				style={{
					background:
						"radial-gradient(ellipse at left bottom,#1FA911, #2F15D0,#000000)",
					height: "100vh",
				}}
			>
				col-18
			</Col>
			<Col xs={24} lg={8} style={{ background: "#FFFFFF", height: "100vh" }}>
				col-6
			</Col>
		</Row>
	);
}

export default LandingPage;
