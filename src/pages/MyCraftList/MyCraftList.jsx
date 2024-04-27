import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MySingleCraft from "./MySingleCraft";

const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  console.log(user?.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user]);

  console.log(items);
  return (
    <div className="grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-12">
      {items.map((item) => (
        <MySingleCraft key={item._id} item={item}></MySingleCraft>
      ))}
    </div>
  );
};

export default MyCraftList;
