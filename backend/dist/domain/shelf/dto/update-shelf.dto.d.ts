import { CreateShelfDto } from "@/domain/shelf/dto/create-shelf.dto";
declare const UpdateShelfDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateShelfDto>>;
export declare class UpdateShelfDto extends UpdateShelfDto_base {
    id?: string;
    name?: string;
    description?: string;
}
export {};
