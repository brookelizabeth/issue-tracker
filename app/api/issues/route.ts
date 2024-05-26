import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { createIssueSchema } from "../../validationSchemas";


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