export default function PostCard({ form }) {
  console.log(form);
  return (
    <div>
      {form.map((item, index) => (
        <div id={index}>
          <h1>{item.title}</h1>
          <h3>{item.body}</h3>
        </div>
      ))}
    </div>
  );
}
