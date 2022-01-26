import React, { useCallback } from "react";

interface TextAreaInputProps {
  readonly placeholder?: string;
  readonly value: string;
  readonly rows?: number;
  readonly onChange?: (value: string) => void;
}

const TextAreaInput: React.FunctionComponent<TextAreaInputProps> = ({
  placeholder,
  value,
  rows = 2,
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback(
      (e) => {
        if (typeof onChange === "undefined") return;
        onChange(e.target.value);
      },
      [onChange]
    );

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      rows={rows}
      className="py-2 px-4 w-full text-sm text-gray-700 rounded-md border border-gray-200 focus:border-blue-400 outline-none shadow-sm transition-all"
    />
  );
};

export default TextAreaInput;
