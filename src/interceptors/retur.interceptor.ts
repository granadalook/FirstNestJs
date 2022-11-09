import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

import { UserInterface } from 'src/users/interfaces/user.interface';

@Injectable()
export class ReturnInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    next.handle().subscribe((res) =>
      res.map((users: UserInterface) => {
        users.lastName === null
          ? (users.lastName = 'cambiado por el interceptor')
          : users.lastName;
        return users;
      }),
    );

    return next.handle().pipe(
      map((usuario: UserInterface) => {
        usuario.lastName === null
          ? (usuario.lastName = 'cambiado 22')
          : usuario.lastName;
        return usuario;
      }),
    );
  }
}
/* ((las) => (las.lastName === null ? 'cambiado' : las.lastName)) */
