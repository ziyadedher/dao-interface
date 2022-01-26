import TextLink from "../../../src/components/links/text_link";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Links/Text Link",
  component: TextLink,
};

interface TextLinkTemplateProps {
  readonly href: string;
  readonly isExternal: boolean;
  readonly text: string;
}

const TextLinkTemplate: Story<TextLinkTemplateProps> = ({
  href,
  isExternal,
  text,
}: TextLinkTemplateProps) => (
  <TextLink href={href} isExternal={isExternal}>
    {text}
  </TextLink>
);

const TextLinkStory = TextLinkTemplate.bind({});
TextLinkStory.storyName = "Text Link";
TextLinkStory.args = {
  href: "https://example.org",
  isExternal: true,
  text: "example.org",
};

export { TextLinkStory };
export default META;
