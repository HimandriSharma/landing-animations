import { Bell } from "@phosphor-icons/react";
import { Input } from "antd";
import CardStructure from "./CardStructure";

function BellCard() {
	return (
		<CardStructure
			background="linear-gradient(#FFFFFF, #84A9FF)"
			leftIcon={<Bell size={32} />}
			rightIcon={
				<div style={{ fontWeight: "bold", cursor: "pointer" }}>Save</div>
			}
			form={
				<>
					<div
						style={{
							fontWeight: "500",
							fontSize: "1rem",
							margin: "1rem 0",
						}}
					>
						We’ll be sending notifications to you here
					</div>
					<Input />
				</>
			}
		/>
	);
}

export default BellCard;
