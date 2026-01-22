import {v2 as cloudinary} from 'cloudinary';

const connectCloudinary = async()=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Fixed: CLOUDNIARY → CLOUDINARY
        api_key: process.env.CLOUDINARY_API_KEY, // Fixed: CLOUDNIARY → CLOUDINARY
        api_secret: process.env.CLOUDINARY_API_SECRET // Fixed: process.envCLOUDNIARY → process.env.CLOUDINARY
    })
}

export default connectCloudinary