function home(connection){
	this._connection =connection;
}
home.prototype.publicarEnviar = function(home,callback){

		const fs = require('fs');
		const path = require('path');
		const config = require('./config');
		const apiClient = config.newClient();
		const uploadClient = config.newClient('upload');

		console.log(config);

		var texto = home.body.text;
		const tags ="@"+home.body.tags;
		var tagsAtualizada = tags.replace(/, /g, ' @');

		var pos = tagsAtualizada.lastIndexOf('@');
		tagsAtualizada = tagsAtualizada.substring(0,pos)+' '+tagsAtualizada.substring(pos+1);

		var status = texto+" "+tagsAtualizada;

		if(home.files!=null){
		var img= home.files.img.tempFilePath;

		const mediaFile = fs.readFileSync(path.join(img));
		const base64image = Buffer.from(mediaFile).toString('base64');


		uploadClient.post('media/upload', { media_data: base64image })
		    .then(media => {

		    var media_id = media.media_id_string;
		    apiClient.post('statuses/update', { status: status, media_ids: media_id })
		        .then(tweet => {

		        console.log('Your image tweet is posted successfully');
		    }).catch(console.error);

		}).catch(console.error)
		}else{
			
		    apiClient.post('statuses/update', { status: status})
		        .then(tweet => {

		        console.log('Your tweet is posted successfully');
		    }).catch(console.error);
		}
		
}
module.exports = function(){
	
	return home;
}