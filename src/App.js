import { useState } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./userForm";
const App = () => {
  const [data, setDate] = useState([
    { name: "hazem", city: "alexandria", phone: "123456" },
    { name: "mohamed", city: "alexandria", phone: "123456" },
    { name: "ahmed", city: "alexandria", phone: "123456" },
  ]);
  return (
    <div
      style={{
        backgroundColor: "orange",
        width: "50%",
        padding: 10,
        borderRadius: 12,
        margin: 30,
      }}
    >
      <UserForm />
      {data.map((ele, idx) => (
        <UserCard
          ele={ele}
          key={idx}
          removeUser={() => {
            setDate(data.filter((e, i) => i !== idx));
          }}
        />
      ))}
    </div>
  );
};

export default App;
