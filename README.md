<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Read One Card from XML</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .card { margin-bottom: 20px; border: 1px solid #ccc; padding: 10px; }
    .path { margin-left: 20px; }
    .data { margin-left: 40px; color: #444; }
  </style>
</head>
<body>

  <h2>Read Only One Card</h2>
  <input type="file" id="fileInput" accept=".xml" />
  <div id="output"></div>

  <script>
    document.getElementById('fileInput').addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const xmlString = e.target.result;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");

        let output = "";

        const profileName = xmlDoc.querySelector("ProfileInfo")?.getAttribute("ProfileName");
        if (profileName) {
          output += `<h3>Profile Name: ${profileName}</h3>`;
        }

        const card = xmlDoc.querySelector("Card");  // only first <Card>
        if (card) {
          const iccid = card.getAttribute("ICCID");
          output += `<div class="card"><h4>Card ICCID: ${iccid}</h4>`;

          const itemFiles = card.getElementsByTagName("ItemFile");
          for (let file of itemFiles) {
            const path = file.getElementsByTagName("Path")[0]?.textContent;
            output += `<div class="path"><strong>Path:</strong> ${path}`;

            const contents = file.getElementsByTagName("Content");
            for (let content of contents) {
              const recNo = content.getElementsByTagName("RecNo")[0]?.textContent;
              const offset = content.getElementsByTagName("Offset")[0]?.textContent;
              const data = content.getElementsByTagName("Data")[0]?.textContent;
              output += `<div class="data">RecNo: ${recNo}, Offset: ${offset}, Data: ${data.replace(/\s+/g, "")}</div>`;
            }

            output += `</div>`;
          }

          const itemKeys = card.getElementsByTagName("ItemKey");
          for (let key of itemKeys) {
            const aid = key.getElementsByTagName("AID")[0]?.textContent;
            const version = key.getElementsByTagName("Version")[0]?.textContent;
            const index = key.getElementsByTagName("Index")[0]?.textContent;
            const type = key.getElementsByTagName("Type")[0]?.textContent;
            const data = key.getElementsByTagName("Data")[0]?.textContent;
            output += `<div class="path"><strong>ItemKey:</strong> AID: ${aid}, Version: ${version}, Index: ${index}, Type: ${type}, Data: ${data.replace(/\s+/g, "")}</div>`;
          }

          output += `</div>`;
        } else {
          output += `<p>No <code>&lt;Card&gt;</code> found in the XML.</p>`;
        }

        document.getElementById("output").innerHTML = output;
      };

      reader.readAsText(file);
    });
  </script>

</body>
</html>
