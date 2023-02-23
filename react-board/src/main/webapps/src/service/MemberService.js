import axios from 'axios'; 

 
const Member_API_BASE_URL = "http://localhost:8088/api/member"; 

class MemberService {


    getMembers() {
        return axios.get(Member_API_BASE_URL);
    }
    createMember(member) {
        return axios.post(Member_API_BASE_URL, member);
    }
    getOneMember(userid) {
        return axios.get(Member_API_BASE_URL+ "/" + userid);
    }
  
    loginMember(userid,passwd){
        return axios.post(Member_API_BASE_URL+"/login",{userid:userid,passwd:passwd});

    }

}

export default new MemberService();
