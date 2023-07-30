import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                        completed: false,
                    },
                };
            },
        },
        deleteTask(state, action) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                    break;
                }
            }
        },
    },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;


/* Властивість name визначає ім'я слайсу, яке додаватиметься під час 
створення екшенів, як приставка до імен редюсерів, оголошених у 
властивості reducers. Так ми отримаємо екшени з типами tasks/addTask, 
tasks/deleteTask та tasks/toggleCompleted. */