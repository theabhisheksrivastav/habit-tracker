import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Habit {
  id: string;
  name: string;
  description: string;
  timePeriod: number;
}

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    setHabits(state, action: PayloadAction<Habit[]>) {
      state.habits = action.payload;
    },
    addHabit(state, action: PayloadAction<Habit>) {
      state.habits.push(action.payload);
    },
    removeHabit(state, action: PayloadAction<string>) {
      state.habits = state.habits.filter((habit) => habit.id !== action.payload);
    },
  },
});

export const { setHabits, addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
