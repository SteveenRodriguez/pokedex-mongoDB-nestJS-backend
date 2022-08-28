import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Para que mongo Detecte que esto es un documento simplemente se extendiende de Document (mongoose)
 * Y el decorador @Schema()
 */
@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

// Luego exportamos el Schema de la Clase Pokemon
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
