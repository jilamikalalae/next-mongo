// import Product from "@/models/Product";

// export async function GET(request, { params }) {
//   const id = params.id;
//   const product = await Product.findById(id).populate("category");
//   console.log({ product });
//   return Response.json(product);
// }

// export async function DELETE(request, { params }) {
//   const id = params.id;
//   return Response.json(await Product.findByIdAndDelete(id));
// }
import Category from "@/models/Category";

export async function GET(request, { params }) {
    const id = params.id;
    const category = await Category-findById(id)
    return Response.json (category);
}

export async function DELETE(request, { params }){
    const id = params.id;
    const category = await Category.findByIdAndDelete(id)
    return Response.json (category);
}