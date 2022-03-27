import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }

  /* @Get('products') //Con params
  getQuery(@Query() params: any){
    const { limit, offset } = params; //Esto es deconstrucción.
    return `products: limit=> ${limit} offset=> ${offset}`;
  }  */

  @Get('products') //Esto es deconstrucción.
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get('products/filter') //Uno no dinamico
  getProductFilter() {
    return `soy un filter`;
  }

  @Get('products/:productId') //Sin la necesidad de pasar por el params, uno dinamico
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('categories/:id/products/:productId') //Cuando se tiene más de un parametro
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
