import { ContactFormValues } from "@/validation/contact"

export function contactUsTemplate(data: ContactFormValues) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.fullName} has reached out for potential collaboration</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #2c3e50;
        }
        .value {
            margin-top: 5px;
        }
        .optional {
            color: #7f8c8d;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Contact Form Submission</h1>
        
        <div class="field">
            <div class="label">Client Name:</div>
            <div class="value">${data.fullName}</div>
        </div>
        
        <div class="field">
            <div class="label">Client Email:</div>
            <div class="value">${data.email}</div>
        </div>
        
        <div class="field">
            <div class="label">Client Phone: <span class="optional">(Optional)</span></div>
            <div class="value">${data.phone}</div>
        </div>
        
        <div class="field">
            <div class="label">Project Description:</div>
            <div class="value">${data.purpose}</div>
        </div>
        
        <div class="field">
            <div class="label">Budget:</div>
            <div class="value">${data.budget}</div>
        </div>
        
        <div class="field">
            <div class="label">Timeframe:</div>
            <div class="value">${data.timeframe}</div>
        </div>
        
        <div class="field">
            <div class="label">How they heard about your work: <span class="optional">(Optional)</span></div>
            <div class="value">${data.howDidYouFindMe}</div>
        </div>
        
        <div class="field">
            <div class="label">Company/Organization: <span class="optional">(Optional)</span></div>
            <div class="value">${data.company}</div>
        </div>
    </div>
</body>
</html>
  `
}
