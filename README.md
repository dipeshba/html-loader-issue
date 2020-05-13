HTML Loader Issue
Image's src or link's rel attributes are correctly processed and matching loaders will output chunks as expected. However, this is not the case with script's src attributes. 

After the HTML page in src/html/pages/index.html (for exmaple) is processed and added to 'dist' directory, the output file has <script src="[object Object]"></script> instead of expected <script src="script.file.js"></script> 

