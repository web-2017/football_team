const initialState = [
  {
    id: 1,
    name: "Bucky",
    last: "Roberts",
    age: 71,
    description: "Bucky is a React developer and YouTuber",
    thumbnail: "http://i.imgur.com/7yUvePI.jpg",
  },
];

const redux = (state = initialState, action) => {
  switch (action.type) {
    case "USER_SELECTED":
      return action.payload;

    default:
      return state;
  }
};

export const selectUser = user => {
  console.log("You clicked on user: ", user.name);
  return {
    type: "USER_SELECTED",
    payload: user,
  };
};

export default redux;
