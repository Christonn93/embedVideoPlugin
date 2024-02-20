function autoEmbedVideo(markdown) {
    
 // Regular expression to match the Markdown pattern
 const regex = /@\[(.*?)\]\((.*?)\)/g;

 // Replace Markdown with HTML
 const html = markdown.replace(regex, function (match, title, src) {
  return '<iframe src="' + src + '" title="' + title + '"></iframe>';
 });

 return html;
}

export default autoEmbedVideo;
