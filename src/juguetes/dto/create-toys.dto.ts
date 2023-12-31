import { IsInt, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class CreateToyDto {
  readonly id?: string;
  @IsString({ message: 'El nombre debe ser un texto ' })
  @MinLength(3, { message: 'El nombre debe tener minimo 3 letras' })
  @MaxLength(20, { message: 'El nombre debe tener maximo 20 letras' })
  nombre: string;

  @IsString({ message: 'El tipo de juguete debe ser un texto ' })
  @MinLength(4, { message: 'El tipo de juguete debe tener minimo 3 letras' })
  @MaxLength(15, { message: 'El tipo de juguete debe tener maximo 15 letras' })
  tipoDeJuguete: string;

  @Min(5, { message: 'El juguete debe tener un largo de minimo 5cm' })
  @IsInt({ message: 'El largo debe ser un entero' })
  largo: number;

  @Min(2, { message: 'El juguete debe tener un ancho de minimo 2cm' })
  @IsInt({ message: 'El ancho debe ser un entero' })
  ancho: number;

  @Min(1, { message: 'El juguete debe tener un sku de minimo un digito' })
  @IsInt({ message: 'El SKU debe ser un entero' })
  sku: number;

  fechaDeCreacion?: Date;

  fechaDeActualizacion?: Date;

  @IsString({ message: 'La marca debe ser un texto ' })
  @MinLength(5, { message: 'La marca debe tener minimo 3 letras' })
  @MaxLength(25, { message: 'La marca debe tener maximo 25 letras' })
  marca: string;

  @IsInt({ message: 'El precio debe ser un entero' })
  @Min(1, { message: 'El juguete debe costar al menos un peso' })
  precio: number;
}
