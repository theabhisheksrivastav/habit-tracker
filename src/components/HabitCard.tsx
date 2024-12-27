import React from "react";


interface iHabit {
  _id: string;
  name: string;
  description: string;
  timePeriod: number;
}
interface HabitCardProps {
  habit: iHabit;
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
