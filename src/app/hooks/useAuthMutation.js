import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInterfernce from "../api";

export const useSendOtpMutation = () => {
    return useMutation({
        mutationFn: async ({ email, password }) => {
            const { data } = await axiosInterfernce.post('/send-otp', { email, password });
            return data; // Remove the extra { from this line
        },
        onSuccess: () => {
            console.log('OTP code sent successfully');
        },
        onError: () => {
            console.error('Error while sending OTP');
        }
    });
};

export const useRegistration = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ email, password, name, otp }) => {
            const { data } = await axiosInterfernce.post('/register', { email, password, name, otp });
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            console.log('registration successful', data);
        },
        onError: (error) => {
            console.error('Registration failed:', error);
        }
    });
};