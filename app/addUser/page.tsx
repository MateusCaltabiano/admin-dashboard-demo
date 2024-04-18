export default async function AddUserPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Add User</h1>
      </div>
      <div>
        <form>
          <div className="flex flex-col size-80 space-y-2">
            <input
              className="border border-black rounded-md text-slate-400"
              value="Name"
              type="text"
              id="name"
              name="name"
            ></input>
            <input
              className="border border-black rounded-md text-slate-400"
              value="Email"
              type="text"
              id="email"
              name="email"
            ></input>
            <input
              className="border border-black rounded-md text-slate-400"
              value="Username"
              type="text"
              id="username"
              name="username"
            ></input>
            <input
              className="border border-black rounded-lg w-20 self-auto"
              type="submit"
              value="Create"
            ></input>
          </div>
        </form>
      </div>
    </main>
  );
}
