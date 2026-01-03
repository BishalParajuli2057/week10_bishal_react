import { useEffect, useState } from "react";
import "../styles/About.css";

type Post = { id: number; title: string; body: string };

const About = () => {
  const [items, setItems] = useState<Post[]>([]);
  const [visible, setVisible] = useState(12); // Task 5

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = (await res.json()) as Post[];
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="grid-container">
        {items.slice(0, visible).map((item) => (
          <div className="grid-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setVisible((v) => v + 12)}>Show more</button>
    </div>
  );
};

export default About;
