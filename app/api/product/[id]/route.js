import Product from "@/models/Product";

// export async function GET(request, { params }) {
//   const id = params.id;
//   const product = await Product.findById(id).populate("category");
//   console.log({ product });
//   return Response.json(product);
// }

export async function GET(request) {
  // console.log('GET /api/category',request.nextUrl.searchParams.get("pno"))

  const pno = request.nextUrl.searchParams.get("pno");

  if (pno) {
    const size = 3;

    const startIndex = (pno - 1) * size;

    const product = await Category.find()
      .sort({ order: -1 })
      .skip(startIndex)
      .limit(size);

    return Response.json(product);
  }

  const s = request.nextUrl.searchParams.get("s");

  if (s) {
    const product = await Category.find({
      name: { $regex: s, $options: "i" },
    }).sort({ order: -1 });

    return Response.json(product);
  }

  const product = await Category.find().sort({ order: -1 });

  return Response.json(product);
}


export async function DELETE(request, { params }) {
  const id = params.id;
  return Response.json(await Product.findByIdAndDelete(id));
}
