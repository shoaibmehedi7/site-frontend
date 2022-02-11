import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

function FormInputText({ name, control, label, type }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          label={label}
          variant="filled"
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
          fullWidth
          type={type ? type : "text"}
        />
      )}
    />
  );
}

export default FormInputText;
