import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
 
    const popular = await prisma.Post.findMany({
        orderBy:{
            views:'desc'
        },
        take: 4,
    });

    return new NextResponse(JSON.stringify(popular, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
