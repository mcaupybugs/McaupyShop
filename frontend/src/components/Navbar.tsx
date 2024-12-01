const NavBar = () => {
  return (
    <div class="w-full h-16 flex border-2 border-black gap-2 pl-48  pr-48">
      <div class="h-full w-full flex gap-8 ">
        <div class="circular-image border border-black rounded-full h-10 w-10 flex self-center">
          <img class="object-contain rounded-full" src="assets/logo.jpg"></img>
        </div>
        <div class="flex">
          <div class="text-2xl place-content-center">Mcaupybugs</div>
        </div>
      </div>
      <div class="h-full w-full flex justify-end gap-24">
        <div class="input-email items-center h-full flex">
          <input
            class="h-3/4 p-4 text-center border border-black focus:outline-none"
            type="text"
            placeholder="Your email address ... "
          ></input>
        </div>
        <div class="flex h-full items-center">
          <div class="h-3/4 flex items-center button-subscribe text-2xl place-content-center border border-black p-2 hover:cursor-pointer">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
