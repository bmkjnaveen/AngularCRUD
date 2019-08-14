import {Injectable}from '@angular/core';
import {Employee} from '../models/employee.model';
    import { from } from 'rxjs';
@Injectable()
export class ListEmployeeService{
private listEmployee:Employee[]=[
    {
        id:1,
        name:'Shaurya Bisht',
        gender:'Male',
        phoneNumber:'8898989898',
        email:'shaurya.Bisht@gmail.com',
        dateOfBirth:new Date('30/03/2019'),
        department:'3',
        ContactPrefreance:'Phone',
        isActive:true,
        photoPath:'assets/images/shaurya.png'
          },
        
          {
            id:1,
            name:'Naveen Bisht',
            gender:'Male',
            phoneNumber:'8898989898',
            email:'Naveen.Bisht@gmail.com',
            dateOfBirth:new Date('30/03/2019'),
            department:'3',
            ContactPrefreance:'Phone',
            isActive:true,
            photoPath:'assets/images/naveen.png'
              },
              {
                id:1,
                name:'Anjali Bisht',
                gender:'FE MALE',
                phoneNumber:'8898989898',
                email:'ANJALI.Bisht@gmail.com',
                dateOfBirth:new Date('30/03/2019'),
                department:'4',
                ContactPrefreance:'EMAIL',
                isActive:true,
                photoPath:'assets/images/anjali.jpg'
                  }];

                  getEmployeeList():Employee[]{

                    return this.listEmployee;
                }

                saveEmployee(employee:Employee){

                    this.listEmployee.push(employee);
                }


}

