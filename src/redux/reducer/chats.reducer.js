const userData = [
  {
    img: "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
    name: "Ravikiran",
    lastMsg: "hello naman"
  }
];
const initialState = {
  messages: [
    { from: "SELF", msg: "hy", user: userData[0], typing: false },
    { from: "OTHER", msg: "hy", user: userData[0], typing: false },
    { from: "SELF", msg: "hy", user: userData[0], typing: false },
    { from: "OTHER", msg: "hy", user: userData[0], typing: false },
    { from: "SELF", msg: "hy", user: userData[0], typing: false },
    { from: "OTHER", msg: "hy", user: userData[0], typing: false }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
