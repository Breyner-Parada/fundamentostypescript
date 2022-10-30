import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { Product } from "../models/product.model";
import { ProductService } from "../models/product.service.model";

export class ProductHttpService implements ProductService {

  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const {data} = await axios.get<Product[]>(this.url)
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto){
    const {data} = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
  async create(dataCreate: CreateProductDto) {
    const {data} = await axios.post<Product>(this.url, dataCreate);
    return data;
  }
  async findOne(id: number){
    const {data} = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }


}
