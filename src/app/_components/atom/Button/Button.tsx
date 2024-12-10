import ButtonProps from "@/app/_types/components/atom/Button";
import { styled } from "styled-components";

function Button({ children }: ButtonProps) {
  return <Buttons>{children}</Buttons>;
}

const Buttons = styled.h1`
  color: blue;
  font-size: 24px;
`;

export default Button;
