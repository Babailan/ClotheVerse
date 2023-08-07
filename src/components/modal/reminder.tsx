function Reminder({ onClick }) {
  return (
    <div className="fixed bg-zinc-950 z-10 bottom-0 p-3 sm:p-3 sm:gap-2 rounded-md sm:bottom-[50%] sm:translate-x-[-50%] sm:translate-y-[50%] sm:left-[50%] box-border m-3 flex flex-col sm:w-[500px] sm:flex-row">
      <div className="m-auto sm:m-0 p-2 bg-slate-800 h-fit rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          viewBox="0 -960 960 960"
          width="25"
          fill="white"
        >
          <path d="M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z" />
        </svg>
      </div>
      <div className="text-center sm:text-start flex flex-col sm:ml-2">
        <div>Reminder</div>
        <div className="text-zinc-400 text-sm">
          This web application serves as an illustration, and placing actual
          orders is not possible within its framework.
        </div>
        <div
          onClick={() => onClick()}
          className="bg-zinc-900 text-sm rounded-md mt-6 p-1 cursor-pointer w-full sm:w-fit ml-auto px-6 py-1"
        >
          Got it
        </div>
      </div>
    </div>
  );
}

export { Reminder };
