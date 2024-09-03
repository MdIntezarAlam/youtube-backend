import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the User model
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// Create a schema for the User model
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
