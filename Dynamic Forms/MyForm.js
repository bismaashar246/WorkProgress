import React from "react";
import useForm from "./useForm";

const MyForm = () => {
  const { formData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    title: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        EmpTitle
        <input
          type="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
