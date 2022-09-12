import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
// import { isMongoId } from 'class-validator';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  // Crea un pokemon, retorna lo que se envia por el body y un status de creado
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  // Obtiene todos los pokemons
  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    // console.log(paginationDto);
    return this.pokemonService.findAll(paginationDto);
  }

  // Obtiene pokemon By ID, Name, Number
  @Get(':termino')
  findOne(@Param('termino') termino: string) {
    return this.pokemonService.findOne(termino);
  }

  // Actualiza un pokemon
  @Patch(':termino')
  update(
    @Param('termino') termino: string, // Obtenemos el parámetro del url
    @Body() updatePokemonDto: UpdatePokemonDto, // get data from body
  ) {
    return this.pokemonService.update(termino, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
