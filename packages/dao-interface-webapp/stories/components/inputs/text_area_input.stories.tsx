import React, { useCallback, useState } from "react";

import TextAreaInput from "../../../src/components/inputs/text_area_input";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Inputs/Text Area Input",
  component: TextAreaInput,
};

interface TextAreaInputTemplateProps {
  readonly placeholder: string;
  readonly value: string;
  readonly rows: number;
}

const TextAreaInputTemplate: Story<TextAreaInputTemplateProps> = ({
  placeholder,
  value,
  rows,
}: TextAreaInputTemplateProps) => (
  <TextAreaInput placeholder={placeholder} value={value} rows={rows} />
);

const TextAreaInputStory = TextAreaInputTemplate.bind({});
TextAreaInputStory.storyName = "Text Area Input";
TextAreaInputStory.args = {
  placeholder: "Type something here...",
  value: "",
  rows: 2,
};
TextAreaInputStory.argTypes = {
  rows: {
    control: {
      type: "range",
      min: 1,
      max: 20,
      step: 1,
    },
  },
};

interface TextAreaInputReactiveTemplateProps {
  readonly placeholder: string;
  readonly rows: number;
}

const TextAreaInputReactiveTemplate: Story<
  TextAreaInputReactiveTemplateProps
> = ({ placeholder, rows }: TextAreaInputReactiveTemplateProps) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue: string): void => {
    setValue(newValue);
  }, []);

  return (
    <TextAreaInput
      placeholder={placeholder}
      value={value}
      rows={rows}
      onChange={handleChange}
    />
  );
};

const TextAreaInputReactiveTemplateStory = TextAreaInputReactiveTemplate.bind(
  {}
);
TextAreaInputReactiveTemplateStory.storyName = "Text Area Input (reactive)";
TextAreaInputReactiveTemplateStory.args = {
  placeholder: "Type something here...",
  rows: 2,
};
TextAreaInputReactiveTemplateStory.argTypes = {
  rows: {
    control: {
      type: "range",
      min: 1,
      max: 20,
      step: 1,
    },
  },
};

export { TextAreaInputStory, TextAreaInputReactiveTemplateStory };
export default META;
