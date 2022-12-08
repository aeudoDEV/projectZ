import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Test } from './Test';

export function Form(){
    const url = "http://localhost:3334/users"

    const {register, handleSubmit} = useForm();
      function Click(data: any){
        console.log(data);

        
        const ok = axios.post(url,{
            username: data.login,
            password: data.password
        }).then(response =>console.log(response))
        .then(err =>console.log(err))  
    }

   
    return(
        <form onSubmit={handleSubmit(Click)}>
            <label htmlFor="">
                <p>Login</p>
                <input 
                    type="text" 
                    {...register('login')}
                />
            </label>
            <label htmlFor="">
                <p>Pass</p>
                <input 
                    type="password" 
                    {...register('password')}
                />
            </label>

            <button type="submit">Confirm</button>
        </form>
    );
}