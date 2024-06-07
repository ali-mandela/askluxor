/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { toast } from "react-toastify"; 

export const contactMessage = async ({ data, setFormData }) => {
  let loading = true;
  let error = null;

  try {
    const response = await axios.post('/user/enquiry', data);
    if (response.data.success) {
      toast.success(response.data.message);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } else {
      toast.success(response.data.message);
    }
  } catch (err) {
    error = err.response ? err.response.data.message : err.message;
    toast.error('An error occurred. Please try again.');
  } finally {
    loading = false;
  }

  return { loading, error };
};
