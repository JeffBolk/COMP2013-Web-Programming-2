export default function PostForm({ handleChange, handleAddForm, newPost }) {
  return (
    <>
      <form onSubmit={handleAddForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name="body"
          value={newPost.body}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
