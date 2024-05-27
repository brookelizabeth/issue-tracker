import { z } from 'zod';

//zod validation. Set min char req for title and desc.  Set max char req for title.  Error messaging.
export const issueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Description is required')
});