import { Injectable } from '@nestjs/common';


export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Anh',
            password: 'password'

        },
        {
            userId: 2,
            username: 'john',
            password: 'changeme',
        }
    ]

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find((user) => user.username === username);
    }
}
