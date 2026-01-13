import { useState } from "react";

interface Props {
  onRegister: () => void;
}

const RegistrationForm = ({ onRegister }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "Thailand",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in all fields");
      return;
    }

    onRegister(); // 🔥 THIS is what makes something happen
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <button type="submit">Start Quiz</button>
    </form>
  );
};

export default RegistrationForm;
