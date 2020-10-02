import axios from 'axios';
const url = "http://localhost:10700";

export class User {
    static registerNewUser(credentials){
     return axios
      .post(url + "/signup",credentials)
      .then(response => {
      return response
      })
      .catch(err => {
        console.log(err);
      });
    }
    static login(credentials){
      console.log('tu sam');
     return axios
      .post(url + "/login",credentials)
      .then(response => {
      return response
      })
      .catch(err => {
        console.log(err);
      });
    }
}
export default User;