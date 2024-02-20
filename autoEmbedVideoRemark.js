// Import required packages
import remark from "remark";
import unified from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

// Defining plugin function
function markdownToIframePlugin() {
 // Returning transformer function
 return function (tree) {
  // Finding all node in the file
  tree.children.forEach(function (node) {
   // If the node is a link with '@' prefix
   if (node.type === "link" && node.url.startsWith("@")) {
    // Extract title and src from the link
    var title = node.children[0].value;
    var src = node.url.substring(1); // Remove '@' prefix

    // Replacing the node with an iframe node
    node.type = "html";
    node.value = '<iframe src="' + src + '" title="' + title + '"></iframe>';
    delete node.children; // Remove children
   }
  });
 };
}

// Create a new processor with remark
var processor = unified()
 .use(remarkParse) 
 .use(markdownToIframePlugin) 
 .use(remarkStringify); 


// Example
var markdownContent = "Here are some videos: [Video 1](@https://example.com/video1) and [Video 2](@https://example.com/video2)";
processor.process(markdownContent, function (err, file) {
 if (err) {
  console.error("Error processing Markdown:", err);
  return;
 }
 console.log(String(file));
});
