import { Injectable } from '@nestjs/common';
import { LogiAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwService: JwtService){}
    login(credenciales: LogiAuthDto){
        let payload={email:"admin@gmail.com",id:1}
        const token = this.jwService.sign(payload)
        return {token:token};

    }
}
