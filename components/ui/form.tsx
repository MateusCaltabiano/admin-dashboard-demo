import { Button } from './button';
import { useFormState } from 'react-dom';
import { NewUser } from 'app/actions';

const initialState = {
  message: null
};

export function NewUserForm() {
  const [state, formAction] = useFormState(NewUser, initialState);

  return (
    <form action={formAction}>
      <div className="grid grid-cols-1 space-y-2 size-80">
        <label className="self-center" htmlFor="name">
          Name
        </label>
        <input
          className="border border-black"
          type="text"
          name="name"
          required
        />
        <label className="self-center" htmlFor="email">
          Email
        </label>
        <input
          className="border border-black"
          type="text"
          name="email"
          required
        />
        <label className="self-center" htmlFor="username">
          Username
        </label>
        <input
          className="border border-black"
          type="text"
          name="username"
          required
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
