import { Col, Row } from "antd";
import React from "react";
import TextBox from "../components/TextBox";
import { Bell, Eye } from "@phosphor-icons/react";

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
				<Row>
					<TextBox
						icon={<Bell size={34} />}
						heading="Get notified when a highly correlated whale makes a move"
						subheading="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
						align="left"
						color="white"
					/>
				</Row>
				<Row>
					<TextBox
						icon={<Eye size={34} />}
						heading="Watch what the whales are doing"
						subheading="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
						align="right"
						color="white"
					/>
				</Row>
			</Col>
			<Col xs={24} lg={8} style={{ background: "#FFFFFF", height: "100vh" }}>
				col-6
			</Col>
		</Row>
	);
}

export default LandingPage;
