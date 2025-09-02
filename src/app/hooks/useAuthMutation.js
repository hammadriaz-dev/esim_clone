import { useMutation,useQueryClient } from "@tanstack/react-query";
import axiosInterfernce from "../api";

export const useSendOtpMutation =()=>{

    return useMutation({
        mutationFn: async (email)=>{
            const {data}=await axiosInterfernce.post('/send-otp',{email})
            return data
        },
        onSuccess: ()=>{
                console.log('Otp code send Successfully');
                
        },
        onError:()=>{
            console.log('error while sending Otp');
            
        }
    })

}


export const useRegistration=()=>{
    const queryClient =useQueryClient()

    return useMutation({
        mutationFn: async ({email,password,name,otp})=>{
            const { data } = await axiosInstance.post('/register', { email, password, name, otp });
            return data
        },
        onSuccess:(data)=>{
            localStorage.setItem('bearerToken',data.token)
            queryClient.invalidateQueries({queryKey:['user']})
            console.log('registration successful');
            
        }
    })
}


