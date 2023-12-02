import { Clock } from "@phosphor-icons/react";
import { Checkbox, Select } from "antd";
import React from "react";
import CardStructure from "./CardStructure";
const Option = Select.Option;
function TimeCard() {
	return (
		<CardStructure
			background="white"
			leftIcon={<Clock size={32} />}
			rightIcon={<Checkbox checked={true} />}
			form={
				<>
					<div
						style={{
							fontWeight: "500",
							fontSize: "0.9rem",
							margin: "3rem 0 0.2rem 0",
						}}
					>
						Notify me when any wallet dormant for
					</div>
					<Select defaultValue="> 30 days" style={{ width: 120 }}>
						<Option value="> 30 days">&gt; 30 days</Option>
					</Select>
					<div
						style={{
							fontWeight: "500",
							fontSize: "0.9rem",
							margin: "0.2rem 0 0.4rem 0",
						}}
					>
						becomes active
					</div>
				</>
			}
		/>
	);
}

export default TimeCard;
