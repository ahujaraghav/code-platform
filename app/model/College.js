const mongoose = require('mongoose')

const Schema = mongoose.Schema
const collegeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    line1: {
      type: String,
      required: true
    },
    line2: {
      type: String
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pincode: {
      type: Number,
      required: true
    },
    country: {
        type: String
    }
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  department_admins: [
    {
      department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }
  ],
  department_moderators: [
    {
      department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    required: true
  },
  disabledOn: {
    type: Date
  }
})

const College = mongoose.model('College', collegeSchema)

module.exports = {
  College
}
