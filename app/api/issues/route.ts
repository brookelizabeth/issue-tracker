import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import { prisma } from "@/prisma/client";

//zod validation. Set min char req for title and desc.  Set max char req for title.
const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Description is required')
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success)
        //set status to 400 for a bad request - client sent invalid data
        return NextResponse.json(validation.error.format(), { status: 400 })

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    });

    //set status to 201 for object created
    return NextResponse.json(newIssue, { status: 201 });
}