import http from '../http-common'
interface LoginBody {
  email: string
  password: string
}

export class LoginService {
  static login(data: LoginBody) {
    return http.post<LoginBody>('/auth/login', data)
  }
}
