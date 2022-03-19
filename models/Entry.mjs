import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 3,
    },
    author: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#c8cbca',
    },
    date: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Entry', schema);
