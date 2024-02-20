function autoEmbedVideo(markdown) {
    
 // Regular expression to match the Markdown pattern
 var regex = /@\[(.*?)\]\((.*?)\)/g;

 // Replace Markdown with HTML
 var html = markdown.replace(regex, function (match, title, src) {
  return '<iframe src="' + src + '" title="' + title + '"></iframe>';
 });

 return html;
}

export default autoEmbedVideo;
