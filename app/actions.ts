'use server';

import { deleteUserById } from '@/lib/db';
import { addNewUser } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function deleteUser(userId: number) {
  await deleteUserById(userId);
  revalidatePath('/');
}

export async function NewUser(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string(),
    email: z.string(),
    username: z.string()
  });

  const data = schema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    username: formData.get('username')
  });

  try {
    await addNewUser(data.name, data.email, data.username);

    revalidatePath('/');
    return { message: `Added user ${data.name}` };
  } catch (e) {
    return { message: `Failed to add new user` };
  }
}

export async function editUser(userId: number) {}
