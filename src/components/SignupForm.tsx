import { Button, Input } from "antd";
import React from "react";

function SignupForm() {
	return (
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
			<Input
				placeholder="Your email address"
				style={{ width: "60%", height: "3rem", margin: "2rem" }}
			/>
			<Button
				style={{
					width: "60%",
					height: "3rem",
					background: "black",
					color: "white",
				}}
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
	);
}

export default SignupForm;
