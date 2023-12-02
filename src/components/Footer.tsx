import { Image } from "antd";
import Logo from "../assets/logo.svg";
import FeedbackCard from "./cards/FeedbackCard";
const feedbacks = [
	{
		name: "Jack F",
		title: "Ex Blackrock PM",
		statement:
			"Love how Loch integrates portfolio analytics and whale watching into one unified app.",
	},
	{
		name: "Yash P",
		title: "Research, 3poch Crypto Hedge Fund",
		statement:
			"I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
	},
	{
		name: "Shiv S",
		title: "Co-Founder Magik Labs",
		statement:
			"Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
	},
];
function Footer() {
	return (
		<>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "flex-end",
					fontSize: "2rem",
					fontWeight: "500",
					color: "white",
					margin: "0 2rem 1rem 0",
				}}
			>
				Testimonials
			</div>
			<hr style={{ width: "100%", margin: "0 2rem" }} />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					margin: "0 0 0 1rem",
				}}
			>
					<Image
						preview={false}
						src={Logo}
						style={{ margin: "8rem 0 0 0", padding: "0 1rem 0 0" }}
					/>
				<div style={{ display: "flex", width: "70vw", overflow: "scroll" }}>
					{feedbacks.map((i) => (
						<FeedbackCard
							name={i.name}
							title={i.title}
							statement={i.statement}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default Footer;
