import { useState, useEffect } from "react";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [form, setForm] = useState(
    []
    // userId: 0,
    // id: 0,
    // title: "undefined",
    // body: "undefined",
  );
  //console.log(form.body);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    userId: 1,
    id: 101,
    title: "",
    body: "",
  });

  useEffect(() => {
    fetchForm();
  }, []);

  const fetchForm = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setForm(data);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
    console.log(newPost);
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    setForm([...form, newPost]);
    console.log(newPost);
    setNewPost({
      userId: 1,
      id: form.length + 101,
      title: "",
      body: "",
    });
  };

  return (
    <div>
      <PostsContainer
        form={form}
        fetchForm={fetchForm}
        isLoading={isLoading}
        newPost={newPost}
        handleAddForm={handleAddForm}
        handleChange={handleChange}
      />
    </div>
  );
}
