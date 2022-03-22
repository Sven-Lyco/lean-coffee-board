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
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default mongoose.model('Entry', schema);
