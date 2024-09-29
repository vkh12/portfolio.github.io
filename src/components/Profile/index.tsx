const Profile = () => {
  return (
    <div className="">
       <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="text-6xl font-black pb-4 md:text-4xl md:pb-2">Hey, I'm Victoria Hong</h1>
          <p className="text-3xl pb-8 md:text-xl md:pb-4">Engineer dedicated to problem-solving.</p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <a className="inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md whitespace-nowrap text-base font-medium text-white data-[disabled]:bg-gray-950 data-[hover]:bg-gray-800 data-[disabled]:opacity-40" data-headlessui-state href="/getintouch">Get in touch</a>
            <a className="relative inline-flex items-center justify-center px-4 py-[calc(theme(spacing.2)-1px)] rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] whitespace-nowrap text-base font-medium text-gray-950 data-[disabled]:bg-white/15 data-[hover]:bg-white/20 data-[disabled]:opacity-40" data-headlessui-state href="/readmore"> Read more</a>
          </div>
      </div>
    </div>

  );
};

export default Profile;
