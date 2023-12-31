import { NextRequest, NextResponse } from "next/server";
import { optimizeImage } from "wasm-image-optimization/next";

export const GET = async (
  req: NextRequest,
  { params }: { params: { url?: string; q?: string; w?: string } }
) => {
  const { url, w, q } = params;
  if (url === undefined) {
    return new NextResponse("No url provided", { status: 400 });
  }

  const srcImage = await fetch(url).then((res) => res.arrayBuffer());
  const image = await optimizeImage({
    image: srcImage,
    width: w ? Number(w) : undefined,
    quality: q ? Number(q) : undefined,
  });
  return new NextResponse(image, {
    headers: {
      "Content-Type": "image/webp",
    },
  });
};
