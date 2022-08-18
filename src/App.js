import UserCard from "./components/UserCard";
const data = [
  { name: "hazem", city: "alexandria", phone: "123456" },
  { name: "mohamed", city: "alexandria", phone: "123456" },
  { name: "ahmed", city: "alexandria", phone: "123456" },
];
const App = () => {
  return (
    <>
      {data.map((ele, idx) => (
        <UserCard ele={ele} key={idx} />
      ))}
    </>
  );
};

export default App;
