const mongoose = require('mongoose');

// this is our schema to represent a restaurant
const blogSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {
    firstName: String,
    lastName: String
  },
    created: Date
  }]
});

blogSchema.virtual('titleString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

blogSchema.methods.apiRepr = function() {

  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
}

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};
