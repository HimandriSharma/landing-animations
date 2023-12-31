import { Carousel, Col, Image, Row } from "antd";
import React from "react";
import TextBox from "../components/TextBox";
import { Bell, Eye } from "@phosphor-icons/react";
import BellCard from "../components/cards/BellCard";
import ChartCard from "../components/cards/ChartCard";
import TimeCard from "../components/cards/TimeCard";
import Dashboard from "../assets/dashboard.svg";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";
function LandingPage() {
	return (
		<Row>
			<Col
				xs={24}
				lg={16}
				style={{
					background:
						"radial-gradient(ellipse at left bottom,#1FA911, #2F15D0,#000000)",
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
					<Col xs={24} lg={12}>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image src={Dashboard} preview={false} />
						</div>
					</Col>
					<Col xs={24} lg={12}>
						<TextBox
							icon={<Eye size={34} />}
							heading="Watch what the whales are doing"
							subheading="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
							align="right"
							color="white"
						/>
					</Col>
				</Row>
				<Row>
					<Footer />
				</Row>
			</Col>
			<Col xs={24} lg={8} style={{ background: "#FFFFFF" }}>
				<SignupForm />
			</Col>
		</Row>
	);
}

export default LandingPage;
