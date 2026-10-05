# React Redux Toolkit Counter

A beginner-friendly project built with **React**, **Redux Toolkit**, and **React Redux** to understand how Redux works step by step.

This project demonstrates the complete Redux data flow using a simple counter application.

## Features

- Redux Toolkit setup
- Redux Store configuration
- Creating a Slice
- Initial State
- Reducers
- Auto-generated Actions
- Provider
- useSelector()
- useDispatch()
- Payload actions
- Increment
- Decrement
- Increment by Amount
- Reset Counter

---

## Tech Stack

- React
- Redux Toolkit
- React Redux
- Vite

---

## Project Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── counter/
│       └── counterSlice.js
│
├── App.jsx
└── main.jsx
```

---

## Redux Flow

```
User clicks button
        │
        ▼
dispatch(action)
        │
        ▼
Redux Store
        │
        ▼
Reducer updates state
        │
        ▼
Store gets new state
        │
        ▼
useSelector() reads state
        │
        ▼
React component re-renders
```

---

## Redux Concepts Covered

### Store

The central place where the application's global state is stored.

---

### Slice

Groups together:

- Initial State
- Reducers
- Actions

---

### Reducers

Functions that define how the state changes.

Example:

```javascript
increment: (state) => {
  state.value += 1;
};
```

---

### Actions

Describe **what happened**.

Example:

```javascript
dispatch(increment());
```

---

### Payload

Extra data sent with an action.

Example:

```javascript
dispatch(incrementByAmount(5));
```

Reducer:

```javascript
incrementByAmount: (state, action) => {
  state.value += action.payload;
};
```

---

### useSelector()

Reads data from the Redux Store.

```javascript
const count = useSelector((state) => state.counter.value);
```

---

### useDispatch()

Sends actions to Redux.

```javascript
dispatch(increment());
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## Learning Outcomes

After completing this project you will understand:

- Why Redux is used
- What problem Redux solves
- How the Redux Store works
- What a Slice is
- How Reducers update state
- How Actions are dispatched
- How useSelector reads state
- How useDispatch sends actions
- How Payload works
- How React automatically re-renders after state updates

---

## Future Improvements

- Todo App
- Shopping Cart
- Authentication
- Multiple Redux Slices
- Async API Calls using createAsyncThunk
- Redux DevTools
- User Management
- Product Listing

---

## Screenshot

(Add a screenshot of the running application here.)

---

## License

This project is created for learning and educational purposes.
