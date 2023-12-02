import { Button, Form, Input } from "antd";
type FieldType = {
	email: string;
};
function SignupForm() {
	const onFinish = () => {
		window.location.replace("https://app.loch.one/welcome");
	};
	/* eslint-disable no-template-curly-in-string */
	const validateMessages = {
		required: "${name} is required!",
		types: {
			email: "${name} is not valid!",
		},
	};
	return (
		<Form
			onFinish={onFinish}
			autoComplete="off"
			style={{ width: "100%" }}
			validateMessages={validateMessages}
		>
			<div
				style={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					width: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						fontSize: "2rem",
						maxWidth: "60%",
						fontWeight: "500",
						color: "#B0B1B3",
					}}
				>
					Sign up for exclusive access.
				</div>
				<Form.Item<FieldType>
					label=""
					name="email"
					rules={[
						{
							required: true,
							type: "email",
						},
					]}
					style={{ width: "60%", margin: "2rem" }}
				>
					<Input placeholder="Your email address" style={{ height: "3rem" }} />
				</Form.Item>
				<Button
					style={{
						width: "60%",
						height: "3rem",
						background: "black",
						color: "white",
					}}
					htmlType="submit"
				>
					Get started
				</Button>
				<div
					style={{
						fontSize: "0.9rem",
						fontWeight: "500",
						margin: "2rem",
					}}
				>
					You’ll receive an email with an invite link to join.
				</div>
			</div>
		</Form>
	);
}

export default SignupForm;
