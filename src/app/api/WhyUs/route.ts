import { whyUs } from "../../data-20250131T094507Z-001/data/data";

export async function Get() {
 return Response.json(whyUs);
}