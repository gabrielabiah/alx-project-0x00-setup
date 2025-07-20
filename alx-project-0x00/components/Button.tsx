import React from "react";
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, className }) => {
	return (
		<button className={`bg-blue-600 text-white px-4 py-2 ${className}`}>
			{title}
		</button>
	);
};

export default Button;