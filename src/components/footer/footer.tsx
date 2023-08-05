import { Social_Media } from "./social_media";

function Footer() {
  return (
    <div className="pb-5 pt-20">
      <div className="py-3 flex flex-col sm:flex-row gap-3 justify-between">
        <div>
          <img src="/logo.svg" width={50}></img>
          <div className="text-gray-300 text-sm tracking-wide pt-5">
            In the world of style, a shirt has the power to make <br /> everyone
            shine.
          </div>
          <div className="flex gap-5 py-6">
            <Social_Media />
          </div>
        </div>
        <div className="flex flex-1 gap-10 py-10 text-sm justify-start sm:justify-evenly">
          <div>
            <div className="mb-5">Support</div>
            <div className="flex flex-col gap-2">
              <span>
                <a className="text-gray-400 cursor-pointer inline hover:text-white">
                  Donate Me
                </a>
              </span>
              <span>
                <a className="text-gray-400 cursor-pointer inline hover:text-white">
                  Repository
                </a>
              </span>
            </div>
          </div>
          <div>
            <div className="mb-5">Project</div>
            <div className="flex flex-col gap-2">
              <span>
                <a className="text-gray-400 cursor-pointer hover:text-white">
                  About
                </a>
              </span>
              <span>
                <a className="text-gray-400 cursor-pointer hover:text-white">
                  Disclaimer
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h-px bg-gray-700"></div>
      <div className="py-5 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ronnel Babailan, Inc. All rights reserved.
      </div>
    </div>
  );
}
export { Footer };
