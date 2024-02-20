import autoEmbedVideo from "./autoEmbedVideo.js";
import { readFile, writeFile } from "fs";

// Read the Markdown file
readFile("example.md", "utf8", function (err, data) {
 if (err) {
  return console.error("Error reading file:", err);
 }

 // Apply the plugin to convert Markdown to HTML with <iframe> tags
 var htmlContent = autoEmbedVideo(data);

 // Write the transformed content to another file
 writeFile("index.html", htmlContent, function (err) {
  if (err) {
   return console.error("Error writing file:", err);
  }
  console.log("HTML file has been saved!");
 });


 console.log(htmlContent);
});
