
function Map(posts) {
  this._posts = posts;
}



Map.prototype.find_a_person = function(name) {


	return this._posts.filter(function(string){return string.indexOf(name) != -1});
  };

module.exports = Map;
