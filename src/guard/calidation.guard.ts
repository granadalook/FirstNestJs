import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class tokenGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const hearer = context.switchToHttp().getRequest();
    const token =
      '99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac';
    const validate = hearer.rawHeaders.find((cla) => cla === token);
    if (validate) {
      return true;
    }

    return false;
  }
}
