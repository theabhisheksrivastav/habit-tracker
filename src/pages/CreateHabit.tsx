import React, { useState } from "react";
import { createHabit } from "../utils/api";
import { useNavigate } from "react-router-dom";

const CreateHabit = () => {
  const [habitData, setHabitData] = useState({
    name: "",
    description: "",
    timePeriod: 21,
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHabitData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createHabit(habitData);
      console.log("Habit Created:", response.data);
      alert("Habit added successfully!");
      navigate("/habits"); // Redirect to habit list after successful creation
    } catch (error) {
      console.error("Failed to create habit:", error);
      alert("Error adding habit.");
    }
  };

  return (
    <div className="container">
      <h2>Create a Habit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Habit Name"
          value={habitData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={habitData.description}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="number"
          name="timePeriod"
          placeholder="Time Period (days)"
          value={habitData.timePeriod}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Habit</button>
      </form>
    </div>
  );
};

export default CreateHabit;
