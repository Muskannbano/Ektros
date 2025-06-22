import {notFound} from "next/navigation"

export default async function ProductReview({params,}:{params:Promise<{productId:string; reviewsId:string;}>}){
    const {productId,reviewsId} = await params
    if(parseInt(reviewsId)>1000){
      notFound();
    }
    console.log(reviewsId)
  return <h1>Review {reviewsId} for Product {productId}</h1>
}