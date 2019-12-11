export const initialState = [
  {
    item: "code",
    completed: false,
    id: 3892987589
  },
  {
    item: "practice JavaScript",
    completed: false,
    id: 65423165
  },
  {
    item: "Play Xbox One",
    completed: false,
    id: 165146535
  },
  {
    item: "Get ready for bed",
    completed: false,
    id: 9874561684
  }
];

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [
        ...state,
        newItem
        // items: [...state.items, newItem]
      ];
    case "TOGGLE_COMPLETED":
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
        // if (item.id === action.payload) {
        //   item.completed = !item.completed;
        // }
      });
    case "CLEAR_COMPLETED":
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};