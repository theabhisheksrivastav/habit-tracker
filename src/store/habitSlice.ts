import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iHabit {
  id: string;
  name: string;
  description: string;
  timePeriod: number;
}

interface HabitState {
  habits: iHabit[];
}

const initialState: HabitState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    setHabits(state, action: PayloadAction<iHabit[]>) {
      state.habits = action.payload;
    },
    addHabit(state, action: PayloadAction<iHabit>) {
      state.habits.push(action.payload);
    },
    removeHabit(state, action: PayloadAction<string>) {
      state.habits = state.habits.filter((habit) => habit.id !== action.payload);
    },
  },
});

export const { setHabits, addHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;
