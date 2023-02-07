import { styled, Text as StyledText, TextProps } from "@nextui-org/react";
import { FC } from "react";

const Styled = styled(StyledText, {});

type Props = TextProps
export const Heading: FC<Props> = ({ children, ...props }) => {
  return <Styled {...props}>{children}</Styled>;
};
