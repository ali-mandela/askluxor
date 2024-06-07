import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import LayoutContainer from '../../components/Layout';
import style from '../../styles/AgentProfile.module.css';
import { toast } from 'react-toastify';
import axios from 'axios'; 

const ProfilePage = () => {
    const user = useSelector((s) => s.user.userInfo); 
    const imgRef = useRef();

    const [userData, setUserData] = useState({
        name: user.name,
        Phone: user.Phone,
        bio: user.bio,
        image: user.image,
    });
    const [newImage, setNewImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setNewImage(file);
        const imageUrl = URL.createObjectURL(file);
        setUserData({ ...userData, image: imageUrl });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = userData.image;

            if (newImage) {
                const formData = new FormData();
                formData.append('image', newImage);
                const { data } = await axios.post('/agent/upload', formData);
                imageUrl = data.url;
            }

            const {data} = await axios.put(`/agent/update`, {
                name: userData.name,
                Phone: userData.Phone,
                bio: userData.bio,
                image: imageUrl,
            }, {
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            });
 

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error('Error during profile update:', error);
            toast.error('Profile update failed. Please try again.');
        }
    };

    return (
        <LayoutContainer>
            <div className={style.profileContainer}>
                <hr className={style.divider} />
                <h1 className={style.title}>AGENT PROFILE</h1>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.imageContainer}>
                        <img
                            
                            src={userData.image || 'https://placehold.co/200x200'}
                            alt="Profile"
                            className={style.profileImage}
                            onClick={() => imgRef.current.click()}
                        />
                        <label className={style.fileLabel}>
                             Change Profile Image 
                            <input
                                type="file"
                                ref={imgRef}
                                hidden
                                accept="image/*"
                                onChange={handleImageChange}
                                className={style.fileInput}
                            />
                        </label>
                    </div>
                    <div className={style.formGroup}>
                        <label className={style.label}>Change Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            className={style.input}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label className={style.label}>Change Phone</label>
                        <input
                            type="text"
                            name="hone"
                            value={userData.Phone}
                            onChange={handleChange}
                            className={style.input}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label className={style.label}>Change Bio</label>
                        <textarea
                            name="bio"
                            value={userData.bio}
                            onChange={handleChange}
                            className={style.textarea}
                        />
                    </div>
                    <button type="submit" className={style.button}>
                        UPDATE PROFILE
                    </button>
                </form>
            </div>
        </LayoutContainer>
    );
};

export default ProfilePage;
