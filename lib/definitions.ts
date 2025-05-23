import { z } from 'zod'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'contain at least one letter.' })
    .regex(/[0-9]/, { message: 'contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'contain at least one special character.',
    })
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type Comment = {
  _id: string;
  text: string;
  _createdAt: string;
  author?: {
    name?: string;
    image?: SanityImageSource;
  };
};

export type Post = {
  _id: string;
  title: string;
  slug: string;
  image?: SanityImageSource;
  body: string;
  _createdAt: string;
  author?: {
    _id?: string;
    name?: string;
    username?:string;
    image?: SanityImageSource;
    bio?: string;
  };
  category?: {
    _id?: string;
    title?: string;
  };
  views: number;
  likes:number;
};

export type Author = {
  _id: string;
  email: string;
  name: string;
  username: string;
  image: SanityImageSource;
  _createdAt: string;
  bio?: string;
}