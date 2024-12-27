import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHabits } from "../utils/api";
import { setHabits } from "../store/habitSlice";

export default function Dashboard() {
  const habits = useSelector((state: any) => state.habit.habits);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await getHabits();
        dispatch(setHabits(response.data));
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };

    fetchHabits();
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {habits.map((habit: any) => (
          <li key={habit.id}>
            <h2>{habit.name}</h2>
            <p>{habit.description}</p>
            <p>Time Period: {habit.timePeriod} days</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
