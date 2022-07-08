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
  getUsersDataList() {
    return this.httpCall.get('users?user_type=user', true);
  }
  getPartyAdminsList() {
    return this.httpCall.get('party-admins', true);
  }
  getPartyDetailsList() {
    return this.httpCall.get('parties/deatils', true);
  }
  getAllParties(approved: boolean) {
    return this.httpCall.getWithHeaders('parties/parties', true);
  }
  approvePartyMembers(id: any) {
    return this.httpCall.get('parties/approve/' + id, true);
  }
  AddPartyMember(position: any, id: any) {
    return this.httpCall.patch('parties/request/' + id, position, true);
  }
  ApproveParty(id: any) {
    return this.httpCall.patch('admin/party-approvals/' + id, null, true);
  }
}
