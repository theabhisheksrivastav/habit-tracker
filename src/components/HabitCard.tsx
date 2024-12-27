import React from "react";
import { IHabit } from "../types";

interface HabitCardProps {
  habit: IHabit;
  onDelete: (id: string) => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, onDelete }) => {
  return (
    <div className="habit-card">
      <h2>{habit.name}</h2>
      <p>{habit.description}</p>
      <button onClick={() => onDelete(habit._id)}>Delete</button>
    </div>
  );
};

export default HabitCard;
