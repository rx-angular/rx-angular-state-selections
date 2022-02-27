import {ProductEntity} from "../product.entity";
import {ProductGetDto} from "./product-get.dto";

export function serverDotToClientEntity({name, id, value}: ProductGetDto): ProductEntity {
  return {
    name,
    id: id+'',
    value: parseFloat(value.toFixed(2))
  }
}
