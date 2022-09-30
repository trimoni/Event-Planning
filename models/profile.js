import mongoose from 'mongoose'

const Schema = mongoose.Schema

const interestSchema = new Schema({
  categories: {
    type: String,
    enum: ['Hobbies', 'Foods', 'Movies', 'Other'],
    text: String,
  }
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  interests: [interestSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
