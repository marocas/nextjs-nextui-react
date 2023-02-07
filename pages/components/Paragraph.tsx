import { styled, Text as StyledText, TextProps } from "@nextui-org/react";
import { FC } from "react";

const newProps = (props) => {

  // ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
  return props
}

const Styled = styled(StyledText, {});

type Props =  TextProps
export const Paragraph: FC<Props> = ({ children, ...props }) => {
  console.log({ ...props });
  return (
    <Styled {...newProps(props)}>
      {children}
    </Styled>
  );
};
