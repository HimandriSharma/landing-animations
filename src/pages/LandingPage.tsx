import { Carousel, Col, Row } from "antd";
import React from "react";
import TextBox from "../components/TextBox";
import { Bell, Eye } from "@phosphor-icons/react";
import BellCard from "../components/cards/BellCard";
import ChartCard from "../components/cards/ChartCard";
import TimeCard from "../components/cards/TimeCard";

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
					<Col xs={24} lg={12}>
						<TextBox
							icon={<Bell size={34} />}
							heading="Get notified when a highly correlated whale makes a move"
							subheading="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
							align="left"
							color="white"
						/>
					</Col>
					<Col xs={24} lg={12}>
						<Carousel
							autoplay
							effect={"scrollx"}
							dots={false}
							style={{ width: "100%", height: "100%" }}
						>
							<BellCard />
							<ChartCard />
							<TimeCard />
						</Carousel>
					</Col>
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
