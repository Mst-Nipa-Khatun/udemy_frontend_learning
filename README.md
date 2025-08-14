# udemy_frontend_learning

## Section1: Introduction

#### URL-Uniform Resource Locator


![img_1.png](img_1.png)


How web works:

![img_2.png](img_2.png)

This diagram shows a simple client–server communication flow:

1.Client (IP Address) sends an HTTP Request to the Server (identified by its DNS).

2.Server processes the request and sends back an HTTP Response to the Client.

#### HTTP: Hypertext Transfer Protocol.
Communication language of the client and server.

## Section2:

list of common HTML tags and their purposes:

**Structure & Document Setup**

```
<html> – Root element of an HTML page.

<head> – Contains metadata, title, styles, and scripts.

<title> – Sets the page title in the browser tab.

<body> – Contains the visible page content.
```

**Text Formatting**

```
<h1> to <h6> – Headings (h1 is largest, h6 is smallest).

<p> – Paragraph.

<br> – Line break.

<hr> – Horizontal line.

<strong> – Bold, important text.

<em> – Italic, emphasized text.

<span> – Inline text container.
```

**Links & Media**

```

<a> – Hyperlink.

<img> – Image.

<video> – Video file.

<audio> – Audio file.
```

**Lists**

```

<ul> – Unordered list.

<ol> – Ordered list.

<li> – List item.

<dl> - Defination List.
```

**Tables**
```

<table> – Table container.

<tr> – Table row.

<th> – Table header.

<td> – Table data.

```
**Forms**

```
<form> – Form container.

<input> – Input field.

<textarea> – Multiline text input.

<button> – Button element.

<select> – Dropdown list.

<option> – Dropdown option.
```

**Layout & Semantics**

```
<div> – Block-level container.

<header> – Page or section header.

<nav> – Navigation links.

<main> – Main content area.

<section> – Thematic grouping of content.

<article> – Independent content block.

<footer> – Page or section footer.
```

<hr>

### Tags Attributes:
**1. Global Attributes:**

```
<p id="intro">Hello</p>
<div class="box"></div>
<h1 style="color:red;">Title</h1>
<p hidden>Not visible</p>
<p lang="en">Hello</p>
```

**2.Anchor (< a >):**
```
<a href="https://nipa.com">Visit</a>  
<a href="x" target="_blank">New Tab</a>  
<a rel="nofollow">Link</a>
```

**3.Image (< img >):**
```
<img src="nipa.jpg">  
<img src="nipa.jpg" alt="Flower">  
<img src="nipa.jpg" width="200">
```
**4.Input (< input >):**
```
<input type="text">  
<input name="username">  
<input value="nipa">  
<input placeholder="Enter name">  
<input required>  
<input readonly>  

```

**5.Table (< table >)**
```
<table border="1">  
<table cellpadding="5">  
<table cellspacing="2">

```

### Meta Tags:
list of common HTML <meta> tags with examples:
```
| Meta Tag Purpose                   | Example                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------- |
| Charset (character encoding)       | `<meta charset="UTF-8">`                                                    |
| Viewport (responsive design)       | `<meta name="viewport" content="width=device-width, initial-scale=1.0">`    |
| Description (SEO description)      | `<meta name="description" content="This is a sample website.">`             |
| Keywords (SEO keywords)            | `<meta name="keywords" content="HTML, CSS, JavaScript">`                    |
| Author                             | `<meta name="author" content="John Doe">`                                   |
| Robots (search engine indexing)    | `<meta name="robots" content="index, follow">`                              |
| Refresh (auto refresh/redirect)    | `<meta http-equiv="refresh" content="30">`                                  |

```
### Text Emphasis Tags:
List of HTML text emphasis tags with their purpose and examples, suitable for reference:
```
| Tag        | Purpose                                             | Example                                   |
| ---------- | --------------------------------------------------- | ----------------------------------------- |
| `<b>`      | Bold text (stylistic, no extra importance)          | `<b>This text is bold</b>`                |
| `<strong>` | Important text (semantic emphasis, usually bold)    | `<strong>This text is important</strong>` |
| `<i>`      | Italic text (stylistic, no extra importance)        | `<i>This text is italic</i>`              |
| `<em>`     | Emphasized text (semantic emphasis, usually italic) | `<em>This text is emphasized</em>`        |
| `<mark>`   | Highlighted text                                    | `<mark>This text is highlighted</mark>`   |
| `<small>`  | Smaller text                                        | `<small>This text is smaller</small>`     |
| `<del>`    | Deleted/strikethrough text                          | `<del>This text is deleted</del>`         |
| `<ins>`    | Inserted/underlined text                            | `<ins>This text is inserted</ins>`        |
| `<sub>`    | Subscript text                                      | `H<sub>2</sub>O`                          |
| `<sup>`    | Superscript text                                    | `x<sup>2</sup>`                           |

```