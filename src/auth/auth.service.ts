import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) {

    }

    async signIn(username: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(username)
        if (user?.password !== pass) {
            throw new UnauthorizedException()

        }
        // const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object
        const payload = { sub: user.userId, username: user.username }
        
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
