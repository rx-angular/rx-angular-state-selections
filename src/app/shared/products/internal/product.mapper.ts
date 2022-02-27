import {ProductEntity} from "../product.entity";
import {ProductGetDto} from "./product-get.dto";
import {work} from "../../work/work";

export function serverDotToClientEntity({name, id, value}: ProductGetDto): ProductEntity {
  console.log('serverDotToClientEntity called')
  work();
  return {
    name,
    id: id+'',
    value: parseFloat(value.toFixed(2))
  }
}
