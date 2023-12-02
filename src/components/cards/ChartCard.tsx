import { Checkbox, Select } from "antd";
import CardStructure from "./CardStructure";
import { ChartBar } from "@phosphor-icons/react";

const Option = Select.Option;
function ChartCard() {
	return (
		<CardStructure
			background="white"
			leftIcon={<ChartBar size={32} />}
			rightIcon={<Checkbox checked={true} />}
			form={
				<>
					<div
						style={{
							fontWeight: "500",
							fontSize: "0.9rem",
							margin: "4rem 0 0.4rem 0",
						}}
					>
						Notify me when any wallets move more than
					</div>
					<Select defaultValue="$1,000.00" style={{ width: 120 }}>
						<Option value="$1,000.00">$1,000.00</Option>
					</Select>
				</>
			}
		/>
	);
}

export default ChartCard;
