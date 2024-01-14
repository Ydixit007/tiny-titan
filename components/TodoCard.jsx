export default function TodoCard({ title, description, isCompleted, isAdd }) {
  if (isAdd) {
    return (
      <div onClick={()=>{}} className="todocard flex justify-center items-center flex-col h-44 w-44 bg-grey rounded-xl cursor-pointer border-4">
        <h1 className="text-4xl text-lightGrey cursor-pointer font-bold">+</h1>
      </div>
    );
  }
  return (
    <div className="todocard flex justify-center items-center flex-col">
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}
