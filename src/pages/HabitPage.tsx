import { useState, useEffect } from "react";
import { getHabits, deleteHabit } from "../utils/api";
import { useNavigate } from "react-router-dom";

const HabitPage = () => {
  const [habits, setHabits] = useState<any[]>([]);
  const navigate = useNavigate();

  // Fetch habits when component mounts
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await getHabits();
        setHabits(response.data);
      } catch (error) {
        console.error("Failed to fetch habits:", error);
      }
    };

    fetchHabits();
  }, []);

  const handleDelete = async (habitId: string) => {
    try {
      await deleteHabit(habitId);
      console.log("Habit Deleted");
      alert("Habit deleted successfully!");
      // Fetch updated habits list
      const updatedHabits = await getHabits();
      setHabits(updatedHabits.data);
    } catch (error) {
      console.error("Failed to delete habit:", error);
      alert("Error deleting habit.");
    }
  };

  return (
    <div className="container">
      <h2>Your Habits</h2>
      <button onClick={() => navigate("/create-habit")}>Create New Habit</button>
      <div>
        {habits.length === 0 ? (
          <p>No habits to show. Please add some!</p>
        ) : (
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>
                <h4>{habit.name}</h4>
                <p>{habit.description}</p>
                <p>Time Period: {habit.timePeriod} days</p>
                <button onClick={() => handleDelete(habit.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HabitPage;
