import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: String,
  details: String,
  date: Date,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  attend: [{type: Schema.Types.ObjectId, ref: "Profile"}]
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

export {
  Event
}