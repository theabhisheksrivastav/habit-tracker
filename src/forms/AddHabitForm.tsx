import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habitSlice";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addHabit({ name, description, trackingMethod: ["webTrack"], timePeriod: 21 }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default AddHabitForm;
