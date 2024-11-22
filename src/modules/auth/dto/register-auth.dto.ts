import { PartialType } from "@nestjs/mapped-types";
import { LogiAuthDto } from "./login-auth.dto";
import {IsNotEmpty} from "class-validator";

export class RegisterAuthDto extends PartialType(LogiAuthDto){
    @IsNotEmpty()
    name: string
    

}