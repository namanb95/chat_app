import { FILTER_USER_LIST } from "../../action_types/index.types";

const initialState = {
  originalUsersList: [
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Manali",
      email: "email.test@gmail.com",
      lastMsg: "hello naman"
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Aman",
      email: "email.test@gmail.com",
      lastMsg: "how are you ?"
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Alatamash",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Abhijeet",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Clive",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Naman",
      email: "email.test@gmail.com",
      lastMsg: ""
    }
  ],
  userList: [
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Manali",
      email: "email.test@gmail.com",
      lastMsg: "hello naman"
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Aman",
      email: "email.test@gmail.com",
      lastMsg: "how are you ?"
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Alatamash",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Abhijeet",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Clive",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Naman",
      email: "email.test@gmail.com",
      lastMsg: ""
    },
    {
      img:
        "https://uploads.latticehq.com/avatars/9695e6bd-5b11-4f36-880e-689b1e4a99e3/573fa730-4d3f-4563-930a-e98df403783b_dp.jpg?auto=compress&dpr=1&faceindex=1&facepad=2&mask=ellipse&cornerRadius&crop=faces&fit=facearea&w=200&h=200",
      name: "Naman",
      email: "email.test@gmail.com",
      lastMsg: ""
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER_USER_LIST: {
      debugger;
      let filterValPattern = new RegExp(payload.val, "i");
      return {
        ...state,
        userList: state.originalUsersList.filter(
          user =>
            filterValPattern.test(user.name) ||
            filterValPattern.test(user.email)
        )
      };
    }

    default:
      return state;
  }
};
