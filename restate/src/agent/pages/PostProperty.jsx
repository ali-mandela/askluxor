import { useRef, useState } from 'react';
import LayoutContainer from '../../components/Layout';
import style from '../styles/post.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const PostProperty = () => {
    const ref = useRef();
    const [propertyData, setPropertyData] = useState({
        name: '',
        address: '',
        description: '',
        type: '',
        parkingSpot: false,
        fullyFurbished: false,
        beds: '',
        baths: '',
        price: '',
        image: null,
        PurchaseType:"Rent"
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isImageUploaded, setIsImageUploaded] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (name === 'image' && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(file);
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPropertyData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleImageUpload = async () => {
        const imageForm = new FormData();
        imageForm.append('image', image);
        try {
            const { data } = await axios.post('/agent/upload', imageForm);
            setPropertyData(prevState => ({
                ...prevState,
                // image: data.public_idpublic_id
                
                image: data.url,

            }));
            setIsImageUploaded(true);
            toast.success('Image uploaded successfully!');
        } catch (error) {
            toast.error('Image upload failed. Please try again.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, address, description, type, beds, baths, price, image } = propertyData;

        if (!name || !address || !description || !type || !beds || !baths || !price || !image) {
            toast.error('Please fill all the fields and upload an image.');
            return;
        }

        try {
            await axios.post('/property/add-property', propertyData, { headers: {
                Authorization: localStorage.getItem('token')
            } });
            toast.success('Property posted successfully!');
            // Reset form
            setPropertyData({
                name: '',
                address: '',
                description: '',
                type: '',
                parkingSpot: false,
                fullyFurbished: false,
                beds: '',
                baths: '',
                price: '',
                image: null
            });
            setImage(null);
            setImagePreview(null);
            setIsImageUploaded(false);
        } catch (error) {
            toast.error('Failed to post property. Please try again.');
        }
    };

    return (
        <LayoutContainer bgColor={""}>
            <div className={style.postProperty}>
                <h1>Post a Property</h1>
                <div className={style.propertyContainer}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Name of Property:</label> <br/>
                            <input name="name" onChange={handleChange} type='text' value={propertyData.name} placeholder='Name' />
                        </div>
                        <div>
                            <label>Address of Property:</label><br/>
                            <input name="address" onChange={handleChange} type='text' value={propertyData.address} placeholder='Address' />
                        </div>
                        <div>
                            <label>Description of Property:</label><br/>
                            <textarea name="description" onChange={handleChange} value={propertyData.description} placeholder='Description' />
                        </div>
                        <div>  
                            <label>Rent:
                                <input name='type' onChange={handleChange} type='radio' value='Rent' checked={propertyData.type === 'Rent'} />
                            </label>
                            <label>Buy:
                                <input name='type' onChange={handleChange} type='radio' value='Buy' checked={propertyData.type === 'Buy'} />
                            </label>
                            <label>Parking Spot:
                                <input name="parkingSpot" onChange={handleChange} type='checkbox' checked={propertyData.parkingSpot} />
                            </label>
                            <label>Fully Furbished:
                                <input name="fullyFurbished" onChange={handleChange} type='checkbox' checked={propertyData.fullyFurbished} />
                            </label>
                        </div>
                        <div>
                            <label>Beds:
                                <input name="beds" min={1} defaultValue={1} onChange={handleChange} type='number' value={propertyData.beds} placeholder='' />
                            </label>
                            <label>Baths:
                                <input name="baths" min={1} defaultValue={1} onChange={handleChange} type='number' value={propertyData.baths} placeholder='' />
                            </label>
                        </div>
                        <div>
                            <label>Price of Property ₹ :
                                <input name="price" onChange={handleChange} type='number' value={propertyData.price} placeholder='' />
                            </label>
                        </div>
                        <button disabled={!isImageUploaded} type="submit">Submit</button>
                    </form>
                    <div className={style.imgContainer}> 
                            {imagePreview && <img src={imagePreview} alt="Preview" onClick={() => ref.current.click()} />}
                            <br/>    
                            <input ref={ref} name="image" onChange={handleChange} type='file' accept='image/*'/>
                            <br/> 
                            <button onClick={handleImageUpload} type="button">{isImageUploaded ? "Image Uploaded" : "Upload Image"}</button>
                        
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default PostProperty;
