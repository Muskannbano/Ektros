export default async function ProductReview({params,}:{params:Promise<{productId:string; reviewsId:string;}>}){
    const {productId,reviewsId} = await params
    console.log(reviewsId)
  return <h1>Review {reviewsId} for Product {productId}</h1>
}