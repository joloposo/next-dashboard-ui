import React from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

function InputField({
  label,
  type = "text",
  placeholder,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && <p className="text-xs text-red-400">{error.message.toString()}</p>}
    </div>
  );
}

export default InputField;
