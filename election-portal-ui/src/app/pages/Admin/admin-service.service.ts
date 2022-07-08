import { Injectable } from '@angular/core';
import { HttpCallService } from 'src/app/shared/services/httpCall/http-call.service';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private httpCall: HttpCallService) {}
  getAdminDataList() {
    return this.httpCall.get('admin/users', true);
  }
}
