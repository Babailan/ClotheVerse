function Line({ margin }: { margin?: string }) {
  return (
    <div
      className={`h-px w-full bg-gray-700 ${
        margin != undefined ? margin : "my-2"
      }`}
    ></div>
  );
}

export default Line;
