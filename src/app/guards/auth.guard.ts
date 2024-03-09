import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardsService } from '../service/guards.service';
import { ToastService } from '../service/toast.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authStatus=inject(GuardsService)
  const routes=inject(Router)
  const toast=inject(ToastService)

  if(authStatus.isLoggedIn()){
    return true
  }

  else{
    toast.showWarning('Please login')
    routes.navigateByUrl("")
    return false
  }
};
