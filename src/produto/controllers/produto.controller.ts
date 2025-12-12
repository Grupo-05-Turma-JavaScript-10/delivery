import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produto } from "../entities/produto.entity";

@Controller('/produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Get('/saudaveis')
    @HttpCode(HttpStatus.OK)
    listarSaudaveis(): Promise<Produto[]> {
        return this.produtoService.listarSaudaveis();
    }
}