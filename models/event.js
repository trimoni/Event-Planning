import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const eventSchema = new Schema({
  name: String,
  details: String,
  date: {
    type: Date,
    default: function(){
      let date = new Date()
      date.setFullYear(date)
    }
  },
  location: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  attend: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  comments: [commentSchema]
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

export {
  Event
}