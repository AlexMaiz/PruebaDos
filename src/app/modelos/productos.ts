export type Producto = {
  id	        : number;
  title	      : String;
  description	: String
  price	      : Number;
  discountPercentage	:Number;
  rating	     : number;
  stock	       : String;
  category	   : String;
  thumbnail	   : String;
  images	     : Array<String>;
}

export interface  ProductoResponse extends  Producto{
  products : Producto[]
  total	   : number;
  skip	   : number | null;
  limit	   : number;

}
