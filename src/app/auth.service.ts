import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(user: string, password: string):boolean {
    if (user === 'user' && password === 'user') {
        this.isLoggedIn = true;
        return true
  }
  return false
}

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
