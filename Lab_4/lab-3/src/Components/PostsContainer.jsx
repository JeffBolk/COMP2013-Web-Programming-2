import PostCard from "./PostCard";
import PostForm from "./PostForm";

export default function PostsContainer({
  form,
  fetchForm,
  isLoading,
  newPost,
  handleAddForm,
  handleChange,
}) {
  console.log(form);
  return (
    <>
      <PostForm
        handleChange={handleChange}
        handleAddForm={handleAddForm}
        newPost={newPost}
      />
      <div>
        {/*form.map((item, key) => (
          <PostCard key={key} form={form} />
        ))*/}
        <PostCard form={form} />
      </div>
    </>
  );
}
